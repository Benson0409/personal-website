// components/I18nWrapper.js
import { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

// 這個 Wrapper 的功能與您在 Navbar 和 Index 中做的類似，但用於應用程式頂層
export default function I18nWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 確保只在瀏覽器端設置狀態，解決 Hydration 警告
    setIsClient(true);
  }, []);

  // 只有在客戶端設置好狀態後，才渲染 I18nextProvider
  // 這樣能保證翻譯狀態在客戶端啟動時是準備好的
  return (
    <I18nextProvider i18n={i18n}>
      {isClient ? children : null} 
    </I18nextProvider>
  );
}