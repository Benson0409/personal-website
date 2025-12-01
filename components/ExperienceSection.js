import React from 'react';
import { Card } from './Utility';

export default function ExperienceSection({ t }) {
    return (
        <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-4">
                {/* 👇 修改重點：在 h2 外面多包一層 div 並加上 text-center */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 border-b-4 border-purple-500 inline-block px-4 pb-2">
                        {t.sections.experience}
                    </h2>
                </div>

                <div className="space-y-12">
                    {t.experiences.map((exp, index) => (
                        <div key={index} className="flex relative items-start">
                            {/* 時間軸線條 */}
                            <div className="h-full w-0.5 bg-purple-300 absolute left-3.5 top-0 bottom-0"></div>
                            {/* 時間軸圓點 */}
                            <div className="w-7 h-7 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center text-white shrink-0">
                                <i className="fas fa-briefcase text-xs"></i>
                            </div>
                            {/* 經歷卡片 */}
                            <Card className="ml-6 flex-1 hover:border-purple-500 hover:shadow-2xl transition-all duration-300">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-50">{exp.title}</h3>
                                <p className="text-purple-600 dark:text-purple-300 font-semibold mb-1">{exp.company}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                    {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                                </ul>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}