/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['http://api.weatherapi.com/v1/']
  }
}

module.exports = nextConfig
