/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    domains: ['images.pexels.com', 'anishpandey.netlify.app'],
    unoptimized: true,
  },
  // Handle static file serving
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Webpack configuration for handling assets and dependencies
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Handle Three.js and other large dependencies
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });

    return config;
  },
  // Environment variables
  env: {
    CUSTOM_KEY: 'my-value',
  },
  // Experimental features
  experimental: {
    appDir: false, // Using pages directory
  },
  // Output configuration
  output: 'standalone',
  
  // Redirects
  async redirects() {
    return [];
  },
  
  // Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 