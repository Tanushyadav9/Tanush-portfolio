import React from 'react';
import { Play, TrendingUp, FileCode, CheckCircle2 } from 'lucide-react';
import Tilt from './Tilt';

export default function Workstation() {
  const futureGoals = [
    'Integrating low-level Edge AI computing models on constrained embedded systems.',
    'Dockerizing application deployments and configuring Kubernetes cluster orchestrations.',
    'Formulating standardized CI/CD pipelines for hardware firmware deployment.',
    'Designing highly secure, scalable decentralized FinTech microservices.'
  ];

  const stackCategories = [
    { name: 'Languages', items: ['Python', 'C++', 'JavaScript', 'SQL'] },
    { name: 'Libraries & Frameworks', items: ['React.js', 'Next.js', 'FastAPI', 'Express.js'] },
    { name: 'Infrastructure & DB', items: ['Firebase', 'MySQL', 'REST APIs', 'Cloud Telemetry'] },
    { name: 'Hardware & Systems', items: ['ESP32', 'Arduino IDE', 'Embedded Systems', 'IoT Networks'] }
  ];

  return (
    <section id="workstation" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-[20px]">
            Workstation
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Currently Building & Goals
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-[40px] items-start">
          
          {/* Left Column: Currently Building & Future Goals */}
          <div className="lg:col-span-6 flex flex-col gap-10 w-full text-left">
            
            {/* Currently Building */}
            <Tilt className="py-[36px] px-[32px]">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    Currently Building
                  </h3>
                  <p className="text-xs text-muted mt-0.5">Active engineering sprint at my workstation</p>
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider text-cyan bg-cyan-10 border border-cyan-40 animate-pulse">
                  <Play size={10} className="fill-cyan" />
                  <span>In Development</span>
                </span>
              </div>

              <div className="bg-[#0B0F19]/40 border border-white-5 p-5 rounded-2xl flex flex-col gap-4">
                <div>
                  <span className="text-xs font-bold text-purple block mb-1">PROJECT NAME</span>
                  <span className="text-base font-bold text-white font-heading">Kenet Telemetry Analytics Dashboard</span>
                </div>

                <div>
                  <span className="text-xs font-bold text-purple block mb-1">DESCRIPTION</span>
                  <p className="text-xs text-muted leading-relaxed">
                    Building a centralized, high-throughput cloud telemetry console to parse and display real-time sensor streams from deployed ESP32 microcontrollers. Incorporating automated alert triggers and anomaly visual charts.
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold text-purple block mb-1.5">STACK INTEGRATION</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['React', 'Vite', 'Firebase Streams', 'ChartJS', 'FastAPI'].map((item, idx) => (
                      <span key={idx} className="text-[9px] font-semibold text-white/70 bg-white-5 border border-white-10 px-2 py-0.5 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>

            {/* Future Goals */}
            <Tilt className="py-[36px] px-[32px]">
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-6 flex items-center gap-2">
                <TrendingUp size={20} className="text-purple" />
                <span>Future Goals</span>
              </h3>

              <div className="flex flex-col gap-4">
                {futureGoals.map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-1 text-cyan shrink-0">
                      <CheckCircle2 size={16} />
                    </span>
                    <span className="text-xs sm:text-sm text-muted leading-relaxed">
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>

          </div>

          {/* Right Column: Tech Stack Overview */}
          <div className="lg:col-span-6 w-full text-left">
            <Tilt className="py-[36px] px-[32px] h-full">
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-6 flex items-center gap-2">
                <FileCode size={20} className="text-cyan" />
                <span>Interactive Tech Stack</span>
              </h3>

              <div className="flex flex-col gap-6">
                {stackCategories.map((cat, catIdx) => (
                  <div key={catIdx}>
                    <h4 className="text-xs font-black text-muted uppercase tracking-wider mb-3 block">
                      {cat.name}
                    </h4>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {cat.items.map((item, idx) => (
                        <div 
                          key={idx}
                          className="p-3 bg-white-5 border border-white-5 rounded-xl text-xs font-semibold text-center text-white/80 hover-border-cyan transition-all hover:bg-white-10 select-none cursor-default"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>

        </div>

      </div>
    </section>
  );
}
