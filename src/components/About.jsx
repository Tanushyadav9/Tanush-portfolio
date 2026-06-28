import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award, CheckSquare, Briefcase, Globe, Code2, Cloud, Sparkles } from 'lucide-react';
import Tilt from './Tilt';

const factsData = [
  { label: 'Location', value: 'Delhi, India', icon: <MapPin className="text-cyan" size={18} /> },
  { label: 'Education', value: 'B.Tech AI & Data Science', icon: <GraduationCap className="text-purple" size={18} /> },
  { label: 'Ventures', value: 'Founder @ Kenet Tech', icon: <Award className="text-cyan" size={18} /> },
  { label: 'Experience', value: '6+ Real Projects', icon: <CheckSquare className="text-purple" size={18} /> },
  { label: 'Status', value: 'Open to Internships', icon: <Briefcase className="text-cyan" size={18} /> }
];

const learningTech = [
  { name: 'Next.js', icon: <Globe className="text-cyan" size={20} />, desc: 'Serverless SSR Framework' },
  { name: 'Docker', icon: <Cloud className="text-purple" size={20} />, desc: 'Containerization & Microservices' },
  { name: 'TypeScript', icon: <Code2 className="text-cyan" size={20} />, desc: 'Type-safe scalable coding' },
  { name: 'Cloud Computing', icon: <Sparkles className="text-purple" size={20} />, desc: 'AWS/Firebase Telemetry hosting' }
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Profile Visual & Quick Facts */}
          <div className="lg:col-span-5 w-full flex flex-col gap-8 text-left">
            <Tilt className="p-6 flex flex-col gap-6 w-full">
              {/* Profile Photo Placeholder Frame */}
              <div className="relative w-full aspect-square rounded-2xl bg-white-5/5 border border-white-10 overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#915EFF]/10 to-[#00E5FF]/10 opacity-40" />
                
                {/* Silhouette SVG Graphic */}
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/3 text-white/10 group-hover:text-cyan/20 transition-colors duration-500">
                  <path d="M50 15 C38 15 28 25 28 37 C28 49 38 59 50 59 C62 59 72 49 72 37 C72 25 62 15 50 15 Z M50 67 C28 67 10 79 10 90 L 90 90 C 90 79 72 67 50 67 Z" fill="currentColor" />
                </svg>
                
                <span className="absolute bottom-4 text-xs font-bold text-white/40 font-heading select-none uppercase tracking-widest">
                  Profile Avatar Place
                </span>
              </div>

              {/* Current Status banner */}
              <div className="p-4 bg-[#00E5FF]/5 border border-[#00E5FF]/20 rounded-xl">
                <span className="text-[10px] font-bold text-cyan uppercase tracking-widest block mb-1">Current Status</span>
                <span className="text-xs sm:text-sm text-white/90 font-medium">
                  Actively available for Internships, Freelancing & Collaborations
                </span>
              </div>
            </Tilt>

            {/* Quick Facts List */}
            <Tilt className="p-6 w-full flex flex-col gap-4">
              <h4 className="text-xs font-black text-muted uppercase tracking-wider mb-2">Quick Facts</h4>
              {factsData.map((fact, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-2 bg-white-5 rounded-lg border border-white-5 text-cyan shrink-0">
                    {fact.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-muted uppercase tracking-wider">{fact.label}</p>
                    <p className="text-xs font-bold text-white mt-0.5">{fact.value}</p>
                  </div>
                </div>
              ))}
            </Tilt>
          </div>

          {/* RIGHT COLUMN: Professional Paragraphs & Currently Learning */}
          <div className="lg:col-span-7 flex flex-col gap-10 text-left w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-2xl font-bold text-white font-heading">
                Engineering Custom AI & Full-Stack Solutions
              </h3>
              
              <p className="text-base text-muted leading-relaxed">
                I design and engineer scalable software architectures by combining artificial intelligence algorithms, modern web frameworks, and custom embedded systems. Specializing in Python, JavaScript, and C++, I build applications that bridge hardware telemetry with accessible, production-ready interfaces.
              </p>
              
              <p className="text-base text-muted leading-relaxed">
                My engineering approach is centered on writing optimized code, designing modular components, and implementing responsive layouts. I focus heavily on product accessibility, API efficiency, and robust data schema layouts to deliver clean systems.
              </p>

              <p className="text-base text-muted leading-relaxed">
                My long-term objectives involve leading technical teams at the intersection of computer vision, cloud computing, and IoT device networks to automate and resolve real-world logistical challenges.
              </p>

              <div className="w-full h-px bg-white-10 my-4" />

              {/* Currently Learning Section */}
              <div>
                <h4 className="text-lg font-bold text-white font-heading mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  Currently Learning
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {learningTech.map((tech, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 bg-white-5 border border-white-5 rounded-2xl flex items-center gap-4 hover-border-cyan transition-all"
                    >
                      <span className="p-2.5 bg-white-5 rounded-xl text-cyan shrink-0">{tech.icon}</span>
                      <div className="text-left">
                        <span className="text-sm font-bold text-white block">{tech.name}</span>
                        <span className="text-xs text-muted leading-relaxed mt-0.5 block">{tech.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
