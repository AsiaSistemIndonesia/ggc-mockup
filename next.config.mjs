/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow LAN access for development server testing on mobile devices
  allowedDevOrigins: ['192.168.0.51', '192.168.1.51', '192.168.0.*', '192.168.1.*', 'localhost'],
}

export default nextConfig
