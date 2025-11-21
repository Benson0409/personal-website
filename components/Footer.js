// components/Footer.js
import { useTranslation } from 'react-i18next';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation();
  
  // 請修改這裡為您的實際 GitHub 網址
  const GITHUB_URL = "https://github.com/Benson0409"; 
  const EMAIL = "benson5508@gmail.com";

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        
        {/* 版權資訊 */}
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} {t('nav_home')} | {t('info_address')}
        </p>

        {/* 連結區塊 */}
        <div className="flex space-x-6">
          <a 
            href={GITHUB_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-cyan-400 transition duration-300 flex items-center"
            title="GitHub"
          >
            <FaGithub className="mr-1" /> GitHub
          </a>
          <a 
            href={`mailto:${EMAIL}`} 
            className="text-gray-400 hover:text-cyan-400 transition duration-300 flex items-center"
            title="Email"
          >
            <FaEnvelope className="mr-1" /> {t('info_email')}
          </a>
        </div>
      </div>
    </footer>
  );
}