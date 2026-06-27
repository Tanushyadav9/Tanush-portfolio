import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, MapPin, Code2 } from 'lucide-react';
import Tilt from './Tilt';

const stats = [
  { label: 'Major', value: 'AI & Data Science' },
  { label: 'Education', value: 'B.Tech VIPS' },
  { label: 'Focus', value: 'Full Stack & IoT' },
];

const learningTech = [
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'Docker', level: 'Basic' },
  { name: 'ROS (Robot OS)', level: 'Exploring' },
  { name: 'Cloud Native APIs', level: 'Advanced' }
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            Get To Know
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#915EFF] to-[#00E5FF] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Detail Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <Tilt 
              className="w-full p-8 flex flex-col gap-6"
              style={{ maxWidth: '420px' }}
            >
              
              {/* Graphic Profile Header */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#915EFF] to-[#00E5FF] flex items-center justify-center shadow-lg shadow-purple">
                <GraduationCap size={40} className="text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-heading mb-1">Tanush Yadav</h3>
                <p className="text-cyan text-sm font-medium tracking-wide">AI & IoT Solutions Architect</p>
              </div>

              <div className="w-full h-px bg-white-10" />

              {/* Personal Details */}
              <div className="flex flex-col gap-4 text-sm text-muted">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-cyan" />
                  <span>Delhi, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen size={18} className="text-purple" />
                  <span>B.Tech in Artificial Intelligence & Data Science</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code2 size={18} className="text-cyan" />
                  <span>Full Stack & Embedded IoT Systems</span>
                </div>
              </div>

              {/* Simple Stats grid */}
              <div className="grid grid-cols-3 gap-2 mt-2">
                {stats.map((stat, i) => (
                  <div key={i} className="p-3 bg-white-5 rounded-xl border border-white-5 text-center">
                    <p className="text-xs text-muted truncate">{stat.label}</p>
                    <p className="text-xs font-bold text-white truncate mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>

            </Tilt>
          </div>

          {/* Right Side: Bio & Skills Learning */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <p className="text-lg text-white/90 leading-relaxed font-light">
                I am currently pursuing my <strong className="text-white font-semibold">B.Tech in Artificial Intelligence & Data Science</strong> at <span className="text-cyan font-medium">Vivekananda Institute of Professional Studies (VIPS), Delhi</span>.
              </p>
              
              <p className="text-muted leading-relaxed">
                I enjoy building impactful products combining Artificial Intelligence, IoT, and modern web technologies. My key technical interests include Embedded Systems engineering, Computer Vision, Cloud Applications, and Smart Automation.
              </p>

              <p className="text-muted leading-relaxed">
                I love turning innovative ideas into practical, scalable solutions that improve people's lives and simplify daily tasks.
              </p>

              <div className="w-full h-px bg-white-10 my-2" />

              {/* Currently Learning Section */}
              <div>
                <h4 className="text-xl font-bold text-white font-heading mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  Currently Exploring & Learning
                </h4>
                
                <div className="flex flex-wrap gap-3">
                  {learningTech.map((tech, idx) => (
                    <div 
                      key={idx} 
                      className="px-4 py-2 bg-white-5 border border-white-10 rounded-full hover-border-cyan transition-colors flex items-center gap-2"
                    >
                      <span className="text-sm font-semibold text-white">{tech.name}</span>
                      <span className="text-[10px] uppercase font-bold text-cyan bg-cyan-10 px-2 py-0.5 rounded-full">
                        {tech.level}
                      </span>
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
