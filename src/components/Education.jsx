import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Layers, MapPin } from 'lucide-react';
import Tilt from './Tilt';

const VIPSCrest = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan">
    <polygon points="12,2 2,7 12,12 22,7" fill="rgba(0, 229, 255, 0.1)" />
    <path d="M2 17 L12,22 L22,17" />
    <path d="M2 12 L12,17 L22,12" />
    <line x1="12" y1="12" x2="12" y2="22" />
    <path d="M22 7 v6" />
  </svg>
);

const educationData = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Vivekananda Institute of Professional Studies (VIPS)',
    location: 'Delhi, India',
    duration: '2024 – Present',
    gradYear: 'Expected Graduation: 2028',
    details: 'Building solid competencies in algorithm design, intelligence modeling, data structure formulations, and embedded telemetry integrations.',
    academicFocus: ['Machine Learning', 'Artificial Intelligence', 'Web Development', 'Embedded IoT Systems'],
    coursework: ['Data Structures & Algorithms', 'Machine Learning Models', 'Database Management (DBMS)', 'IoT Telemetry Prototyping', 'Full-Stack Software Architecture']
  }
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-4">
            Qualifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Education Profile
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Card */}
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
              <Tilt className="p-6 md:p-8 border border-white/10 hover:border-cyan/25 transition-all text-left w-full">
                
                {/* Header Row */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                      <VIPSCrest />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-gradient">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-xs text-white/40">
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <Calendar size={12} className="text-cyan" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5 mt-1 lg:mt-0">
                      <MapPin size={12} className="text-purple" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-white/5 mb-6" />

                {/* Expected Graduation */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-cyan uppercase tracking-widest block mb-2 font-heading">
                    {edu.gradYear}
                  </span>
                  <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {edu.details}
                  </p>
                </div>

                {/* Academic Focus */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2 font-heading">
                    <Layers size={14} className="text-purple" />
                    <span>Academic Focus Area:</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.academicFocus.map((focus, fIdx) => (
                      <span 
                        key={fIdx} 
                        className="px-3 py-1 bg-purple/10 border border-purple/20 rounded-md text-xs font-semibold text-white/90"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-white/5 mb-6" />

                {/* Coursework */}
                <div>
                  <span className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2 font-heading">
                    <BookOpen size={14} className="text-cyan" />
                    <span>Relevant Coursework:</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span 
                        key={cIdx} 
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-semibold text-white/60 hover-border-cyan transition-all"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
