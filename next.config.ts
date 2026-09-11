import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 末尾スラッシュ付きURL（/tankyu/）を維持する。
  // false だと /tankyu/ → /tankyu に飛ばされ、public 配下の静的ページが
  // 相対パスで参照している画像が 1つ上の階層に解決されて全滅する。
  trailingSlash: true,
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
