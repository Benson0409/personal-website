// path: components/Utility.js
import React, { useState, useEffect } from 'react';

export const Card = ({ children, className = '' }) => (
    <div className={`p-8 premium-card relative z-10 overflow-hidden hover-tilt-glow ${className}`}>
        {children}
    </div>
);

export const SectionDivider = ({ fillColorClass = "divider-fill-gray-50" }) => (
    <div className="section-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.26,192.39,109.86Z" className={fillColorClass}></path>
        </svg>
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
            className={`fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center rounded-full premium-btn z-[9999] ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll to top"
        >
            <i className="fas fa-arrow-up text-xl"></i>
        </button>
    );
};