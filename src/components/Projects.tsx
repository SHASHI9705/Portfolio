import React, { useState } from "react";
import Project1Card from "../projects/project1";
import Project2Card from "../projects/project2";
import Project3Card from "../projects/project3";
import Project4Card from "../projects/project4";
import Project5Card from "../projects/project5";
import Project6Card from "../projects/project6";
import Project7Card from "../projects/project7";
import Project8Card from "../projects/project8";

const projectCards = [
  <Project1Card key="project1" />,
  <Project2Card key="project2" />,
  <Project3Card key="project3" />,
  <Project4Card key="project4" />,
  <Project5Card key="project5" />,
  <Project6Card key="project6" />,
  <Project7Card key="project7" />,
  <Project8Card key="project8" />
];

const Projects: React.FC = () => {
  const [centerIdx, setCenterIdx] = useState(0); 
  const [fadeState, setFadeState] = useState<'idle' | 'fading-out' | 'fading-in'>('idle');

  const handleLeft = () => {
    if (fadeState !== 'idle') return;
    setFadeState('fading-out');
    setTimeout(() => {
      setCenterIdx((prev) => (prev - 1 + projectCards.length) % projectCards.length);
      setFadeState('fading-in');
      setTimeout(() => setFadeState('idle'), 300);
    }, 300);
  };
  const handleRight = () => {
    if (fadeState !== 'idle') return;
    setFadeState('fading-out');
    setTimeout(() => {
      setCenterIdx((prev) => (prev + 1) % projectCards.length);
      setFadeState('fading-in');
      setTimeout(() => setFadeState('idle'), 300);
    }, 300);
  };

  return (
    <section className="w-full min-h-[100vh] flex flex-col bg-transparent text-white pt-16 relative overflow-hidden" id="projects">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide text-center bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
          ProJects
        </h2>
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
      <div className="relative w-full flex-1 flex items-center justify-center mt-[-60px]">
        <div className="flex items-center justify-center gap-8">
          {/* Left Div */}
          <div className="w-[500px] h-[70vh] bg-white/10 rounded-2xl shadow-xl flex flex-col items-center justify-center border-2 border-transparent select-none opacity-60 blur-sm pointer-events-none px-6 py-8 overflow-hidden">
            {projectCards[(centerIdx - 1 + projectCards.length) % projectCards.length]}
            <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-l from-transparent to-black blur-md pointer-events-none" />
          </div>
          {/* Left Button */}
          <button
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-blue-400/70 text-white flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none mx-6"
            aria-label="Scroll Left"
            onClick={handleLeft}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          {/* Center Div */}
          <div className={`w-[500px] h-[70vh] bg-white/10 rounded shadow-xl flex flex-col items-center justify-center border border-white text-3xl font-bold px-6 py-8 overflow-hidden transition-opacity duration-300 ${fadeState === 'fading-out' ? 'opacity-0' : fadeState === 'fading-in' ? 'opacity-100' : 'opacity-100'}`}>
            {projectCards[centerIdx]}
          </div>
          {/* Right Button */}
          <button
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-blue-400/70 text-white flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none mx-6"
            aria-label="Scroll Right"
            onClick={handleRight}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
          {/* Right Div */}
          <div className="w-[500px] h-[70vh] bg-white/10 rounded-2xl shadow-xl flex flex-col items-center justify-center border-2 border-transparent select-none opacity-60 blur-sm pointer-events-none px-6 py-8 overflow-hidden">
            {projectCards[(centerIdx + 1) % projectCards.length]}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-transparent to-black blur-md pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
