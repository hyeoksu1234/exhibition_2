import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const imagesDir = path.join(projectRoot, 'public', 'images', 'profiles', 'images')
const outputPath = path.join(projectRoot, 'app', 'lib', 'data', 'profile-image-manifest.ts')

const files = fs.readdirSync(imagesDir).filter(name => !name.startsWith('.')).sort((a, b) => a.localeCompare(b))

const lines = []
lines.push("export interface ProfileImageMeta { src: string; width: number; height: number; blurDataURL: string }\n")
lines.push('export const profileImageManifest: Record<string, ProfileImageMeta> = {\n')

const PLACEHOLDER_FILL = '%23f2f2f2'

function createFallbackBlur(width, height) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${Math.max(width, 10)}' height='${Math.max(height, 10)}'><rect width='100%' height='100%' fill='${PLACEHOLDER_FILL}'/></svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

for (const file of files) {
  const filePath = path.join(imagesDir, file)
  try {
    const image = sharp(filePath)
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

    const normalizedName = file.normalize('NFD')
    const encodedPath = encodeURIComponent(normalizedName)
    const src = `/images/profiles/images/${encodedPath}`

    lines.push(`  ${JSON.stringify(normalizedName)}: { src: ${JSON.stringify(src)}, width: ${width}, height: ${height}, blurDataURL: ${JSON.stringify(blurDataURL)} },\n`)
  } catch (error) {
    console.error(`Failed processing ${file}:`, error)
  }
}

lines.push('}\n')

fs.writeFileSync(outputPath, lines.join(''), 'utf8')
console.log(`Profile image manifest generated with ${files.length} entries.`)
