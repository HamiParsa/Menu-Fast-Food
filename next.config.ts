import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    domains: ["images.nightcafe.studio"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com",
      },
      {
        protocol: "https",
        hostname: "fastfood.theringer.com",
      },
    ],
  },
};

export default nextConfig;
