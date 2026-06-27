import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cpu, Cloud, Settings, Brain } from 'lucide-react';
import Tilt from './Tilt';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code size={22} className="text-purple" />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5 & CSS3', level: 90 }
    ]
  },
  {
    title: 'Frameworks',
    icon: <Server size={22} className="text-cyan" />,
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'Firebase SDK', level: 85 }
    ]
  },
  {
    title: 'IoT & Embedded',
    icon: <Cpu size={22} className="text-purple" />,
    skills: [
      { name: 'ESP32', level: 85 },
      { name: 'Arduino Platform', level: 90 },
      { name: 'Sensor Integration', level: 85 }
    ]
  },
  {
    title: 'Cloud & Database',
    icon: <Cloud size={22} className="text-cyan" />,
    skills: [
      { name: 'Firebase Database', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'JSON Databases', level: 80 }
    ]
  },
  {
    title: 'Development Tools',
    icon: <Settings size={22} className="text-purple" />,
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Arduino IDE', level: 85 }
    ]
  },
  {
    title: 'Domains',
    icon: <Brain size={22} className="text-cyan" />,
    skills: [
      { name: 'Artificial Intelligence', level: 80 },
      { name: 'Machine Learning', level: 75 },
      { name: 'Smart Automation', level: 85 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            My Abilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <Tilt className="p-6 h-full flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-white-5 rounded-xl border border-white-10">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Progress Lines */}
                  <div className="flex flex-col gap-5">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="flex flex-col gap-1.5 text-left">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-white/80 font-medium">{skill.name}</span>
                          <span className="text-cyan font-bold">{skill.level}%</span>
                        </div>
                        
                        {/* Custom Animated Track */}
                        <div className="w-full h-1.5 bg-white-5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: skillIdx * 0.1 }}
                            className="h-full bg-gradient-to-r from-purple to-cyan rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Visual Accent */}
                <div className="w-full h-px bg-white-5 mt-6" />
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
