import React from 'react';

interface SlashEffectProps {
  x: number;
  y: number;
  angle: number;
}

const SlashEffect: React.FC<SlashEffectProps> = ({ x, y, angle }) => {
  return (
    <div
      className="absolute pointer-events-none z-50"
      style={{
        left: x,
        top: y,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`
      }}
    >
      {/* Main crack */}
      <div className="relative">
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-flash" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-flash"
             style={{ animationDelay: '0.1s' }} />
        
        {/* Dimensional rift effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-8 -translate-y-1/2">
          <div className="w-full h-full bg-gradient-to-r from-indigo-600/20 via-purple-600/30 to-pink-600/20 blur-sm animate-pulse rounded-full" />
        </div>

        {/* Sparks */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${20 + i * 15}px`,
              top: `${-2 + (Math.random() - 0.5) * 4}px`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '0.5s'
            }}
          />
        ))}
      </div>

      {/* Shockwave */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-purple-400 rounded-full animate-ping opacity-75" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-blue-400 rounded-full animate-ping opacity-50"
           style={{ animationDelay: '0.2s' }} />
    </div>
  );
};

export default SlashEffect;