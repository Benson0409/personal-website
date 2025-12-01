// path: components/Utility.js
import React, { useState, useEffect } from 'react';

export const Card = ({ children, className = '' }) => (
    <div className={`p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ${className}`}>
        {children}
    </div>
);

export const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        // 1. 把函式定義搬進來這裡
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // 2. 執行一次以檢查初始狀態
        toggleVisibility();

        // 3. 設定監聽
        window.addEventListener('scroll', toggleVisibility);
        
        // 4. 清除監聽
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []); // 依賴陣列保持空的，這樣就沒問題了！

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-4 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-opacity duration-300 z-[9999] ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll to top"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};