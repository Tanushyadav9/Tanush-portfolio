import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Lightbulb, Rocket, Award } from 'lucide-react';
import Tilt from './Tilt';

const achievementsList = [
  {
    title: 'Founder & Builder',
    category: 'Venture',
    icon: <Rocket size={24} className="text-[#00E5FF]" />,
    institution: 'Kenet Technologies',
    description: 'Launched a hardware-software prototyping brand focused on AI-powered systems and IoT sensors configuration. Spearheaded NoteNetra and VisionPay product layouts.'
  },
  {
    title: 'First Place Winner',
    category: 'Competition',
    icon: <Trophy size={24} className="text-[#915EFF]" />,
    institution: '3D Designing Competition',
    description: 'Engineered and rendered structural models using advanced geometry, winning first prize for optimization, aesthetic design excellence, and functionality.'
  },
  {
    title: 'Technical Innovations',
    category: 'Hackathons',
    icon: <Lightbulb size={24} className="text-[#00E5FF]" />,
    institution: 'Competitions & Innovation Challenges',
    description: 'Participated in multiple engineering hackathons and smart system layout contests, designing proof-of-concept software for accessible commerce tools.'
  },
  {
    title: 'Embedded AI Systems Developer',
    category: 'Academics',
    icon: <Award size={24} className="text-[#915EFF]" />,
    institution: 'AI & IoT Project Development',
    description: 'Developed and deployed full-stack integrations using ESP32 controllers, Firebase databases, and React analytics dashboards to resolve daily challenges.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Honors & Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path Layout */}
        <div className="max-w-3xl mx-auto timeline-track">
          {achievementsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative pl-12 md:pl-16 mb-10 text-left"
            >
              {/* Pulse timeline node indicator */}
              <div className="timeline-dot">
                <span className="timeline-ping" />
              </div>

              {/* Glassmorphic Card */}
              <Tilt className="p-6 md:p-8 hover-border-cyan">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white-5 rounded-2xl border border-white-10 shrink-0 text-cyan">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                        {item.title}
                      </h3>
                      <h4 className="text-sm font-semibold text-gradient">
                        {item.institution}
                      </h4>
                    </div>
                  </div>
                  
                  <span className="text-[9px] tracking-wider font-bold uppercase text-purple bg-purple-10 border border-purple-20 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
