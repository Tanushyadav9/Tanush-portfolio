import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  return (
    <div className="relative bg-[#050816] min-h-screen text-white overflow-hidden select-none">
      {/* Interactive Cursor Glow */}
      <CursorGlow />

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Floating Ambient Glowing Blobs */}
      <div className="gradient-blob blob-1" />
      <div className="gradient-blob blob-2" />
      <div className="gradient-blob blob-3" />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Portfolio Main Sections */}
      <main className="relative z-10">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full h-px bg-white/5" />
        </div>
        
        <About />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full h-px bg-white/5" />
        </div>

        <Skills />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full h-px bg-white/5" />
        </div>

        <Projects />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full h-px bg-white/5" />
        </div>

        <GithubStats />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full h-px bg-white/5" />
        </div>

        <Experience />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full h-px bg-white/5" />
        </div>

        <Achievements />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full h-px bg-white/5" />
        </div>

        <Education />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full h-px bg-white/5" />
        </div>

        <Certifications />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full h-px bg-white/5" />
        </div>

        <Contact />
      </main>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}
