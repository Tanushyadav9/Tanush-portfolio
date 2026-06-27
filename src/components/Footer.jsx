import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#050816] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Copyright */}
        <p className="text-xs text-[#aaa6c3]">
          &copy; 2026 Tanush Yadav. Built with premium custom UI components.
        </p>

        {/* Right Side: Scroll to Top action button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="p-2.5 bg-white/5 border border-white/10 text-white rounded-full hover:bg-[#915EFF]/20 hover:border-[#915EFF]/40 transition-all flex items-center justify-center cursor-pointer"
        >
          <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  );
}
