// path: pages/index.js
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Head from 'next/head';
import { portfolioData } from '../data/portfolioData';

// 引入元件
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import AcademicsSection from '../components/AcademicsSection';
import ProjectDetailView from '../components/ProjectDetailView';
import { BackToTopButton } from '../components/Utility';

export default function Home() {
    const [lang, setLang] = useState('zh');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [activeSectionId, setActiveSectionId] = useState('about');

    const t = useMemo(() => ({...portfolioData[lang], lang}), [lang]);
    const sectionIds = useMemo(() => Object.keys(portfolioData.zh.sections), []);

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);
    const toggleLanguage = () => setLang(prev => prev === 'zh' ? 'en' : 'zh');

    // 處理 Dark Mode Class
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActiveSectionId(id);
        }
    };

    const handleViewProject = useCallback((projectId) => {
        setSelectedProjectId(projectId);
        setCurrentPage('projectDetail');
        window.scrollTo(0, 0);
    }, []);

    const goHome = useCallback(() => {
        setCurrentPage('home');
        setSelectedProjectId(null);
        window.scrollTo(0, 0);
    }, []);

    // Intersection Observer (Scrollspy)
    useEffect(() => {
        if (currentPage !== 'home') return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setActiveSectionId(entry.target.id);
            });
        }, { rootMargin: '-30% 0px -70% 0px' });

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [currentPage, sectionIds]);


    // --- 渲染畫面 ---
    const renderContent = () => {
        if (currentPage === 'projectDetail') {
            return <ProjectDetailView projectId={selectedProjectId} t={t} goHome={goHome} lang={lang} />;
        }
        return (
            <div className="fade-enter fade-enter-active">
                {/* 佔位符，避免內容被 Header 遮住 */}
                <div className="bg-hero pt-16"><AboutSection t={t} /></div>
                <ExperienceSection t={t} />
                <SkillsSection t={t} />
                <ProjectsSection t={t} handleViewProject={handleViewProject} lang={lang} />
                <AcademicsSection t={t} isDarkMode={isDarkMode} lang={lang} />
            </div>
        );
    };

    return (
        <div className={`min-h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500`}>
            <Head>
                <title>簡柏松 - 個人作品集</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Header 
                t={t} 
                goHome={goHome} 
                currentPage={currentPage} 
                toggleDarkMode={toggleDarkMode} 
                isDarkMode={isDarkMode} 
                toggleLanguage={toggleLanguage} 
                scrollToSection={scrollToSection} 
                activeSectionId={activeSectionId} 
            />
            
            <main>{renderContent()}</main>
            
            <Footer t={t} />
            <BackToTopButton />
        </div>
    );
}