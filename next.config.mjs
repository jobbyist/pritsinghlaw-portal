/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: { serverActions: { allowedOrigins: ['*'] } },
  images: { 
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    unoptimized: true // Required for static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing
  // Disable server-side features for static export
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
};
export default nextConfig;
