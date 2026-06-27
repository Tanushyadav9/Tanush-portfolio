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
    description: 'An ESP32-based smart currency detection hardware module with cloud synchronization. Uses camera modules, intelligent cloud OCR, and auditory outputs, enabling visually impaired users to recognize paper currencies seamlessly.',
    tech: ['ESP32', 'Firebase', 'IoT', 'Cloud Dashboard'],
    github: 'https://github.com/Tanushyadav9/NoteNetra',
    demo: 'https://github.com/Tanushyadav9/NoteNetra',
    image: notenetraImg,
    featured: true,
    icon: <Cpu size={24} className="text-[#00E5FF]" />
  },
  {
    id: 'visionpay',
    title: 'VisionPay',
    description: 'Camera-based accessible UPI payment system with voice assistance enabling visually impaired users to complete secure QR code transactions independently.',
    tech: ['React.js', 'Firebase', 'Computer Vision', 'Speech Synthesis'],
    github: 'https://github.com/Tanushyadav9/VisionPay',
    demo: 'https://github.com/Tanushyadav9/VisionPay',
    image: visionpayImg,
    featured: false,
    icon: <Eye size={24} className="text-[#915EFF]" />
  },
  {
    id: 'kindergarten',
    title: 'Kindergarten Website',
    description: 'A modern responsive website designed for a preschool with admissions boards, image gallery grid, contact form, teacher information, and mobile-friendly design.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Tanushyadav9/kindergarten',
    demo: 'https://github.com/Tanushyadav9/kindergarten',
    image: kindergartenImg,
    featured: false,
    icon: <Laptop size={24} className="text-[#00E5FF]" />
  },
  {
    id: 'hms',
    title: 'Hotel Management System',
    description: 'A complete room occupancy scheduling and booking administration desktop dashboard system for processing guest checkout statements, invoice processing, and logs.',
    tech: ['Java', 'Python', 'MySQL', 'Database UI'],
    github: 'https://github.com/Tanushyadav9/Hotel-Management-System',
    demo: 'https://github.com/Tanushyadav9/Hotel-Management-System',
    image: hotelImg,
    featured: false,
    icon: <Building size={24} className="text-[#915EFF]" />
  },
  {
    id: 'farmer_website',
    title: 'Farmer Website',
    description: 'Smart farming agriculture platform monitoring local soil parameters charts, weather forecast trackers, nutrient calculators, and crop yields recommendation lists.',
    tech: ['HTML', 'CSS', 'JavaScript', 'IoT Datastreams'],
    github: 'https://github.com/Tanushyadav9',
    demo: 'https://github.com/Tanushyadav9',
    image: farmerImg,
    featured: false,
    icon: <Sprout size={24} className="text-[#00E5FF]" />
  },
  {
    id: 'pet_website',
    title: 'Pet Website',
    description: 'Modern pet adoption listings index containing adoptable animal profiles cards, veterinarian checkups scheduling calendar, and pet parameters tracker databases.',
    tech: ['React', 'CSS', 'Firebase', 'State Store'],
    github: 'https://github.com/Tanushyadav9',
    demo: 'https://github.com/Tanushyadav9',
    image: petImg,
    featured: false,
    icon: <Heart size={24} className="text-[#915EFF]" />
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
                transition={{ duration: 0.6, delay: idx * 0.08 }}
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
                    <div className="screenshot-illustration overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
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
