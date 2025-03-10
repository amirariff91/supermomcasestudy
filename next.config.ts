import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'd844w4gc8w0ks4kks4o0csk0.5.223.50.174.sslip.io',
      },
      {
        protocol: 'https',
        hostname: 'd844w4gc8w0ks4kks4o0csk0.5.223.50.174.sslip.io',
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  }
};

export default nextConfig;
