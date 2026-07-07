import React from 'react';
import { ArrowUp, Mail, FileText } from 'lucide-react';

const GithubIcon = ({ size = 16, ...props }) => (
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

const LinkedinIcon = ({ size = 16, ...props }) => (
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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  const links = [
    {
      href: 'https://github.com/Tanushyadav9',
      icon: <GithubIcon size={14} />,
      label: 'GitHub',
      hoverClass: 'hover:text-white'
    },
    {
      href: 'https://www.linkedin.com/in/tanush-yadav-1893b338b',
      icon: <LinkedinIcon size={14} />,
      label: 'LinkedIn',
      hoverClass: 'hover:text-cyan'
    },
    {
      href: 'mailto:tanushyada0987@gmail.com',
      icon: <Mail size={14} />,
      label: 'Email',
      hoverClass: 'hover:text-purple'
    },
    {
      href: '/Tanush_Yadav_Resume.pdf',
      icon: <FileText size={14} />,
      label: 'Resume',
      hoverClass: 'hover:text-cyan'
    }
  ];

  return (
    <footer className="relative z-10" style={{ background: '#0B0F19' }}>
      {/* Gradient separator */}
      <div className="footer-gradient-top" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left: Brand */}
        <div>
          <span className="text-lg font-extrabold tracking-wider text-gradient font-heading block mb-1">
            Tanush Yadav
          </span>
          <span className="text-xs font-bold text-white/40 block uppercase tracking-widest mb-0.5">
            AI Engineer · Full Stack · IoT
          </span>
          <p className="text-[10px] text-white/25 font-medium mt-2">
            Built with React + Vite · Deployed on Vercel
          </p>
        </div>

        {/* Center: Nav links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-muted">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined}
              rel={link.href.startsWith('http') || link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-1.5 transition-colors ${link.hoverClass}`}
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Right: Back to top + copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to Top"
            className="p-2.5 bg-white/5 border border-white/10 text-white/60 rounded-full hover:bg-purple/10 hover:border-purple/30 hover:text-white transition-all flex items-center justify-center cursor-pointer"
          >
            <ArrowUp size={16} />
          </button>

          <p className="text-xs text-white/30 text-center md:text-right">
            &copy; {year} Tanush Yadav. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
