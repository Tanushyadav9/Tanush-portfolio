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
        <div className="text-center mb-[60px]">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-[20px]">
            Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Profile Visual & Quick Facts */}
          <div className="lg:col-span-5 w-full flex flex-col gap-8 text-left">
            <Tilt className="p-8 md:p-10 flex flex-col gap-8 w-full">
              {/* Premium Personal Monogram Circular Avatar Logo */}
              <div className="flex justify-center items-center py-6">
                <div className="w-[180px] h-[180px] relative group cursor-default transition-all duration-300 hover:scale-[1.05]">
                  {/* Glowing background halo */}
                  <div className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-[#00E5FF] via-[#8B5CF6] to-[#3B82F6] opacity-25 blur-md group-hover:opacity-55 transition-opacity duration-300" />
                  
                  {/* Interactive Monogram SVG */}
                  <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 select-none">
                    <defs>
                      <linearGradient id="avatarBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00E5FF" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                      <linearGradient id="avatarTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="50%" stopColor="#E0F7FA" />
                        <stop offset="100%" stopColor="#00E5FF" />
                      </linearGradient>
                      <filter id="avatarTextGlow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Faint rotating outer orbit */}
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="92" 
                      stroke="rgba(0, 229, 255, 0.15)" 
                      strokeWidth="1.2" 
                      strokeDasharray="6 8" 
                      className="rotating-orbit"
                    />

                    {/* Glowing outer ring / background border */}
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="84" 
                      stroke="url(#avatarBorderGrad)" 
                      strokeWidth="2.5" 
                      fill="#0B1020" 
                      className="avatar-glow"
                    />

                    {/* Radial overlay shading */}
                    <circle cx="100" cy="100" r="82.5" fill="rgba(255, 255, 255, 0.01)" />

                    {/* Centered Monogram bold letters TY */}
                    <text 
                      x="100" 
                      y="118" 
                      textAnchor="middle" 
                      fill="url(#avatarTextGrad)" 
                      fontSize="56" 
                      fontWeight="900" 
                      fontFamily="var(--font-heading)" 
                      letterSpacing="0.5" 
                      filter="url(#avatarTextGlow)"
                    >
                      TY
                    </text>

                    {/* Glass Reflection Arc Path */}
                    <path 
                      d="M 32,95 A 68,68 0 0,1 168,95 A 68,34 0 0,0 32,95 Z" 
                      fill="rgba(255, 255, 255, 0.04)" 
                    />

                    {/* Tiny glowing background particles */}
                    <circle cx="35" cy="55" r="1.5" fill="#00E5FF" opacity="0.6" />
                    <circle cx="165" cy="145" r="1.2" fill="#8B5CF6" opacity="0.5" />
                    <circle cx="50" cy="165" r="1.5" fill="#3B82F6" opacity="0.6" />
                    <circle cx="160" cy="45" r="1" fill="#FFFFFF" opacity="0.7" />
                  </svg>
                </div>
              </div>

              {/* Current Status banner */}
              <div className="p-4 bg-[#00E5FF]/5 border border-[#00E5FF]/15 rounded-xl">
                <span className="text-[10px] font-bold text-cyan uppercase tracking-widest block mb-1">Current Status</span>
                <span className="text-xs sm:text-sm text-white/90 font-medium">
                  Actively available for Internships, Freelancing & Collaborations
                </span>
              </div>
            </Tilt>

            {/* Quick Facts List */}
            <Tilt className="p-8 md:p-10 w-full flex flex-col gap-6">
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
                I design and engineer scalable software architectures by combining artificial intelligence algorithms, modern web frameworks, and custom embedded systems. Specializing in Python, JavaScript, and C++, my engineering approach centers on code optimization, accessibility compliance, and robust API development to solve real-world problems.
              </p>

              <div className="w-full h-px bg-white-10 my-2" />

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
