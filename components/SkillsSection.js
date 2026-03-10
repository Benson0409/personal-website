// path: components/SkillsSection.js
import React from 'react';
import { Card } from './Utility';

export default function SkillsSection({ t }) {
    return (
        <section id="skills" className="py-16 md:py-20 bg-white dark:bg-gray-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4">
                <div className="scroll-reveal delay-100 text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-50 border-b-4 border-slate-500 inline-block px-4 pb-2">{t.sections.skills}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.skills.map((skillGroup, index) => (
                        <Card key={index} className="flex flex-col items-center text-center scroll-reveal delay-200">
                            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4 border-b dark:border-slate-700 pb-2 w-full">{skillGroup.category}</h3>
                            <ul className="space-y-2 w-full">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 p-2 rounded-md font-medium tag-hover cursor-default">{item}</li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}