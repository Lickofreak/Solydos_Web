'use client'

const OCEAN = '#176B73'
const OCEAN_LIGHT = '#218C89'
const LAND = '#43B77A'
const LAND_LIGHT = '#72CF96'
const CONNECTION = '#A9E8D3'
const BUBBLE = '#FFFDFC'

export default function VideoEarth() {
  return (
    <div className="flex justify-center">
      <style>{`
        @keyframes earthRotate {
          from { transform: rotateZ(0deg); }
          to { transform: rotateZ(25deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes dot1 { 0%, 20% { opacity: 0; } 40%, 100% { opacity: 1; } }
        @keyframes dot2 { 0%, 40% { opacity: 0; } 60%, 100% { opacity: 1; } }
        @keyframes dot3 { 0%, 60% { opacity: 0; } 80%, 100% { opacity: 1; } }

        .earth { animation: earthRotate 15s ease-in-out infinite; }
        .float { animation: float 4s ease-in-out infinite; }
        .pulse { animation: pulse 3s ease-in-out infinite; }
        .glow { animation: glow 2.5s ease-in-out infinite; }
        .dot1 { animation: dot1 1.2s ease-in-out infinite; }
        .dot2 { animation: dot2 1.2s ease-in-out infinite; }
        .dot3 { animation: dot3 1.2s ease-in-out infinite; }
      `}</style>

      <svg width="288" height="288" viewBox="0 0 288 288" className="overflow-visible">
        {/* Background */}
        <rect width="288" height="288" fill="#F9F7F5" />

        {/* Connection nodes and orbital lines */}
        <circle cx="100" cy="60" r="3" fill={CONNECTION} className="glow" opacity="0.6" />
        <circle cx="220" cy="120" r="3" fill={CONNECTION} className="glow" opacity="0.5" />
        <circle cx="80" cy="200" r="3" fill={CONNECTION} className="glow" opacity="0.4" />

        <line x1="144" y1="144" x2="100" y2="60" stroke={CONNECTION} strokeWidth="1" opacity="0.3" />
        <line x1="144" y1="144" x2="220" y2="120" stroke={CONNECTION} strokeWidth="1" opacity="0.2" />
        <line x1="144" y1="144" x2="80" y2="200" stroke={CONNECTION} strokeWidth="1" opacity="0.25" />

        {/* Earth with simple continents */}
        <g className="earth" style={{ transformOrigin: '144px 144px' }}>
          {/* Ocean base */}
          <circle cx="144" cy="144" r="68" fill={OCEAN} />

          {/* Simplified continents using curved paths */}
          {/* North America */}
          <path d="M 110 110 Q 120 100 125 110 Q 120 120 110 125 Z" fill={LAND} />

          {/* South America */}
          <path d="M 105 135 Q 115 130 120 140 Q 110 150 100 145 Z" fill={LAND_LIGHT} />

          {/* Europe/Africa */}
          <path d="M 145 110 Q 160 105 165 120 Q 155 135 140 130 Z" fill={LAND} />
          <path d="M 155 135 Q 170 140 165 160 Q 150 165 145 150 Z" fill={LAND_LIGHT} />

          {/* Asia */}
          <path d="M 170 115 Q 190 110 200 125 Q 185 140 170 135 Z" fill={LAND} />
          <path d="M 185 130 Q 205 135 210 155 Q 195 160 185 150 Z" fill={LAND_LIGHT} />

          {/* Australia */}
          <path d="M 175 170 Q 185 175 180 190 Q 170 185 165 175 Z" fill={LAND} />

          {/* Highlight effect */}
          <ellipse cx="135" cy="120" rx="15" ry="12" fill="white" opacity="0.1" />
        </g>

        {/* Chat bubbles */}
        <g className="float" style={{ animationDelay: '0s' }}>
          <rect x="40" y="100" width="30" height="18" rx="8" fill={BUBBLE} stroke={CONNECTION} strokeWidth="0.5" opacity="0.9" />
          <circle cx="44" cy="110" r="1.5" fill={OCEAN} opacity="0.6" />
          <circle cx="50" cy="110" r="1.5" fill={OCEAN} opacity="0.6" />
          <circle cx="56" cy="110" r="1.5" fill={OCEAN} opacity="0.6" />
        </g>

        <g className="float" style={{ animationDelay: '1s' }}>
          <rect x="230" y="160" width="30" height="18" rx="8" fill={BUBBLE} stroke={CONNECTION} strokeWidth="0.5" opacity="0.8" />
          <circle cx="238" cy="170" r="1.5" fill={OCEAN} opacity="0.5" />
          <circle cx="244" cy="170" r="1.5" fill={OCEAN} opacity="0.5" />
          <circle cx="250" cy="170" r="1.5" fill={OCEAN} opacity="0.5" />
        </g>

        {/* Typing dots */}
        <g className="float" style={{ animationDelay: '0.5s' }}>
          <rect x="35" y="160" width="38" height="18" rx="8" fill={BUBBLE} stroke={CONNECTION} strokeWidth="0.5" opacity="0.85" />
          <circle cx="42" cy="170" r="2" fill={OCEAN} className="dot1" />
          <circle cx="50" cy="170" r="2" fill={OCEAN} className="dot2" />
          <circle cx="58" cy="170" r="2" fill={OCEAN} className="dot3" />
        </g>

        {/* User icons - pulsing */}
        <circle cx="60" cy="60" r="6" fill={OCEAN} className="pulse" opacity="0.7" />
        <circle cx="240" cy="70" r="6" fill={CONNECTION} className="pulse" opacity="0.6" style={{ animationDelay: '0.5s' }} />
        <circle cx="50" cy="250" r="6" fill={OCEAN} className="pulse" opacity="0.5" style={{ animationDelay: '1s' }} />
      </svg>
    </div>
  )
}
