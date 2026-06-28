import React from 'react';
import { GitCommit, GitBranch, Star, Eye, ExternalLink } from 'lucide-react';
import Tilt from './Tilt';

// Generate simulated activity coordinates
const contribGrid = Array.from({ length: 90 }, () => {
  // Random opacity representation
  const levels = ['bg-[#1b233d]', 'bg-green-900/40', 'bg-green-700/60', 'bg-green-500/80', 'bg-[#00E5FF]'];
  const weight = Math.floor(Math.random() * 5);
  return levels[weight];
});

const githubMetrics = [
  { label: 'Commits Done', value: '450+', icon: <GitCommit className="text-cyan" size={20} /> },
  { label: 'Repositories', value: '12', icon: <GitBranch className="text-purple" size={20} /> },
  { label: 'Stars Earned', value: '18', icon: <Star className="text-cyan" size={20} /> },
  { label: 'Project Views', value: '1.2K', icon: <Eye className="text-purple" size={20} /> }
];

export default function GithubStats() {
  return (
    <section id="github-stats" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan font-semibold text-sm tracking-widest uppercase mb-1">
            Open Source
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            GitHub Statistics
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple to-cyan mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left: GitHub Activity Card */}
          <div className="lg:col-span-7 w-full text-left">
            <Tilt className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    Activity Heatmap
                  </h3>
                  <p className="text-xs text-muted mt-0.5">Contribution streams in the past quarters</p>
                </div>
                <a 
                  href="https://github.com/Tanushyadav9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white-5 rounded-xl border border-white-10 hover:border-cyan transition-colors"
                >
                  <ExternalLink size={16} className="text-cyan" />
                </a>
              </div>

              {/* Grid representation */}
              <div className="grid grid-cols-15 gap-1.5 p-2 bg-[#050816]/60 rounded-xl border border-white-5">
                {contribGrid.map((levelClass, i) => (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-[2px] transition-all hover:scale-125 ${levelClass}`}
                    style={{ minWidth: '10px' }}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center mt-4 text-[10px] text-muted">
                <span>Less Active</span>
                <div className="flex gap-1 items-center">
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#1b233d]" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-green-900/40" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-green-700/60" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-green-500/80" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#00E5FF]" />
                </div>
                <span>More Active</span>
              </div>
            </Tilt>
          </div>

          {/* Right: Metrics Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-4">
              {githubMetrics.map((metric, idx) => (
                <Tilt key={idx} className="p-4 flex flex-col items-center text-center justify-center">
                  <div className="mb-2 p-2.5 bg-white-5 rounded-full border border-white-10">
                    {metric.icon}
                  </div>
                  <h4 className="text-2xl font-black text-white font-heading">{metric.value}</h4>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-wider mt-1">{metric.label}</p>
                </Tilt>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
