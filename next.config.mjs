// next.config.mjs
/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production'; 
const repoName = '/personal-website'; 

const nextConfig = {
  // 關鍵修正 1: 保留 basePath 讓 Next.js 知道頁面結構
  basePath: isDev ? undefined : repoName, 
  
  // 【關鍵修正 2】移除 assetPrefix！讓資源路徑保持最簡潔
  assetPrefix: isDev ? undefined : '', // 或者直接移除這行，但保留空字串最安全

  // 設置輸出模式為靜態 (必須用於 GitHub Pages)
  output: 'export', 
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
};

export default nextConfig;