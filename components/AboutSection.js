// path: components/AboutSection.js
import React from 'react';
import { YOUR_PROFILE_IMAGE_URL } from '../data/portfolioData';
import { FaPython, FaDocker } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

export default function AboutSection({ t }) {
    return (
        <section id="about" className="pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
            {/* Minimalist Background Blob/Gradient (Subtle) */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-100 to-transparent dark:from-slate-800 dark:to-transparent z-0"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">

                {/* Main Profile Container - Resume Style */}
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Left Column: Avatar (Overlapping) */}
                    <div className="w-full md:w-1/3 flex justify-center animate-unbox delay-100">
                        <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 z-20">
                            {/* Avatar Base - Extreme Minimalism */}
                            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-900 bg-white dark:bg-gray-800 relative z-10 transition-transform hover:scale-105 duration-500">
                                {YOUR_PROFILE_IMAGE_URL.includes("placehold.co") ? (
                                    <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-800">
                                        <i className="fas fa-user-astronaut text-8xl text-slate-300 dark:text-slate-600"></i>
                                    </div>
                                ) : (
                                    <img src={YOUR_PROFILE_IMAGE_URL} alt={t.name} className="w-full h-full object-cover" onError={(e) => e.target.src = "https://placehold.co/512x512/9CA3AF/FFFFFF?text=ERROR"} />
                                )}
                            </div>

                            {/* Premium Interactive Badges */}
                            <div className="absolute -top-4 -left-4 glass-panel rounded-full p-3 flex items-center justify-center text-yellow-500 animate-float z-20 hover:scale-110 transition-transform cursor-pointer shadow-lg dark:shadow-yellow-900/20">
                                <FaPython className="text-3xl" />
                            </div>
                            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 glass-panel rounded-full p-3 flex items-center justify-center text-blue-500 animate-float-delayed z-20 hover:scale-110 transition-transform cursor-pointer shadow-lg dark:shadow-blue-900/20">
                                <FaDocker className="text-2xl" />
                            </div>
                            <div className="absolute -bottom-2 left-8 glass-panel rounded-full p-2.5 flex items-center justify-center text-yellow-400 bg-white dark:bg-gray-800 animate-float-fast z-20 hover:scale-110 transition-transform cursor-pointer shadow-lg">
                                <SiJavascript className="text-2xl rounded-sm" />
                            </div>
                            <div className="absolute bottom-4 right-2 glass-panel rounded-full p-2 flex items-center justify-center text-purple-600 animate-float z-20 hover:scale-110 transition-transform cursor-pointer shadow-lg dark:shadow-purple-900/20">
                                <TbBrandCSharp className="text-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Information & Actions */}
                    <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left pt-4 md:pt-0">
                        <div className="animate-unbox delay-200 mb-2">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                {t.lang === 'zh' && t.name.indexOf(' ') !== -1 ? (
                                    <>
                                        {t.name.substring(0, t.name.indexOf(' '))}
                                        <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl text-slate-700 dark:text-slate-300">
                                            {t.name.substring(t.name.indexOf(' ') + 1)}
                                        </span>
                                    </>
                                ) : (
                                    t.name
                                )}
                            </h1>
                        </div>

                        <div className="animate-unbox delay-300 mb-8">
                            <h2 className="text-2xl md:text-3xl font-medium text-slate-500 dark:text-slate-400">
                                {t.title}
                            </h2>
                        </div>

                        {/* Clean Contact Row */}
                        <div className="animate-unbox delay-400 flex flex-wrap justify-center md:justify-start gap-6 border-t border-slate-200 dark:border-slate-800 py-6 mb-8 w-full">
                            <a href={t.githubUrl} target="_blank" className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors">
                                <i className="fab fa-github text-xl"></i>
                                <span className="font-medium">GitHub</span>
                            </a>
                            <a href={`mailto:${t.contactEmail}`} className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors">
                                <i className="fas fa-envelope text-xl"></i>
                                <span className="font-medium">Email</span>
                            </a>
                            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors">
                                <i className="fas fa-briefcase text-xl"></i>
                                <span className="font-medium">{t.lang === 'zh' ? '個人作品' : 'Portfolio'}</span>
                            </a>
                        </div>

                        {/* Summary / Bio Introduction */}
                        <div className="animate-unbox delay-500 max-w-2xl mx-auto md:mx-0">
                            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-light">
                                {t.summary}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}