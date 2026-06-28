import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Eye, Building, Laptop, Sprout, Heart } from 'lucide-react';
import Tilt from './Tilt';

import notenetraImg from '../assets/notenetra.png';
import visionpayImg from '../assets/visionpay.png';
import hotelImg from '../assets/hotel_management.png';
import kindergartenImg from '../assets/kindergarten.png';
import farmerImg from '../assets/farmer_website.png';
import petImg from '../assets/pet_website.png';

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

const projects = [
  {
    id: 'notenetra',
    title: 'NoteNetra',
    description: 'An assistive IoT currency recognizer for visually impaired users. Combines an ESP32 camera module with cloud OCR APIs to detect paper currencies, transmitting real-time audio announcements via integrated speech synthesis to improve independent financial transactions.',
    tech: ['ESP32', 'Firebase', 'IoT Architecture', 'Cloud OCR'],
    github: 'https://github.com/Tanushyadav9/NoteNetra',
    demo: 'https://github.com/Tanushyadav9/NoteNetra',
    image: notenetraImg,
    featured: true,
    icon: <Cpu size={22} className="text-[#00E5FF]" />
  },
  {
    id: 'visionpay',
    title: 'VisionPay',
    description: 'An accessible computer vision-powered UPI payment interface. Implements camera-based QR code detection and secure transaction processing with auditory prompts, helping visually impaired individuals execute digital payments independently and securely.',
    tech: ['React.js', 'Firebase', 'Computer Vision', 'Web Speech API'],
    github: 'https://github.com/Tanushyadav9/VisionPay',
    demo: 'https://github.com/Tanushyadav9/VisionPay',
    image: visionpayImg,
    featured: true,
    icon: <Eye size={22} className="text-[#915EFF]" />
  },
  {
    id: 'hms',
    title: 'Hotel Management System',
    description: 'An enterprise room scheduling and billing dashboard. Built using a Java/Python architecture and MySQL database, it optimizes check-in workflows, ledger generation, and room status logs to improve hospitality administrative throughput.',
    tech: ['Java', 'Python', 'MySQL', 'Database Normalization'],
    github: 'https://github.com/Tanushyadav9/Hotel-Management-System',
    demo: 'https://github.com/Tanushyadav9/Hotel-Management-System',
    image: hotelImg,
    featured: false,
    icon: <Building size={22} className="text-[#915EFF]" />
  },
  {
    id: 'kindergarten',
    title: 'Kindergarten Website',
    description: 'A responsive admissions portal for early childhood centers. Employs React and optimized animations to display educational curriculum grids, photo galleries, and enrollment workflows, achieving cross-device responsive performance.',
    tech: ['React', 'CSS Flexbox', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/Tanushyadav9/kindergarten',
    demo: 'https://github.com/Tanushyadav9/kindergarten',
    image: kindergartenImg,
    featured: false,
    icon: <Laptop size={22} className="text-[#00E5FF]" />
  },
  {
    id: 'farmer_website',
    title: 'Farmer Website',
    description: 'An agricultural monitoring and decision-support web system. Connects local sensor networks measuring soil moisture, humidity, and weather feeds to provide real-time fertilizer calculators and crop yield optimization lists.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'IoT Datastreams'],
    github: 'https://github.com/Tanushyadav9',
    demo: 'https://github.com/Tanushyadav9',
    image: farmerImg,
    featured: false,
    icon: <Sprout size={22} className="text-[#00E5FF]" />
  },
  {
    id: 'pet_website',
    title: 'Pet Care Website',
    description: 'A pet adoption listings index and clinical scheduling portal. Implements Firebase for real-time veterinarian checkup bookings and profile updates, featuring quick filtering options to match pets with families.',
    tech: ['React', 'CSS Grid', 'Firebase DB', 'State Stores'],
    github: 'https://github.com/Tanushyadav9',
    demo: 'https://github.com/Tanushyadav9',
    image: petImg,
    featured: false,
    icon: <Heart size={22} className="text-[#915EFF]" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project, idx) => {
            const isFeatured = project.featured;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="flex animate-card"
              >
                <Tilt 
                  className={`p-6 h-full flex flex-col justify-between group w-full ${
                    isFeatured ? 'featured-project-card' : 'standard-project-card'
                  }`}
                >
                  
                  <div>
                    {/* Browser Mockup Image Container */}
                    <div className="project-screenshot-container">
                      <div className="browser-bar">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                        <span className="text-[9px] text-white/30 ml-2 font-mono">{project.title.toLowerCase().replace(/\s+/g, '-')}.local</span>
                      </div>
                      <div className="screenshot-illustration overflow-hidden flex-1">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                        />
                      </div>
                    </div>

                    {/* Top Header Badge Row */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="p-2 bg-white-5 rounded-2xl border border-white-10 text-cyan">
                        {project.icon}
                      </div>
                      
                      {isFeatured && (
                        <span className="text-[9px] tracking-widest font-black uppercase text-cyan border border-cyan-40 px-3 py-1 rounded-full bg-cyan-10">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-gradient transition-colors text-left">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted text-xs leading-relaxed mb-6 text-left">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5 justify-start">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[9px] font-semibold text-white/70 bg-white-5 border border-white-10 px-2 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="w-full h-px bg-white-5 mb-5" />

                    {/* Action Links/Buttons */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-white-5 border border-white-10 hover-border-cyan py-2 px-3 rounded-xl transition-all hover:bg-cyan/5 decoration-transparent"
                        >
                          <GithubIcon size={14} />
                          <span>Codebase</span>
                        </a>
                      )}
                      
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-cyan bg-cyan-10/10 border border-cyan-30 hover-border-cyan py-2 px-3 rounded-xl transition-all hover:bg-cyan/10 hover:text-white decoration-transparent"
                        >
                          <ExternalLink size={14} />
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
