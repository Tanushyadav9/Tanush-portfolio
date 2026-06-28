import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Cpu, Settings, ArrowRight } from 'lucide-react';
import Tilt from './Tilt';

const services = [
  {
    title: 'Full-Stack Web Applications',
    icon: <Laptop size={26} className="text-cyan" />,
    description: 'Architecting high-performance client interfaces using React, Next.js, and TypeScript. Building responsive, accessible user interfaces with clean state management and optimal page load speeds.',
    capabilities: ['Single Page Apps (SPA)', 'Server Side Rendering (SSR)', 'Responsive Layout Design', 'State Stores & Hooks']
  },
  {
    title: 'AI & Data Science Solutions',
    icon: <Cpu size={26} className="text-purple" />,
    description: 'Designing machine learning pipelines, computer vision models, and analytical tools. Integrating cloud AI APIs, processing optical character recognition (OCR), and training regression/classification networks.',
    capabilities: ['Computer Vision (OCR/Detection)', 'Model Hyperparameter Tuning', 'Data Normalization & Analysis', 'AI Cloud Integration']
  },
  {
    title: 'Embedded Hardware & IoT Systems',
    icon: <Settings size={26} className="text-cyan" />,
    description: 'Prototyping smart automation devices, calibrating analog/digital sensors grid, and coding firmware on ESP32 & Arduino modules. Setting up gateway telemetry feeds with cloud real-time databases.',
    capabilities: ['Firmware Development (C++)', 'Microcontrollers & Sensors Layout', 'Real-time Telemetry Streams', 'Smart System Automation']
  }
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Services I Offer
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex"
            >
              <Tilt className="p-8 md:p-10 flex flex-col justify-between items-start h-full hover-border-cyan text-left w-full">
                <div>
                  {/* Service Icon */}
                  <div className="p-3 bg-white-5 rounded-2xl border border-white-10 text-cyan mb-6 inline-block">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="w-full h-px bg-white-5 mb-6" />

                  {/* Capabilities List */}
                  <div className="flex flex-col gap-2">
                    {service.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="mt-8 flex items-center gap-2 text-xs font-bold text-cyan hover:text-white transition-colors cursor-pointer group"
                >
                  <span>Inquire service</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
