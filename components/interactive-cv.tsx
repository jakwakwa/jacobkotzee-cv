"use client";

import {
  Briefcase,
  Code,
  GraduationCap,
  User,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Download,
  ExternalLink,
  Award
} from 'lucide-react';
import { cvData } from '@/lib/data';
import { useState } from 'react';
import {
  SectionTitle,
  SkillBadge,
  JobCard
} from './components-cv';



export default function InteractiveCV() {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'education'>('experience');
  const [expandedJobs, setExpandedJobs] = useState<number[]>([0, 1]); // Expand first two by default

  const toggleJob = (index: number) => {
    setExpandedJobs(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans print:bg-white print:p-0">

      {/* --- Toolbar (Hidden in Print) --- */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <div className="flex space-x-2 bg-white p-1 rounded-lg shadow-sm border border-gray-200">
          {[
            { id: 'experience', label: 'Experience', icon: Briefcase },
            { id: 'skills', label: 'Tech Stack', icon: Code },
            { id: 'education', label: 'Education', icon: GraduationCap },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Save PDF</span>
        </button>
      </div>

      {/* --- Main Document --- */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden print:shadow-none print:rounded-none">

        {/* Header */}
        <header className="bg-slate-900 text-white p-8 print:bg-white print:text-black print:p-0 print:pb-6 print:border-b-2 print:border-black">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{cvData.personal.name}</h1>
              <p className="text-blue-400 text-xl font-medium print:text-black">{cvData.personal.title}</p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-blue-900/50 rounded-full border border-blue-700/50 text-blue-200 text-sm print:hidden">
                <Globe className="w-3 h-3" />
                {cvData.personal.relocation}
              </div>
              <div className="hidden print:block mt-2 italic text-sm">
                {cvData.personal.relocation}
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-300 print:text-black print:text-right">
              <a href={`mailto:${cvData.personal.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> {cvData.personal.email}
              </a>
              <a href={`tel:${cvData.personal.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> {cvData.personal.phone}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {cvData.personal.location}
              </div>
              <div className="flex gap-4 mt-2 print:hidden">
                <a href={cvData.personal.linkedin} className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
                <a href={cvData.personal.github} className="hover:text-white"><Github className="w-5 h-5" /></a>
                <a href={cvData.personal.website} className="hover:text-white"><ExternalLink className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-8 print:p-0 print:pt-6">

          {/* Summary */}
          <section className="mb-8">
            <SectionTitle icon={User} title="Professional Summary" />
            <p className="text-gray-700 leading-relaxed print:text-black">
              {cvData.summary}
            </p>
          </section>

          {/* Dynamic Content based on Tabs (Stacked in Print) */}
          <div className="print:block">

            {/* Experience Section */}
            <div className={`${activeTab === 'experience' ? 'block' : 'hidden'} print:block mb-8`}>
              <SectionTitle icon={Briefcase} title="Professional Experience" />
              <div className="space-y-2">
                {cvData.experience.map((job, index) => (
                  <JobCard
                    key={index}
                    job={job}
                    isOpen={expandedJobs.includes(index)}
                    toggle={() => toggleJob(index)}
                  />
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className={`${activeTab === 'skills' ? 'block' : 'hidden'} print:block mb-8 break-inside-avoid`}>
              <SectionTitle icon={Code} title="Technical Core Competencies" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cvData.coreCompetencies.map((group, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg print:bg-transparent print:p-0 print:border print:border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-3">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, sIdx) => (
                        <SkillBadge key={sIdx} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certs */}
            <div className={`${activeTab === 'education' ? 'block' : 'hidden'} print:block break-inside-avoid`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <SectionTitle icon={GraduationCap} title="Education" />
                  {cvData.education.map((edu, idx) => (
                    <div key={idx} className="mb-4">
                      <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                      <div className="text-gray-600">{edu.school}</div>
                      <div className="text-sm text-gray-500">{edu.year}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <SectionTitle icon={Award} title="Certifications" />
                  <ul className="space-y-3">
                    {cvData.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <div>
                          <span className="font-medium text-gray-900">{cert.name}</span>
                          <span className="text-gray-500 text-sm block">{cert.issuer}, {cert.year}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 p-6 text-center text-gray-500 text-sm print:hidden">
          <p>Interactive CV created for Jacob Kotzee</p>
        </footer>
      </div>
    </div>
  );
}