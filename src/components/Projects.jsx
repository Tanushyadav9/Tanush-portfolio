import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Eye, BarChart3, Building } from 'lucide-react';
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
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    icon: <Cpu size={40} className="text-[#00E5FF]" />,
    vectorBg: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-10 absolute right-0 bottom-0 pointer-events-none">
        <rect x="20" y="20" width="60" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="3" />
        <circle cx="35" cy="70" r="5" fill="currentColor" />
        <circle cx="65" cy="70" r="5" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'visionpay',
    title: 'VisionPay',
    description: 'Camera-based UPI payment app built to help visually impaired individuals run independent transactions safely. Complete with custom voice guidance, text-to-speech directions, and secure Firebase auth.',
    tech: ['React.js', 'Firebase', 'Computer Vision', 'Speech Synthesis'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    icon: <Eye size={30} className="text-[#915EFF]" />,
    vectorBg: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-10 absolute right-0 bottom-0 pointer-events-none">
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="currentColor" />
        <path d="M10 50 Q50 90 90 50" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10 50 Q50 10 90 50" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 'hms',
    title: 'Hotel Management System',
    description: 'A complete desktop administration system for tracking hospitality bookings, database room availability, records processing, customer invoices, and employee shift rotas.',
    tech: ['Java', 'Python', 'MySQL', 'Database UI'],
    github: 'https://github.com',
    featured: false,
    icon: <Building size={30} className="text-[#00E5FF]" />,
    vectorBg: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-10 absolute right-0 bottom-0 pointer-events-none">
        <rect x="25" y="15" width="50" height="70" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="37" y1="30" x2="47" y2="30" stroke="currentColor" strokeWidth="2" />
        <line x1="53" y1="30" x2="63" y2="30" stroke="currentColor" strokeWidth="2" />
        <line x1="37" y1="45" x2="47" y2="45" stroke="currentColor" strokeWidth="2" />
        <line x1="53" y1="45" x2="63" y2="45" stroke="currentColor" strokeWidth="2" />
        <line x1="37" y1="60" x2="47" y2="60" stroke="currentColor" strokeWidth="2" />
        <line x1="53" y1="60" x2="63" y2="60" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 'analyzer',
    title: 'Student Performance Analyzer',
    description: 'An intelligent analytical engine that parses student test grids, extracts score percentiles, automatically tracks grade classifications, and outputs graphic trend charts.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Numpy'],
    github: 'https://github.com',
    featured: false,
    icon: <BarChart3 size={30} className="text-[#915EFF]" />,
    vectorBg: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-10 absolute right-0 bottom-0 pointer-events-none">
        <line x1="15" y1="15" x2="15" y2="85" stroke="currentColor" strokeWidth="2" />
        <line x1="15" y1="85" x2="85" y2="85" stroke="currentColor" strokeWidth="2" />
        <rect x="25" y="55" width="12" height="30" fill="currentColor" />
        <rect x="45" y="35" width="12" height="50" fill="currentColor" />
        <rect x="65" y="20" width="12" height="65" fill="currentColor" />
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
                  className={`p-8 h-full flex flex-col justify-between group ${
                    isFeatured ? 'featured-project-card' : 'standard-project-card'
                  }`}
                >
                  {/* Backdrop subtle vector details */}
                  <div className={`text-${isFeatured ? 'cyan' : 'purple'} opacity-5`}>
                    {project.vectorBg}
                  </div>

                  <div>
                    {/* Top Header Badge Row */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white-5 rounded-2xl border border-white-10">
                        {project.icon}
                      </div>
                      
                      {isFeatured && (
                        <span className="text-[10px] tracking-widest font-black uppercase text-cyan border border-cyan-40 px-3 py-1 rounded-full bg-cyan-10">
                          Featured Project
                        </span>
                      )}
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-white font-heading mb-3 group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted text-sm leading-relaxed mb-6 max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[11px] font-bold text-white/70 bg-white-5 border border-white-10 px-3 py-1 rounded-full hover-border-cyan transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="w-full h-px bg-white-5 mb-6" />

                    {/* Action Links */}
                    <div className="flex gap-4">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-muted hover:text-white transition-colors"
                        >
                          <GithubIcon size={16} />
                          <span>GitHub</span>
                        </a>
                      )}
                      
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-cyan hover:text-white transition-colors"
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
