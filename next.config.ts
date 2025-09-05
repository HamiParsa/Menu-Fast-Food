import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a static site (suitable for GitHub Pages)
  output: 'export',
  distDir: 'out', // Output directory for the exported site

  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: ["images.nightcafe.studio"], // Allow these remote image domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com", // Allowed remote host
      },
      {
        protocol: "https",
        hostname: "fastfood.theringer.com", // Allowed remote host
      },
    ],
  },
};

export default nextConfig;
