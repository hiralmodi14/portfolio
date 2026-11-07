'use client';

import React from 'react';

interface SpiralBindingProps {
  type?: 'left' | 'center';
  ringsCount?: number;
}

export function SpiralBinding({ type = 'left', ringsCount = 18 }: SpiralBindingProps) {
  const rings = Array.from({ length: ringsCount }, (_, i) => i);

  if (type === 'center') {
    // Center spine spiral for open two-page spread
    return (
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 z-30 pointer-events-none flex flex-col justify-between py-4 sm:py-6 hidden md:flex">
        {/* Subtle narrow Center Spine Shadow Gutter */}
        <div className="absolute inset-y-0 -left-2 -right-2 bg-gradient-to-r from-black/10 via-black/25 to-black/10 pointer-events-none" />

        {rings.map((i) => (
          <div key={i} className="relative w-full h-6 sm:h-7 flex items-center justify-center">
            {/* Left page punch hole */}
            <div className="absolute left-0 w-2.5 h-3.5 rounded-full bg-[#181615] shadow-inner border border-black/40" />
            {/* Right page punch hole */}
            <div className="absolute right-0 w-2.5 h-3.5 rounded-full bg-[#181615] shadow-inner border border-black/40" />
            
            {/* Spiral Ring Loop (3D Double Wire Effect) */}
            <svg viewBox="0 0 54 24" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]">
              {/* Back wire shadow */}
              <ellipse cx="27" cy="14" rx="20" ry="6" stroke="rgba(0,0,0,0.25)" strokeWidth="2.5" fill="none" />
              {/* Main metallic ring */}
              <path
                d="M 6 12 C 10 4, 44 4, 48 12 C 44 20, 10 20, 6 12"
                stroke="#2a2825"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Metallic highlight */}
              <path
                d="M 12 7 C 22 4, 32 4, 42 7"
                stroke="#706c66"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        ))}
      </div>
    );
  }

  // Left spine spiral for closed sketchbook cover
  return (
    <div className="absolute top-0 bottom-0 -left-5 sm:-left-6 w-10 sm:w-12 z-30 pointer-events-none flex flex-col justify-between py-4 sm:py-6">
      {/* Spine drop shadow */}
      <div className="absolute inset-y-0 left-3 w-4 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />

      {rings.map((i) => (
        <div key={i} className="relative w-full h-6 sm:h-7 flex items-center">
          {/* Cover punch hole */}
          <div className="absolute left-5 sm:left-6 w-2.5 sm:w-3.5 h-3.5 sm:h-4.5 rounded-full bg-[#181615] shadow-inner border border-black/50" />

          {/* Left spiral ring looping around edge */}
          <svg viewBox="0 0 50 26" className="w-full h-full drop-shadow-[0_3px_5px_rgba(0,0,0,0.4)]">
            {/* Under-ring shadow */}
            <path
              d="M 2 13 C 6 22, 28 22, 32 13"
              stroke="rgba(0,0,0,0.25)"
              strokeWidth="4"
              fill="none"
            />
            {/* Main dark metal coil */}
            <path
              d="M 32 13 C 28 3, 4 3, 2 13 C 4 23, 28 23, 32 13"
              stroke="#1f1e1c"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Metallic specular highlight */}
            <path
              d="M 6 8 C 12 5, 22 5, 28 8"
              stroke="#706c66"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
