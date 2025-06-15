import React from "react";
import { ReactIcon } from "../../Icons/reacticon";
import { NodejsIcon } from "../../Icons/nodejsicon";
import { ExpressIcon } from "../../Icons/expressicon";
import { MongodbIcon } from "../../Icons/mongodbicon";
import { PythonIcon } from "../../Icons/pythonicon";
import { NetworkingIcon } from "../../Icons/networkingicon";
import { SecurityIcon } from "../../Icons/securityicon";
import { LinuxIcon } from "../../Icons/linuxicon";
import { ShellIcon } from "../../Icons/shellicon";
import { CloudIcon } from "../../Icons/cloudicon";
import { AwsIcon } from "../../Icons/awsicon";
import { ArchitecturesIcon } from "../../Icons/architecturesicon";
import { DevopsIcon } from "../../Icons/devopsicon";

const Skills: React.FC = () => {
  return (
    <section className="w-full min-h-[100vh] flex flex-col bg-transparent text-white pt-16" id="skills">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide text-center bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">MY Skills</h2>
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
      {/* First row of skills (static layout) */}
      <div className="flex flex-wrap gap-8 justify-center items-start mt-8 w-full">
        {/* JavaScript Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-yellow-400/20 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-400 mb-3 transition-transform duration-300 group-hover:scale-110">
            <span className="text-2xl font-extrabold text-black">JS</span>
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-yellow-300">JavaScript</span>
        </div>
        {/* TypeScript Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-blue-500/20 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500 mb-3 transition-transform duration-300 group-hover:scale-110">
            <span className="text-2xl font-extrabold text-white">TS</span>
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-blue-300">TypeScript</span>
        </div>
        {/* React JS Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-cyan-400/20 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-400 mb-3 transition-transform duration-300 group-hover:scale-110">
            <ReactIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-cyan-300">React JS</span>
        </div>
        {/* Node.js Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-green-700/20 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#3C873A] mb-3 transition-transform duration-300 group-hover:scale-110">
            <NodejsIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-green-300">Node.js</span>
        </div>
        {/* Express Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-neutral-800/20 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#222] mb-3 transition-transform duration-300 group-hover:scale-110">
            <ExpressIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-neutral-300">Express</span>
        </div>
        {/* MongoDB Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-green-500/20 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#10AA50] mb-3 transition-transform duration-300 group-hover:scale-110">
            <MongodbIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-green-300">MongoDB</span>
        </div>
      </div>
      {/* Second row of skills */}
      <div className="flex flex-wrap gap-8 justify-center items-start mt-8 w-full">
        {/* Python Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-yellow-400/30 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 via-yellow-200 to-white mb-3 transition-transform duration-300 group-hover:scale-110">
            <PythonIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-yellow-200">Python</span>
        </div>
        {/* Networking Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-blue-200/30 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 via-blue-300 to-white mb-3 transition-transform duration-300 group-hover:scale-110">
            <NetworkingIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-blue-200">Networking</span>
        </div>
        {/* Security Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-blue-500/20 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 via-green-300 to-white mb-3 transition-transform duration-300 group-hover:scale-110">
            <SecurityIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-green-200">Security</span>
        </div>
        {/* Linux Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-gray-400/30 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 via-gray-400 to-white mb-3 transition-transform duration-300 group-hover:scale-110">
            <LinuxIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-gray-300">Linux</span>
        </div>
        {/* Cloud Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-blue-500/20 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-white mb-3 transition-transform duration-300 group-hover:scale-110">
            <CloudIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-blue-300">Cloud</span>
        </div>
        
      </div>
      {/* Third row of skills */}
      <div className="flex flex-wrap gap-8 justify-center items-start mt-8 w-full">
        
        {/* AWS Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-white/30 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-white mb-3 transition-transform duration-300 group-hover:scale-110">
            <AwsIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-yellow-300">AWS</span>
        </div>
        {/* Architectures Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-yellow-200/20 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-black mb-3 transition-transform duration-300 group-hover:scale-110">
            <ArchitecturesIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-green-300">Architectures</span>
        </div>
        {/* DevOps Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-blue-500/20 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-black mb-3 transition-transform duration-300 group-hover:scale-110">
            <DevopsIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-blue-300">DevOps</span>
        </div>
        {/* Shell Script Skill Box */}
        <div className="flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-6 w-32 h-36 transition-transform duration-300 hover:scale-105 hover:bg-green-100/30 group cursor-pointer">
          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-green-200 via-white to-gray-100 mb-3 transition-transform duration-300 group-hover:scale-110">
            <ShellIcon />
          </span>
          <span className="text-lg font-semibold text-white mt-2 transition-colors duration-300 group-hover:text-black">ShellScript</span>
        </div>
      </div>
      {/* Skills section content will go here */}
    </section>
  );
};

export default Skills;
