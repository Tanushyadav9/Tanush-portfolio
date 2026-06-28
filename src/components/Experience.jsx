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
    companyLogo: <Cpu size={26} className="text-[#00E5FF]" />,
    contributions: [
      'Leading the architecture design and low-level C++ firmware coding for AI-powered and IoT-based solutions.',
      'Developed NoteNetra, a smart currency detection device parsing image frames to cloud OCR endpoints.',
      'Built VisionPay, an accessible QR payment platform using canvas computer vision and speech synthesizers.',
      'Responsible for schematic layouts, hardware prototyping, database schemas, and dashboard hosting.'
    ],
    achievements: [
      'Engineered localized image resolution compression algorithms on ESP32 microcontrollers, reducing data transmission latency by 70%.',
      'Implemented accessible speech interaction flows on payment nodes, achieving a 98% scan verification success rate among blind trial groups.',
      'Formulated distributed telemetry data models in Firebase, ensuring 100% telemetry logs replication across unstable network regions.'
    ],
    techStack: ['ESP32', 'Arduino IDE', 'React.js', 'Firebase DB', 'Python', 'Computer Vision', 'Restful APIs']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-[20px]">
            Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Track */}
        <div className="max-w-4xl mx-auto timeline-track">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 md:pl-16 mb-[60px] text-left"
            >
              {/* Pulse timeline node */}
              <div className="timeline-dot">
                <span className="timeline-ping" />
              </div>

              {/* Glassmorphic Experience Card */}
              <Tilt className="py-[36px] px-[32px] md:px-[40px]">
                {/* Header Info */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white-5 rounded-2xl border border-white-10 shrink-0 text-cyan">
                      {exp.companyLogo}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-base sm:text-lg font-medium text-gradient">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Meta Details */}
                  <div className="flex flex-col gap-2 text-xs text-muted">
                    <div className="flex items-center gap-2 bg-white-5 px-3 py-1 rounded-full border border-white-5">
                      <Calendar size={12} className="text-cyan" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white-5 px-3 py-1 rounded-full border border-white-5">
                      <MapPin size={12} className="text-purple" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-white-10 mb-6" />

                {/* Major Contributions */}
                <div className="mb-6">
                  <h5 className="text-xs font-black text-white/50 uppercase tracking-wider mb-3 block">
                    Major Contributions:
                  </h5>
                  <ul className="flex flex-col gap-3 list-none">
                    {exp.contributions.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                        <span className="mt-1 text-cyan shrink-0">
                          <CheckCircle size={14} />
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div className="mb-6 p-4 bg-cyan-10/5 border border-cyan-40/15 rounded-2xl">
                  <h5 className="text-xs font-black text-cyan uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Star size={14} className="fill-cyan" />
                    <span>Key Achievements:</span>
                  </h5>
                  <ul className="flex flex-col gap-2.5 list-none">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-white/80 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple mt-1.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full h-px bg-white-10 mb-6" />

                {/* Key Technologies */}
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">Key Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-3.5 py-1.5 bg-white-5 border border-white-10 rounded-xl text-xs font-bold text-cyan"
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
