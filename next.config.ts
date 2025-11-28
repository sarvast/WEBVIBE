import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel optimized config */
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
