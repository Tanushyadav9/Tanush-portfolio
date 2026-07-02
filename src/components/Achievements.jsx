import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Lightbulb, Rocket, Award, Star } from 'lucide-react';
import Tilt from './Tilt';

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
    let stepTime = Math.max(Math.floor(totalMiliseconds / end), 30);

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

const achievementsList = [
  {
    title: 'Founder & Builder',
    category: 'Leadership / Venture',
    icon: <Rocket size={22} className="text-[#00E5FF]" />,
    institution: 'Kenet Technologies',
    description: 'Launched a hardware-software prototyping brand focused on AI-powered systems and IoT sensors configuration. Spearheaded NoteNetra and VisionPay product layouts.'
  },
  {
    title: 'First Place Winner',
    category: 'Competition',
    icon: <Trophy size={22} className="text-[#915EFF]" />,
    institution: '3D Designing Competition',
    description: 'Engineered and rendered structural models using advanced geometry, winning first prize for optimization, aesthetic design excellence, and functionality.'
  },
  {
    title: 'Technical Innovations',
    category: 'Hackathons',
    icon: <Lightbulb size={22} className="text-[#00E5FF]" />,
    institution: 'Competitions & Innovation Challenges',
    description: 'Participated in multiple engineering hackathons and smart system layout contests, designing proof-of-concept software for accessible commerce tools.'
  },
  {
    title: 'Embedded AI Systems Developer',
    category: 'Awards',
    icon: <Award size={22} className="text-[#915EFF]" />,
    institution: 'AI & IoT Project Development',
    description: 'Developed and deployed full-stack integrations using ESP32 controllers, Firebase databases, and React analytics dashboards to resolve daily challenges.'
  }
];

export default function Achievements() {
  const stats = [
    { number: '1', suffix: 'st Place', label: 'Competition Win', icon: <Trophy size={18} className="text-[#915EFF]" /> },
    { number: '4', suffix: '+', label: 'Hackathons Joined', icon: <Lightbulb size={18} className="text-[#00E5FF]" /> },
    { number: '1', suffix: '', label: 'Tech Brand Founded', icon: <Rocket size={18} className="text-[#915EFF]" /> },
    { number: '2', suffix: '+', label: 'Awards & Honors', icon: <Award size={18} className="text-[#00E5FF]" /> }
  ];

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-4">
            Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Honors & Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Counter Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-5 border border-white/10 flex items-center gap-4 text-left hover:border-cyan/20 transition-all"
            >
              <div className="p-2 bg-white/5 rounded-xl border border-white/5 shrink-0">
                {stat.icon}
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-gradient font-heading block">
                  <CountUp to={stat.number} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold block">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Path Layout */}
        <div className="max-w-3xl mx-auto timeline-track">
          {achievementsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative pl-12 md:pl-16 mb-12 text-left"
            >
              {/* timeline node */}
              <div className="timeline-dot">
                <span className="timeline-ping" />
              </div>

              {/* Glass Card */}
              <Tilt className="p-6 md:p-8 border border-white/10 hover:border-cyan/25 transition-all w-full">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/5 rounded-xl border border-white/10 shrink-0 text-cyan">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                        {item.title}
                      </h3>
                      <h4 className="text-xs sm:text-sm font-semibold text-gradient">
                        {item.institution}
                      </h4>
                    </div>
                  </div>
                  
                  <span className="text-[9px] tracking-wider font-bold uppercase text-purple bg-purple/10 border border-purple/20 px-3 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
