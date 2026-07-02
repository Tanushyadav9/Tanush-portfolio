import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, Cpu, Star } from 'lucide-react';
import Tilt from './Tilt';

const experiences = [
  {
    role: 'Embedded Systems Developer',
    company: 'Kenet Technologies',
    location: 'Delhi, India',
    duration: '2024 – Present',
    companyLogo: <Cpu size={22} className="text-[#00E5FF]" />,
    bullets: [
      'Architecting low-level C++ firmware and schema integrations for ESP32 and Arduino-based platforms.',
      'Developed NoteNetra currency validator, reducing cloud transmission image overhead to lower latency by 70%.',
      'Built VisionPay QR scanner guides, securing a 98% transaction verification rate using Web Speech synthesis.',
      'Constructed distributed telemetry databases on Firebase for remote synchronization across unstable networks.'
    ],
    techStack: ['ESP32', 'Arduino IDE', 'React.js', 'Firebase DB', 'Python', 'Computer Vision', 'REST APIs']
  },
  {
    role: 'Founder & Hardware Lead',
    company: 'Kenet Technologies',
    location: 'Delhi, India',
    duration: '2023 – 2024',
    companyLogo: <Star size={22} className="text-[#915EFF]" />,
    bullets: [
      'Launched hardware prototyping brand staging custom microcontroller grids and automated sensor clusters.',
      'Engineered optimized device casings using advanced mechanical geometries, winning first place in designing contests.',
      'Drafted full hardware schematics layouts, power distribution tracks, and sensor routing configurations.'
    ],
    techStack: ['3D Modeling', 'ESP32', 'Arduino IDE', 'Hardware Prototyping', 'Product Design']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-4">
            Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline track */}
        <div className="max-w-4xl mx-auto timeline-track">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 md:pl-16 mb-12 text-left"
            >
              {/* timeline node */}
              <div className="timeline-dot">
                <span className="timeline-ping" />
              </div>

              {/* Card */}
              <Tilt className="glass-card p-6 md:p-8 border border-white/10 hover:border-cyan/25 transition-all">
                {/* Header Info */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 shrink-0 text-cyan">
                      {exp.companyLogo}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-gradient">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Meta Details */}
                  <div className="flex flex-wrap gap-2 text-xs text-white/40">
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <Calendar size={12} className="text-cyan" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <MapPin size={12} className="text-purple" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-white/5 mb-6" />

                {/* Major Contributions bullets */}
                <div className="mb-6">
                  <ul className="flex flex-col gap-3 list-none">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                        <span className="mt-1 text-cyan shrink-0">
                          <CheckCircle size={14} className="stroke-[2.5]" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full h-px bg-white/5 mb-6" />

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-[10px] font-semibold text-white/60"
                      >
                        {tech}
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
