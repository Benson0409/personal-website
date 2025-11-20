// components/Navbar.js
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  
  // 確保 currentLang 有預設值
  const currentLang = i18n.language || 'zh'; 
  
  // Hydration 解決方案：元件只在客戶端載入後才渲染
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 確保這段程式碼只在瀏覽器端運行一次
    setIsClient(true);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  // 載入中狀態：防止 Hydration 錯誤，並保持版面一致
  if (!isClient) {
    // 返回一個簡單的佔位符，保持 Navbar 的高度
    return <nav className="bg-gray-900 h-20 w-full"></nav>; 
  }

  return (
    // 使用 Tailwind CSS 樣式: 暗色背景，頂部固定
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo/名字 (導回首頁) */}
        <Link href="/" className="text-xl font-bold text-cyan-400 hover:text-white transition duration-300">
          {t('nav_home')} 
        </Link>

        {/* 導航連結與語言切換 */}
        <div className="space-x-4 flex items-center">
          
          {/* 關於我 連結 */}
          <Link href="/about" className="hover:text-cyan-400 transition duration-300">
            {t('nav_about')}
          </Link>
          
          {/* 作品集 連結 */}
          <Link href="/projects" className="hover:text-cyan-400 transition duration-300">
            {t('nav_projects')}
          </Link>
          
          {/* 語言切換按鈕 */}
          <div className="ml-6 space-x-1">
            <button 
              onClick={() => changeLanguage('zh')}
              className={`font-semibold text-sm transition duration-200 ${currentLang.startsWith('zh') ? 'text-white underline' : 'text-gray-400 hover:text-white'}`}
            >
              ZH
            </button>
            <span className="text-gray-500">|</span>
            <button 
              onClick={() => changeLanguage('en')}
              className={`font-semibold text-sm transition duration-200 ${currentLang.startsWith('en') ? 'text-white underline' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}