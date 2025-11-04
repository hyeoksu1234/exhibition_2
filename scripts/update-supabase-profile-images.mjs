import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

dotenv.config({ path: path.join(projectRoot, '.env.local') })

const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
if (!serviceRoleKey || !supabaseUrl) {
  console.error('Supabase service role key and URL are required to run this script.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
})

const studentDataSrc = fs.readFileSync(path.join(projectRoot, 'app', 'lib', 'data', 'student-data.ts'), 'utf8')
const manifestSrc = fs.readFileSync(path.join(projectRoot, 'app', 'lib', 'data', 'profile-image-manifest.ts'), 'utf8')

function extractExportObject(source, varName) {
  const regex = new RegExp(`export\\s+const\\s+${varName}\\s*:[^=]*=\\s*`)
  const match = regex.exec(source)
  if (!match) throw new Error(`${varName} not found in student-data.ts`)
  let idx = match.index + match[0].length
  let depth = 0
  let end = -1
  for (let i = idx; i < source.length; i++) {
    const ch = source[i]
    if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth === 0) { end = i; break }
    }
  }
  const objText = source.slice(idx, end + 1)
  return eval(`(${objText})`)
}

function extractArray(source, varName) {
  const regex = new RegExp(`export\\s+const\\s+${varName}\\s*=\\s*`)
  const match = regex.exec(source)
  if (!match) throw new Error(`${varName} not found in student-data.ts`)
  let idx = match.index + match[0].length - 1
  let depth = 0
  let end = -1
  for (let i = idx; i < source.length; i++) {
    const ch = source[i]
    if (ch === '[') depth++
    else if (ch === ']') {
      depth--
      if (depth === 0) { end = i; break }
    }
  }
  const text = source.slice(match.index + match[0].length - 1, end + 1)
  return eval(text)
}

const studentData = extractArray(studentDataSrc, 'realStudentData')
const photoFileMap = extractExportObject(studentDataSrc, 'photoFileByStudentNumber')
const manifestMatch = manifestSrc.match(/export const profileImageManifest:[^=]*=\s*({[\s\S]*});?/)
if (!manifestMatch) {
  throw new Error('profileImageManifest not found')
}
const manifest = eval(`(${manifestMatch[1]})`)
const cdnBase = (process.env.NEXT_PUBLIC_CDN_BASE || '').replace(/\/$/, '')

function buildFileName(student) {
  const candidate = photoFileMap[student.studentNumber ?? ''] || `${student.name}.jpg`
  return candidate.normalize('NFD')
}

async function main() {
  const updates = []
  for (const student of studentData) {
    const fileName = buildFileName(student)
    const manifestEntry = manifest[fileName]
    const s3Key = `${(process.env.ASSETS_PROFILE_PREFIX || '').replace(/^\/+|\/+$/g, '')}/${fileName}`
    const payload = {
      profile_image: s3Key,
      profile_blur_data_url: manifestEntry?.blurDataURL || null,
      profile_width: manifestEntry?.width || null,
      profile_height: manifestEntry?.height || null,
    }
    if (student.studentNumber) {
      updates.push({ student_number: student.studentNumber, payload })
    }
  }

  for (const { student_number, payload } of updates) {
    const { error } = await supabase
      .from('designers')
      .update(payload)
      .eq('student_number', student_number)
    if (error) {
      console.error('Failed to update', student_number, error.message)
    } else {
      console.log('Updated', student_number)
    }
  }

  console.log('All Supabase designer records updated.')
}

main().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
