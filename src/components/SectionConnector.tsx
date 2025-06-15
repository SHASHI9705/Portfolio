import React from "react";

const SectionConnector: React.FC = () => (
  <div className="w-full flex justify-center pointer-events-none select-none -mt-8">
    <svg width="32" height="200" viewBox="0 0 32 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="arrow-gradient" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.5" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#4ade80" />
        </linearGradient>
      </defs>
      {/* Small downward arrows with animated glowing effect */}
      {[...Array(12)].map((_, i) => (
        <g key={i} className={`section-arrow arrow-animate-${i}`} style={{ transform: `translateY(${i * 16}px)` }}>
          <polygon points="16,6 12,0 20,0" fill="url(#arrow-gradient)" />
        </g>
      ))}
      <style>{`
        .section-arrow {
          filter: drop-shadow(0 0 6px #38bdf8);
          opacity: 0.4;
          transition: opacity 0.2s;
        }
        ${[...Array(12)].map((_, i) => `
          .arrow-animate-${i} {
            animation: arrow-glow 1.6s linear infinite;
            animation-delay: ${i * 0.18}s;
          }
        `).join('')}
        @keyframes arrow-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; filter: drop-shadow(0 0 16px #38bdf8) drop-shadow(0 0 8px #4ade80); }
        }
      `}</style>
    </svg>
  </div>
);

export default SectionConnector;
