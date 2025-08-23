import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**", // allow all Unsplash image paths
      },
    ],
  },
};

export default nextConfig;
