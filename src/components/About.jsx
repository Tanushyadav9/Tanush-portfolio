import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, MapPin, Code2, Award, Briefcase, Cpu, CheckSquare } from 'lucide-react';
import Tilt from './Tilt';

const statsData = [
  { value: '5+', label: 'Projects Completed', icon: <CheckSquare className="text-cyan" size={24} /> },
  { value: '10+', label: 'Technologies', icon: <Cpu className="text-purple" size={24} /> },
  { value: 'AI & IoT', label: 'Developer Focus', icon: <Award className="text-cyan" size={24} /> },
  { value: 'Startup', label: 'Experience', icon: <Briefcase className="text-purple" size={24} /> }
];

const learningTech = [
  { name: 'Next.js', icon: '🌐', desc: 'Modern Server-Side Rendered framework' },
  { name: 'TypeScript', icon: '🟦', desc: 'Secure strongly-typed development' },
  { name: 'Docker', icon: '🐋', desc: 'Containerized application deployment' },
  { name: 'Cloud Computing', icon: '☁️', desc: 'Scalable REST APIs & serverless apps' },
  { name: 'Advanced React', icon: '⚛️', desc: 'High performance state optimization' }
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
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
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

              <div className="w-full h-px bg-white-10" />

              {/* Quick credential footnote */}
              <p className="text-xs text-muted leading-relaxed text-left">
                Specialized in hardware prototyping, machine learning integrations, and clean user dashboards.
              </p>

            </Tilt>
          </div>

          {/* Right Side: Bio, Stats & Skills Learning */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <p className="text-lg text-white/90 leading-relaxed font-light">
                I am <strong className="text-white font-semibold">Tanush Yadav</strong>, a B.Tech student specializing in <strong className="text-white font-semibold">Artificial Intelligence & Data Science</strong>. I enjoy building modern web applications, AI-powered solutions, and IoT systems that solve real-world problems. My goal is to create innovative, accessible, and scalable products while continuously learning emerging technologies.
              </p>
              
              <div className="w-full h-px bg-white-10 my-2" />

              {/* Statistics Counters Section */}
              <div>
                <h4 className="text-xl font-bold text-white font-heading mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  Professional Statistics
                </h4>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {statsData.map((stat, idx) => (
                    <Tilt key={idx} className="p-4 flex flex-col items-center text-center justify-center">
                      <div className="mb-2 p-2.5 bg-white-5 rounded-full border border-white-10">
                        {stat.icon}
                      </div>
                      <h5 className="text-2xl font-black text-white font-heading">{stat.value}</h5>
                      <p className="text-[11px] font-bold text-muted uppercase tracking-wider mt-1">{stat.label}</p>
                    </Tilt>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-white-10 my-2" />

              {/* Currently Learning Section */}
              <div>
                <h4 className="text-xl font-bold text-white font-heading mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  Currently Learning
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {learningTech.map((tech, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-white-5 border border-white-10 rounded-2xl flex items-start gap-4 transition-all"
                    >
                      <span className="text-2xl mt-1 shrink-0">{tech.icon}</span>
                      <div className="text-left">
                        <span className="text-sm font-bold text-white block">{tech.name}</span>
                        <span className="text-xs text-muted leading-relaxed mt-0.5 block">{tech.desc}</span>
                      </div>
                    </motion.div>
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
