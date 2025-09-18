/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add any needed Next.js options here. Preserving a minimal config for compatibility.
  experimental: {
    // Ensure App Router features are enabled if used.
    typedRoutes: false,
  },
};

export default nextConfig;
