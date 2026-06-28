import React, { useState, useEffect } from 'react';
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

const titles = [
  "Software Engineer",
  "AI & IoT Engineer",
  "Full Stack Developer",
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

  const scrollToAbout = () => {
    const element = document.getElementById('about');
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 scroll-snap-align-start scroll-snap-stop-always">
      {/* Radial overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 w-full text-center flex flex-col items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="text-cyan font-semibold text-xs tracking-widest uppercase mb-3 font-heading">
            SOFTWARE ENGINEER PORTFOLIO
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Tanush Yadav
          </h1>
          
          {/* Rotating Title */}
          <div className="h-10 sm:h-12 flex items-center mb-6 justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center font-heading">
              <span className="border-r-2 border-cyan pr-2 mr-1 animate-pulse min-h-[30px] inline-block">
                {currentText}
              </span>
            </h2>
          </div>
          
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl text-center">
            I build scalable web applications, AI-powered software, and IoT solutions focused on accessibility, automation, and solving real-world engineering problems.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a 
              href="/Tanush_Yadav_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary decoration-transparent hover:-translate-y-0.5 text-sm"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </a>
            <a 
              href="/Tanush_Yadav_Resume.pdf" 
              download="Tanush_Yadav_Resume.pdf"
              className="btn btn-secondary decoration-transparent hover:-translate-y-0.5 text-sm"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
            <button 
              onClick={scrollToContact} 
              className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-0.5 text-sm"
            >
              <Send size={16} />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Social Connection Row */}
          <div className="flex gap-4 mt-8 items-center justify-center">
            <a 
              href="https://github.com/Tanushyadav9" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white-5 border border-white-10 hover-border-cyan text-white hover:text-cyan transition-all hover:-translate-y-1"
            >
              <GithubIcon size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/tanush-yadav-1893b338b" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white-5 border border-white-10 hover-border-purple text-white hover:text-purple transition-all hover:-translate-y-1"
            >
              <LinkedinIcon size={18} />
            </a>
            <a 
              href="mailto:tanushyada0987@gmail.com" 
              aria-label="Email"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white-5 border border-white-10 hover-border-cyan text-white hover:text-cyan transition-all hover:-translate-y-1"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10" onClick={scrollToAbout}>
        <span className="text-[10px] text-muted tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-cyan"
        >
          <ArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  );
}
