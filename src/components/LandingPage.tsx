import React, { useState, useRef } from 'react';
import BonsaiTree from './BonsaiTree';
import SlashEffect from './SlashEffect';

interface LandingPageProps {
  onNavigateToPortfolio: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToPortfolio }) => {
  const [slashes, setSlashes] = useState<Array<{ id: number; x: number; y: number; angle: number }>>([]);
  const [isSlashing, setIsSlashing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSlash = (event: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const angle = Math.random() * 360;

    const newSlash = {
      id: Date.now(),
      x,
      y,
      angle
    };

    setSlashes(prev => [...prev, newSlash]);
    setIsSlashing(true);

    // Remove slash after animation
    setTimeout(() => {
      setSlashes(prev => prev.filter(slash => slash.id !== newSlash.id));
    }, 2000);

    setTimeout(() => {
      setIsSlashing(false);
    }, 500);
  };

  const handleTreeClick = () => {
    setTimeout(() => {
      onNavigateToPortfolio();
    }, 300);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-100 to-amber-50 relative overflow-hidden cursor-crosshair"
      onMouseDown={handleSlash}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-200 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Zen circle background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-green-100/20 to-emerald-100/20 blur-3xl animate-pulse" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center mb-8 fade-in">
          <h1 className="text-6xl font-light text-stone-800 mb-4 tracking-wide">
            静寂
          </h1>
          <p className="text-xl text-stone-600 font-light tracking-wider">
            Serenity
          </p>
        </div>

        {/* Bonsai Tree Container */}
        <div 
          className={`relative transition-all duration-500 ${isSlashing ? 'scale-105 brightness-110' : ''}`}
          onClick={handleTreeClick}
        >
          <BonsaiTree isSlashed={slashes.length > 0} />
          
          {/* Click hint */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-stone-500 text-sm font-light animate-pulse">
            Click to enter
          </div>
        </div>

        {/* Slash effects */}
        {slashes.map(slash => (
          <SlashEffect
            key={slash.id}
            x={slash.x}
            y={slash.y}
            angle={slash.angle}
          />
        ))}
      </div>

      {/* Subtle zen quote */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-stone-400 text-sm font-light italic">
          "The quieter you become, the more you are able to hear"
        </p>
      </div>
    </div>
  );
};

export default LandingPage;