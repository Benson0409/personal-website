// i18n.js 
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    // 預設語言
    fallbackLng: 'zh',
    // 支援的語言
    supportedLngs: ['zh', 'en'],
    // 載入 JSON 檔案的路徑
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;