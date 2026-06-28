import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Tilt from './Tilt';

const certificationsData = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: '2025',
    details: 'Validated cloud fluency, foundational AWS architecture, billing structures, security policies, and serverless computing concepts.',
    link: 'https://github.com/Tanushyadav9'
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    date: '2025',
    details: 'Mastered neural network design, training hyperparameters optimization, convolutional networks, sequence models, and computer vision.',
    link: 'https://github.com/Tanushyadav9'
  },
  {
    title: 'Introduction to IoT & Embedded Systems',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    details: 'Acquired core competencies in microcontroller configuration (Arduino, ESP32), sensor grids calibration, and internet gateway protocols.',
    link: 'https://github.com/Tanushyadav9'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex"
            >
              <Tilt className="p-8 flex flex-col justify-between items-start h-full hover-border-cyan text-left w-full">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white-5 rounded-2xl border border-white-10">
                      <Award size={26} className="text-cyan" />
                    </div>
                    <span className="text-[10px] font-bold text-cyan bg-cyan-10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-purple mb-4">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-xs text-muted leading-relaxed">
                    {cert.details}
                  </p>
                </div>

                <div className="w-full h-px bg-white-10 my-6" />

                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-muted hover:text-white transition-colors decoration-transparent cursor-pointer"
                >
                  <ExternalLink size={14} className="text-cyan" />
                  <span>Verify Credential</span>
                </a>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
