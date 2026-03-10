// path: components/ProjectsSection.js
import React from 'react';
import { Card } from './Utility';

export default function ProjectsSection({ t, handleViewProject, lang }) {
    const technicalProjects = t.projects.filter(p => p.category === 'technical');
    const marketingProjects = t.projects.filter(p => p.category === 'marketing');

    const renderProjectCard = (project, index) => (
        <Card key={index} className="flex flex-col justify-between h-full">
            <div className="scroll-reveal delay-100">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">{project.title}</h3>
                <div className="flex items-center mb-4">
                    <span className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">{project.type}</span>
                </div>
                <div className="mb-4 space-y-2">
                    <p className="text-slate-800 dark:text-slate-200 font-medium">
                        {lang === 'zh' ? '技術/技能：' : 'Skills: '}
                        {project.tech.split(',').map((tech, i) => (
                            <span key={i} className="text-sm text-slate-600 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded mx-1 tag-hover inline-block">
                                {tech.trim()}
                            </span>
                        ))}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-3">{project.description}</p>
                </div>
            </div>
            <div className="pt-6 mt-auto flex justify-between items-center relative z-20">
                <button onClick={() => handleViewProject(project.id)} className="premium-btn text-sm flex items-center relative z-20">
                    <i className="fas fa-arrow-right mr-2"></i>{lang === 'zh' ? '查看細節' : 'View Details'}
                </button>
            </div>
        </Card>
    );

    return (
        <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4">
                <div className="scroll-reveal delay-100 text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 border-b-4 border-slate-500 inline-block px-4 pb-2">{t.sections.projects}</h2>
                </div>

                {/* --- 區塊 1: 技術開發與研究專案 --- */}
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-l-4 border-slate-500 pl-3 mb-8 mt-12 scroll-reveal delay-200">
                    {lang === 'zh' ? '💻 技術開發與研究專案' : '💻 Technical Development & Research Projects'}
                </h3>
                <div className="grid md:grid-cols-2 gap-10 mb-16 px-2">
                    {technicalProjects.map(renderProjectCard)}
                </div>

                {/* --- 區塊 2: 行銷活動與領導力專案 --- */}
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-l-4 border-slate-500 pl-3 mb-8 scroll-reveal delay-300">
                    {lang === 'zh' ? '🚀 行銷活動與領導力專案' : '🚀 Marketing, Event & Leadership Projects'}
                </h3>
                <div className="grid md:grid-cols-2 gap-10">
                    {marketingProjects.map(renderProjectCard)}
                </div>
            </div>
        </section>
    );
}