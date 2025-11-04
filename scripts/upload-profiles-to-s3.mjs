import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import mime from 'mime-types'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

dotenv.config({ path: path.join(projectRoot, '.env.local') })

const bucket = process.env.ASSETS_BUCKET
const prefix = (process.env.ASSETS_PROFILE_PREFIX || '').replace(/^\/+|\/+$/g, '')

if (!bucket) {
  console.error('ASSETS_BUCKET env is required')
  process.exit(1)
}

const imagesDir = path.join(projectRoot, 'public', 'images', 'profiles', 'images')
if (!fs.existsSync(imagesDir)) {
  console.error('Local images directory not found:', imagesDir)
  process.exit(1)
}

const region = process.env.AWS_REGION || 'ap-northeast-2'
const client = new S3Client({ region })

async function uploadFile(filePath, key) {
  const body = fs.readFileSync(filePath)
  const contentType = mime.lookup(filePath) || 'application/octet-stream'
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType: contentType,
    CacheControl: 'public, max-age=31536000, immutable',
  })
  await client.send(command)
  console.log('Uploaded', key)
}

async function main() {
  const files = fs.readdirSync(imagesDir).filter(name => !name.startsWith('.'))
  for (const file of files) {
    const absolute = path.join(imagesDir, file)
    const relativeKey = prefix ? `${prefix}/${file}` : file
    await uploadFile(absolute, relativeKey)
  }
  console.log('All uploads complete.')
}

main().catch(err => {
  console.error('Upload failed:', err)
  process.exit(1)
})
