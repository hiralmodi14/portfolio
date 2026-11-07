'use client';

import React from 'react';
import { Sketchbook } from '@/components/book/Sketchbook';
import { StudioControls } from '@/components/ui/StudioControls';

export default function Home() {
  return (
    <main className="relative min-h-screen md:h-screen w-full bg-[#191613] flex flex-col justify-between overflow-x-hidden overflow-y-auto md:overflow-hidden p-1 sm:p-2">
      {/* Studio Ambient Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2d251d] via-[#1a1613] to-[#0f0d0b] pointer-events-none" />

      {/* Top Studio Controls */}
      <div className="relative z-20 shrink-0">
        <StudioControls />
      </div>

      {/* Center Sketchbook Area */}
      <div className="relative z-10 flex-1 flex items-center justify-center min-h-0 w-full px-1 sm:px-2 py-0.5 my-auto">
        <Sketchbook />
      </div>

      {/* Studio Desk Footer */}
      <footer className="relative z-20 shrink-0 py-1 px-2 text-center text-neutral-400 font-sketch text-[10px] sm:text-xs select-none">
        <p className="flex items-center justify-center gap-1 sm:gap-1.5 flex-wrap">
          <span>Crafted with craft paper, Web Audio &amp; Next.js by</span>
          <span className="font-bold text-amber-300">Hiral Modi</span>
          <span>•</span>
          <span className="text-neutral-500">All rights reserved © 2026</span>
        </p>
      </footer>
    </main>
  );
}
