import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Calendar, Award } from 'lucide-react';
import Tilt from './Tilt';

const educationData = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Vivekananda Institute of Professional Studies (VIPS)',
    duration: '2024 – Present',
    gradYear: 'Expected Graduation: 2028',
    details: 'Developing advanced fundamentals in machine learning models, neural structures, web frameworks, and cloud databases. Active member of campus technical development cells.',
    coursework: ['Machine Learning', 'Data Structures', 'Database Systems (DBMS)', 'Python Scripting', 'IoT Prototyping'],
    icon: <GraduationCap size={26} className="text-cyan" />
  },
  {
    degree: 'Class XII (Senior Secondary)',
    institution: 'RPS International School',
    duration: '2024',
    gradYear: 'Graduated: 2024',
    details: 'Focused on Science & Mathematics curriculum. Built early embedded computer systems projects and code samples.',
    coursework: ['Physics & Chemistry', 'Mathematics', 'Computer Science (Python)', 'Electronics Fundamentals'],
    icon: <School size={26} className="text-purple" />
  },
  {
    degree: 'Class X (Secondary Education)',
    institution: 'RPS International School',
    duration: '2022',
    gradYear: 'Graduated: 2022',
    details: 'Acquired foundational training in algebra, computer applications, and basic physics principles.',
    coursework: ['Science', 'Mathematics', 'Information Tech', 'Social Sciences'],
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
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex"
            >
              <Tilt className="p-8 flex flex-col justify-between items-start h-full hover-border-purple text-left w-full">
                <div className="w-full">
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
                  
                  <p className="text-sm font-semibold text-cyan mb-1">
                    {edu.institution}
                  </p>
                  
                  <p className="text-xs text-[#915EFF] font-semibold mb-4">
                    {edu.gradYear}
                  </p>
                  
                  <p className="text-xs text-muted leading-relaxed mb-6">
                    {edu.details}
                  </p>
                  
                  <div className="w-full h-px bg-white-10 mb-4" />

                  {/* Coursework list */}
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">Key Coursework:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <span 
                          key={cIdx} 
                          className="px-2 py-0.5 bg-white-5 border border-white-10 rounded text-[10px] text-muted hover-border-cyan transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
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
