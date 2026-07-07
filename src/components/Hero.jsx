import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, FileText, Download, Send, MapPin, Sparkles } from 'lucide-react';
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
  "AI Engineer & Full-Stack Developer",
  "Embedded Systems & IoT Builder",
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
    { number: '15', suffix: '+', label: 'Projects' },
    { number: '5', suffix: '+', label: 'Hackathons' },
    { number: '3', suffix: '', label: 'Certifications' },
    { number: '12', suffix: '+', label: 'Technologies' }
  ];

  const socialLinks = [
    {
      href: 'https://github.com/Tanushyadav9',
      icon: <GithubIcon size={18} />,
      label: 'GitHub',
      color: 'hover:text-white hover:border-white/40'
    },
    {
      href: 'https://www.linkedin.com/in/tanush-yadav-1893b338b',
      icon: <LinkedinIcon size={18} />,
      label: 'LinkedIn',
      color: 'hover:text-cyan hover:border-cyan/40'
    },
    {
      href: 'mailto:tanushyada0987@gmail.com',
      icon: <span style={{ fontSize: '18px' }}>✉</span>,
      label: 'Email',
      color: 'hover:text-purple hover:border-purple/40'
    }
  ];

  return (
    <section id="home" className="hero-section">
      {/* Radial overlay */}
      <div className="hero-radial-overlay" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="hero-grid">

          {/* ── Left Column: Content ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hero-content"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="hero-availability-badge"
            >
              <span className="hero-availability-dot" />
              <span>Open to Internships & Collaborations</span>
              <Sparkles size={12} className="text-cyan opacity-70" />
            </motion.div>

            {/* Name */}
            <h1 className="hero-name">
              Tanush<br />
              <span className="text-gradient">Yadav</span>
            </h1>

            {/* Animated title */}
            <div className="hero-typewriter-wrap">
              <span className="text-cyan text-lg">&lt;</span>
              <span className="hero-typewriter-text border-r-2 border-cyan pr-2">
                {currentText}
              </span>
              <span className="text-cyan text-lg">/&gt;</span>
            </div>

            {/* Location */}
            <div className="hero-location">
              <MapPin size={13} className="text-cyan shrink-0" />
              <span>Delhi, India — B.Tech AI & DS @ VIPS</span>
            </div>

            {/* Bio */}
            <p className="hero-bio">
              Building scalable web applications, AI-powered systems, and intelligent IoT solutions using React, Python, Firebase, and ESP32. Passionate about accessible technology that makes real impact.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a
                href="/Tanush_Yadav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="hero-view-resume"
              >
                <FileText size={15} />
                <span>View Resume</span>
              </a>
              <a
                href="/Tanush_Yadav_Resume.pdf"
                download="Tanush_Yadav_Resume.pdf"
                className="btn btn-secondary"
                id="hero-download-resume"
              >
                <Download size={15} />
                <span>Download CV</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-ghost"
                id="hero-contact-btn"
              >
                <Send size={15} className="text-cyan" />
                <span>Hire Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className={`hero-social-btn ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="hero-stat-item">
                  <span className="hero-stat-number text-gradient">
                    <CountUp to={stat.number} suffix={stat.suffix} />
                  </span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column: Profile Visual ─────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hero-avatar-col"
          >
            <div className="hero-avatar-wrapper">
              {/* Rotating ring decoration */}
              <svg className="hero-avatar-ring" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="200" cy="200" r="185"
                  fill="none"
                  stroke="url(#ring-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="8 14"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="ring-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#915EFF" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#915EFF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Glow backdrop */}
              <div className="hero-avatar-glow" />

              {/* Photo frame */}
              <div className="hero-avatar-frame">
                <img
                  src={profileAvatar}
                  alt="Tanush Yadav — AI Engineer & Full-Stack Developer"
                  className="hero-avatar-img"
                />
                {/* gradient overlay at bottom */}
                <div className="hero-avatar-overlay" />
              </div>

              {/* Floating badge: Tech */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="hero-float-badge hero-float-badge--top"
              >
                <span className="text-cyan text-sm">⚡</span>
                <span className="text-xs font-bold text-white">AI Engineer</span>
              </motion.div>

              {/* Floating badge: Location */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="hero-float-badge hero-float-badge--bottom"
              >
                <span className="text-purple text-sm">🏆</span>
                <span className="text-xs font-bold text-white">1st Place Winner</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-scroll-indicator"
        onClick={() => scrollToSection('about')}
        role="button"
        tabIndex={0}
        aria-label="Scroll to About section"
      >
        <span className="hero-scroll-text">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-cyan"
        >
          <ArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  );
}
