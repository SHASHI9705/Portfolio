import React from "react";
import SectionConnector from "./SectionConnector";

const About: React.FC = () => {
  return (
    <section className="w-full min-h-[100vh] flex flex-col bg-transparent text-white pt-16 scroll-smooth transition-all duration-700" id="about">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide text-center bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">About Me</h2>
        <div className="relative flex justify-center">
          <div className="h-1 w-[180px] md:w-[240px] bg-white rounded-full mb-8"
               style={{
                 filter: 'blur(0.5px)',
                 maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                 opacity: 0.7
               }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-[90vw] xl:max-w-[1400px] mx-auto gap-8 mt-8 px-2 md:px-6">
        <div className="w-full md:w-[55%]  rounded-xl p-8 shadow-lg flex flex-col items-start">
          <h3 className="text-2xl font-semibold mb-2 text-left w-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">Who I Am</h3>
          <div className="relative flex justify-start w-full">
            <div className="h-1 w-[120px] bg-white rounded-full mb-6"
                 style={{
                   filter: 'blur(0.5px)',
                   maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                   WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                   opacity: 0.7
                 }}
            />
          </div>
          <p className="text-base md:text-lg font-semibold text-gray-200 leading-relaxed">
            I’m a passionate and driven Computer Science Engineering student, with a strong focus on web development, cloud computing, and cybersecurity. 
            <br /> <br />I thrive on solving real-world problems through technology and have hands-on experience building full-stack applications, deploying secure cloud architectures, and participating in hackathons.
            <br /> My projects combine innovation with impact—ranging from AI-powered healthcare solutions to scalable cloud platforms.
          </p>
        </div>
        <div className="w-full md:w-[55%] bg-white/5 rounded-xl p-8 shadow-lg flex flex-col items-start">
          <h3 className="text-2xl font-semibold mb-2 text-left w-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">What I do</h3>
          <div className="relative flex justify-start w-full">
            <div className="h-1 w-[120px] bg-white rounded-full mb-6"
                 style={{
                   filter: 'blur(0.5px)',
                   maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                   WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                   opacity: 0.7
                 }}
            />
          </div>
          <div className="flex flex-col gap-6 mt-2 w-full">
            {/* Web Development */}
            <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 p-[2px] transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-blue-400/40">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-black transition-transform duration-300 group-hover:scale-110">
                  <span className="text-base md:text-lg text-white font-bold select-none">&lt;/&gt;</span>
                </span>
              </span>
              <span className="text-xl md:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">Web Development</span>
            </div>
            {/* Cloud Computing */}
            <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 p-[2px] transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-green-400/40">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-black transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.5 19a4.5 4.5 0 0 0 0-9c-.2 0-.4 0-.6.03A6 6 0 1 0 6 17.5"/></svg>
                </span>
              </span>
              <span className="text-xl md:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-green-300">Cloud Computing</span>
            </div>
            {/* Security */}
            <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 p-[2px] transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-green-400/40">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-black transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17a2 2 0 0 0 2-2v-2a2 2 0 0 0-4 0v2a2 2 0 0 0 2 2zm6-6V9a6 6 0 1 0-12 0v2a6 6 0 0 0 12 0z"/></svg>
                </span>
              </span>
              <span className="text-xl md:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-green-300">Security</span>
            </div>
            {/* Solution Architect */}
            <div className="flex items-center gap-4 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 p-[2px] transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-blue-400/40">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-black transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 7.464"/></svg>
                </span>
              </span>
              <span className="text-xl md:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">Solution Architect</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <SectionConnector />
    </section>
  );
};

export default About;
