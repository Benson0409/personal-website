import React from 'react';
import { Card } from './Utility';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// 註冊 Chart.js 元件
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const GradeChart = ({ t, isDarkMode, lang }) => {
    // 1. 一般圖表文字 (軸線、圖例)：深色模式用淺灰，淺色模式用深灰
    const textColor = isDarkMode ? '#e5e7eb' : '#1f2937';

    // 2. Tooltip (提示框) 文字：邏輯剛好相反
    // 因為 Tooltip 背景我們設為「深色模式白底」、「淺色模式黑底」以強調對比
    // 所以文字顏色要反過來：深色模式(白底)用深字，淺色模式(黑底)用白字
    const tooltipTextColor = isDarkMode ? '#1f2937' : '#ffffff';

    const data = {
        labels: t.semesterGrades.labels,
        datasets: [{
            label: lang === 'zh' ? '學期平均成績' : 'Semester Average Grade',
            data: t.semesterGrades.data,
            borderColor: 'rgb(71, 85, 105)', // slate-600
            backgroundColor: 'rgba(71, 85, 105, 0.1)',
            borderWidth: 3,
            pointBackgroundColor: 'rgb(71, 85, 105)',
            pointRadius: 5,
            tension: 0.3
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 70,
                max: 100,
                ticks: { color: textColor },
                grid: { color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)' }
            },
            x: {
                ticks: { color: textColor },
                grid: { display: false }
            }
        },
        plugins: {
            legend: {
                labels: { color: textColor }
            },
            tooltip: {
                // 👇 修正這裡：使用 tooltipTextColor
                titleColor: tooltipTextColor,
                bodyColor: tooltipTextColor,
                // 背景色：深色模式是白底(0.9)，淺色模式是黑底(0.8)
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
            }
        }
    };

    return <div className="h-96 w-full p-4"><Line data={data} options={options} /></div>;
};

export default function AcademicsSection({ t, isDarkMode, lang }) {
    return (
        <section id="academics" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4">
                <div className="scroll-reveal delay-100 text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-50 border-b-4 border-slate-500 inline-block px-4 pb-2">{t.sections.academics}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-12 scroll-reveal delay-200">
                    {t.academicSummary.map((edu, index) => (
                        <Card key={index} className="hover:border-slate-300 dark:hover:border-slate-500">
                            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">{edu.institution}</h3>
                            <p className="text-lg text-slate-800 dark:text-slate-200 font-semibold mb-2">{edu.degree}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{edu.period}</p>
                        </Card>
                    ))}
                </div>
                <div className="max-w-4xl mx-auto scroll-reveal delay-300">
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-50 mb-6 border-l-4 border-slate-500 pl-3">{lang === 'zh' ? '成績總覽與變化' : 'Grade Overview & Progression'}</h3>
                    <Card className="shadow-2xl mb-8 dark:bg-slate-700/90 dark:border-slate-600">
                        <GradeChart t={t} isDarkMode={isDarkMode} lang={lang} />
                    </Card>
                    <div className="space-y-6">
                        {t.grades.map((grade, index) => (
                            <div key={index} className="flex justify-between items-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-inner dark:shadow-none">
                                <div className="text-lg font-medium text-slate-700 dark:text-slate-300">
                                    {grade.level}
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{grade.detail}</p>
                                </div>
                                <div className="text-2xl font-extrabold text-slate-800 dark:text-white bg-slate-200 dark:bg-slate-600 px-4 py-1 rounded-full">{grade.gpa}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}