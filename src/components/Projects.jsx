import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Eye, BarChart3, Building, BookOpen, Laptop } from 'lucide-react';
import Tilt from './Tilt';

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

const projects = [
  {
    id: 'notenetra',
    title: 'NoteNetra',
    description: 'Smart currency detection hardware module with cloud synchronization. Uses camera modules, intelligent cloud OCR, and auditory outputs, enabling visually impaired users to recognize paper currencies seamlessly.',
    tech: ['ESP32', 'Firebase', 'IoT', 'Cloud Dashboard'],
    github: 'https://github.com/Tanushyadav9/NoteNetra',
    demo: 'https://github.com/Tanushyadav9/NoteNetra', // placeholder demo
    featured: true,
    icon: <Cpu size={32} className="text-[#00E5FF]" />,
    screenshotMock: (
      <svg viewBox="0 0 400 156" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="156" fill="#0b0e1e"/>
        {/* ESP32 block */}
        <rect x="50" y="38" width="80" height="80" rx="10" fill="#1b233d" stroke="#915EFF" strokeWidth="2" />
        <text x="65" y="80" fill="#915EFF" fontSize="12" fontFamily="monospace" fontWeight="bold">ESP-32</text>
        <circle cx="170" cy="78" r="16" fill="#00E5FF" opacity="0.2" />
        <circle cx="170" cy="78" r="8" fill="#00E5FF" />
        <path d="M 130,78 L 154,78" stroke="#915EFF" strokeWidth="2" strokeDasharray="3 3" />
        {/* Scanner overlay */}
        <path d="M 230,30 L 330,30" stroke="#00E5FF" strokeWidth="2" />
        <path d="M 230,126 L 330,126" stroke="#00E5FF" strokeWidth="2" />
        <rect x="240" y="48" width="80" height="60" rx="4" fill="#0f172a" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="250" y="83" fill="#aaa6c3" fontSize="10" fontFamily="sans-serif">SCANNING...</text>
        {/* Connection rays */}
        <path d="M 186,78 L 230,78" stroke="#00E5FF" strokeWidth="2" strokeDasharray="3 3" />
      </svg>
    )
  },
  {
    id: 'visionpay',
    title: 'VisionPay',
    description: 'Camera-based UPI payment app built to help visually impaired individuals run independent transactions safely. Complete with custom voice guidance, text-to-speech directions, and secure Firebase auth.',
    tech: ['React.js', 'Firebase', 'Computer Vision', 'Speech Synthesis'],
    github: 'https://github.com/Tanushyadav9/VisionPay',
    demo: 'https://github.com/Tanushyadav9/VisionPay',
    featured: false,
    icon: <Eye size={24} className="text-[#915EFF]" />,
    screenshotMock: (
      <svg viewBox="0 0 400 156" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="156" fill="#0b0e1e"/>
        {/* Phone shell */}
        <rect x="150" y="15" width="100" height="126" rx="14" fill="#1e293b" stroke="#00E5FF" strokeWidth="2" />
        {/* Scanning grid */}
        <rect x="165" y="35" width="70" height="70" rx="6" fill="#0f172a" stroke="#915EFF" strokeWidth="1.5" />
        <path d="M 180,70 L 220,70" stroke="#00E5FF" strokeWidth="2" className="animate-pulse" />
        {/* Voice indicator */}
        <path d="M 270,78 C 275,68 285,68 290,78" stroke="#915EFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M 265,78 C 275,58 295,58 305,78" stroke="#915EFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'preschool',
    title: 'Little Learners Preschool Website',
    description: 'A modern responsive website designed for a preschool with admissions, gallery, contact form, teacher information, and mobile-friendly design.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Tanushyadav9/kindergarten',
    demo: 'https://github.com/Tanushyadav9/kindergarten',
    featured: false,
    icon: <Laptop size={24} className="text-[#00E5FF]" />,
    screenshotMock: (
      <svg viewBox="0 0 400 156" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="156" fill="#0b0e1e"/>
        {/* Browser outline */}
        <rect x="40" y="20" width="320" height="116" rx="6" fill="#1b233d" stroke="#00E5FF" strokeWidth="1.5" />
        {/* Dashboard visuals */}
        <rect x="60" y="45" width="130" height="30" rx="4" fill="#ffbd2e" opacity="0.8" />
        <text x="70" y="64" fill="#050816" fontSize="10" fontWeight="bold">Little Learners</text>
        
        <rect x="210" y="45" width="60" height="30" rx="4" fill="#915EFF" />
        <text x="218" y="64" fill="white" fontSize="9">Admissions</text>
        
        <rect x="280" y="45" width="60" height="30" rx="4" fill="#00E5FF" />
        <text x="295" y="64" fill="#050816" fontSize="9">Gallery</text>
        
        <rect x="60" y="88" width="280" height="35" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <circle cx="85" cy="105" r="10" fill="#915EFF" />
        <circle cx="115" cy="105" r="10" fill="#00E5FF" />
        <circle cx="145" cy="105" r="10" fill="#ffbd2e" />
        <text x="175" y="110" fill="#aaa6c3" fontSize="9">Welcome to Preschool Enrollment</text>
      </svg>
    )
  },
  {
    id: 'hms',
    title: 'Hotel Management System',
    description: 'A complete desktop administration system for tracking hospitality bookings, database room availability, records processing, customer invoices, and employee shift rotas.',
    tech: ['Java', 'Python', 'MySQL', 'Database UI'],
    github: 'https://github.com/Tanushyadav9/Hotel-Management-System',
    demo: 'https://github.com/Tanushyadav9/Hotel-Management-System',
    featured: false,
    icon: <Building size={24} className="text-[#00E5FF]" />,
    screenshotMock: (
      <svg viewBox="0 0 400 156" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="156" fill="#0b0e1e"/>
        {/* Room grid */}
        <rect x="80" y="30" width="240" height="96" rx="6" fill="#1b233d" stroke="#915EFF" strokeWidth="1.5" />
        <rect x="100" y="45" width="50" height="28" rx="4" fill="#27c93f" opacity="0.8" />
        <text x="110" y="62" fill="white" fontSize="9">Room 101</text>
        <rect x="175" y="45" width="50" height="28" rx="4" fill="#ff5f56" opacity="0.8" />
        <text x="185" y="62" fill="white" fontSize="9">Room 102</text>
        <rect x="250" y="45" width="50" height="28" rx="4" fill="#27c93f" opacity="0.8" />
        <text x="260" y="62" fill="white" fontSize="9">Room 103</text>
        <rect x="100" y="85" width="200" height="28" rx="4" fill="rgba(255,255,255,0.05)" />
        <text x="115" y="102" fill="#aaa6c3" fontSize="9">Database Status: 32 Rooms Occupied / 10 Free</text>
      </svg>
    )
  },
  {
    id: 'analyzer',
    title: 'Student Performance Analyzer',
    description: 'An intelligent analytical engine that parses student test grids, extracts score percentiles, automatically tracks grade classifications, and outputs graphic trend charts.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Numpy'],
    github: 'https://github.com/Tanushyadav9/Student-Performance-Analyzer',
    demo: 'https://github.com/Tanushyadav9/Student-Performance-Analyzer',
    featured: false,
    icon: <BarChart3 size={24} className="text-[#915EFF]" />,
    screenshotMock: (
      <svg viewBox="0 0 400 156" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="156" fill="#0b0e1e"/>
        {/* Graphs visual */}
        <line x1="80" y1="30" x2="80" y2="120" stroke="white" strokeWidth="2" />
        <line x1="80" y1="120" x2="320" y2="120" stroke="white" strokeWidth="2" />
        <rect x="100" y="70" width="30" height="50" fill="#915EFF" rx="3" />
        <rect x="150" y="50" width="30" height="70" fill="#00E5FF" rx="3" />
        <rect x="200" y="40" width="30" height="80" fill="#915EFF" rx="3" />
        <rect x="250" y="20" width="30" height="100" fill="#00E5FF" rx="3" />
        <path d="M 115,70 L 165,50 L 215,40 L 265,20" stroke="#ffbd2e" strokeWidth="2.5" fill="none" />
        <circle cx="265" cy="20" r="4" fill="#ffbd2e" />
      </svg>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            My Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {projects.map((project, idx) => {
            const isFeatured = project.featured;
            
            return (
              <motion.div
                key={project.id}
                className={`col-span-1 md:col-span-${isFeatured ? '12' : '6'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Tilt 
                  className={`p-6 h-full flex flex-col justify-between group ${
                    isFeatured ? 'featured-project-card' : 'standard-project-card'
                  }`}
                >
                  
                  {/* Browser Mockup Image Container */}
                  <div className="project-screenshot-container">
                    <div className="browser-bar">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                      <span className="text-[10px] text-white/30 ml-2 font-mono">{project.title.toLowerCase().replace(/\s+/g, '-')}.local</span>
                    </div>
                    <div className="screenshot-illustration">
                      {project.screenshotMock}
                    </div>
                  </div>

                  <div>
                    {/* Top Header Badge Row */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="p-2.5 bg-white-5 rounded-2xl border border-white-10">
                        {project.icon}
                      </div>
                      
                      {isFeatured && (
                        <span className="text-[10px] tracking-widest font-black uppercase text-cyan border border-cyan-40 px-3 py-1 rounded-full bg-cyan-10">
                          Featured Project
                        </span>
                      )}
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted text-xs leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-bold text-white/70 bg-white-5 border border-white-10 px-2.5 py-0.5 rounded-full hover-border-cyan transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="w-full h-px bg-white-5 mb-5" />

                    {/* Action Links */}
                    <div className="flex gap-4">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-muted hover:text-white transition-colors decoration-transparent"
                        >
                          <GithubIcon size={16} />
                          <span>GitHub Repo</span>
                        </a>
                      )}
                      
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-cyan hover:text-white transition-colors decoration-transparent"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                </Tilt>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
