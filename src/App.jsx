import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Workstation from './components/Workstation';
import GithubStats from './components/GithubStats';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  return (
    <div className="relative bg-[#0B0F19] min-h-screen text-white overflow-hidden select-none">
      {/* Aurora Background Effect */}
      <div className="aurora-bg" />

      {/* Interactive Cursor Glow */}
      <CursorGlow />

      {/* Particles Network Canvas */}
      <ParticlesBackground />

      {/* Floating Ambient Glowing Blobs */}
      <div className="gradient-blob blob-1" />
      <div className="gradient-blob blob-2" />
      <div className="gradient-blob blob-3" />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Container Flow */}
      <main className="relative z-10">
        {/* Home Block */}
        <Hero />

        {/* About Block — profile photo, bio, highlights */}
        <About />

        {/* Skills Block */}
        <Skills />

        {/* Projects Showcase */}
        <Projects />

        {/* Experience Timeline */}
        <Experience />

        {/* Honors & Achievements */}
        <Achievements />

        {/* Coding Workstation Activity */}
        <div className="workstation-block">
          <Workstation />
          <GithubStats />
        </div>

        {/* Credentials & Academics */}
        <div className="credentials-block">
          <Education />
          <Certifications />
        </div>

        {/* Contact Recruiter Card */}
        <Contact />
      </main>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}
