// pages/about.js
import Layout from '../components/Layout';
import { useTranslation } from 'react-i18next';

// 假設您的 GitHub 網址
const GITHUB_URL = "https://github.com/YourGitHubUsername"; 

export default function AboutPage() {
  // 【關鍵修正】必須解構 i18n 物件才能取得當前語言
  const { t, i18n } = useTranslation(); 

  // 靜態資料，方便統一管理
  const personalInfo = {
    email: "your.email@example.com",
    phone: "09XX-XXX-XXX",
    address: "Taipei, Taiwan" // 隱藏詳細地址
  };

  // 經歷數據結構範例
  const experienceData = [
    {
      title_zh: "全端開發實習生",
      title_en: "Full-Stack Intern",
      company: "Tech Solutions Co.",
      duration: "2023.08 - 2024.08",
      description_zh: "負責 React 前端介面開發與 Python (Flask) API 串接，將產品部署到 AWS Serverless 環境。",
      description_en: "Developed React frontend interfaces and integrated with Python (Flask) APIs, deploying the product to AWS Serverless environment.",
    },
    {
      title_zh: "數位行銷助理",
      title_en: "Digital Marketing Assistant",
      company: "Data Growth Agency",
      duration: "2022.01 - 2023.07",
      description_zh: "執行 SEO 策略並管理社群媒體內容。透過數據分析，使網站流量提高 30%。",
      description_en: "Executed SEO strategies and managed social media content. Increased website traffic by 30% through data analysis.",
      },
    {
      title_zh: "全端開發實習生",
      title_en: "Full-Stack Intern",
      company: "Tech Solutions Co.",
      duration: "2023.08 - 2024.08",
      description_zh: "負責 React 前端介面開發與 Python (Flask) API 串接，將產品部署到 AWS Serverless 環境。",
      description_en: "Developed React frontend interfaces and integrated with Python (Flask) APIs, deploying the product to AWS Serverless environment.",
    },
  ];

  // 使用 i18n.language.startsWith('zh') 來判斷當前是否為中文
  const isZh = i18n.language.startsWith('zh');

  return (
    <Layout title={t('nav_about')}>
      <section className="container mx-auto px-4 py-16">
        
        {/* 標題與簡介區塊 (Intro Section) */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4 border-b-2 border-cyan-500 inline-block pb-1">
            {t('about_title')}
          </h1>
          {/* 您的照片/頭像 */}
          {/* <img src="/avatar.jpg" alt="Your Name" className="w-32 h-32 rounded-full mx-auto my-6 border-4 border-cyan-400" /> */}
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            {t('about_summary')}
          </p>
        </div>

        {/* 內容區塊 - 兩欄佈局 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* 左側欄：個人資訊與連結 */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-bold text-cyan-400 border-b border-gray-700 pb-3">
              {t('section_info')}
            </h2>
            
            {/* 資訊卡片 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 space-y-4">
              
              {/* GitHub 連結 */}
              <div className="text-lg">
                <p className="font-semibold text-cyan-400">{t('info_github')}</p>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 break-all transition duration-300">
                  {GITHUB_URL}
                </a>
              </div>
              
              {/* 其他資訊 */}
              <div className="text-lg">
                <p className="font-semibold text-cyan-400">{t('info_email')}</p>
                <p>{personalInfo.email}</p>
              </div>
              <div className="text-lg">
                <p className="font-semibold text-cyan-400">{t('info_phone')}</p>
                <p>{personalInfo.phone}</p>
              </div>
              <div className="text-lg">
                <p className="font-semibold text-cyan-400">{t('info_address')}</p>
                <p>{personalInfo.address}</p>
              </div>

            </div>
          </div>
          
          {/* 右側欄：經歷區塊 */}
          <div className="lg:col-span-2 space-y-10">
            <h2 className="text-3xl font-bold text-cyan-400 border-b border-gray-700 pb-3">
              {t('section_experience')}
            </h2>
            
            {/* 經歷列表 */}
            {experienceData.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-2xl transition duration-300 hover:bg-gray-700">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {/* 【修正點 1】使用 isZh 判斷 */}
                  {isZh ? item.title_zh : item.title_en}
                </h3>
                <p className="text-cyan-400 font-mono text-sm mb-2">{item.company}</p>
                <p className="text-gray-500 text-xs mb-3">{item.duration}</p>
                <p className="text-gray-300">
                  {/* 【修正點 2】使用 isZh 判斷 */}
                  {isZh ? item.description_zh : item.description_en}
                </p>
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </Layout>
  );
}