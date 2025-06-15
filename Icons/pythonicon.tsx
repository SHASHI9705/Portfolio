import React from "react";

export function PythonIcon() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="48" height="48" rx="10" fill="#111" />
      {/* Top half (blue) */}
      <path d="M24 7c-5 0-9 2.5-9 6v4h18v-4c0-3.5-4-6-9-6z" fill="#3776AB"/>
      <circle cx="17" cy="14" r="1.5" fill="#FFD43B" />
      {/* Bottom half (yellow) */}
      <path d="M24 41c5 0 9-2.5 9-6v-4H15v4c0 3.5 4 6 9 6z" fill="#FFD43B"/>
      <circle cx="31" cy="34" r="1.5" fill="#3776AB" />
      {/* Center connector */}
      <rect x="15" y="19" width="18" height="10" rx="5" fill="#111" />
      <rect x="18" y="22" width="12" height="4" rx="2" fill="#3776AB" fillOpacity="0.2" />
      <rect x="18" y="22" width="12" height="4" rx="2" fill="#FFD43B" fillOpacity="0.2" />
    </svg>
  );
}
