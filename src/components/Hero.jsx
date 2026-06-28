import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Download, Send, Mail } from 'lucide-react';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24 md:pt-32 relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Text Block */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan font-semibold text-xs tracking-widest uppercase mb-3 font-heading">
              SOFTWARE ENGINEER PORTFOLIO
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              <span className="block text-white">Tanush Yadav</span>
            </h1>
            
            {/* Subtitle list */}
            <div className="flex flex-wrap gap-x-3 gap-y-1 items-center mb-6 text-sm sm:text-base font-semibold text-cyan/90 font-heading">
              <span>AI & Data Science Student</span>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span>Full Stack Developer</span>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span>AI & IoT Engineer</span>
            </div>
            
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              I build scalable web applications, AI-powered solutions, and IoT systems that solve real-world problems. My focus is on creating accessible, user-centric, and production-ready software using modern technologies.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="/Tanush_Yadav_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary decoration-transparent hover:scale-[1.02] transition-transform text-sm"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </a>
              <a 
                href="/Tanush_Yadav_Resume.pdf" 
                download="Tanush_Yadav_Resume.pdf"
                className="btn btn-secondary decoration-transparent hover:scale-[1.02] transition-transform text-sm"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
              <button 
                onClick={scrollToContact} 
                className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-[1.02] transition-transform text-sm"
              >
                <Send size={16} />
                <span>Hire Me</span>
              </button>
            </div>

            {/* Social Connection Row */}
            <div className="flex gap-4 mt-8 items-center">
              <a 
                href="https://github.com/Tanushyadav9" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white-5 border border-white-10 hover-border-cyan text-white hover:text-cyan transition-all social-icon-glow"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tanush-yadav-1893b338b" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white-5 border border-white-10 hover-border-purple text-white hover:text-purple transition-all social-icon-glow"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href="mailto:tanushyada0987@gmail.com" 
                aria-label="Email"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white-5 border border-white-10 hover-border-cyan text-white hover:text-cyan transition-all social-icon-glow"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Graphical Block: Abstract AI & IoT Network Graphics */}
        <div className="col-span-1 md:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full aspect-square relative floating-graphic"
            style={{ maxWidth: '400px' }}
          >
            {/* Background glowing circle */}
            <div className="hero-glow-bg opacity-30" />

            <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#915EFF" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
                <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="100%" stopColor="#0083B0" />
                </linearGradient>
                <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Concentric Rotating Network Orbits */}
              <circle cx="250" cy="250" r="180" stroke="rgba(145, 94, 255, 0.08)" strokeWidth="1.5" strokeDasharray="6 8" />
              <circle cx="250" cy="250" r="140" stroke="rgba(0, 229, 255, 0.08)" strokeWidth="1.5" strokeDasharray="12 6" />
              <circle cx="250" cy="250" r="100" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />

              {/* Data Connections / Circuit Mesh */}
              <path d="M 120,150 L 250,250 L 380,150" stroke="rgba(145, 94, 255, 0.15)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 120,350 L 250,250 L 380,350" stroke="rgba(0, 229, 255, 0.15)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 80,250 L 420,250" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />

              {/* Isometric Data Block / AI core core representation */}
              <g transform="translate(250, 250)">
                {/* Core Sphere */}
                <circle cx="0" cy="0" r="32" fill="url(#primaryGrad)" opacity="0.1" />
                <circle cx="0" cy="0" r="22" fill="url(#secondaryGrad)" opacity="0.15" />
                <circle cx="0" cy="0" r="12" fill="#0B0F19" stroke="url(#secondaryGrad)" strokeWidth="2.5" filter="url(#softGlow)" />
                <circle cx="0" cy="0" r="4" fill="#00E5FF" />
                
                {/* Tech details orbiting the core */}
                <path d="M -45,-45 L -20,-20" stroke="#915EFF" strokeWidth="1.5" opacity="0.6" />
                <path d="M 45,-45 L 20,-20" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />
                <path d="M -45,45 L -20,20" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />
                <path d="M 45,45 L 20,20" stroke="#915EFF" strokeWidth="1.5" opacity="0.6" />
              </g>

              {/* Sub-system Core Nodes (represented as small circular modules) */}
              {/* Top AI Module */}
              <g transform="translate(250, 80)">
                <circle cx="0" cy="0" r="14" fill="#0B0F19" stroke="url(#primaryGrad)" strokeWidth="2" />
                <circle cx="0" cy="0" r="4" fill="#915EFF" />
                <text x="22" y="4" fill="rgba(255, 255, 255, 0.5)" fontSize="9" fontFamily="monospace" fontWeight="bold">AI_CORE</text>
              </g>

              {/* Bottom IoT Module */}
              <g transform="translate(250, 420)">
                <circle cx="0" cy="0" r="14" fill="#0B0F19" stroke="url(#secondaryGrad)" strokeWidth="2" />
                <circle cx="0" cy="0" r="4" fill="#00E5FF" />
                <text x="22" y="4" fill="rgba(255, 255, 255, 0.5)" fontSize="9" fontFamily="monospace" fontWeight="bold">IoT_NODE</text>
              </g>

              {/* Left Data Stack Module */}
              <g transform="translate(80, 250)">
                <circle cx="0" cy="0" r="14" fill="#0B0F19" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <path d="M -4,-4 L 4,-4 M -4,0 L 4,0 M -4,4 L 4,4" stroke="#aaa6c3" strokeWidth="1.5" />
                <text x="-65" y="4" fill="rgba(255, 255, 255, 0.5)" fontSize="9" fontFamily="monospace" fontWeight="bold">DATA_NET</text>
              </g>

              {/* Right Cloud / Service Module */}
              <g transform="translate(420, 250)">
                <circle cx="0" cy="0" r="14" fill="#0B0F19" stroke="url(#secondaryGrad)" strokeWidth="2" />
                <circle cx="0" cy="0" r="3" fill="#00E5FF" />
                <text x="20" y="4" fill="rgba(255, 255, 255, 0.5)" fontSize="9" fontFamily="monospace" fontWeight="bold">CLOUD.API</text>
              </g>

              {/* Technical Code / Binary Feed overlays */}
              <text x="70" y="100" fill="rgba(0, 229, 255, 0.25)" fontSize="8" fontFamily="monospace">01001010 01010011</text>
              <text x="350" y="100" fill="rgba(145, 94, 255, 0.25)" fontSize="8" fontFamily="monospace">SYS_HEALTH: 100%</text>
              <text x="50" y="400" fill="rgba(145, 94, 255, 0.25)" fontSize="8" fontFamily="monospace">MODEL: CV_OCR.h5</text>
              <text x="350" y="400" fill="rgba(0, 229, 255, 0.25)" fontSize="8" fontFamily="monospace">REST_API: OK</text>
            </svg>
          </motion.div>
        </div>

      </div>

      {/* Floating indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10" onClick={scrollToProjects}>
        <span className="text-xs text-muted tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-cyan"
        >
          <ArrowDown size={18} />
        </motion.div>
      </div>
    </section>
  );
}
