// next.config.mjs
/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production'; 
const repoName = '/personal-website'; 

const nextConfig = {
  // basePath 保持不變 (以 / 開頭)
  basePath: isDev ? undefined : repoName, 
  
  // 【關鍵最終修正】將 assetPrefix 設為空字串 '' 
  // 這將會確保資源連結不帶有任何前綴，從而避免與 basePath 產生雙重前綴。
  assetPrefix: isDev ? undefined : '', 

  // 設置輸出模式為靜態
  output: 'export', 
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
};

export default nextConfig;