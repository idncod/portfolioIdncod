/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      domains: ['images.pexels.com'],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias['follow-redirects'] = false;
        }
        return config;
    },
  };