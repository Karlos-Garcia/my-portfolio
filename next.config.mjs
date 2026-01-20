/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',           // or '*.tsx' if you ever add TS later
      },
    },
  },
};

export default nextConfig;
