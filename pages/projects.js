// pages/projects.js
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import { FaCode, FaChartLine, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // 需要安裝 react-icons

// 定義作品類別
const categories = [
    { key: 'all', icon: null, zh: '全部作品', en: 'All Projects' },
    { key: 'Code', icon: FaCode, zh: '程式開發', en: 'Coding' },
    { key: 'Marketing', icon: FaChartLine, zh: '行銷/數據', en: 'Marketing/Data' },
];

export default function ProjectsPage() {
    const { t, i18n } = useTranslation();
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    // 判斷當前語言是否為中文
    const isZh = i18n.language.startsWith('zh');

    // 1. 串接 API 獲取作品列表
    useEffect(() => {
        // 模擬串接後端 API (pages/api/projects.js)
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
                setIsLoading(false);
            });
    }, []);

    // 2. 篩選作品列表
    const filteredProjects = projects.filter(project => {
        if (selectedCategory === 'all') return true;
        return project.category === selectedCategory;
    });

    // 3. 渲染作品卡片元件
    const ProjectCard = ({ project }) => {
        const title = isZh ? project.title_zh : project.title_en;
        const description = isZh ? project.description_zh : project.description_en;

        return (
            // 暗色卡片設計，懸停時有微光效果
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-cyan-500 transition duration-300 transform hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                        {title}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.category === 'Code' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'}`}>
                        {isZh ? (project.category === 'Code' ? '程式' : '行銷') : project.category}
                    </span>
                </div>
                
                <p className="text-gray-300 mb-4">{description}</p>
                
                {/* 技術標籤 (Tech Stack) */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono bg-gray-700 text-cyan-400 px-2 py-1 rounded">
                            {t}
                        </span>
                    ))}
                </div>

                {/* 連結按鈕區 */}
                <div className="flex space-x-4 mt-4 border-t border-gray-700 pt-3">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-cyan-400 hover:text-cyan-300 transition duration-300">
                            <FaGithub className="mr-2" /> {isZh ? 'GitHub 程式碼' : 'View Code'}
                        </a>
                    )}
                    {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-300 transition duration-300">
                            <FaExternalLinkAlt className="mr-2" /> {isZh ? '作品連結' : 'Live Demo'}
                        </a>
                    )}
                </div>
            </div>
        );
    };


    return (
        <Layout title={isZh ? '我的作品集' : 'My Projects'}>
            <section className="container mx-auto px-4 py-16">
                
                {/* 頂部標題 */}
                <h1 className="text-5xl font-extrabold text-white mb-4 text-center border-b-2 border-cyan-500 inline-block mx-auto pb-2">
                    {isZh ? '我的作品集' : 'Projects Portfolio'}
                </h1>
                
                <p className="text-xl text-center text-gray-400 max-w-4xl mx-auto mb-10">
                    {isZh ? '結合工程技術與商業策略的精選成果展示。' : 'Selected achievements combining engineering proficiency and business strategy.'}
                </p>

                {/* 篩選按鈕 (Filtering Buttons) */}
                <div className="flex justify-center space-x-4 mb-12">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const label = isZh ? cat.zh : cat.en;
                        const isSelected = selectedCategory === cat.key;

                        return (
                            <button 
                                key={cat.key}
                                onClick={() => setSelectedCategory(cat.key)}
                                className={`flex items-center px-5 py-2 rounded-full font-semibold transition duration-300 ${
                                    isSelected 
                                        ? 'bg-cyan-500 text-gray-900 shadow-lg' 
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                            >
                                {Icon && <Icon className="mr-2" />}
                                {label}
                            </button>
                        );
                    })}
                </div>

                {/* 作品列表 */}
                {isLoading ? (
                    <div className="text-center text-xl text-cyan-400 mt-20">
                        {isZh ? '正在從 API 載入作品...' : 'Loading projects from API...'}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
                
                {filteredProjects.length === 0 && !isLoading && (
                    <p className="text-center text-lg text-gray-500 mt-10">
                        {isZh ? '目前此類別沒有作品。' : 'No projects found in this category.'}
                    </p>
                )}

            </section>
        </Layout>
    );
}