import React from 'react';

const Navbar: React.FC = () => (
  <nav className="fixed left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-black/70 backdrop-blur-xl shadow-lg flex items-center px-8 py-1 gap-6 text-white font-semibold text-base border border-white/40 min-h-10">
    <a
      href="#about"
      className="hover:bg-white/20 hover:text-blue-300 transition-all duration-300 px-3 py-1 rounded-full"
    >
      About
    </a>
    <a
      href="#skills"
      className="hover:bg-white/20 hover:text-blue-300 transition-all duration-300 px-3 py-1 rounded-full"
    >
      Skills
    </a>
    <a
      href="#projects"
      className="hover:bg-white/20 hover:text-blue-300 transition-all duration-300 px-3 py-1 rounded-full"
    >
      Projects
    </a>
    <a
      href="#reachme"
      className="hover:bg-white/20 hover:text-blue-300 transition-all duration-300 px-3 py-1 rounded-full"
    >
      Reach Me
    </a>
  </nav>
);

export default Navbar;
