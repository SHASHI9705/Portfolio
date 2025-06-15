import React from "react";
import { GithubIcon } from "../../Icons/githubicon";
import { LinkedinIcon } from "../../Icons/linkedinicon";
import { EmailIcon } from "../../Icons/emailicon";
import { CallIcon } from "../../Icons/callicon";

const Body: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] mt-10">
      <h1 className="text-[7rem] md:text-[7rem] font-extrabold bg-gradient-to-t from-gray-900 via-gray-200 to-white bg-clip-text text-transparent drop-shadow-lg text-center">
        SHASHIRANJAN SINGH
      </h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-thin text-gray-200 tracking-wide text-center drop-shadow">
        FULL STACK{" "}
        <span className="font-semibold bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
          DEVELOPER & SOLUTION
        </span>{" "}
        ARCHITECT
      </h2>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300 text-center font-light">
        From frontend finesse to backend brains, I craft full-stack solutions that
        scale. Architecting cloud-first systems that don’t just work — they win.
      </p>
      <a
        href="/src/assets/Shashiranjan%20singh%20-Resume.pdf.pdf"
        download
        className="mt-6 flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-lg shadow-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-100 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <img
          src="/src/assets/document-black.svg"
          alt="document"
          className="w-7 h-7"
        />
        Download Resume
      </a>
      <div className="mt-14 flex gap-4">
        <span className="p-2 rounded-lg bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-white/20 cursor-pointer">
          <GithubIcon />
        </span>
        <span className="p-2 rounded-lg bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-white/20 cursor-pointer">
          <LinkedinIcon />
        </span>
        <span className="p-2 rounded-lg bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-white/20 cursor-pointer">
          <EmailIcon />
        </span>
        <span className="p-2 rounded-lg bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-white/20 cursor-pointer">
          <CallIcon />
        </span>
      </div>
    </div>
  );
};

export default Body;
