// path: components/AboutSection.js
import React from 'react';
import { YOUR_PROFILE_IMAGE_URL } from '../data/portfolioData';

export default function AboutSection({ t }) {
    return (
        <section id="about" className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* 個人照片區塊 */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gray-300 rounded-full flex items-center justify-center border-4 border-purple-500 shadow-xl overflow-hidden">
                    {YOUR_PROFILE_IMAGE_URL.includes("placehold.co") ? (
                        <i className="fas fa-user-astronaut text-4xl text-purple-600 dark:text-white"></i>
                    ) : (
                        <img src={YOUR_PROFILE_IMAGE_URL} alt={t.name} className="w-full h-full object-cover" onError={(e) => e.target.src="https://placehold.co/128x128/9CA3AF/FFFFFF?text=ERROR"} />
                    )}
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-50 mb-2">{t.name}</h1>
                <p className="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-8">{t.title}</p>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">{t.summary}</p>
                <div className="flex justify-center space-x-6 text-gray-600 dark:text-gray-300">
                    <a href={t.githubUrl} target="_blank" className="flex items-center space-x-2 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white font-medium">
                        <i className="fab fa-github text-xl"></i>
                        <span>GitHub</span>
                    </a>
                    <a href={`mailto:${t.contactEmail}`} className="flex items-center space-x-2 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white font-medium">
                        <i className="fas fa-envelope text-xl"></i>
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </section>
    );
}