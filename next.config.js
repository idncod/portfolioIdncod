/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      domains: ['images.pexels.com'],
    },
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
    },
    experimental: {
        runtime: 'nodejs',
    },
  };