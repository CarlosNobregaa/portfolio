import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export keeps deploys trivial (Vercel, GitHub Pages, S3, nginx container).
  // The whole portfolio is client-rendered content + dictionaries, so there is no
  // server runtime to lose.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
