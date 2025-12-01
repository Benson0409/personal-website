// path: components/SkillsSection.js
import React from 'react';
import { Card } from './Utility';

export default function SkillsSection({ t }) {
    return (
        <section id="skills" className="py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 text-center mb-12 border-b-4 border-purple-500 inline-block px-4 pb-2">{t.sections.skills}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.skills.map((skillGroup, index) => (
                        <Card key={index} className="flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4 border-b dark:border-purple-700 pb-2 w-full">{skillGroup.category}</h3>
                            <ul className="space-y-2 w-full">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="text-gray-700 dark:text-gray-300 bg-purple-50/50 dark:bg-purple-900/50 p-2 rounded-md font-medium">{item}</li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}