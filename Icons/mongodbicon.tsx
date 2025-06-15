
export function MongodbIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      {/* White background */}
      <rect x="0" y="0" width="32" height="32" rx="8" fill="#fff" />
      {/* Database cylinder */}
      <ellipse cx="16" cy="11" rx="8" ry="4" fill="#10AA50" />
      <rect x="8" y="11" width="16" height="10" rx="8" fill="#10AA50" />
      <ellipse cx="16" cy="21" rx="8" ry="4" fill="#0A7C3A" />
      {/* Decorative highlight */}
      <ellipse cx="16" cy="13" rx="6" ry="2" fill="#fff" fillOpacity="0.18" />
    </svg>
  );
}
