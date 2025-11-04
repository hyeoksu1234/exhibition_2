import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const outputPath = path.join(projectRoot, 'app', 'lib', 'data', 'profile-image-manifest.ts')

const PLACEHOLDER_FILL = '%23f2f2f2'

function createFallbackBlur(width, height) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${Math.max(width, 10)}' height='${Math.max(height, 10)}'><rect width='100%' height='100%' fill='${PLACEHOLDER_FILL}'/></svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

async function bufferFromStream(stream) {
  const chunks = []
  for await (const chunk of stream) {
    chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk))
  }
  return Buffer.concat(chunks)
}

async function gatherLocalFiles() {
  const imagesDir = path.join(projectRoot, 'public', 'images', 'profiles', 'images')
  return fs.readdirSync(imagesDir)
    .filter(name => !name.startsWith('.'))
    .sort((a, b) => a.localeCompare(b))
    .map(name => ({
      name,
      loader: () => sharp(path.join(imagesDir, name)),
      src: `/images/profiles/images/${encodeURIComponent(name.normalize('NFD'))}`,
    }))
}

async function gatherS3Files() {
  const bucket = process.env.ASSETS_BUCKET
  if (!bucket) {
    throw new Error('ASSETS_BUCKET environment variable is required for S3 mode.')
  }
  const region = process.env.AWS_REGION || 'ap-northeast-2'
  const prefix = process.env.ASSETS_PROFILE_PREFIX || 'profiles/images/'
  const client = new S3Client({
    region,
    credentials: process.env.AWS_ACCESS_KEY_ID
      ? {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
      : undefined,
  })

  const objects = []
  let continuationToken = undefined
  do {
    const res = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: prefix,
        ContinuationToken: continuationToken,
      }),
    )
    if (res.Contents) {
      objects.push(...res.Contents.filter(obj => obj.Key && !obj.Key.endsWith('/')))
    }
    continuationToken = res.IsTruncated ? res.NextContinuationToken : undefined
  } while (continuationToken)

  const cdnBase =
    (process.env.NEXT_PUBLIC_CDN_BASE && process.env.NEXT_PUBLIC_CDN_BASE.replace(/\/+$/, '')) ||
    `https://${bucket}.s3.${region}.amazonaws.com`

  return objects
    .sort((a, b) => (a.Key || '').localeCompare(b.Key || ''))
    .map(obj => {
      const key = obj.Key
      const filename = path.basename(key)
      return {
        name: filename,
        loader: async () => {
          const res = await client.send(
            new GetObjectCommand({
              Bucket: bucket,
              Key: key,
            }),
          )
          const buffer = await bufferFromStream(res.Body)
          return sharp(buffer)
        },
        src: `${cdnBase}/${key}`,
      }
    })
}

const source = process.env.PROFILE_IMAGE_SOURCE || 'local'

const entries = await (source === 's3' ? gatherS3Files() : gatherLocalFiles())

const lines = []
lines.push("export interface ProfileImageMeta { src: string; width: number; height: number; blurDataURL: string }\n")
lines.push('export const profileImageManifest: Record<string, ProfileImageMeta> = {\n')

let processed = 0

for (const entry of entries) {
  try {
    const image = await entry.loader()
    const meta = await image.metadata()
    const width = meta.width ?? 1
    const height = meta.height ?? 1

    let blurDataURL
    try {
      const blurBuffer = await image
        .resize(40, 40, { fit: 'inside' })
        .toFormat('webp', { quality: 30 })
        .toBuffer()
      blurDataURL = `data:image/webp;base64,${blurBuffer.toString('base64')}`
    } catch (err) {
      blurDataURL = createFallbackBlur(width, height)
    }

    const normalizedName = entry.name.normalize('NFD')
    const src = entry.src

    lines.push(
      `  ${JSON.stringify(normalizedName)}: { src: ${JSON.stringify(src)}, width: ${width}, height: ${height}, blurDataURL: ${JSON.stringify(blurDataURL)} },\n`,
    )
    processed += 1
  } catch (error) {
    console.error(`Failed processing ${entry.name}:`, error)
  }
}

lines.push('}\n')

fs.writeFileSync(outputPath, lines.join(''), 'utf8')
console.log(`Profile image manifest generated with ${processed} entries (source: ${source}).`)
