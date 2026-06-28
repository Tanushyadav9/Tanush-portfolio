import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Server, Database, Cloud, Cpu, Settings, Brain } from 'lucide-react';
import Tilt from './Tilt';

// Custom SVG Icons
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.25 5.5C11.66 5.5 12 5.84 12 6.25V9.75H14.75C15.16 9.75 15.5 10.09 15.5 10.5C15.5 10.91 15.16 11.25 14.75 11.25H11.25C10.84 11.25 10.5 10.91 10.5 10.5V7H7.25C6.84 7 6.5 6.66 6.5 6.25C6.5 5.84 6.84 5.5 7.25 5.5H11.25ZM12.75 18.5C12.34 18.5 12 18.16 12 17.75V14.25H9.25C8.84 14.25 8.5 13.91 8.5 13.5C8.5 13.09 8.84 12.75 9.25 12.75H12.75C13.16 12.75 13.5 13.09 13.5 13.5V17H16.75C17.16 17 17.5 17.34 17.5 17.75C17.5 18.16 17.16 18.5 16.75 18.5H12.75Z" fill="#3776AB"/>
  </svg>
);

const CppIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 11h-2v2h-1v-2H10.5v-1h2v-2h1v2h2v1zm4-2h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z" fill="#00599C"/>
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

const FastapiIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.25 15.5l-3.5-3.5h2.5V9.75h-2.5l3.5-3.5V10h-2.5v4.25h2.5v3.25z" fill="#009688"/>
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89 15.75L12 2.2L13.88 5.48L3.89 15.75ZM20.11 15.75L17.78 6.78L12.56 12L20.11 15.75ZM12.56 12L14.44 8.78L20.11 15.75L12.56 12ZM12 22L20.11 15.75L3.89 15.75L12 22Z" fill="#FFCA28"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.6 10.4L13.6 3.4C12.8 2.6 11.6 2.6 10.8 3.4L3.4 10.8C2.6 11.6 2.6 12.8 3.4 13.6L10.4 20.6C11.2 21.4 12.4 21.4 13.2 20.6L20.6 13.2C21.4 12.4 21.4 11.2 20.6 10.4ZM11.5 17V14.8C10.8 14.7 10.2 14.3 9.7 13.8C9.2 13.2 9 12.5 9 11.8C9 10.8 9.4 9.9 10 9.2L11 10.2C10.7 10.6 10.5 11.1 10.5 11.7C10.5 12.3 11 12.8 11.5 12.9V9.5C11.1 9.2 10.8 8.8 10.8 8.3C10.8 7.6 11.4 7 12.1 7C12.8 7 13.4 7.6 13.4 8.3C13.4 8.8 13.1 9.2 12.7 9.5V14.5C13.1 14.8 13.4 15.2 13.4 15.7C13.4 16.4 12.8 17 12.1 17C11.8 17 11.5 17 11.5 17Z" fill="#F05032"/>
  </svg>
);

const getTechIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'python': return <PythonIcon />;
    case 'c++': return <CppIcon />;
    case 'javascript': return <JsIcon />;
    case 'react': return <ReactIcon />;
    case 'html5': return <HtmlIcon />;
    case 'css3': return <CssIcon />;
    case 'fastapi': return <FastapiIcon />;
    case 'firebase': return <FirebaseIcon />;
    case 'git': return <GitIcon />;
    default: return <Settings size={18} className="text-cyan" />;
  }
};

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code size={20} className="text-purple" />,
    skills: [
      { name: 'Python', desc: 'Writing clean backend scripts, algorithmic tasks, and data normalization loops.' },
      { name: 'C++', desc: 'Writing low-level microcontroller configurations and real-time firmware codes.' },
      { name: 'JavaScript', desc: 'Managing dynamic client interactions and responsive event loop updates.' }
    ]
  },
  {
    title: 'Frontend',
    icon: <Monitor size={20} className="text-cyan" />,
    skills: [
      { name: 'React', desc: 'Building complex single page applications (SPA) using component hierarchies.' },
      { name: 'HTML5', desc: 'Organizing semantic page tags optimized for browser SEO index.' },
      { name: 'CSS3', desc: 'Coding responsive grid coordinates, styles layouts, and flex models.' }
    ]
  },
  {
    title: 'Backend',
    icon: <Server size={20} className="text-purple" />,
    skills: [
      { name: 'FastAPI', desc: 'Designing secure routing logic, schemas, and Swagger API documentations.' },
      { name: 'Firebase', desc: 'Managing remote user auth configurations and backend execution modules.' },
      { name: 'REST APIs', desc: 'Structuring REST standard request protocols and JSON responses.' }
    ]
  },
  {
    title: 'Database',
    icon: <Database size={20} className="text-cyan" />,
    skills: [
      { name: 'Firebase', desc: 'Hosting flexible, real-time document stores and database synchronization fields.' }
    ]
  },
  {
    title: 'Cloud',
    icon: <Cloud size={20} className="text-purple" />,
    skills: [
      { name: 'Cloud Technologies', desc: 'Hosting serverless APIs, sensor telemetry feeds, and static assets pipelines.' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: <Brain size={20} className="text-cyan" />,
    skills: [
      { name: 'Machine Learning', desc: 'Constructing predictive model scripts, feature matrices, and dataset evaluations.' },
      { name: 'Computer Vision', desc: 'Interpreting pixel feeds, drawing bounding boxes, and OCR processing.' }
    ]
  },
  {
    title: 'IoT',
    icon: <Cpu size={20} className="text-purple" />,
    skills: [
      { name: 'ESP32', desc: 'Programming 32-bit controllers, managing Wi-Fi adapters and sleep states.' },
      { name: 'Arduino', desc: 'Interfacing core microcontroller boards and sensory input modules.' },
      { name: 'Embedded Systems', desc: 'Debugging electrical hardware components, routing data busses, and sensors.' }
    ]
  },
  {
    title: 'Tools',
    icon: <Settings size={20} className="text-cyan" />,
    skills: [
      { name: 'Git', desc: 'Managing files versions, branching, merging code, and tracking changes.' },
      { name: 'GitHub', desc: 'Hosting code repositories, collaborative reviews, and release versioning.' },
      { name: 'VS Code', desc: 'Configuring linter rules, workspaces, and code formatting extensions.' },
      { name: 'Arduino IDE', desc: 'Compiling firmware, serial logging output, and uploading code to target boards.' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-[20px]">
            Abilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Flex Column */}
        <div className="flex flex-col gap-12">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="text-left">
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6 border-b border-white-5 pb-3">
                <div className="p-2 bg-white-5 rounded-xl border border-white-10 text-cyan">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  {category.title}
                </h3>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[40px]">
                {category.skills.map((skill, skillIdx) => {
                  const icon = getTechIcon(skill.name);
                  return (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                      className="flex"
                    >
                      <Tilt className="py-[36px] px-[32px] flex flex-col justify-between w-full hover-border-cyan">
                        <div>
                          {/* Skill Icon & Name */}
                          <div className="flex items-center gap-3.5 mb-3">
                            <div className="p-2 bg-white-5 rounded-lg border border-white-10 shrink-0">
                              {icon}
                            </div>
                            <span className="text-sm font-bold text-white font-heading">
                              {skill.name}
                            </span>
                          </div>
                          
                          {/* Description */}
                          <p className="text-[11px] text-muted leading-relaxed">
                            {skill.desc}
                          </p>
                        </div>
                        
                        <div className="w-full h-px bg-white-5 mt-4" />
                      </Tilt>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
