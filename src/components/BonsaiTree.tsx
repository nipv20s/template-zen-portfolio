import React from 'react';

interface BonsaiTreeProps {
  isSlashed: boolean;
}

const BonsaiTree: React.FC<BonsaiTreeProps> = ({ isSlashed }) => {
  return (
    <div className={`relative transition-all duration-700 ${isSlashed ? 'filter drop-shadow-2xl' : ''}`}>
      {/* Pot */}
      <div className="relative z-10">
        <div className="w-48 h-16 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-lg relative mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-lg opacity-50" />
          <div className="absolute top-2 left-4 right-4 h-2 bg-amber-600 rounded-full opacity-30" />
        </div>
        <div className="w-52 h-8 bg-gradient-to-b from-amber-900 to-stone-800 rounded-b-xl mx-auto -mt-1" />
      </div>

      {/* Soil */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-44 h-4 bg-gradient-to-r from-amber-900 to-stone-700 rounded-full z-10" />

      {/* Tree trunk and branches */}
      <svg 
        className="absolute top-4 left-1/2 -translate-x-1/2 z-20" 
        width="200" 
        height="280" 
        viewBox="0 0 200 280"
      >
        {/* Main trunk */}
        <path
          d="M100 260 Q95 240 98 220 Q102 200 96 180 Q90 160 94 140 Q98 120 92 100 Q88 80 90 60"
          stroke="#4a3728"
          strokeWidth="8"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '4s' }}
        />

        {/* Main branches */}
        <path
          d="M94 140 Q80 135 70 125 Q60 115 55 105"
          stroke="#5d4e37"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M96 180 Q110 175 120 165 Q130 155 135 145"
          stroke="#5d4e37"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M90 100 Q75 95 65 85 Q55 75 50 65"
          stroke="#5d4e37"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M92 120 Q107 115 117 105 Q127 95 132 85"
          stroke="#5d4e37"
          strokeWidth="3"
          fill="none"
        />

        {/* Secondary branches */}
        <path
          d="M55 105 Q45 100 40 95"
          stroke="#6b5b47"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M135 145 Q145 140 150 135"
          stroke="#6b5b47"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M50 65 Q40 60 35 55"
          stroke="#6b5b47"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M132 85 Q142 80 147 75"
          stroke="#6b5b47"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Leaves clusters */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
        {/* Left cluster */}
        <div className="absolute top-16 -left-20 transform -rotate-12">
          <div className="relative">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full opacity-80 animate-pulse"
                style={{
                  left: `${(i % 4) * 8 - 12}px`,
                  top: `${Math.floor(i / 4) * 6 - 6}px`,
                  transform: `rotate(${Math.random() * 30 - 15}deg)`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Center top cluster */}
        <div className="absolute top-0 left-0 transform rotate-6">
          <div className="relative">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-1 bg-gradient-to-r from-green-700 to-green-600 rounded-full opacity-85 animate-pulse"
                style={{
                  left: `${(i % 4) * 10 - 15}px`,
                  top: `${Math.floor(i / 4) * 7 - 10}px`,
                  transform: `rotate(${Math.random() * 40 - 20}deg)`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Right cluster */}
        <div className="absolute top-12 left-16 transform rotate-12">
          <div className="relative">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full opacity-80 animate-pulse"
                style={{
                  left: `${(i % 4) * 9 - 12}px`,
                  top: `${Math.floor(i / 4) * 6 - 8}px`,
                  transform: `rotate(${Math.random() * 35 - 17}deg)`,
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '3.5s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom left cluster */}
        <div className="absolute top-32 -left-16 transform -rotate-6">
          <div className="relative">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full opacity-75 animate-pulse"
                style={{
                  left: `${(i % 3) * 7 - 7}px`,
                  top: `${Math.floor(i / 3) * 5 - 5}px`,
                  transform: `rotate(${Math.random() * 25 - 12}deg)`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom right cluster */}
        <div className="absolute top-28 left-12 transform rotate-8">
          <div className="relative">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full opacity-80 animate-pulse"
                style={{
                  left: `${(i % 3) * 8 - 8}px`,
                  top: `${Math.floor(i / 3) * 6 - 6}px`,
                  transform: `rotate(${Math.random() * 30 - 15}deg)`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '3.5s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gentle glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-green-100/20 via-transparent to-transparent rounded-full blur-xl animate-pulse" 
           style={{ animationDuration: '6s' }} />
    </div>
  );
};

export default BonsaiTree;