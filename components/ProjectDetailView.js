// path: components/ProjectDetailView.js
import React, { useState } from 'react';
import { Card } from './Utility';

export default function ProjectDetailView({ projectId, t, goHome, lang }) {
    const project = t.projects.find(p => p.id === projectId);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return <div className="text-center py-20 text-xl text-red-600">{lang === 'zh' ? '專案不存在' : 'Project not found'}</div>;

    const nextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    const prevImage = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);

    return (
        <section className="py-16 md:py-20 max-w-7xl mx-auto px-4">
            <button onClick={goHome} className="mb-8 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold transition duration-150 flex items-center"><i className="fas fa-arrow-left mr-2"></i> {lang === 'zh' ? '返回專案列表' : 'Back to Projects'}</button>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">{project.title}</h1>
            <p className="text-xl font-semibold text-slate-500 dark:text-slate-400 mb-8">[{project.type}]</p>
            <Card className="p-0 overflow-hidden shadow-2xl mb-12 dark:bg-gray-700/90 dark:border-gray-600">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <img src={project.images[currentImageIndex]} alt={project.title} className="w-full h-full object-contain" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/374151/D1D5DB?text=Image+Not+Available"; }} />
                    {project.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition z-10"><i className="fas fa-chevron-left"></i></button>
                            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition z-10"><i className="fas fa-chevron-right"></i></button>
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                                {project.images.map((_, index) => (
                                    <div key={index} className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-slate-800 dark:bg-slate-200 w-5' : 'bg-white/70 dark:bg-gray-500/70 shadow-sm'}`}></div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </Card>
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">{lang === 'zh' ? '專案概述' : 'Project Overview'}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{project.description}</p>
                    {project.details.map((detail, index) => (
                        <div key={index}>
                            <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mt-6 mb-2">{detail.heading}</h4>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{detail.content}</p>
                        </div>
                    ))}
                </div>
                <Card className="lg:col-span-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 h-fit sticky top-24 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-3">{lang === 'zh' ? '技術與貢獻' : 'Tech & Contribution'}</h3>
                    <div className="space-y-5">
                        <p className="font-medium text-slate-700 dark:text-slate-300 text-sm tracking-wide uppercase">{lang === 'zh' ? '核心技能：' : 'Core Skills:'} <span className="block mt-2 font-mono text-xs text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-2.5 rounded-md">{project.tech}</span></p>
                        <p className="font-medium text-slate-700 dark:text-slate-300 text-sm tracking-wide uppercase">{lang === 'zh' ? '我的貢獻：' : 'My Role:'} <span className="block mt-2 text-base normal-case text-slate-600 dark:text-slate-400">{project.contribution}</span></p>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="block text-center bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 py-3 rounded-full hover:bg-slate-800 dark:hover:bg-white transition duration-200 font-semibold shadow-md mt-6"><i className="fab fa-github mr-2"></i> {lang === 'zh' ? '前往 GitHub' : 'View on GitHub'}</a>
                        )}
                    </div>
                </Card>
            </div>
        </section>
    );
}