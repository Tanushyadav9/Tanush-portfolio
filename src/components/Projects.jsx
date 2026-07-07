import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Eye, Building, Laptop, Sprout, Heart, X, BookOpen, AlertCircle, Award } from 'lucide-react';
import Tilt from './Tilt';

import notenetraImg from '../assets/notenetra.png';
import visionpayImg from '../assets/visionpay.png';
import hotelImg from '../assets/hotel_management.png';
import kindergartenImg from '../assets/kindergarten.png';
import farmerImg from '../assets/farmer_website.png';
import petImg from '../assets/pet_website.png';

const GithubIcon = ({ size = 14, ...props }) => (
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
    icon: <Cpu size={20} className="text-[#00E5FF]" />,
    caseStudy: {
      problem: 'Visually impaired individuals face daily challenges in validating paper currency denominations independently, exposing them to financial vulnerabilities and slowing down commerce transactions.',
      solution: 'Designed and fabricated an ESP32-based hardware enclosure housing a high-resolution camera. Staged images are streamed over wireless connections to serverless cloud functions which query a normalized OCR pipeline to accurately read currency patterns, returning voice syntheses to users.',
      contribution: 'Compiled ESP32 hardware firmware (C++), built Wi-Fi telemetry queues, wrote image scaling compression modules, and set up the serverless Cloud Vision API endpoints.',
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
    icon: <Eye size={20} className="text-[#915EFF]" />,
    caseStudy: {
      problem: 'Mobile payment interfaces are heavily optimized for visual touch interactions, preventing visually impaired citizens from verifying scanned codes and independently processing QR transaction confirmations.',
      solution: 'Developed a React application integrated with a localized computer vision framework to locate, bound, and decode standard QR codes. The user interface guides users via live positional voice cues (e.g. "move left", "distance correct") to achieve scanner alignment.',
      contribution: 'Designed the computer vision canvas scan handler hooks, integrated the browser Web Speech API synthesizers, and styled the high-contrast accessible WCAG dashboard.',
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
    icon: <Building size={20} className="text-[#915EFF]" />,
    caseStudy: {
      problem: 'Legacy check-in registries and slow desktop booking modules lead to reservation clashes, room overbooking conflicts, and bottleneck hospitality checkouts.',
      solution: 'Engineered an administrative desktop dashboard in Java and Python. Structured a normalized MySQL relational schema tracking client logs, room categories, billing ledger indices, and audits logs.',
      contribution: 'Engineered relational MySQL index parameters optimization, built concurrent checkout state models, and scripted database connection adapters.',
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
    icon: <Laptop size={20} className="text-[#00E5FF]" />,
    caseStudy: {
      problem: 'Early education hubs suffer from complex online admissions pages that decrease parent engagement and confuse mobile users trying to upload records.',
      solution: 'Designed and built a React admissions interface featuring simplified interactive forms, dynamic schedules calendars, and responsive graphic modules.',
      contribution: 'Created parent record upload check portals, optimized page assets lazy routing schemes, and programmed Framer Motion interactive UI shifts.',
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
    icon: <Sprout size={20} className="text-[#00E5FF]" />,
    caseStudy: {
      problem: 'Farmers lack accessible platforms to monitor soil parameters directly, which leads to over-watering, crop failures, and waste of chemical fertilizers.',
      solution: 'Constructed an agricultural telemetry web panel. Interfaced physical moisture and temperature sensors with an ESP32 transmitter, streaming data logs to a custom browser dashboard UI.',
      contribution: 'Designed visual telemetry data charts UI, configured local storage caching queues for offline stability, and wired raw sensors parsing.',
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
    icon: <Heart size={20} className="text-[#915EFF]" />,
    caseStudy: {
      problem: 'Animal shelters use fragmented static index lists, creating scheduling delays for vet checkups and slowing down adoption matching pipelines.',
      solution: 'Built a responsive React animal index listing web system, using a Firebase database backend for instant ledger synchronization.',
      contribution: 'Wrote dynamic text index filters, integrated the Firebase database collections updates, and formatted checkup booking scheduling logs.',
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

  useEffect(() => {
    if (onBack) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [onBack]);

  return (
    <section id="projects" className="min-h-screen pt-32 pb-32 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Back link */}
        {onBack && (
          <div className="flex justify-start mb-10">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-bold text-muted hover:text-cyan border border-white/10 hover-border-cyan py-2 px-4 rounded-xl bg-white/5 transition-all cursor-pointer group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
              <span>Back to Main Page</span>
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-4">
            Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Engineering Projects &amp; Case Studies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
          <p className="text-white/45 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
            Real-world projects built with hardware, AI, and modern web technologies — each with a documented case study.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => {
            const isFeatured = project.featured;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex"
              >
              <Tilt
                  className={`glass-card p-6 h-full flex flex-col justify-between group w-full transition-all duration-300 ${
                    isFeatured
                      ? 'border border-[#915EFF]/35 bg-gradient-to-b from-[#915EFF]/6 to-transparent hover:border-[#915EFF]/55 hover:shadow-[0_0_32px_rgba(145,94,255,0.15)]'
                      : 'border border-white/10 bg-white/[0.015] hover:border-cyan/30'
                  }`}
                >
                  <div className="w-full">
                    {/* Mockup visual wrap */}
                    <div className="browser-mockup w-full aspect-[16/10] mb-6 overflow-hidden relative group">
                      <div className="browser-header">
                        <span className="dot dot-close" />
                        <span className="dot dot-minimize" />
                        <span className="dot dot-expand" />
                        <div className="browser-address">{project.id}.dev</div>
                      </div>
                      <div className="w-full h-[calc(100%-36px)] overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                    </div>

                    {/* Badge Row */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="p-2 bg-white/5 rounded-xl border border-white/10 text-cyan">
                        {project.icon}
                      </div>
                      {isFeatured && (
                        <span className="text-[9px] tracking-widest font-bold uppercase text-cyan border border-cyan/40 px-3 py-0.5 rounded-full bg-cyan/10">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Header */}
                    <h3 className="text-lg font-bold text-white font-heading mb-2 text-left group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/60 text-xs leading-relaxed mb-4 text-left font-light line-clamp-3">
                      {project.description}
                    </p>

                    {/* Problem Statement snippet */}
                    <div className="text-left mb-2">
                      <span className="text-[9px] font-bold text-cyan uppercase tracking-wider block mb-1">Problem</span>
                      <p className="text-[10px] text-white/55 font-light leading-normal line-clamp-2">
                        {project.caseStudy.problem}
                      </p>
                    </div>

                    {/* Solution snippet */}
                    <div className="text-left mb-2">
                      <span className="text-[9px] font-bold text-[#915EFF] uppercase tracking-wider block mb-1">Solution</span>
                      <p className="text-[10px] text-white/55 font-light leading-normal line-clamp-2">
                        {project.caseStudy.solution}
                      </p>
                    </div>

                    {/* Contribution snippet */}
                    <div className="text-left mb-5">
                      <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider block mb-1">My Contribution</span>
                      <p className="text-[10px] text-white/70 font-semibold leading-normal line-clamp-2">
                        {project.caseStudy.contribution}
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2.5 mb-4 justify-start">
                      {project.tech.slice(0, 3).map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[9px] font-semibold text-white/70 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[9px] font-semibold text-cyan/70 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-md">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="w-full h-px bg-white/5 mb-4" />

                    {/* Action row */}
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 text-[10px] font-bold text-white/60 hover:text-white bg-white/5 border border-white/8 hover:border-white/20 py-2 rounded-lg transition-all"
                        onClick={e => e.stopPropagation()}
                      >
                        <GithubIcon size={11} />
                        <span>GitHub</span>
                      </a>
                      <button
                        onClick={() => openCaseStudy(project)}
                        className="flex-1 flex items-center justify-center gap-1.5 text-[10px] font-bold text-white bg-gradient-to-r from-purple/40 to-cyan/40 border border-white/10 hover:border-cyan/30 py-2 rounded-lg transition-all hover:brightness-110 cursor-pointer"
                      >
                        <BookOpen size={11} className="text-cyan" />
                        <span>Case Study</span>
                      </button>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-[#0B0F19] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative text-left"
            >
              
              {/* Modal Header */}
              <div className="p-5 border-b border-white/10 flex justify-between items-center bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10 text-cyan">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      {selectedProject.title} Case Study
                    </h3>
                    <p className="text-[10px] text-white/40 tracking-wider uppercase font-semibold">Engineering Portfolio Case Study</p>
                  </div>
                </div>
                <button
                  onClick={closeCaseStudy}
                  className="p-2 bg-white/5 hover:bg-red-500/10 hover:text-red-400 border border-white/10 hover-border-red rounded-xl transition-all cursor-pointer text-white/55"
                  aria-label="Close Case Study"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal scroll content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col gap-8">
                
                {/* Large Project Image Banner */}
                <div className="w-full aspect-video rounded-2xl border border-white/10 overflow-hidden bg-[#0B0F19]">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Left Column */}
                  <div className="md:col-span-8 flex flex-col gap-6">
                    
                    {/* Problem Statement */}
                    <div>
                      <h4 className="text-xs font-bold text-cyan uppercase tracking-wider mb-2 flex items-center gap-2 font-heading">
                        <AlertCircle size={14} />
                        <span>Problem Statement</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                        {selectedProject.caseStudy.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-xs font-bold text-[#915EFF] uppercase tracking-wider mb-2 flex items-center gap-2 font-heading">
                        <Laptop size={14} />
                        <span>Engineering Solution</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>

                    {/* Contribution */}
                    <div>
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2 font-heading">
                        <Award size={14} />
                        <span>My Contribution</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                        {selectedProject.caseStudy.contribution}
                      </p>
                    </div>

                    {/* Challenges Solved */}
                    <div>
                      <h4 className="text-xs font-bold text-cyan uppercase tracking-wider mb-2 flex items-center gap-2 font-heading">
                        <Cpu size={14} />
                        <span>Technical Challenges Solved</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                        {selectedProject.caseStudy.challenges}
                      </p>
                    </div>

                  </div>

                  {/* Right Column */}
                  <div className="md:col-span-4 flex flex-col gap-6">
                    
                    {/* Impact / Results */}
                    <div className="p-4 bg-cyan/5 border border-cyan/15 rounded-2xl">
                      <h4 className="text-xs font-bold text-cyan uppercase tracking-wider mb-2 flex items-center gap-1.5 font-heading">
                        <Award size={14} />
                        <span>Key Impact</span>
                      </h4>
                      <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {selectedProject.caseStudy.impact}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2 block font-heading">
                        Key Features
                      </h4>
                      <ul className="flex flex-col gap-2 list-none">
                        {selectedProject.caseStudy.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-xs text-white/60 leading-relaxed flex items-start gap-2 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple mt-1.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Full Tech Badges */}
                    <div>
                      <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2 block font-heading">
                        Full Stack Tags
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((t, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-[10px] font-semibold text-white/70 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
