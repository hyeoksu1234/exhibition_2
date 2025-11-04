export function resolveAssetUrl(path: string | null | undefined): string {
  if (!path) return ''
  if (/^https?:\/\//i.test(path)) return path
  const base = process.env.NEXT_PUBLIC_CDN_BASE?.replace(/\/+$/, '')
  if (base) {
    const normalized = path.replace(/^\/+/, '')
    return `${base}/${normalized}`
  }
  return path
}
