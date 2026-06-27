import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Calendar } from 'lucide-react';
import Tilt from './Tilt';

const educationData = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Vivekananda Institute of Professional Studies (VIPS)',
    duration: '2024 – Present',
    details: 'Developing advanced fundamentals in machine learning, deep neural structures, data science, web development architectures, and cloud databases. Active member of technical communities.',
    icon: <GraduationCap size={26} className="text-cyan" />
  },
  {
    degree: 'Class XII (Senior Secondary)',
    institution: 'RPS International School',
    duration: '2024',
    details: 'Focused on Science & Mathematics curriculum. Built early embedded computer systems projects and code samples using programming languages.',
    icon: <School size={26} className="text-purple" />
  },
  {
    degree: 'Class X (Secondary Education)',
    institution: 'RPS International School',
    duration: '2022',
    details: 'Acquired foundational training in computer applications, algebra, physics, and basic electronics principles, graduating with honors.',
    icon: <BookOpen size={26} className="text-cyan" />
  }
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            Qualifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            My Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex"
            >
              <Tilt className="p-8 flex flex-col justify-between items-start h-full hover-border-purple">
                <div className="text-left w-full">
                  {/* Top Meta info */}
                  <div className="flex justify-between items-center w-full mb-6">
                    <div className="p-3 bg-white-5 rounded-2xl border border-white-10">
                      {edu.icon}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted bg-white-5 border border-white-5 px-3 py-1 rounded-full">
                      <Calendar size={12} className="text-cyan" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-2 leading-snug">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-sm font-semibold text-cyan mb-4">
                    {edu.institution}
                  </p>
                  
                  <p className="text-xs text-muted leading-relaxed">
                    {edu.details}
                  </p>
                </div>
                
                {/* Micro accent dot row */}
                <div className="flex gap-1.5 mt-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-20" />
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
