import React from 'react';

const GridBackground: React.FC = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 w-full h-full flex items-center justify-center">
    <svg
      className="absolute w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#ffffff11" strokeWidth="0.4" />
        </pattern>
        <radialGradient id="mask" cx="50%" cy="50%" r="50%">
          <stop offset="90%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="1" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#mask)" />
    </svg>
  </div>
);

export default GridBackground;
