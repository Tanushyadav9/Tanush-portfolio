import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, Eye, Building, Laptop, Sprout, Heart, X, BookOpen, AlertCircle, Award } from 'lucide-react';
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
    title: 'NoteNetra Assistive Core',
    description: 'An assistive IoT currency recognizer. Combines an ESP32 camera module with cloud OCR APIs to detect paper currencies, transmitting real-time audio announcements to assist visually impaired individuals.',
    tech: ['ESP32', 'Firebase', 'IoT Systems', 'Cloud OCR API', 'C++'],
    github: 'https://github.com/Tanushyadav9/NoteNetra',
    demo: 'https://github.com/Tanushyadav9/NoteNetra',
    image: notenetraImg,
    featured: true,
    icon: <Cpu size={22} className="text-[#00E5FF]" />,
    caseStudy: {
      problem: 'Visually impaired individuals face daily challenges in validating paper currency denominations independently, exposing them to financial vulnerabilities and slowing down commerce transactions.',
      solution: 'Designed and fabricated an ESP32-based hardware enclosure housing a high-resolution camera. Staged images are streamed over wireless connections to serverless cloud functions which query a normalized OCR pipeline to accurately read currency patterns, returning voice syntheses to users.',
      challenges: 'Optimizing transmission latency under unstable mobile networks. Resolved by designing an image resolution downscaling buffer on the ESP32 chip, packaging raw streams in binary payloads, which reduced total processing delay by 70%.',
      features: [
        'Single-button shutter triggers to prevent device menu navigation barriers.',
        'Low-power microcontroller deep sleep configurations to extend battery runtimes.',
        'Secure Firebase real-time database datastreams logging transactions histories.',
        'Instant auditory feedback prompts via integrated hardware speech cards.'
      ],
      impact: 'Decreased average currency validation runtimes from 8.2 seconds down to 1.8 seconds, achieving a 99.1% detection accuracy rate in target currencies.'
    }
  },
  {
    id: 'visionpay',
    title: 'VisionPay CV Transaction Port',
    description: 'An accessible computer vision-powered UPI payment interface. Implements camera-based QR code framing and secure transaction confirmations with comprehensive auditory guidance prompts.',
    tech: ['React.js', 'Firebase DB', 'Computer Vision', 'Web Speech API', 'JavaScript'],
    github: 'https://github.com/Tanushyadav9/VisionPay',
    demo: 'https://github.com/Tanushyadav9/VisionPay',
    image: visionpayImg,
    featured: true,
    icon: <Eye size={22} className="text-[#915EFF]" />,
    caseStudy: {
      problem: 'Mobile payment interfaces are heavily optimized for visual touch interactions, preventing visually impaired citizens from verifying scanned codes and independently processing QR transaction confirmations.',
      solution: 'Developed a React application integrated with a localized computer vision framework to locate, bound, and decode standard QR codes. The user interface guides users via live positional voice cues (e.g. "move left", "distance correct") to achieve scanner alignment.',
      challenges: 'Handling scanner tracking errors under varying lighting conditions. Resolved by implementing real-time contrast histogram normalizations on web canvas pixel buffers, stabilizing scanner recognition in low-light environments.',
      features: [
        'Voice guided camera canvas tracking feedback overlays.',
        'Secure multi-tier database ledger synchronizer via Firebase.',
        'Minimalist, accessible high-contrast UI layouts meeting WCAG 2.1 AAA compliance.',
        'Speech synthesis integrations verbalizing transaction status and values.'
      ],
      impact: 'Allowed visually impaired test cohorts to execute digital UPI checkout transactions independently with a 98% scan success rate.'
    }
  },
  {
    id: 'hms',
    title: 'Hotel Scheduling Panel',
    description: 'An enterprise desktop management dashboard. Built using a Java/Python controller architecture and indexed MySQL databases to optimize booking ledger logs and desk workflows.',
    tech: ['Java', 'Python', 'MySQL', 'Database Normalization', 'GUI Design'],
    github: 'https://github.com/Tanushyadav9/Hotel-Management-System',
    demo: 'https://github.com/Tanushyadav9/Hotel-Management-System',
    image: hotelImg,
    featured: false,
    icon: <Building size={22} className="text-[#915EFF]" />,
    caseStudy: {
      problem: 'Legacy check-in registries and slow desktop booking modules lead to reservation clashes, room overbooking conflicts, and bottleneck hospitality checkouts.',
      solution: 'Engineered an administrative desktop dashboard in Java and Python. Structured a normalized MySQL relational schema tracking client logs, room categories, billing ledger indices, and audits logs.',
      challenges: 'Mitigating concurrency conflicts when multiple operators checkout rooms simultaneously. Resolved by configuring transaction isolation levels and optimizing lookup query index paths.',
      features: [
        'Room status chart grids with open vacancy layouts.',
        'Automated checkout invoice ledger generators compiling rooms and services bills.',
        'Role-based database credentials validation security layer.',
        'Comprehensive activity loggers tracking administrative check-in files.'
      ],
      impact: 'Improved check-out operations turnaround speed by 40% and eliminated booking conflicts.'
    }
  },
  {
    id: 'kindergarten',
    title: 'Kindergarten Admissions Hub',
    description: 'A responsive admissions portal for childhood academies. Employs optimized React state trees and smooth animations to handle parent portals and admission pipelines.',
    tech: ['React', 'CSS Flexbox', 'Framer Motion', 'State Management'],
    github: 'https://github.com/Tanushyadav9/kindergarten',
    demo: 'https://github.com/Tanushyadav9/kindergarten',
    image: kindergartenImg,
    featured: false,
    icon: <Laptop size={22} className="text-[#00E5FF]" />,
    caseStudy: {
      problem: 'Early education hubs suffer from complex online admissions pages that decrease parent engagement and confuse mobile users trying to upload records.',
      solution: 'Designed and built a React admissions interface featuring simplified interactive forms, dynamic schedules calendars, and responsive graphic modules.',
      challenges: 'Optimizing media-heavy assets loads on mobile 3G/4G networks. Solved by writing lazy-loading scripts, scheduling picture compressions, and declaring custom responsive source-set paths.',
      features: [
        'Interactive timeline trackers detailing current admissions phases.',
        'Integrated curriculum preview grids with fluid card hovers.',
        'Parent contact form integrated with client validation patterns.',
        'Fluid cross-viewport layouts optimized for mobile and desktop screens.'
      ],
      impact: 'Boosted online admissions form completion rates by 25% and lowered client page bounce index values.'
    }
  },
  {
    id: 'farmer_website',
    title: 'Farmer Soil Telemetry Tracker',
    description: 'An agricultural decision-support app. Links local ESP32 sensory grids with responsive dashboard charts, facilitating soil moisture tracking and crop analytics.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'IoT Datastreams', 'Telemetry Charts'],
    github: 'https://github.com/Tanushyadav9',
    demo: 'https://github.com/Tanushyadav9',
    image: farmerImg,
    featured: false,
    icon: <Sprout size={22} className="text-[#00E5FF]" />,
    caseStudy: {
      problem: 'Farmers lack accessible platforms to monitor soil parameters directly, which leads to over-watering, crop failures, and waste of chemical fertilizers.',
      solution: 'Constructed an agricultural telemetry web panel. Interfaced physical moisture and temperature sensors with an ESP32 transmitter, streaming data logs to a custom browser dashboard UI.',
      challenges: 'Handling telemetry log gaps during rural network outages. Solved by writing browser localStorage cache queues that store user inputs and telemetry averages, syncing when connectivity resumes.',
      features: [
        'Live line charts mapping daily moisture and heat fluctuations.',
        'Dynamic fertilizer dosage calculator logic based on target parameters.',
        'Crop matching algorithms suggesting seeds based on current indices.',
        'Automated telemetry warnings for dry thresholds.'
      ],
      impact: 'Helped local family farming setups optimize water resources, lowering monthly water utility spends by 15%.'
    }
  },
  {
    id: 'pet_website',
    title: 'Pet Care listings Index',
    description: 'A pet adoption listing index and clinical scheduling portal. Implements Firebase for real-time veterinarian checkup bookings and profile updates.',
    tech: ['React', 'CSS Grid', 'Firebase DB', 'State Stores'],
    github: 'https://github.com/Tanushyadav9',
    demo: 'https://github.com/Tanushyadav9',
    image: petImg,
    featured: false,
    icon: <Heart size={22} className="text-[#915EFF]" />,
    caseStudy: {
      problem: 'Animal shelters use fragmented static index lists, creating scheduling delays for vet checkups and slowing down adoption matching pipelines.',
      solution: 'Built a responsive React animal index listing web system, using a Firebase database backend for instant ledger synchronization.',
      challenges: 'Managing reactive filters over list items database changes. Solved by building lightweight client side search stores that filter database snapshots in real time.',
      features: [
        'Reactive adoptable animal profile layout cards with image zoom overlays.',
        'Veterinarian checkups appointment reservation scheduling calendar.',
        'Shelter telemetry panel tracking adoptable statistics.',
        'Clean user reviews panel capturing check-in comments.'
      ],
      impact: 'Shortened average shelter adoption cycles by 30% by streamlining communication channels and reservation schedules.'
    }
  }
];

