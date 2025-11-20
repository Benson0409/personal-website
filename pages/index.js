// pages/index.js
import Layout from '../components/Layout'; // <-- 引入 Layout
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const { t } = useTranslation();
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    // 使用 Layout 包裹整個頁面，這樣就不需要在這裡重複定義背景色和 Navbar
    <Layout title={t('nav_home')}>
      <section className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)]">
        {isClient ? (
          <>
            {/* Hero Section */}
            <h1 className="text-6xl font-extrabold mb-4 text-white">
              {t('hero_title')}
            </h1>
            <p className="text-2xl text-cyan-400 font-mono mt-2">
              {t('hero_subtitle')}
            </p>
            
            <a 
              href="#projects" 
              className="mt-10 px-8 py-3 bg-cyan-500 text-gray-900 font-bold rounded-full hover:bg-cyan-400 transition duration-300 transform hover:scale-105"
            >
              {t('nav_projects')}
            </a>
            
          </>
        ) : (
          <div className="text-xl text-gray-500">Loading website...</div>
        )}
      </section>
    </Layout>
  );
}