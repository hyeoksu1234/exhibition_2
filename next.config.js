/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'your-s3-bucket.s3.amazonaws.com'], // Update with your S3 bucket domain
    formats: ['image/webp', 'image/avif'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 