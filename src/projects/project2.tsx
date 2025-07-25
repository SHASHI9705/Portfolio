import React from "react";

const Project2Card: React.FC = () => (
  <>
    <img src="/images/skincare.png" alt="Lovely Skins" className="w-full h-80 object-cover rounded-xl mb-4 border border-white/30 shadow-md mt-0" />
    <div className="w-full flex flex-col items-start justify-start pl-2">
      <h3 className="text-2xl md:text-3xl font-semibold text-left mb-2 tracking-wide bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x flex items-center">
        Lovely Skins
        <a
          href="https://github.com/SHASHI9705/SkinCare"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/30 border border-blue-400/40 hover:bg-yellow-400/30 transition-colors duration-200 shadow transform hover:scale-110"
          style={{marginBottom: '-2px'}}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
            <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.339 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:7295448706152103939/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/30 border border-blue-400/40 hover:bg-yellow-400/30 transition-colors duration-200 shadow transform hover:scale-110"
          style={{marginBottom: '-2px'}}
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
            <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor"/>
            <path d="M7 10v6" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="7" cy="7" r="1.2" fill="#60a5fa"/>
            <path d="M11 10v6m0-6c0-1.1.9-2 2-2s2 .9 2 2v6" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>
      </h3>
      <p className="text-sm md:text-base text-gray-100 text-left leading-relaxed font-normal">Lovely Skins is an AI-powered skincare platform that analyzes user-uploaded skin images to provide personalized tips and precautions. It also helps users find and book appointments with nearby dermatologists — making skincare more accessible, smart, and connected.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="inline-block px-5 py-1.5 bg-black text-blue-100 font-semibold text-sm rounded-full shadow select-none">Node.js</div>
        <div className="inline-block px-5 py-1.5 bg-black text-blue-100 font-semibold text-sm rounded-full shadow select-none">Express</div>
        <div className="inline-block px-5 py-1.5 bg-black text-blue-100 font-semibold text-sm rounded-full shadow select-none">MongoDB</div>
        <div className="inline-block px-5 py-1.5 bg-black text-blue-100 font-semibold text-sm rounded-full shadow select-none">EJS</div>
      </div>
    </div>
  </>
);

export default Project2Card;
