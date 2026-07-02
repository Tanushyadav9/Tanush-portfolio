import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Server, Brain, Cpu, Settings } from 'lucide-react';
import Tilt from './Tilt';

// SVG Brand Icons
const HtmlIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2L4.8 20L12 22L19.2 20L21 2H3ZM17.2 9.5H9.6L9.8 11.7H17L16.4 17.5L12 18.7L7.6 17.5L7.3 14.5H9.5L9.6 15.7L12 16.3L14.4 15.7L14.7 12.8H7.1L6.6 7.3H17.4L17.2 9.5Z" fill="#E34F26"/>
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2L4.8 20L12 22L19.2 20L21 2H3ZM17.4 7.3L17.2 9.5H9.6L9.8 11.7H17L16.4 17.5L12 18.7L7.6 17.5L7.3 14.5H9.5L9.6 15.7L12 16.3L14.4 15.7L14.7 12.8H7.1L6.6 7.3H17.4Z" fill="#1572B6"/>
  </svg>
);

const JsIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" x="2" y="2" rx="3" fill="#F7DF1E"/>
    <path d="M18.8 14.5c-.3-.6-.8-1-1.6-1.3-.5-.2-1-.3-1.4-.2-.5 0-.8.2-.8.6 0 .4.3.6.8.8.8.3 1.5.6 2 1 .5.4.8 1 .8 1.7 0 .9-.4 1.6-1.2 2-1 .5-2.2.5-3.2 0-.8-.5-1.3-1.3-1.5-2.2l1.7-.8c.2.6.5 1.1 1 1.3.5.3 1.1.2 1.5-.1.3-.2.5-.5.5-.9 0-.4-.2-.6-.8-.8-.8-.3-1.5-.6-2-1-.5-.4-.8-1-.8-1.7 0-.8.4-1.5 1.1-1.9.9-.4 2-.4 2.9 0 .7.4 1.2 1.1 1.4 1.9l-1.7 1z" fill="#000000"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.09c-2.67 0-4.01 1.34-4.01 4.01 0 2.67 1.34 4.01 4.01 4.01 2.67 0 4.01-1.34 4.01-4.01 0-2.67-1.34-4.01-4.01-4.01zm-6.68 5.35c-2.67 0-4 1.33-4 4 0 2.67 1.33 4 4 4 2.67 0 4-1.33 4-4 0-2.67-1.33-4-4-4z" fill="#38BDF8"/>
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89 15.75L12 2.2L13.88 5.48L3.89 15.75ZM20.11 15.75L17.78 6.78L12.56 12L20.11 15.75ZM12.56 12L14.44 8.78L20.11 15.75L12.56 12ZM12 22L20.11 15.75L3.89 15.75L12 22Z" fill="#FFCA28"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.25 5.5C11.66 5.5 12 5.84 12 6.25V9.75H14.75C15.16 9.75 15.5 10.09 15.5 10.5C15.5 10.91 15.16 11.25 14.75 11.25H11.25C10.84 11.25 10.5 10.91 10.5 10.5V7H7.25C6.84 7 6.5 6.66 6.5 6.25C6.5 5.84 6.84 5.5 7.25 5.5H11.25ZM12.75 18.5C12.34 18.5 12 18.16 12 17.75V14.25H9.25C8.84 14.25 8.5 13.91 8.5 13.5C8.5 13.09 8.84 12.75 9.25 12.75H12.75C13.16 12.75 13.5 13.09 13.5 13.5V17H16.75C17.16 17 17.5 17.34 17.5 17.75C17.5 18.16 17.16 18.5 16.75 18.5H12.75Z" fill="#3776AB"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm-1.5 13H9v-4.5h1.5V15zm4.5 0h-3v-4.5h1.5V13H15v2z" fill="#339933"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.6 10.4L13.6 3.4C12.8 2.6 11.6 2.6 10.8 3.4L3.4 10.8C2.6 11.6 2.6 12.8 3.4 13.6L10.4 20.6C11.2 21.4 12.4 21.4 13.2 20.6L20.6 13.2C21.4 12.4 21.4 11.2 20.6 10.4ZM11.5 17V14.8C10.8 14.7 10.2 14.3 9.7 13.8C9.2 13.2 9 12.5 9 11.8C9 10.8 9.4 9.9 10 9.2L11 10.2C10.7 10.6 10.5 11.1 10.5 11.7C10.5 12.3 11 12.8 11.5 12.9V9.5C11.1 9.2 10.8 8.8 10.8 8.3C10.8 7.6 11.4 7 12.1 7C12.8 7 13.4 7.6 13.4 8.3C13.4 8.8 13.1 9.2 12.7 9.5V14.5C13.1 14.8 13.4 15.2 13.4 15.7C13.4 16.4 12.8 17 12.1 17C11.8 17 11.5 17 11.5 17Z" fill="#F05032"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);

const VscodeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
  </svg>
);

const TensorflowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4 22L4.2 17.2V7.7L12.4 3l8.2 4.7v9.5L12.4 22zm-6.6-5.9l6.6 3.8v-7.6L5.8 8.5v7.6zm8.2 3.8l6.6-3.8V8.5l-6.6 3.8v7.8z"/>
  </svg>
);

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 size={18} className="text-cyan" />,
    skills: [
      { name: 'React', level: 95, icon: <ReactIcon />, desc: 'Component hierarchy, lifecycle, states, and responsive routing.' },
      { name: 'JavaScript', level: 95, icon: <JsIcon />, desc: 'Asynchronous event loops, callback hooks, and DOM bindings.' },
      { name: 'HTML', level: 95, icon: <HtmlIcon />, desc: 'Semantic tag arrangements and accessible page structures.' },
      { name: 'CSS', level: 90, icon: <CssIcon />, desc: 'Flexboxes, custom grids coordinates, transitions, and filters.' },
      { name: 'Tailwind CSS', level: 90, icon: <TailwindIcon />, desc: 'Accelerated styling workflows and responsive viewports.' }
    ]
  },
  {
    title: 'Backend',
    icon: <Server size={18} className="text-purple" />,
    skills: [
      { name: 'Firebase', level: 85, icon: <FirebaseIcon />, desc: 'Serverless architecture, document databases, and authentication hooks.' },
      { name: 'Python', level: 90, icon: <PythonIcon />, desc: 'Scripting, backend route handlers, data telemetry normalizations.' },
      { name: 'Node.js', level: 80, icon: <NodeIcon />, desc: 'REST standard setups, package modules, server middleware.' }
    ]
  },
  {
    title: 'AI & ML',
    icon: <Brain size={18} className="text-cyan" />,
    skills: [
      { name: 'Machine Learning', level: 90, icon: <Brain size={14} className="text-purple" />, desc: 'Regression, classifying algorithms, and feature matrix metrics.' },
      { name: 'Computer Vision', level: 85, icon: <Cpu size={14} className="text-cyan" />, desc: 'Optical recognitions, canvas frames processing, bounding models.' },
      { name: 'OCR', level: 85, icon: <Cpu size={14} className="text-purple" />, desc: 'Tesseract/Cloud API translations, character indexing mappings.' },
      { name: 'TensorFlow', level: 80, icon: <TensorflowIcon />, desc: 'Neural network training coordinates, activation modeling.' }
    ]
  },
  {
    title: 'Embedded',
    icon: <Cpu size={18} className="text-purple" />,
    skills: [
      { name: 'ESP32', level: 85, icon: <Cpu size={14} className="text-cyan" />, desc: 'C++ microcontrollers layout, Wi-Fi deep sleep management.' },
      { name: 'Arduino', level: 85, icon: <Cpu size={14} className="text-purple" />, desc: 'Analog sensory pins calibrations and electrical layout controls.' },
      { name: 'IoT', level: 85, icon: <Cpu size={14} className="text-cyan" />, desc: 'Gateway telemetry updates, MQTT buffers, database feeds sync.' }
    ]
  },
  {
    title: 'Tools',
    icon: <Settings size={18} className="text-cyan" />,
    skills: [
      { name: 'Git', level: 90, icon: <GitIcon />, desc: 'Branch logs tracking, conflict resolutions, dry commit logs.' },
      { name: 'GitHub', level: 90, icon: <GithubIcon />, desc: 'Cloud storage hosting, team pull reviews, automated releases.' },
      { name: 'VS Code', level: 90, icon: <VscodeIcon />, desc: 'IDE workspaces setups, formats linters configurations.' },
      { name: 'Vercel', level: 85, icon: <VercelIcon />, desc: 'Static builds deployment, telemetry serverless endpoints routing.' }
    ]
  }
];

function SkillRow({ skill }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="flex items-center gap-2.5 py-2 border-b border-white/5 last:border-0">
      <div className="p-1 bg-white/5 rounded-md border border-white/10 shrink-0 text-cyan">
        {skill.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[11px] font-semibold text-white/90 truncate">{skill.name}</span>
          <span className="text-[9px] font-bold text-cyan ml-2 shrink-0">{skill.level}%</span>
        </div>
        <div className="progress-bar-bg" style={{ marginTop: 0 }}>
          <motion.div
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
}

function CategoryColumn({ category, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="glass-card p-5 border border-white/10 hover:border-cyan/20 transition-all flex flex-col"
    >
      {/* Column header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
        <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 text-cyan shrink-0">
          {category.icon}
        </div>
        <h3 className="text-xs font-black text-white font-heading tracking-wide uppercase">
          {category.title}
        </h3>
      </div>

      {/* Skill rows */}
      <div className="flex flex-col">
        {category.skills.map((skill, idx) => (
          <SkillRow key={idx} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  // Split into two rows: [Frontend, Backend, AI & ML] and [Embedded, Tools]
  const row1 = skillCategories.slice(0, 3);
  const row2 = skillCategories.slice(3);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-[40%] left-[-15%] w-[320px] h-[320px] bg-cyan/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-4">
            Specializations
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Row 1: Frontend | Backend | AI & ML */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {row1.map((cat, idx) => (
            <CategoryColumn key={cat.title} category={cat} delay={idx * 0.08} />
          ))}
        </div>

        {/* Row 2: Embedded | Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {row2.map((cat, idx) => (
            <CategoryColumn key={cat.title} category={cat} delay={idx * 0.08} />
          ))}
        </div>

      </div>
    </section>
  );
}
