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
      if (depth === 0) {
        end = i
        break
      }
    }
  }
  const text = source.slice(match.index + match[0].length - 1, end + 1)
  return eval(text)
}

const studentData = extractArray(studentDataSrc, 'realStudentData')

async function main() {
  const updates = studentData
    .filter((student) => Boolean(student.studentNumber && student.email))
    .map((student) => ({
      student_number: student.studentNumber,
      email: student.email.trim(),
    }))

  for (const { student_number, email } of updates) {
    const { error } = await supabase.from('designers').update({ email }).eq('student_number', student_number)
    if (error) {
      console.error('Failed to update', student_number, error.message)
    } else {
      console.log('Updated', student_number, email)
    }
  }

  console.log('All designer emails have been synced.')
}

main().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
