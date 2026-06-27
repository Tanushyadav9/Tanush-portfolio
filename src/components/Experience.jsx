import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import Tilt from './Tilt';

const experiences = [
  {
    role: 'Embedded Systems Developer',
    company: 'Kenet Technologies',
    location: 'Delhi',
    duration: '2024 – Present',
    details: [
      'Building innovative Artificial Intelligence and Internet of Things (IoT) products.',
      'Developed NoteNetra, a smart currency detection system for visually impaired individuals.',
      'Designed VisionPay, a camera-based, accessible QR code payment interface with voice assistance.',
      'Leading overall technical hardware prototyping and software deployment from concept to production.'
    ]
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 md:pl-16 mb-8 text-left"
            >
              {/* Pulse timeline node indicator */}
              <div className="timeline-dot">
                <span className="timeline-ping" />
              </div>

              {/* Glassmorphic Experience Card */}
              <Tilt className="p-8">
                {/* Header Information */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-gradient">
                      {exp.company}
                    </h4>
                  </div>
                  
                  {/* Meta items */}
                  <div className="flex flex-col gap-2 text-sm text-muted">
                    <div className="flex items-center gap-2 bg-white-5 px-3.5 py-1 rounded-full border border-white-5">
                      <Calendar size={14} className="text-cyan" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white-5 px-3.5 py-1 rounded-full border border-white-5">
                      <MapPin size={14} className="text-purple" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-white-10 mb-6" />

                {/* Description Bullets */}
                <ul className="flex flex-col gap-4 list-none">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-base text-muted leading-relaxed">
                      <span className="mt-1 text-cyan shrink-0">
                        <CheckCircle size={16} />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
