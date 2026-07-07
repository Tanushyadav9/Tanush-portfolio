import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Target, Zap, Users, Lightbulb } from 'lucide-react';

const highlights = [
  {
    title: 'Problem Solver',
    desc: 'Turning complex technical constraints into clean, high-performance software solutions.',
    icon: <Target size={18} className="text-cyan" />
  },
  {
    title: 'AI Enthusiast',
    desc: 'Building deep learning pipelines, computer vision trackers, and cloud OCR systems.',
    icon: <Brain size={18} className="text-purple" />
  },
  {
    title: 'Full-Stack Developer',
    desc: 'Crafting responsive frontend interfaces connected to Firebase backends.',
    icon: <Code size={18} className="text-cyan" />
  },
  {
    title: 'Fast Learner',
    desc: 'Picking up new frameworks, APIs, and hardware configurations quickly under pressure.',
    icon: <Zap size={18} className="text-purple" />
  },
  {
    title: 'Team Player',
    desc: 'Collaborating in hackathons, student projects, and embedded hardware deployments.',
    icon: <Users size={18} className="text-cyan" />
  },
  {
    title: 'Creative Thinker',
    desc: 'Designing accessible, impactful tech for real-world challenges like financial inclusion.',
    icon: <Lightbulb size={18} className="text-purple" />
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-[#915EFF]/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-[#00E5FF]/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-4">
            Who I Am
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Bio — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-5 leading-snug">
            B.Tech AI & Data Science Student,{' '}
            <span className="text-gradient">Full-Stack & IoT Developer</span>
          </h3>

          <p className="text-white/65 text-sm leading-relaxed mb-4">
            I'm a software engineering student at VIPS Delhi, specialising in artificial intelligence and IoT embedded systems. I build products end-to-end — from hardware firmware in C++ to React frontends synced with Firebase — with a focus on accessibility and real-world impact.
          </p>

          <p className="text-white/50 text-sm leading-relaxed">
            My standout work includes{' '}
            <span className="text-white/85 font-semibold">NoteNetra</span>, a currency recogniser for the visually impaired, and{' '}
            <span className="text-white/85 font-semibold">VisionPay</span>, a voice-guided UPI payment app — both combining embedded hardware with cloud intelligence.
          </p>
        </motion.div>

        {/* Highlight cards — 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="profile-badge-card p-5 bg-white/[0.018] border border-white/8 rounded-xl flex gap-3.5 hover:border-cyan/30 transition-colors duration-300 group"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyan/10 transition-colors">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading mb-1">{item.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
