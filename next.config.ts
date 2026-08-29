import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    // 実績カードの slug を仮名（dummy-*）から実名へ是正した。
    // 旧 URL は既に公開済みのため、恒久リダイレクトで新 URL へ逃がす。
    return [
      { source: '/work/dummy-4', destination: '/work/goccco', permanent: true },
      { source: '/work/dummy-5', destination: '/work/mypro', permanent: true },
      { source: '/work/dummy-6', destination: '/work/ai-study', permanent: true },
    ];
  },
};

export default nextConfig;
