import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Lightbulb, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import Tilt from './Tilt';

export default function Achievements() {
  const triggerConfetti = () => {
    // Blast premium purple, cyan and white confetti particles
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#915EFF', '#00E5FF', '#FFFFFF']
    });
  };

  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Honors & Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievement Timeline Card Container */}
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          
          {/* Card 1: 1st Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={triggerConfetti}
            className="cursor-pointer"
          >
            <Tilt className="p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover-border-cyan">
              {/* Icon Holder */}
              <div className="p-4 bg-gradient-purple-cyan-10 rounded-2xl border border-cyan-20 text-cyan shrink-0">
                <Trophy size={38} className="animate-pulse" />
              </div>
              
              <div className="text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-black text-white font-heading">
                    🏆 1st Place Winner
                  </h3>
                  <span className="text-[10px] tracking-wider font-bold uppercase text-purple bg-purple-10 border border-purple-30 px-3 py-0.5 rounded-full">
                    Competition
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-cyan font-heading mb-3">
                  3D Designing Competition
                </h4>
                
                <p className="text-muted text-sm leading-relaxed">
                  Engineered and rendered structural models using advanced geometry, winning first prize for optimization, aesthetic design excellence, and functionality. Click this card to celebrate!
                </p>
              </div>
            </Tilt>
          </motion.div>

          {/* Card 2: Innovation Competitions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Tilt className="p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Icon Holder */}
              <div className="p-4 bg-gradient-purple-cyan-10 rounded-2xl border border-purple-20 text-purple shrink-0">
                <Lightbulb size={38} />
              </div>
              
              <div className="text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-black text-white font-heading">
                    💡 Innovation & Design
                  </h3>
                  <span className="text-[10px] tracking-wider font-bold uppercase text-cyan bg-cyan-10 border border-cyan-30 px-3 py-0.5 rounded-full">
                    Hackathons
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-purple font-heading mb-3">
                  Engineering Competitions
                </h4>
                
                <p className="text-muted text-sm leading-relaxed">
                  Participated in multiple national engineering, AI, and smart hardware design contests. Developed proof-of-concept models aiming to solve accessible commerce hurdles and automatic facilities tracking.
                </p>
              </div>
            </Tilt>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
