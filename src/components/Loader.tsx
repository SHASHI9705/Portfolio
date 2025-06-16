import React, { useEffect, useState } from "react";
import "../loader-font.css";

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    let start = Date.now();
    let frame: number;
    const duration = 2500;
    const animate = () => {
      const elapsed = Date.now() - start;
      const percent = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(percent);
      if (percent < 100) {
        frame = requestAnimationFrame(animate);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500"
      style={{ minHeight: 480, minWidth: 480 }}
    >
      <div
        className="text-4xl font-extrabold mb-6 tracking-widest loader-robotic-font"
        style={{ fontFamily: "Roboto Mono, monospace" }}
      >
        Loading for you...
      </div>
      <div className="w-72 h-0.5 bg-white/10 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div
        className="text-2xl font-extrabold loader-robotic-font"
        style={{ fontFamily: "Roboto Mono, monospace" }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default Loader;
