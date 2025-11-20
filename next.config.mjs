// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 設置基礎路徑為倉庫名稱
  basePath: '/personal-website',
  // 設置輸出模式為靜態 (必須用於 GitHub Pages)
  output: 'export', 
  reactStrictMode: true,
  images: {
    unoptimized: true // 確保圖片可以被靜態導出
  },
};

export default nextConfig;