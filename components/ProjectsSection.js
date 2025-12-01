// path: components/ProjectsSection.js
import React from 'react';
import { Card } from './Utility';

export default function ProjectsSection({ t, handleViewProject, lang }) {
    const technicalProjects = t.projects.filter(p => p.category === 'technical');
    const marketingProjects = t.projects.filter(p => p.category === 'marketing');

    const renderProjectCard = (project, index) => (
        <Card key={index} className="hover:border-purple-300 dark:hover:border-purple-500 transform hover:scale-[1.02] flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">{project.title}</h3>
                <div className="flex items-center mb-4">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">{project.type}</span>
                </div>
                <div className="mb-4 space-y-2">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                        {lang === 'zh' ? '技術/技能：' : 'Skills: '}<span className="text-sm text-purple-600 dark:text-purple-400 font-mono bg-purple-50 dark:bg-purple-900 px-2 py-0.5 rounded">{project.tech}</span>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">{project.description}</p>
                </div>
            </div>
            <div className="pt-4 border-t dark:border-gray-700 mt-4 flex justify-between items-center">
                <button onClick={() => handleViewProject(project.id)} className="ml-0 flex items-center bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition duration-150 shadow-md">
                    <i className="fas fa-arrow-right mr-2"></i>{lang === 'zh' ? '查看細節' : 'View Details'}
                </button>
            </div>
        </Card>
    );

    return (
        <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 text-center mb-12 border-b-4 border-purple-500 inline-block px-4 pb-2">{t.sections.projects}</h2>
                
                {/* --- 區塊 1: 技術開發與研究專案 --- */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 border-l-4 border-purple-500 pl-3 mb-8 mt-12">
                    {lang === 'zh' ? '💻 技術開發與研究專案' : '💻 Technical Development & Research Projects'}
                </h3>
                <div className="grid md:grid-cols-2 gap-10 mb-16">
                    {technicalProjects.map(renderProjectCard)}
                </div>

                {/* --- 區塊 2: 行銷活動與領導力專案 --- */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 border-l-4 border-purple-500 pl-3 mb-8">
                    {lang === 'zh' ? '🚀 行銷活動與領導力專案' : '🚀 Marketing, Event & Leadership Projects'}
                </h3>
                <div className="grid md:grid-cols-2 gap-10">
                    {marketingProjects.map(renderProjectCard)}
                </div>
            </div>
        </section>
    );
}