import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'export' for Vercel deployment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
