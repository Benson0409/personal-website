// path: components/Header.js
import React from 'react';

export default function Header({ t, goHome, currentPage, toggleDarkMode, isDarkMode, toggleLanguage, scrollToSection, activeSectionId }) {
    const underlineBase = "absolute left-0 bottom-0 w-full h-0.5 bg-slate-800 dark:bg-white transition-transform duration-300";

    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-md dark:shadow-2xl transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center h-16">
                <div className="text-xl font-bold text-slate-800 dark:text-slate-200 cursor-pointer" onClick={goHome}>{t.name.split(' ')[0]}</div>

                <div className="flex items-center space-x-4">
                    {currentPage === 'home' && (
                        <nav className="hidden md:flex space-x-6">
                            {Object.entries(t.sections).map(([id, label]) => {
                                const isActive = id === activeSectionId;
                                const baseClasses = "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition duration-150 relative group";
                                const activeClasses = "text-slate-900 dark:text-white font-bold";

                                return (
                                    <button
                                        key={id}
                                        onClick={() => scrollToSection(id)}
                                        className={`${baseClasses} ${isActive ? activeClasses : ''}`}
                                    >
                                        {label}
                                    </button>
                                );
                            })}
                        </nav>
                    )}
                    {currentPage === 'projectDetail' && <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">{t.lang === 'zh' ? '專案詳情' : 'Project Details'}</div>}

                    {/* 深色模式切換按鈕 */}
                    <button
                        onClick={toggleDarkMode}
                        className="premium-circle w-10 h-10 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:scale-110 transition-transform duration-300"
                        aria-label={isDarkMode ? '切換至淺色模式' : '切換至深色模式'}
                    >
                        <i className={`fas ${isDarkMode ? 'fa-sun text-yellow-400' : 'fa-moon'}`}></i>
                    </button>

                    {/* 語言切換按鈕 */}
                    <button onClick={toggleLanguage} className="premium-btn-secondary flex items-center space-x-2 px-4 py-2 text-sm">
                        <i className="fas fa-language"></i><span>{t.lang === 'zh' ? 'EN / 英文' : '中 / Chinese'}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}