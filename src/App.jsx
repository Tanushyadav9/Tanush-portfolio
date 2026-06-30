import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import GithubStats from './components/GithubStats';
import Workstation from './components/Workstation';
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
    <div className="relative bg-[#0B0F19] min-h-screen text-white overflow-hidden select-none">
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

        <Skills />
        <Projects />
        <Services />
        <GithubStats />
        <Workstation />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}
