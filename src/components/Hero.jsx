import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Cpu, Globe, Terminal, Mail } from 'lucide-react';

const GithubIcon = ({ size = 24, ...props }) => (
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

const LinkedinIcon = ({ size = 24, ...props }) => (
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

const titles = [
  "AI & Data Science Student",
  "Full Stack Developer",
  "IoT Innovator",
  "Embedded Systems Enthusiast"
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [currentText, setCurrentText] = useState("");

  // Typing effect hook
  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setCurrentText(titles[index].substring(0, subIndex));
  }, [subIndex, index]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const triggerResumeDownload = () => {
    // Generate a beautiful, print-friendly profile snapshot or open window print dialog
    window.print();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24 md:pt-32 relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Text Block */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan font-semibold text-lg md:text-xl tracking-wider mb-2 font-heading">
              WELCOME TO MY PORTFOLIO
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Hi, I'm <span className="text-gradient">Tanush Yadav</span>
            </h1>
            
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center font-heading">
                <span className="border-r-2 border-cyan pr-2 mr-1 animate-pulse">
                  {currentText}
                </span>
              </h2>
            </div>
            
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              A passionate developer building AI, IoT and Web applications that solve real-world problems through intelligent technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/Tanush_Yadav_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary decoration-transparent"
              >
                📄 View Resume
              </a>
              <a 
                href="/Tanush_Yadav_Resume.pdf" 
                download="Tanush_Yadav_Resume.pdf"
                className="btn btn-secondary decoration-transparent"
              >
                ⬇ Download Resume
              </a>
            </div>

            {/* Social Connection Row */}
            <div className="flex gap-4 mt-6 items-center">
              <a 
                href="https://github.com/Tanushyadav9" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white-5 border border-white-10 hover-border-purple hover-bg-purple-10 text-white hover:text-cyan transition-all"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tanush-yadav-1893b338b" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white-5 border border-white-10 hover-border-purple hover-bg-purple-10 text-white hover:text-cyan transition-all"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href="mailto:tanushyada0987@gmail.com" 
                aria-label="Email"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white-5 border border-white-10 hover-border-purple hover-bg-purple-10 text-white hover:text-cyan transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Graphical Block */}
        <div className="col-span-1 md:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-square relative floating-graphic"
            style={{ maxWidth: '400px' }}
          >
            {/* Background glowing circle */}
            <div className="hero-glow-bg" />

            <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Circuit Grid Background lines */}
              <path d="M 50,250 L 450,250" stroke="rgba(255,255,255,0.03)" strokeWidth="2" strokeDasharray="5 5" />
              <path d="M 250,50 L 250,450" stroke="rgba(255,255,255,0.03)" strokeWidth="2" strokeDasharray="5 5" />
              
              {/* Circuit paths with gradient glowing strokes */}
              <defs>
                <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#915EFF" />
                  <stop offset="100%" stopColor="#00E5FF" />
                </linearGradient>
                <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connected Node Path Lines */}
              <path d="M 80,120 L 150,120 L 200,170 M 200,170 L 200,220" stroke="url(#circuitGrad)" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
              <path d="M 420,380 L 350,380 L 300,330 M 300,330 L 300,280" stroke="url(#circuitGrad)" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
              <path d="M 400,100 L 330,170 L 330,220" stroke="url(#circuitGrad)" strokeWidth="2.5" opacity="0.4" strokeLinecap="round" />
              <path d="M 100,400 L 170,330 L 170,280" stroke="url(#circuitGrad)" strokeWidth="2.5" opacity="0.4" strokeLinecap="round" />

              {/* Pulsing Path Nodes */}
              <circle cx="80" cy="120" r="5" fill="#915EFF" filter="url(#glow)" />
              <circle cx="420" cy="380" r="5" fill="#00E5FF" filter="url(#glow)" />
              <circle cx="400" cy="100" r="4" fill="#00E5FF" />
              <circle cx="100" cy="400" r="4" fill="#915EFF" />

              {/* Central Floating Laptop Graphic */}
              <g transform="translate(110, 140)">
                {/* Laptop Back Screen */}
                <rect x="20" y="20" width="240" height="150" rx="10" fill="#0d1117" stroke="url(#circuitGrad)" strokeWidth="3" filter="url(#glow)" />
                <rect x="25" y="25" width="230" height="140" rx="6" fill="#070a13" />
                
                {/* Screen Content Graphics */}
                <text x="40" y="55" fill="#915EFF" fontSize="14" fontFamily="monospace" fontWeight="bold">&lt;code&gt;</text>
                <text x="55" y="80" fill="#00E5FF" fontSize="12" fontFamily="monospace">const user = "Tanush Yadav";</text>
                <text x="55" y="100" fill="#aaa6c3" fontSize="11" fontFamily="monospace">fields: [AI, FullStack, IoT];</text>
                <text x="55" y="120" fill="#00E5FF" fontSize="12" fontFamily="monospace">status: "Building Solutions";</text>
                <text x="40" y="145" fill="#915EFF" fontSize="14" fontFamily="monospace" fontWeight="bold">&lt;/code&gt;</text>

                {/* Laptop Base (Keyboard Part) */}
                <path d="M 0,170 L 280,170 L 290,195 L -10,195 Z" fill="#0f1422" stroke="url(#circuitGrad)" strokeWidth="3" strokeLinejoin="round" />
                <rect x="110" y="180" width="60" height="8" rx="3" fill="#1b233a" />
              </g>

              {/* Interactive Micro Floating icons */}
              <g transform="translate(60, 260)" className="spinning-gear">
                <circle cx="0" cy="0" r="16" fill="rgba(145, 94, 255, 0.1)" stroke="#915EFF" strokeWidth="1.5" />
                <path d="M-4 -4 L4 4 M-4 4 L4 -4" stroke="#915EFF" strokeWidth="1.5" />
              </g>
              <g transform="translate(420, 200)">
                <circle cx="0" cy="0" r="18" fill="rgba(0, 229, 255, 0.1)" stroke="#00E5FF" strokeWidth="1.5" />
                <path d="M -6,0 L 6,0 M 0,-6 L 0,6" stroke="#00E5FF" strokeWidth="1.5" />
              </g>
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
