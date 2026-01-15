
"use client";

import { MapPin } from 'lucide-react';

const SectionTitle = ({ icon: Icon, title }: { icon: any, title: string }) => (
    <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-2 print:border-gray-300">
        <Icon className="w-5 h-5 text-blue-600 print:text-black" />
        <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide print:text-black">{title}</h2>
    </div>
);

const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 print:border-gray-300 print:bg-transparent print:text-black">
        {skill}
    </span>
);

const JobCard = ({ job, isOpen, toggle }: { job: any, isOpen: boolean, toggle: () => void }) => {
    return (
        <div className="mb-6 last:mb-0 group">
            <div
                onClick={toggle}
                className="cursor-pointer flex flex-col sm:flex-row sm:items-start justify-between mb-2 hover:bg-gray-50 p-2 -mx-2 rounded transition-colors print:hover:bg-transparent"
            >
                <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors print:text-black">
                        {job.company}
                    </h3>
                    <div className="text-blue-600 font-medium print:text-black">{job.role}</div>
                </div>
                <div className="text-right mt-1 sm:mt-0">
                    <div className="text-gray-600 font-medium text-sm print:text-black">{job.period}</div>
                    <div className="text-gray-400 text-xs flex items-center justify-end gap-1 print:text-gray-600">
                        <MapPin className="w-3 h-3" /> {job.type}
                    </div>
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 print:max-h-none print:opacity-100'}`}>
                <p className="text-gray-600 italic mb-3 print:text-black">{job.summary}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4 print:text-black">
                    {job.achievements.map((item: string, idx: number) => (
                        <li key={idx} className="text-sm leading-relaxed">{item}</li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4 print:hidden">
                    {job.tech.map((t: string, i: number) => (
                        <span key={i} className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export {
    SectionTitle,
    SkillBadge,
    JobCard
} 