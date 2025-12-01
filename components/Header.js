// path: components/Header.js
import React from 'react';

export default function Header({ t, goHome, currentPage, toggleDarkMode, isDarkMode, toggleLanguage, scrollToSection, activeSectionId }) {
    const underlineBase = "absolute left-0 bottom-0 w-full h-0.5 bg-purple-600 dark:bg-purple-300 transition-transform duration-300";

    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-md dark:shadow-2xl transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center h-16">
                <div className="text-xl font-bold text-purple-800 dark:text-purple-300 cursor-pointer" onClick={goHome}>{t.name.split(' ')[0]}</div>
                
                <div className="flex items-center space-x-4">
                    {currentPage === 'home' && (
                        <nav className="hidden md:flex space-x-6">
                            {Object.entries(t.sections).map(([id, label]) => {
                                const isActive = id === activeSectionId;
                                const baseClasses = "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 font-medium transition duration-150 relative group";
                                const activeClasses = "text-purple-700 dark:text-purple-300 font-bold";

                                return (
                                    <button 
                                        key={id} 
                                        onClick={() => scrollToSection(id)} 
                                        className={`${baseClasses} ${isActive ? activeClasses : ''}`}
                                    >
                                        {label}
                                        <span className={`${underlineBase} ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75'}`}></span>
                                    </button>
                                );
                            })}
                        </nav>
                    )}
                    {currentPage === 'projectDetail' && <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">{t.lang === 'zh' ? '專案詳情' : 'Project Details'}</div>}
                    
                    {/* 深色模式切換按鈕 */}
                    <button
                        onClick={toggleDarkMode}
                        className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded-full transition duration-150"
                        aria-label={isDarkMode ? '切換至淺色模式' : '切換至深色模式'}
                    >
                        <i className={`fas ${isDarkMode ? 'fa-sun text-yellow-400' : 'fa-moon'}`}></i>
                    </button>
                    
                    {/* 語言切換按鈕 */}
                    <button onClick={toggleLanguage} className="flex items-center space-x-1 bg-purple-100 dark:bg-purple-700 text-purple-600 dark:text-white hover:bg-purple-200 dark:hover:bg-purple-600 px-3 py-1.5 rounded-full text-sm font-semibold transition duration-150">
                        <i className="fas fa-language"></i><span>{t.lang === 'zh' ? 'EN / 英文' : '中 / Chinese'}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}