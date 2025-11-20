// next.config.mjs
/** @type {import('next').NextConfig} */

// 檢查是否處於開發模式
const isDev = process.env.NODE_ENV !== 'production'; 
const repoName = '/personal-website'; 

const nextConfig = {
  // 關鍵修正 1: 只有在非開發模式下才設定 basePath
  basePath: isDev ? undefined : repoName, 
  
  // 【關鍵修正 2】設定靜態資源的前綴，確保 CSS/JS 檔案從正確的子目錄載入
  assetPrefix: isDev ? undefined : repoName, 

  // 設置輸出模式為靜態 (必須用於 GitHub Pages)
  output: 'export', 
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
};

export default nextConfig;