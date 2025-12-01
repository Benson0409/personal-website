// path: components/Footer.js
import React from 'react';

export default function Footer({ t }) {
    return (
        <footer className="bg-gray-800 dark:bg-gray-950 text-white py-10 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="mb-4 text-gray-400">{t.footerText}</p>
                <div className="flex justify-center space-x-6">
                    <a href={t.githubUrl} target="_blank" className="text-gray-300 hover:text-purple-400 flex items-center space-x-2"><i className="fab fa-github w-6 h-6"></i><span className="font-semibold">Benson0409</span></a>
                    <a href={`mailto:${t.contactEmail}`} className="text-gray-300 hover:text-purple-400 flex items-center space-x-2"><i className="fas fa-envelope w-6 h-6"></i><span>{t.contactEmail}</span></a>
                </div>
            </div>
        </footer>
    );
}