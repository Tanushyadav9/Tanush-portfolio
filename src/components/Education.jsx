import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import Tilt from './Tilt';

const educationData = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Vivekananda Institute of Professional Studies (VIPS)',
    location: 'Delhi, India',
    duration: '2024 – Present',
    gradYear: 'Expected Graduation: 2028',
    details: 'Acquiring deep competencies in algorithmic development, cloud configurations, intelligent computing, and internet-connected systems. Maintaining active contributions to institutional development sprints and hackathons.',
    coursework: ['Artificial Intelligence', 'Machine Learning', 'Data Structures', 'Web Development', 'Embedded Systems'],
    icon: <GraduationCap size={28} className="text-cyan" />
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

        {/* Education Highlight Container */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Tilt className="p-8 md:p-10 flex flex-col gap-6 hover-border-purple text-left w-full">
                
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
                  <p className="text-xs text-[#915EFF] font-bold uppercase tracking-wider mb-2">
                    {edu.gradYear}
                  </p>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {edu.details}
                  </p>
                </div>

                <div className="w-full h-px bg-white-10" />

                {/* Coursework list */}
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <BookOpen size={14} className="text-cyan" />
                    <span>Relevant Coursework:</span>
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span 
                        key={cIdx} 
                        className="px-3.5 py-1.5 bg-white-5 border border-white-10 rounded-xl text-xs font-semibold text-white/90 hover-border-cyan transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Visual Accent */}
                <div className="flex gap-2 mt-4">
                  <span className="w-2 h-2 rounded-full bg-purple" />
                  <span className="w-2 h-2 rounded-full bg-cyan" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>

              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
