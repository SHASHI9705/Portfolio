import React from 'react';

const Navbar: React.FC = () => (
  <nav className="fixed left-1/2 top-4 z-10 -translate-x-1/2 rounded-full backdrop-blur-md shadow-lg flex items-center px-8 py-1 gap-6 text-white font-semibold text-base border border-white/30 min-h-10">
    <a
      href="#about"
      className="hover:bg-white/20 hover:text-blue-300 transition-all duration-300 px-3 py-1 rounded-full"
      onClick={e => {
        e.preventDefault();
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      About
    </a>
    <a
      href="#skills"
      className="hover:bg-white/20 hover:text-blue-300 transition-all duration-300 px-3 py-1 rounded-full"
      onClick={e => {
        e.preventDefault();
        document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Skills
    </a>
    <a
      href="#projects"
      className="hover:bg-white/20 hover:text-blue-300 transition-all duration-300 px-3 py-1 rounded-full"
      onClick={e => {
        e.preventDefault();
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Projects
    </a>
    <a
      href="#reachme"
      className="hover:bg-white/20 hover:text-blue-300 transition-all duration-300 px-3 py-1 rounded-full"
      onClick={e => {
        e.preventDefault();
        document.querySelector('#reachme')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Reach Me
    </a>
  </nav>
);

export default Navbar;
