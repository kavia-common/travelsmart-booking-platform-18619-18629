 /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Keep unoptimized to avoid remote patterns/setup needs for now
    unoptimized: true,
  },
  // Keep config minimal; avoid experimental flags that can affect runtime bootstrap
};

export default nextConfig;
