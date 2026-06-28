import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Layers } from 'lucide-react';
import Tilt from './Tilt';

const educationData = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Vivekananda Institute of Professional Studies (VIPS)',
    location: 'Delhi, India',
    duration: '2024 – Present',
    gradYear: 'Expected Graduation: 2028',
    details: 'Building foundational competencies in algorithmic complexity, cloud analytics, intelligence models, and hardware-software telemetry. Contributing actively to campus developer groups and hackathon iterations.',
    academicFocus: ['Machine Learning', 'Artificial Intelligence', 'Web Development', 'Embedded Systems', 'Cloud Computing'],
    coursework: ['Data Structures & Algorithms', 'Machine Learning Models', 'Database Management (DBMS)', 'IoT Telemetry Prototyping', 'Full-Stack Software Architecture'],
    icon: <GraduationCap size={28} className="text-cyan" />
  }
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-[80px]">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-[20px]">
            Qualifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Education Profile
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlight Card */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Tilt className="py-[48px] px-[40px] flex flex-col gap-8 text-left w-full">
                
                {/* Header Row */}
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white-5 rounded-2xl border border-white-10 text-cyan">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-gradient">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted bg-white-5 border border-white-5 px-3.5 py-1.5 rounded-full">
                    <Calendar size={12} className="text-cyan" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="w-full h-px bg-white-10" />

                {/* Subdetails and Description */}
                <div>
                  <span className="text-xs font-bold text-cyan uppercase tracking-widest block mb-2">
                    {edu.gradYear}
                  </span>
                  <p className="text-sm text-muted leading-relaxed">
                    {edu.details}
                  </p>
                </div>

                {/* Academic Focus */}
                <div>
                  <span className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layers size={14} className="text-purple" />
                    <span>Academic Focus Area:</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.academicFocus.map((focus, fIdx) => (
                      <span 
                        key={fIdx} 
                        className="px-3 py-1 bg-purple-10 border border-purple-20 rounded-lg text-xs font-semibold text-white/90"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-white-10" />

                {/* Relevant Coursework */}
                <div>
                  <span className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <BookOpen size={14} className="text-cyan" />
                    <span>Relevant Coursework:</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span 
                        key={cIdx} 
                        className="px-3 py-1 bg-white-5 border border-white-10 rounded-xl text-xs font-semibold text-muted hover-border-cyan transition-all"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Visual accent */}
                <div className="flex gap-2 mt-2">
                  <span className="w-2.5 h-1 rounded-full bg-purple" />
                  <span className="w-2.5 h-1 rounded-full bg-cyan" />
                  <span className="w-2.5 h-1 rounded-full bg-white/10" />
                </div>

              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
