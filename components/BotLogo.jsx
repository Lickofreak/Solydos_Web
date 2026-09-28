export default function BotLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block ml-2"
      style={{ marginLeft: '6px', marginBottom: '-2px' }}
    >
      {/* Head */}
      <rect x="4" y="3" width="16" height="14" rx="2" stroke="#10b981" strokeWidth="1.5" />

      {/* Left Eye */}
      <circle cx="9" cy="8" r="2" stroke="#10b981" strokeWidth="1.5" />

      {/* Right Eye */}
      <circle cx="15" cy="8" r="2" stroke="#10b981" strokeWidth="1.5" />

      {/* Left Antenna */}
      <line x1="7" y1="3" x2="6" y2="0" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="6" cy="0" r="0.8" stroke="#10b981" strokeWidth="1.5" />

      {/* Right Antenna */}
      <line x1="17" y1="3" x2="18" y2="0" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18" cy="0" r="0.8" stroke="#10b981" strokeWidth="1.5" />

      {/* Mouth */}
      <path d="M 9 13 Q 12 14 15 13" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
