import React, { useMemo } from 'react';

const STAR_COUNT = 60; // Increased number of stars
const STAR_MIN_SIZE = 2;
const STAR_MAX_SIZE = 4;
const MOVE_MIN_DURATION = 2; // Faster minimum duration
const MOVE_MAX_DURATION = 7; // Faster maximum duration

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const GalaxyBackground: React.FC = () => {
  // Generate stars only once
  const stars = useMemo(() => {
    return Array.from({ length: STAR_COUNT }).map((_, i) => {
      const left = randomBetween(0, 100); // vw
      const top = randomBetween(0, 100); // vh
      const size = randomBetween(STAR_MIN_SIZE, STAR_MAX_SIZE); // px
      const duration = randomBetween(MOVE_MIN_DURATION, MOVE_MAX_DURATION); // s
      const xMove = randomBetween(-30, 30); // px, horizontal drift
      const yMove = randomBetween(20, 60); // px, vertical drift
      return { left, top, size, duration, xMove, yMove, id: i };
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-10 min-h-screen w-screen overflow-hidden bg-black">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-80"
          style={{
            left: `${star.left}vw`,
            top: `${star.top}vh`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `moveStar${star.id} ${star.duration}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <style>{`
        ${stars.map(star => `
          @keyframes moveStar${star.id} {
            0% { transform: translate(0, 0); }
            100% { transform: translate(${star.xMove}px, ${star.yMove}px); }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

export default GalaxyBackground;
