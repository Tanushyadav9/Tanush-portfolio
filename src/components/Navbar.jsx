import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPos = scrollTop + 200; // offset for early activation
      const sections = navLinks.map(link => document.getElementById(link.id));

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActive(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    setToggle(false);
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-[18px] bg-[#0B0F19]/80 backdrop-blur-lg border-b border-white/5 shadow-lg' 
          : 'py-[24px] bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleClick('home')}
        >
          <span className="text-xl font-extrabold tracking-wider text-gradient font-heading">
            TANUSH YADAV
          </span>
          <span className="text-[9px] text-cyan/70 border border-cyan/30 px-2.5 py-0.5 rounded-full hidden sm:inline-block font-bold tracking-wide uppercase">
            AI & SOFTWARE DEVELOPER
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="list-none hidden md:flex flex-row items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                className={`nav-link ${active === link.id ? 'active' : ''}`}
                onClick={() => handleClick(link.id)}
              >
                {link.label}
              </a>
              {active === link.id && (
                <motion.span
                  layoutId="activeUnderline"
                  className="nav-link-underline"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white hover:text-cyan transition-all p-1"
            aria-label="Toggle Menu"
          >
            {toggle ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#0b0f19]/95 backdrop-blur-xl border-b border-white/10 absolute top-full left-0 w-full overflow-hidden"
          >
            <ul className="list-none flex flex-col gap-3 p-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className={`block text-base py-2 font-heading tracking-wide transition-colors ${
                      active === link.id ? 'text-cyan font-bold' : 'text-muted hover:text-white'
                    }`}
                    onClick={() => handleClick(link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
