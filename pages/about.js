// pages/about.js
import Layout from '../components/Layout';
import { useTranslation } from 'react-i18next';

// 假設您的 GitHub 網址
const GITHUB_URL = "https://github.com/Benson0409"; 

export default function AboutPage() {
  // 【關鍵修正】必須解構 i18n 物件才能取得當前語言
  const { t, i18n } = useTranslation(); 

  // 靜態資料，方便統一管理
  const personalInfo = {
    email: "benson5508@gmail.com",
    phone: "0966-592-388",
    address: "Taipei, Taiwan" // 隱藏詳細地址
  };

  // 經歷數據結構範例
  const experienceData = [
  {
    title_zh: "校園 CEO 行銷實習生",
    title_en: "Campus CEO Marketing Intern",
    company: "ASUS 華碩",
    duration: "2023.03 - 2023.12",
    description_zh: "負責規劃產品創意貼文、結合每月節慶提升曝光度，並協助校園活動宣傳與品牌推廣。此外也支援每月報帳整理、行政文件統整與跨單位溝通。",
    description_en: "Created creative product posts aligned with monthly campaigns to increase brand exposure, supported campus marketing events, and assisted with monthly accounting and documentation. Collaborated across teams to enhance communication and brand impact."
  },
  {
    title_zh: "系學會會長",
    title_en: "Student Association President",
    company: "國立台北教育大學 數位科技學系",
    duration: "2022.09 - 2023.06",
    description_zh: "協助新生融入系上環境，擔任學生與系上行政的溝通橋樑。規劃並舉辦多項活動以促進各年級間的互動與凝聚，提升學生參與度與系上形象。",
    description_en: "Facilitated student engagement and served as a communication bridge between students and department staff. Organized multiple events to strengthen inter-grade connections and improve overall student involvement."
  },
  {
    title_zh: "iOS Club 創社社長",
    title_en: "Founder & President, iOS Club",
    company: "國立台北教育大學",
    duration: "2022.03 - 2023.02",
    description_zh: "創立校內 iOS Club，邀請業界講師教授 Swift，帶領學生完成入門 App 專案，並推動參與每年的行動應用創新賽，提升學生的實作與競賽能力。",
    description_en: "Founded the iOS Club and invited industry experts to teach Swift. Guided students through introductory app projects and encouraged participation in the annual Mobile App Innovation Contest to enhance their practical development skills."
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