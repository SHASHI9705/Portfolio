import React from "react";
import { projects } from "../data/projectsData";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const Projects: React.FC = () => {
  const displayedProjects = [
    projects.find((project) => project.id === 1),
    projects.find((project) => project.id === 2),
    projects.find((project) => project.id === 3),
    projects.find((project) => project.id === 4),
  ].filter(Boolean);

  return (
    <section
      className="w-full min-h-[100vh] flex flex-col bg-transparent text-white pt-16 relative overflow-hidden"
      id="projects"
    >
      <div className="flex flex-col items-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide text-center bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
          Full Stack Projects
        </h2>
        <div className="relative flex justify-center">
          <div className="h-1 w-[280px] md:w-[340px] bg-white rounded-full mb-8"
               style={{
                 filter: 'blur(0.5px)',
                 maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                 opacity: 0.7
               }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 mb-8">
        {displayedProjects.slice(0, 4).map((project) => (
          <div
            key={project?.id}
            className="flex flex-col md:flex-row items-center md:items-start bg-white/10 rounded-xl shadow-lg p-4 gap-4"
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-start relative group">
              <img
                src={project?.image}
                alt={project?.title}
                className="w-full h-[230px] object-fit rounded-lg group-hover:blur-sm group-hover:scale-105 group-hover:rotate-x-6 transition-transform duration-300"
                style={{ transformOrigin: 'center' }}
              />
              <a
                href={project?.visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/50 text-white font-bold text-lg rounded border border-white"
              >
                Visit
              </a>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start text-left">
              <div className="flex justify-between items-center">
                <h4 className="text-xl  font-bold mb-2">{project?.title}</h4>
                <div className="flex gap-2">
                  <a
                    href={project?.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={project?.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4 italic font-bold">{project?.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project?.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cloud and Architects Heading */}
      <div className="flex flex-col items-center w-full mt-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide text-center bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
          Cloud and Architects
        </h2>
        <div className="relative flex justify-center">
          <div
            className="h-1 w-[280px] md:w-[340px] bg-white rounded-full mb-8"
            style={{
              filter: 'blur(0.5px)',
              maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
              opacity: 0.7,
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16">
        {projects.slice(4, 8).map((project) => (
          <div
            key={project?.id}
            className="flex flex-col md:flex-row items-center md:items-start bg-white/10 rounded-xl shadow-lg p-4 gap-4"
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-start relative group">
              <img
                src={project?.image}
                alt={project?.title}
                className="w-full h-[230px] object-fit rounded-lg group-hover:blur-sm group-hover:scale-105 group-hover:rotate-x-6 transition-transform duration-300"
                style={{ transformOrigin: 'center' }}
              />
              <a
                href={project?.visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/50 text-white font-bold text-lg rounded-lg border-2 border-white px-4 py-2"
              >
                Visit
              </a>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start text-left">
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold mb-2">{project?.title}</h4>
                <div className="flex gap-2">
                  <a
                    href={project?.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={project?.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
              <p className="text-sm italic text-gray-300 mb-4 font-bold">{project?.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project?.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* More works */}
      <div className="flex flex-col items-center w-full mt-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide text-center bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
          Other works
        </h2>
        <div className="relative flex justify-center">
          <div
            className="h-1 w-[280px] md:w-[340px] bg-white rounded-full mb-8"
            style={{
              filter: 'blur(0.5px)',
              maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
              opacity: 0.7,
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16">
        {projects.slice(8, 12).map((project) => (
          <div
            key={project?.id}
            className="flex flex-col md:flex-row items-center md:items-start bg-white/10 rounded-xl shadow-lg p-4 gap-4"
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-start relative group">
              <img
                src={project?.image}
                alt={project?.title}
                className="w-full h-[230px] object-fit rounded-lg group-hover:blur-sm group-hover:scale-105 group-hover:rotate-x-6 transition-transform duration-300"
                style={{ transformOrigin: 'center' }}
              />
              <a
                href={project?.visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/50 text-white font-bold text-lg rounded-lg border-2 border-white px-4 py-2"
              >
                Visit
              </a>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start text-left">
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold mb-2">{project?.title}</h4>
                <div className="flex gap-2">
                  <a
                    href={project?.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={project?.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-300 italic mb-4 font-bold">{project?.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project?.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
