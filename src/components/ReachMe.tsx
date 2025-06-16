import React from "react";

const ReachMe: React.FC = () => {
  return (
    <section className="w-full min-h-[100vh] flex flex-col bg-transparent text-white pt-16" id="reachme">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide text-center bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
          Reach Me
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
      {/* Content will be added here as per your instructions */}
      <div className="flex flex-col md:flex-row w-full max-w-[90vw] xl:max-w-[1400px] mx-auto gap-8 mt-8 px-2 md:px-6">
        <div className="w-full md:w-1/2 rounded-xl p-8 shadow-lg flex flex-col items-start justify-center min-h-[300px]">
          <h3 className="text-2xl font-semibold mb-2 text-left w-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
            Let's Talk
          </h3>
          <div className="relative flex justify-start w-full">
            <div className="h-1 w-[100px] bg-white rounded-full mb-6"
                 style={{
                   filter: 'blur(0.5px)',
                   maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                   WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
                   opacity: 0.7
                 }}
            />
          </div>
          <p className="text-base md:text-lg font-semibold text-gray-200 leading-relaxed text-left mb-6">
            Have a project in mind or just want to say hello? Feel free to reach out to me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-blue-400/30 text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                <rect x="3" y="5" width="18" height="14" rx="3" fill="#0ea5e9" stroke="#38bdf8" strokeWidth="1.5"/>
                <path d="M3.5 6.5L12 13.5L20.5 6.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-lg font-semibold text-white select-all">singhshashiranjan34@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-green-400 bg-green-800/30 text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                <path d="M3 5.75C3 4.784 3.784 4 4.75 4h2.5C8.216 4 9 4.784 9 5.75v1.5C9 8.216 8.216 9 7.25 9h-.5A2.75 2.75 0 0 0 4 11.75v.5C4 13.216 4.784 14 5.75 14h1.5C8.216 14 9 14.784 9 15.75v2.5C9 20.216 8.216 21 7.25 21h-2.5C3.784 21 3 20.216 3 19.25v-13.5z" fill="#22d3ee" stroke="#38bdf8" strokeWidth="1.5"/>
                <path d="M15 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" fill="#fff" stroke="#38bdf8" strokeWidth="1.5"/>
                <path d="M15 12h.01" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="text-lg font-semibold text-white select-all">+91 8237997056</span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-green-400 bg-green-400/30 text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                <circle cx="12" cy="10" r="4" fill="#22c55e" stroke="#4ade80" strokeWidth="1.5"/>
                <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9z" stroke="#4ade80" strokeWidth="1.5" fill="none"/>
                <circle cx="12" cy="10" r="1.5" fill="#fff"/>
              </svg>
            </span>
            <span className="text-lg font-semibold text-white select-all">Based in Pune, India <br />
                Open to remote work or onsite in Pune, Delhi, or Bangalore.</span>
          </div>
          
        </div>
        <div className="w-full border border-white md:w-1/2 bg-white/5 rounded-xl p-8 shadow-lg flex flex-col items-center justify-center min-h-[300px]">
          <form className="w-full max-w-md flex flex-col gap-6" action="https://formsubmit.co/singhshashiranjan34@gmail.com" method="POST">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white font-semibold">Name</label>
              <input id="name" name="name" type="text" required className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white font-semibold">Email</label>
              <input id="email" name="email" type="email" required className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-white font-semibold">Message</label>
              <textarea id="message" name="message" rows={6} required className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" placeholder="Type your message here..." />
            </div>
            <button type="submit" className="mt-2 bg-white text-black font-bold py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReachMe;