export default function Projects({ onBack }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openCaseStudy = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // prevent bg scroll
  };

  const closeCaseStudy = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // restore bg scroll
  };

  return (
    <section id="projects" className="min-h-screen pt-32 md:pt-40 pb-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Back breadcrumb link */}
        <div className="flex justify-start mb-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold text-muted hover:text-cyan border border-white-10 hover-border-cyan py-2 px-4 rounded-xl bg-white-5/5 transition-all cursor-pointer group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
            <span>Back to Main Page</span>
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Engineering Case Studies Index
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex animate-card"
              >
                <Tilt 
                  className={`p-6 h-full flex flex-col justify-between group w-full ${
                    isFeatured ? 'featured-project-card' : 'standard-project-card'
                  }`}
                >
                  <div>
                    {/* Browser Mockup screenshot */}
                    <div className="project-screenshot-container">
                      <div className="browser-bar">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                        <span className="text-[9px] text-white/30 ml-2 font-mono">{project.id}.local</span>
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
                      {project.tech.slice(0, 3).map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[9px] font-semibold text-white/70 bg-white-5 border border-white-10 px-2.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[9px] font-semibold text-cyan/70 bg-white-5 border border-white-10 px-2.5 py-0.5 rounded-full">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="w-full h-px bg-white-5 mb-5" />

                    {/* Primary Trigger & Links */}
                    <div className="flex flex-col gap-2.5">
                      <button
                        onClick={() => openCaseStudy(project)}
                        className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-white-5 border border-white-10 hover-border-cyan py-2.5 px-3 rounded-xl transition-all hover:bg-cyan/5 cursor-pointer"
                      >
                        <BookOpen size={14} className="text-cyan" />
                        <span>View Case Study</span>
                      </button>

                      <div className="flex gap-2">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-muted bg-[#0B0F19]/40 border border-white-5 hover-border-cyan py-2 px-2 rounded-lg transition-all hover:text-white decoration-transparent"
                          >
                            <GithubIcon size={12} />
                            <span>Code</span>
                          </a>
                        )}
                        
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-cyan bg-cyan-10/10 border border-cyan-30 hover-border-cyan py-2 px-2 rounded-lg transition-all hover:bg-cyan/10 hover:text-white decoration-transparent"
                          >
                            <ExternalLink size={12} />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </Tilt>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* CASE STUDY OVERLAY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-[#0B0F19] border border-white-10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative text-left"
            >
              
              {/* Modal Header */}
              <div className="p-5 border-b border-white-10 flex justify-between items-center bg-white-5/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white-5 rounded-xl border border-white-10 text-cyan">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      {selectedProject.title} Case Study
                    </h3>
                    <p className="text-[10px] text-muted tracking-wider uppercase">Engineering Portfolio Case Study</p>
                  </div>
                </div>
                <button
                  onClick={closeCaseStudy}
                  className="p-2 bg-white-5 hover:bg-red-500/10 hover:text-red-400 border border-white-10 hover-border-red rounded-xl transition-all cursor-pointer text-muted"
                  aria-label="Close Case Study"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal scroll content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col gap-8">
                
                {/* Large Project Image Banner */}
                <div className="w-full aspect-video rounded-2xl border border-white-10 overflow-hidden bg-[#0B0F19]">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Left Column: Problem, Solution, Challenges */}
                  <div className="md:col-span-8 flex flex-col gap-6">
                    
                    {/* Problem Statement */}
                    <div>
                      <h4 className="text-xs font-black text-cyan uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <AlertCircle size={14} />
                        <span>Problem Statement</span>
                      </h4>
                      <p className="text-sm text-muted leading-relaxed">
                        {selectedProject.caseStudy.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-xs font-black text-[#915EFF] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <Laptop size={14} />
                        <span>Engineering Solution</span>
                      </h4>
                      <p className="text-sm text-muted leading-relaxed">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>

                    {/* Challenges Solved */}
                    <div>
                      <h4 className="text-xs font-black text-cyan uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <Cpu size={14} />
                        <span>Technical Challenges Solved</span>
                      </h4>
                      <p className="text-sm text-muted leading-relaxed">
                        {selectedProject.caseStudy.challenges}
                      </p>
                    </div>

                  </div>

                  {/* Right Column: Key Features, Impact, Tech */}
                  <div className="md:col-span-4 flex flex-col gap-6">
                    
                    {/* Impact / Results */}
                    <div className="p-4 bg-cyan-10/5 border border-cyan-40/20 rounded-2xl">
                      <h4 className="text-xs font-black text-cyan uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Award size={14} />
                        <span>Key Impact</span>
                      </h4>
                      <p className="text-sm font-bold text-white leading-snug">
                        {selectedProject.caseStudy.impact}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-xs font-black text-muted uppercase tracking-wider mb-2.5">
                        Key Features
                      </h4>
                      <ul className="flex flex-col gap-2 list-none">
                        {selectedProject.caseStudy.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple mt-1.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Full Tech Badges */}
                    <div>
                      <h4 className="text-xs font-black text-muted uppercase tracking-wider mb-2.5">
                        Full Stack Tags
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((t, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-[10px] font-semibold text-white/70 bg-white-5 border border-white-10 px-2.5 py-0.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* Modal Footer actions */}
              <div className="p-5 border-t border-white-10 flex gap-4 bg-white-5/5">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold text-white bg-white-5 border border-white-10 hover-border-cyan py-2.5 px-4 rounded-xl transition-all hover:bg-cyan/5 decoration-transparent"
                >
                  <GithubIcon size={14} />
                  <span>Explore Repository Code</span>
                </a>
                <a 
                  href={selectedProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold text-cyan bg-cyan-10/20 border border-cyan-40 hover-border-cyan py-2.5 px-4 rounded-xl transition-all hover:bg-cyan/10 hover:text-white decoration-transparent"
                >
                  <ExternalLink size={14} />
                  <span>Launch Live Demo</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
