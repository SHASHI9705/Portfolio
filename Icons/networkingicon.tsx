import React from "react";

export function NetworkingIcon() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="48" height="48" rx="10" fill="#111" />
      <circle cx="24" cy="24" r="8" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="2.5" fill="#38bdf8" />
      <line x1="24" y1="24" x2="24" y2="10" stroke="#38bdf8" strokeWidth="2" />
      <line x1="24" y1="24" x2="37" y2="32" stroke="#38bdf8" strokeWidth="2" />
      <line x1="24" y1="24" x2="11" y2="32" stroke="#38bdf8" strokeWidth="2" />
    </svg>
  );
}
