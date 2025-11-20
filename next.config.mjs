// next.config.mjs
/** @type {import('next').NextConfig} */

// 檢查是否處於開發模式
const isDev = process.env.NODE_ENV !== 'production'; 
// 檢查 NEXT_PUBLIC_BASE_PATH 環境變數，確保它在部署時生效

const nextConfig = {
  // 【關鍵修正】只有在非開發模式下才設定 basePath
  basePath: isDev ? undefined : '/personal-website', 
  
  // 設置輸出模式為靜態 (必須用於 GitHub Pages)
  output: 'export', 
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
};

export default nextConfig;