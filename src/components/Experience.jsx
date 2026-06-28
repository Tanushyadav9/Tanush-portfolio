import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, Cpu } from 'lucide-react';
import Tilt from './Tilt';

const experiences = [
  {
    role: 'Embedded Systems Developer',
    company: 'Kenet Technologies',
    location: 'Delhi, India',
    duration: '2024 – Present',
    companyLogo: <Cpu size={26} className="text-[#00E5FF]" />,
    details: [
      'Leading the design and development of AI-powered and IoT-based solutions.',
      'Developed NoteNetra, a smart currency detection system using ESP32 and cloud integration.',
      'Built VisionPay, an accessible QR payment platform for visually impaired users.',
      'Responsible for hardware prototyping, software architecture, and deployment.'
    ],
    techStack: ['ESP32', 'Arduino IDE', 'React.js', 'Firebase', 'Python', 'Computer Vision', 'IoT Protocols']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path */}
        <div className="max-w-4xl mx-auto timeline-track">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 md:pl-16 mb-12 text-left"
            >
              {/* Pulse timeline node indicator */}
              <div className="timeline-dot">
                <span className="timeline-ping" />
              </div>

              {/* Glassmorphic Experience Card */}
              <Tilt className="p-8">
                {/* Header Information */}
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
                  
                  {/* Meta items */}
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

                {/* Description Bullets */}
                <ul className="flex flex-col gap-4 list-none mb-6">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm sm:text-base text-muted leading-relaxed">
                      <span className="mt-1.5 text-cyan shrink-0">
                        <CheckCircle size={14} />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="w-full h-px bg-white-10 mb-6" />

                {/* Technologies Badges */}
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">Key Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-3 py-1 bg-white-5 border border-white-10 rounded-lg text-xs font-bold text-cyan"
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
