import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, FileText, Download, Send, Mail, MapPin, Briefcase, Sparkles } from 'lucide-react';
import profileAvatar from '../assets/profile_avatar.png';

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

function CountUp({ to, suffix = "", duration = 1.2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(to, 10);
    if (isNaN(end) || start === end) return;
    let totalMiliseconds = duration * 1000;
    let stepTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const titles = [
  "AI Engineer & Software Developer",
  "Full-Stack Web Developer",
  "AI & Data Science Student"
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [currentText, setCurrentText] = useState("");

  // Typing effect cycle
  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setCurrentText(titles[index].substring(0, subIndex));
  }, [subIndex, index]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const stats = [
    { number: '15', suffix: '+', label: 'Projects Completed' },
    { number: '5', suffix: '+', label: 'Hackathons' },
    { number: '3', suffix: '', label: 'Certifications' },
    { number: '12', suffix: '+', label: 'Technologies' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[140px] pb-[100px]">
      {/* Radial overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(145,94,255,0.08)_0%,_transparent_75%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col text-left items-start">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >


            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 font-heading">
              Tanush Yadav
            </h1>

            {/* Sub-Title */}
            <div className="h-8 flex items-center mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-white/90 flex items-center font-heading">
                <span className="text-cyan mr-2">&lt;</span>
                <span className="border-r-2 border-cyan pr-2 animate-pulse min-h-[24px] inline-block text-white">
                  {currentText}
                </span>
                <span className="text-cyan ml-1">/&gt;</span>
              </h2>
            </div>
            
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-light">
              Building scalable web applications, AI-powered software, and intelligent engineering solutions using React, JavaScript, Python, Firebase, and modern web technologies.
            </p>
            
            {/* Actions */}
            <div className="flex flex-wrap gap-4 items-center mb-12">
              <a 
                href="/Tanush_Yadav_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary bg-gradient-to-r from-purple to-cyan text-xs font-bold decoration-transparent cursor-pointer shadow-lg hover:shadow-cyan/15 hover:brightness-110"
              >
                <FileText size={14} />
                <span>View Resume</span>
              </a>
              <a 
                href="/Tanush_Yadav_Resume.pdf" 
                download="Tanush_Yadav_Resume.pdf"
                className="btn btn-secondary border-white/20 hover:border-cyan/30 text-xs font-bold decoration-transparent"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn btn-secondary border-white/20 hover:border-purple/30 text-xs font-bold cursor-pointer"
              >
                <Send size={14} className="text-cyan" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Stats list */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/5 pt-8 w-full">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-left">
                  <span className="text-2xl sm:text-3xl font-black text-gradient font-heading block mb-0.5">
                    <CountUp to={stat.number} suffix={stat.suffix} />
                  </span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column (Avatar Glass Box) */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Ambient behind avatar */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/15 to-[#00E5FF]/15 rounded-3xl filter blur-2xl -z-10" />

            {/* floating decorations */}
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-purple/10 border border-purple/20 backdrop-blur-md flex items-center justify-center float-shape-1 z-20">
              <span className="text-xs">🤖</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-cyan/10 border border-cyan/20 backdrop-blur-md flex items-center justify-center float-shape-2 z-20">
              <span className="text-xs">⚛️</span>
            </div>

            {/* Glass box */}
            <div className="glass-card p-4 max-w-[320px] sm:max-w-[350px] border border-white/15 bg-white/5 shadow-2xl">
              <div className="rounded-xl overflow-hidden aspect-square border border-white/10 relative bg-[#0b0f19]">
                <img 
                  src={profileAvatar} 
                  alt="Tanush Yadav Headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-left px-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold text-white font-heading">Tanush Yadav</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Available now" />
                </div>
                <p className="text-[10px] text-white/50 leading-relaxed font-light">
                  B.Tech Artificial Intelligence & Data Science Student at VIPS. IoT Builder & Software Developer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 cursor-pointer z-10" 
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[9px] text-white/40 tracking-widest uppercase font-semibold">Scroll to Profile</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-cyan"
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
