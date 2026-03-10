import React from 'react';
import { Card } from './Utility';

export default function ExperienceSection({ t }) {
    return (
        <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-4">
                {/* 👇 修改重點：在 h2 外面多包一層 div 並加上 text-center */}
                <div className="text-center mb-12 scroll-reveal delay-100">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-50 border-b-4 border-slate-500 inline-block px-4 pb-2">
                        {t.sections.experience}
                    </h2>
                </div>

                <div className="space-y-12">
                    {t.experiences.map((exp, index) => (
                        <div key={index} className="flex relative items-start">
                            {/* 時間軸線條 */}
                            <div className="h-full w-0.5 bg-slate-300 dark:bg-slate-700 absolute left-3.5 top-0 bottom-0"></div>
                            {/* 時間軸圓點 */}
                            <div className="w-7 h-7 bg-slate-600 rounded-full border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center text-white shrink-0 animate-glow-pulse">
                                <i className="fas fa-briefcase text-xs"></i>
                            </div>
                            {/* 經歷卡片 */}
                            <Card className="ml-6 flex-1 scroll-reveal delay-200">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{exp.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 font-semibold mb-1">{exp.company}</p>
                                <p className="text-sm text-slate-500 mb-4">{exp.period}</p>
                                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
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