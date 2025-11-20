// components/Layout.js
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer'; // <-- 確保 Footer 已經引入

export default function Layout({ children, title, description }) {
  // 基本的暗色調定義
  const baseClasses = "min-h-screen bg-gray-950 text-gray-100 font-sans";

  return (
    // Head 用於 SEO 和網頁標題
    <>
      <Head>
        <title>{title || "工程師作品集 Portfolio"}</title>
        <meta name="description" content={description || "程式與行銷專業作品集展示"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={baseClasses}>
        {/* 1. 導航列 */}
        <Navbar />

        {/* 2. 頁面內容 */}
        <main>
          {children}
        </main>
        
        {/* 3. 底部版權/聯繫資訊 */}
        <Footer /> 
      </div>
    </>
  );
}