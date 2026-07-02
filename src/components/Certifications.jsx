import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Tilt from './Tilt';

const AwsLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm3.3 14.5c.3-.1.5-.4.5-.7V8.5c0-.4-.2-.7-.5-.8-.3-.1-.6 0-.8.2l-3.3 3.3a.5.5 0 000 .7l3.3 3.3c.1.1.2.2.3.2.1 0 .2 0 .5-.1zm-6.6 0c.2.1.4.1.5.1.1 0 .2-.1.3-.2l3.3-3.3a.5.5 0 000-.7l-3.3-3.3c-.2-.2-.5-.3-.8-.2-.3.1-.5.4-.5.8v7.3c0 .3.2.6.5.7z" />
  </svg>
);

const DeepLearningLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm3 13.5c0 .3-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5v7zM11 11h2v-2h-2v2zm0 3h2v-2h-2v2z" />
  </svg>
);

const CiscoLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-cyan">
    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-6 16h2v-5H6v5zm3 0h2V9H9v9zm3 0h2V7h-2v11zm3 0h2v-9h-2v9zm3 0h2v-5h-2v5z" />
  </svg>
);

const getProviderLogo = (issuer) => {
  const name = issuer.toLowerCase();
  if (name.includes('amazon') || name.includes('aws')) return <AwsLogo />;
  if (name.includes('deeplearning') || name.includes('coursera')) return <DeepLearningLogo />;
  if (name.includes('cisco')) return <CiscoLogo />;
  return <Award size={26} className="text-cyan" />;
};

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
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-4">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {certificationsData.map((cert, idx) => {
            const logo = getProviderLogo(cert.issuer);
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="flex"
              >
                <Tilt className="p-6 flex flex-col justify-between items-start h-full border border-white/10 hover:border-cyan/25 text-left w-full">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 shrink-0 text-cyan">
                        {logo}
                      </div>
                      <span className="text-[9px] font-bold text-cyan bg-cyan/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-2 leading-snug">
                      {cert.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-purple mb-4">
                      {cert.issuer}
                    </p>
                      
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      {cert.details}
                    </p>
                  </div>

                  <div className="w-full">
                    <div className="w-full h-px bg-white/5 mt-6 mb-4" />

                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-white/50 hover:text-white transition-colors decoration-transparent cursor-pointer"
                    >
                      <ExternalLink size={12} className="text-cyan" />
                      <span>Verify Credential</span>
                    </a>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
