import React from 'react';

const Navbar: React.FC = () => (
  <div className="flex items-center justify-center w-full">
    <img
      src="/images/profile.jpg"
      alt="Profile Logo"
      className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover mr-3 fixed left-6 top-4 z-20 bg-[#222] transition-transform duration-300 hover:scale-150 sm:hover:scale-200 md:hover:scale-300"
      style={{ background: '#222' }}
    />
    <nav className="fixed left-1/2 top-4 z-10 -translate-x-1/2 rounded-full backdrop-blur-md shadow-lg flex items-center px-4 sm:px-8 py-1 gap-4 sm:gap-6 text-white font-semibold text-base border border-white/30 min-h-10">
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
  </div>
);

export default Navbar;
