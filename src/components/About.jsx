import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Target, Zap, Users, ShieldCheck } from 'lucide-react';
import Tilt from './Tilt';
import profileAvatar from '../assets/profile_avatar.png';

const highlights = [
  {
    title: 'Problem Solver',
    desc: 'Translating logical constraints and database structures into dry, high-throughput software components.',
    icon: <Target size={20} className="text-cyan" />
  },
  {
    title: 'AI Enthusiast',
    desc: 'Developing deep learning neural networks pipelines, cloud OCR queries, and computer vision trackers.',
    icon: <Brain size={20} className="text-purple" />
  },
  {
    title: 'Full Stack Developer',
    desc: 'Building responsive frontend panels and hosting telemetry logs streams linked with Firebase databases.',
    icon: <Code size={20} className="text-cyan" />
  },
  {
    title: 'Quick Learner',
    desc: 'Adopting new API schemas, frameworks, databases configurations, and hardware grids within hours.',
    icon: <Zap size={20} className="text-purple" />
  },
  {
    title: 'Team Player',
    desc: 'Collaborating in student project teams, technical hackathons, and physical embedded setups staging.',
    icon: <Users size={20} className="text-cyan" />
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-[20%] left-[80%] w-[320px] height-[320px] bg-[#915EFF]/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-4">
            Professional Profile
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Visual Card) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[340px]"
            >
              {/* Glowing accent border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple/10 to-cyan/10 rounded-2xl filter blur-lg -z-10" />
              
              <Tilt className="p-3 border border-white/10 bg-white/5 rounded-2xl">
                <div className="rounded-xl overflow-hidden aspect-[4/5] border border-white/10 relative bg-[#0b0f19]">
                  <img 
                    src={profileAvatar} 
                    alt="Developer headshot" 
                    className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 to-transparent" />
                </div>
              </Tilt>
            </motion.div>
          </div>

          {/* Right Column (Highlights details) */}
          <div className="lg:col-span-7 flex flex-col text-left items-start">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-4 leading-snug">
                B.Tech AI & Data Science Student & Full Stack + IoT Developer
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed mb-8 font-light">
                I am a focused software engineering student specializing in artificial intelligence architectures and IoT embedded deployments. I merge modern frontend technologies with serverless database syncing (Firebase) and custom firmware design (C++). I prioritize clean components styling, fast bundle builds, and structured logic controllers. This ensures my projects meet professional metrics and perform efficiently.
              </p>

              {/* Highlights cards vertical array */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {highlights.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="profile-badge-card p-4 bg-white/[0.015] border border-white/10 rounded-xl flex gap-3.5 hover:border-cyan/35 transition-colors duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-cyan">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white font-heading mb-1">{item.title}</h4>
                      <p className="text-[10px] text-white/50 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
