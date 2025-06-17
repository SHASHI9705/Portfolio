import React from "react";
import { LinkedinIcon } from "../../Icons/linkedinicon";
import { EmailIcon } from "../../Icons/emailicon";
import { CallIcon } from "../../Icons/callicon";

const Body: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] mt-6 px-2 sm:px-4 md:px-8">
      <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-t from-gray-900 via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg text-center break-words leading-tight">
        SHASHIRANJAN SINGH
      </h1>
      <h2 className="mt-2 sm:mt-4 text-lg xs:text-xl sm:text-2xl md:text-3xl font-thin text-gray-200 tracking-wide text-center drop-shadow">
        FULL STACK{" "}
        <span className="font-semibold bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
          DEVELOPER & SOLUTION
        </span>{" "}
        ARCHITECT
      </h2>
      <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-2xl md:max-w-4xl text-sm xs:text-base md:text-lg text-gray-300 text-center font-bold">
        From frontend finesse to backend brains, I craft full-stack solutions that
        scale.
        <br /> Architecting cloud-first systems that don’t just work — they win.
      </p>
      <a
        href="/images/resume.pdf"
        download="resume.pdf"
        className="mt-6 flex items-center gap-2 px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 bg-white/20 text-black rounded shadow-lg font-semibold text-base xs:text-lg transition-all duration-200 hover:bg-white/40 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-300 "
      >
        <span className="text-xl xs:text-2xl border border-white sm:text-2xl md:text-3xl rounded bg-black px-1.5 py-0.5" role="img" aria-label="document">📄</span>
        DOWNLOAD RESUME
      </a>
      <div className="mt-10 sm:mt-14 flex flex-wrap gap-4 sm:gap-6 justify-center">
        <a
          href="https://github.com/SHASHI9705"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-white rounded-full bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-blue-500/20 cursor-pointer"
        >
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      className="w-16 h-16"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.339 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/shashiranjan-singh9/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-white rounded-full bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-blue-200/20 cursor-pointer"
        >
          <LinkedinIcon />
        </a>
        <button
          type="button"
          onClick={() => {
            document.querySelector('#reachme')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-2 border border-white rounded-full bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-red-500/20 cursor-pointer"
          aria-label="Email"
        >
          <EmailIcon />
        </button>
        <button
          type="button"
          onClick={() => {
            document.querySelector('#reachme')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-2 border border-white rounded-full bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-blue-500/20 cursor-pointer"
          aria-label="Call"
        >
          <CallIcon />
        </button>
      </div>
    </div>
  );
};

export default Body;
