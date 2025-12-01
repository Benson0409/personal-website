// path: components/AcademicsSection.js
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
    const textColor = isDarkMode ? '#e5e7eb' : '#1f2937';
    
    const data = {
        labels: t.semesterGrades.labels,
        datasets: [{
            label: lang === 'zh' ? '學期平均成績' : 'Semester Average Grade',
            data: t.semesterGrades.data,
            borderColor: 'rgb(109, 40, 217)',
            backgroundColor: 'rgba(109, 40, 217, 0.1)',
            borderWidth: 3,
            pointBackgroundColor: 'rgb(109, 40, 217)',
            pointRadius: 5,
            tension: 0.3
        }]
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
             y: { min: 70, max: 100, ticks: { color: textColor }, grid: { color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)' } },
             x: { ticks: { color: textColor }, grid: { display: false } }
        },
        plugins: {
            legend: { labels: { color: textColor } },
            tooltip: {
                titleColor: '#1f2937',
                bodyColor: '#1f2937',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
            }
        }
    };

    return <div className="h-96 w-full p-4"><Line data={data} options={options} /></div>;
};

export default function AcademicsSection({ t, isDarkMode, lang }) {
    return (
        <section id="academics" className="py-16 md:py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 text-center mb-12 border-b-4 border-purple-500 inline-block px-4 pb-2">{t.sections.academics}</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {t.academicSummary.map((edu, index) => (
                        <Card key={index} className="hover:border-purple-300 dark:hover:border-purple-500">
                            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">{edu.institution}</h3>
                            <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold mb-2">{edu.degree}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                        </Card>
                    ))}
                </div>
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-6 border-l-4 border-purple-500 pl-3">{lang === 'zh' ? '成績總覽與變化' : 'Grade Overview & Progression'}</h3>
                    <Card className="shadow-2xl mb-8 dark:bg-gray-700/90 dark:border-gray-600"><GradeChart t={t} isDarkMode={isDarkMode} lang={lang} /></Card>
                    <div className="space-y-6">
                        {t.grades.map((grade, index) => (
                            <div key={index} className="flex justify-between items-center p-4 bg-purple-50 dark:bg-purple-900 rounded-lg shadow-inner dark:shadow-none">
                                <div className="text-lg font-medium text-gray-700 dark:text-gray-300">{grade.level}<p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{grade.detail}</p></div>
                                <div className="text-2xl font-extrabold text-purple-800 dark:text-white bg-purple-200 dark:bg-purple-600 px-4 py-1 rounded-full">{grade.gpa}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}