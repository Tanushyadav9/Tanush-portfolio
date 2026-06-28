import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, MapPin, Code2, Cpu, CheckSquare, Award, Cloud, Globe } from 'lucide-react';
import Tilt from './Tilt';

const factsData = [
  { label: 'Location', value: 'Delhi, India', icon: <MapPin className="text-cyan" size={20} /> },
  { label: 'Education', value: 'B.Tech AI & Data Science', icon: <GraduationCap className="text-purple" size={20} /> },
  { label: 'Role', value: 'Full Stack Developer', icon: <Code2 className="text-cyan" size={20} /> },
  { label: 'Hardware', value: 'AI & IoT Engineer', icon: <Cpu className="text-purple" size={20} /> },
  { label: 'Leadership', value: 'Founder @ Kenet Tech', icon: <Award className="text-cyan" size={20} /> },
  { label: 'Track Record', value: '6+ Real Projects', icon: <CheckSquare className="text-purple" size={20} /> }
];

const learningTech = [
  { name: 'Next.js', icon: <Globe className="text-cyan" size={22} />, desc: 'Server-Side Rendering & App Routing' },
  { name: 'TypeScript', icon: <Code2 className="text-purple" size={22} />, desc: 'Type-safe scalable programming' },
  { name: 'Docker', icon: <Cloud className="text-cyan" size={22} />, desc: 'Containerized deployment infrastructure' },
  { name: 'Cloud Computing', icon: <Cloud className="text-purple" size={22} />, desc: 'Serverless APIs, hosting & cloud database' }
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
          
          {/* Left Side: Photo Detail Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <Tilt 
              className="w-full p-8 flex flex-col gap-6"
              style={{ maxWidth: '420px' }}
            >
              
              {/* Graphic Profile Header */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#915EFF] to-[#00E5FF] flex items-center justify-center shadow-lg shadow-purple/20">
                <GraduationCap size={40} className="text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-heading mb-1">Tanush Yadav</h3>
                <p className="text-cyan text-sm font-medium tracking-wide">AI & Full Stack Developer</p>
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
                  <span>VIPS, Delhi (B.Tech student)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code2 size={18} className="text-cyan" />
                  <span>Founder, Kenet Technologies</span>
                </div>
              </div>

              <div className="w-full h-px bg-white-10" />

              <p className="text-xs text-muted leading-relaxed text-left">
                Building accessible software solutions combining embedded hardware, machine learning, and production-grade web systems.
              </p>

            </Tilt>
          </div>

          {/* Right Side: Bio, Facts & Currently Learning */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              {/* Professional Introduction Bio */}
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                I am a B.Tech student in Artificial Intelligence & Data Science at Vivekananda Institute of Professional Studies (VIPS), Delhi. I enjoy designing intelligent software products by combining AI, Full Stack Development, and Embedded Systems. My interests include Machine Learning, Computer Vision, IoT, Cloud Technologies, and scalable web applications. I continuously learn new technologies while building real-world projects that create meaningful impact.
              </p>
              
              <div className="w-full h-px bg-white-10 my-2" />

              {/* Quick Facts Section */}
              <div>
                <h4 className="text-lg font-bold text-white font-heading mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  Quick Facts
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {factsData.map((fact, idx) => (
                    <Tilt key={idx} className="p-4 flex items-center gap-4">
                      <div className="p-2.5 bg-white-5 rounded-xl border border-white-10 shrink-0">
                        {fact.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-[9px] font-bold text-muted uppercase tracking-wider">{fact.label}</p>
                        <p className="text-sm font-bold text-white mt-0.5">{fact.value}</p>
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-white-10 my-2" />

              {/* Currently Learning Section */}
              <div>
                <h4 className="text-lg font-bold text-white font-heading mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  Currently Learning
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {learningTech.map((tech, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.01 }}
                      className="p-4 bg-white-5 border border-white-10 rounded-2xl flex items-start gap-4 transition-all"
                    >
                      <span className="p-2 bg-white-5 rounded-xl shrink-0">{tech.icon}</span>
                      <div className="text-left">
                        <span className="text-sm font-bold text-white block mt-1">{tech.name}</span>
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
