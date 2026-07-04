import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'home',       label: 'Home' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive]   = useState('home');
  const [toggle, setToggle]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── scroll spy ─────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      const offset = y + 160;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && offset >= el.offsetTop) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── smooth scroll helper ────────────────────────────────── */
  const scrollTo = (id) => {
    setToggle(false);
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── Main bar ────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`navbar-root ${scrolled ? 'navbar-scrolled' : ''}`}
      >
        <div className="navbar-inner">

          {/* ── Logo ── */}
          <button className="navbar-logo" onClick={() => scrollTo('home')}>
            {/* Monogram mark */}
            <span className="navbar-monogram" aria-hidden="true">TY</span>
            <span className="navbar-name">Tanush Yadav</span>
            <span className="navbar-badge">AI · Dev</span>
          </button>

          {/* ── Desktop links ── */}
          <ul className="navbar-links" role="list">
            {navLinks.map(({ id, label }) => (
              <li key={id} className="navbar-item">
                <button
                  className={`navbar-btn ${active === id ? 'navbar-btn--active' : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                  {active === id && (
                    <motion.span
                      layoutId="pill"
                      className="navbar-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* ── CTA ── */}
          <a
            href="#contact"
            className="navbar-cta hidden md:inline-flex"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
          >
            Hire Me
          </a>

          {/* ── Mobile hamburger ── */}
          <button
            className="navbar-hamburger md:hidden"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
            aria-expanded={toggle}
          >
            <span className={`hamburger-bar ${toggle ? 'bar-top-open' : ''}`} />
            <span className={`hamburger-bar ${toggle ? 'bar-mid-open' : ''}`} />
            <span className={`hamburger-bar ${toggle ? 'bar-bot-open' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ─────────────────────────────────── */}
      <AnimatePresence>
        {toggle && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="navbar-backdrop"
              onClick={() => setToggle(false)}
            />

            {/* drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 34 }}
              className="navbar-drawer"
            >
              {/* drawer header */}
              <div className="drawer-header">
                <span className="navbar-monogram" style={{ fontSize: '1rem', width: 34, height: 34 }}>TY</span>
                <span className="navbar-name" style={{ fontSize: '0.9rem' }}>Tanush Yadav</span>
                <button className="drawer-close" onClick={() => setToggle(false)} aria-label="Close menu">✕</button>
              </div>

              <div className="drawer-divider" />

              {/* links */}
              <nav className="drawer-nav">
                {navLinks.map(({ id, label }, i) => (
                  <motion.button
                    key={id}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.06 * i, duration: 0.3 }}
                    className={`drawer-link ${active === id ? 'drawer-link--active' : ''}`}
                    onClick={() => scrollTo(id)}
                  >
                    <span className="drawer-link-num">0{i + 1}</span>
                    {label}
                  </motion.button>
                ))}
              </nav>

              <div className="drawer-divider" />

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.36 }}
                href="#contact"
                className="navbar-cta drawer-cta"
                onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              >
                Hire Me
              </motion.a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
