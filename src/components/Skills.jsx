import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Server, Database, Brain, Cpu, Settings } from 'lucide-react';
import Tilt from './Tilt';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code size={22} className="text-purple" />,
    skills: [
      { name: 'Python', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' },
      { name: 'C++', styleClass: 'text-purple bg-purple-10 border-purple-20' },
      { name: 'JavaScript', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' },
      { name: 'HTML5 & CSS3', styleClass: 'text-purple bg-purple-10 border-purple-20' }
    ]
  },
  {
    title: 'Frontend',
    icon: <Monitor size={22} className="text-cyan" />,
    skills: [
      { name: 'React.js', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' },
      { name: 'Next.js', styleClass: 'text-purple bg-purple-10 border-purple-20' },
      { name: 'Redux', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' },
      { name: 'TailwindCSS', styleClass: 'text-purple bg-purple-10 border-purple-20' }
    ]
  },
  {
    title: 'Backend',
    icon: <Server size={22} className="text-purple" />,
    skills: [
      { name: 'Node.js', styleClass: 'text-purple bg-purple-10 border-purple-20' },
      { name: 'Express.js', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' },
      { name: 'FastAPI', styleClass: 'text-purple bg-purple-10 border-purple-20' }
    ]
  },
  {
    title: 'Database',
    icon: <Database size={22} className="text-cyan" />,
    skills: [
      { name: 'MongoDB', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' },
      { name: 'PostgreSQL', styleClass: 'text-purple bg-purple-10 border-purple-20' },
      { name: 'Firebase', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: <Brain size={22} className="text-purple" />,
    skills: [
      { name: 'Scikit-Learn', styleClass: 'text-purple bg-purple-10 border-purple-20' },
      { name: 'TensorFlow', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' },
      { name: 'OpenCV', styleClass: 'text-purple bg-purple-10 border-purple-20' }
    ]
  },
  {
    title: 'IoT',
    icon: <Cpu size={22} className="text-cyan" />,
    skills: [
      { name: 'ESP32', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' },
      { name: 'Arduino', styleClass: 'text-purple bg-purple-10 border-purple-20' },
      { name: 'Raspberry Pi', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' },
      { name: 'Sensors Grid', styleClass: 'text-purple bg-purple-10 border-purple-20' }
    ]
  },
  {
    title: 'Tools',
    icon: <Settings size={22} className="text-purple" />,
    skills: [
      { name: 'Git & GitHub', styleClass: 'text-purple bg-purple-10 border-purple-20' },
      { name: 'Docker', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' },
      { name: 'Postman', styleClass: 'text-purple bg-purple-10 border-purple-20' },
      { name: 'VS Code', styleClass: 'text-cyan bg-cyan-10 border-cyan-20' }
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
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            >
              <Tilt className="p-6 h-full flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-white-5 rounded-xl border border-white-10">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading text-left">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-3 justify-start">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-2 border rounded-xl font-medium text-sm transition-all flex items-center gap-1.5 ${skill.styleClass}`}
                      >
                        <span>{skill.name}</span>
                      </motion.div>
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
