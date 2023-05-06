/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  serverComponentsExternalPackages: ['@tremor/react']
}

module.exports = nextConfig
