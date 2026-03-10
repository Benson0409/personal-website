// path: pages/index.js
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
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
import { BackToTopButton, SectionDivider } from '../components/Utility';

export default function Home() {
    const [lang, setLang] = useState('zh');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [activeSectionId, setActiveSectionId] = useState('about');
    const scrollPosRef = useRef(0);

    const t = useMemo(() => ({ ...portfolioData[lang], lang }), [lang]);
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
        scrollPosRef.current = window.scrollY;
        setSelectedProjectId(projectId);
        setCurrentPage('projectDetail');
        window.scrollTo(0, 0);
    }, []);

    const goBackFromProject = useCallback(() => {
        setCurrentPage('home');
        setSelectedProjectId(null);
        setTimeout(() => {
            window.scrollTo({ top: scrollPosRef.current, behavior: 'auto' });
        }, 100);
    }, []);

    const goHome = useCallback(() => {
        setCurrentPage('home');
        setSelectedProjectId(null);
        window.scrollTo(0, 0);
    }, []);

    // Intersection Observer (Scrollspy & Scroll Reveal)
    useEffect(() => {
        if (currentPage !== 'home') return;

        // 1. Scrollspy Observer
        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setActiveSectionId(entry.target.id);
            });
        }, { rootMargin: '-30% 0px -70% 0px' });

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) spyObserver.observe(el);
        });

        // 2. Scroll Reveal Observer
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.scroll-reveal').forEach((el) => {
            revealObserver.observe(el);
        });

        return () => {
            spyObserver.disconnect();
            revealObserver.disconnect();
        };
    }, [currentPage, sectionIds]);


    // --- 渲染畫面 ---
    const renderContent = () => {
        if (currentPage === 'projectDetail') {
            return <ProjectDetailView projectId={selectedProjectId} t={t} goHome={goBackFromProject} lang={lang} />;
        }
        return (
            <div className="fade-enter fade-enter-active relative">
                {/* Abstract Interactive Background Blobs */}
                <div className="blob blob-slate w-96 h-96 top-20 left-10 animate-blob"></div>
                <div className="blob blob-gray w-80 h-80 top-1/4 right-20 animate-blob animation-delay-2000"></div>
                <div className="blob blob-zinc w-96 h-96 bottom-1/3 left-1/4 animate-blob animation-delay-4000"></div>

                {/* 佔位符縮小頂部留白 */}
                <div className="bg-hero pt-4 relative z-10">
                    <AboutSection t={t} />
                    <SectionDivider fillColorClass="divider-fill-white-900" />
                </div>
                <div className="relative z-10">
                    <SkillsSection t={t} />
                    <SectionDivider fillColorClass="divider-fill-gray-50-900" />
                </div>
                <div className="relative z-10">
                    <ExperienceSection t={t} />
                    <SectionDivider fillColorClass="divider-fill-gray-50-900" />
                </div>
                <div className="relative z-10">
                    <ProjectsSection t={t} handleViewProject={handleViewProject} lang={lang} />
                    <SectionDivider fillColorClass="divider-fill-gray-50-800" />
                </div>
                <div className="relative z-10">
                    <AcademicsSection t={t} isDarkMode={isDarkMode} lang={lang} />
                </div>
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