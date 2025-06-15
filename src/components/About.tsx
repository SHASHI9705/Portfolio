import React from "react";

const About: React.FC = () => {
  return (
    <section className="w-full min-h-[100vh] flex flex-col bg-transparent text-white pt-20" id="about">
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
        <div className="w-full md:w-[55%] bg-white/5 rounded-xl p-8 shadow-lg flex flex-col items-start">
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
          <h3 className="text-2xl font-semibold mb-2 text-left w-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">What I Do</h3>
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
          {/* Add content for What I do here */}
        </div>
      </div>
      {/* More about content can go here */}
    </section>
  );
};

export default About;
