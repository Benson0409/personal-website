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
            <button onClick={goHome} className="mb-8 text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-100 font-semibold transition duration-150 flex items-center"><i className="fas fa-arrow-left mr-2"></i> {lang === 'zh' ? '返回專案列表' : 'Back to Projects'}</button>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-2">{project.title}</h1>
            <p className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-8">[{project.type}]</p>
            <Card className="p-0 overflow-hidden shadow-2xl mb-12 dark:bg-gray-700/90 dark:border-gray-600">
                <div className="relative">
                    <img src={project.images[currentImageIndex]} alt={project.title} className="w-full h-auto object-cover max-h-[600px]" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/374151/D1D5DB?text=Image+Not+Available"; }} />
                    {project.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition"><i className="fas fa-chevron-left"></i></button>
                            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition"><i className="fas fa-chevron-right"></i></button>
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                                {project.images.map((_, index) => (
                                    <div key={index} className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-purple-500 w-5' : 'bg-white/50'}`}></div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </Card>
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 border-b dark:border-gray-700 pb-2 mb-4">{lang === 'zh' ? '專案概述' : 'Project Overview'}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
                    {project.details.map((detail, index) => (
                        <div key={index}>
                            <h4 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mt-4 mb-2">{detail.heading}</h4>
                            <p className="text-gray-700 dark:text-gray-300">{detail.content}</p>
                        </div>
                    ))}
                </div>
                <Card className="lg:col-span-1 bg-purple-50 dark:bg-purple-900 border-purple-200 dark:border-purple-700 h-fit sticky top-24">
                    <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4 border-b dark:border-purple-600 pb-2">{lang === 'zh' ? '技術與貢獻' : 'Tech & Contribution'}</h3>
                    <div className="space-y-4">
                        <p className="font-medium text-gray-800 dark:text-gray-200">{lang === 'zh' ? '核心技能：' : 'Core Skills:'} <span className="block mt-1 font-mono text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-800 p-2 rounded">{project.tech}</span></p>
                        <p className="font-medium text-gray-800 dark:text-gray-200">{lang === 'zh' ? '我的貢獻：' : 'My Role:'} <span className="block mt-1 text-gray-700 dark:text-gray-300">{project.contribution}</span></p>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="block text-center bg-gray-800 dark:bg-purple-600 text-white py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-purple-500 transition duration-150 font-semibold"><i className="fab fa-github mr-2"></i> {lang === 'zh' ? '前往 GitHub' : 'View on GitHub'}</a>
                        )}
                    </div>
                </Card>
            </div>
        </section>
    );
}