'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX, Keyboard, Sparkles } from 'lucide-react';
import { sound } from '@/lib/sound';

export function StudioControls() {
  const [isMuted, setIsMuted] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sound.setMuted(nextMuted);
    if (!nextMuted) {
      sound.playPop();
    }
  };

  return (
    <header className="w-full max-w-6xl mx-auto px-3 sm:px-5 py-1 sm:py-1.5 flex items-center justify-between z-50 text-neutral-200 select-none">
      {/* Studio Header Brand */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-amber-400 text-neutral-950 font-marker flex items-center justify-center text-sm shadow-md border border-neutral-900 font-extrabold">
          HM
        </div>
        <div>
          <div className="font-sketch font-extrabold text-sm sm:text-base tracking-wider text-amber-200 leading-tight">
            Hiral&apos;s Sketchbook
          </div>
          <div className="font-caveat text-xs sm:text-sm text-neutral-300 hidden sm:block font-bold">
            CS Undergrad • Machine Learning • IoT Builder
          </div>
        </div>
      </div>

      {/* Control Buttons Container (Self-Contained Floating Island) */}
      <div className="flex items-center gap-1.5 p-1 bg-[#181615]/90 backdrop-blur-md border border-neutral-700/80 rounded-lg shadow-lg">
        {/* Keyboard Shortcuts Helper Button */}
        <button
          onClick={() => {
            sound.playPop();
            setShowHelp(!showHelp);
          }}
          className="flex items-center gap-1.5 px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 rounded-md font-sketch text-xs sm:text-sm font-bold text-neutral-100 cursor-pointer shadow-xs transition-colors"
          title="Keyboard shortcuts"
        >
          <Keyboard className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline">Shortcuts</span>
        </button>

        {/* Audio Mute/Unmute */}
        <button
          onClick={toggleSound}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border font-sketch text-xs sm:text-sm font-bold cursor-pointer shadow-xs transition-all ${isMuted
              ? 'bg-neutral-800 text-neutral-300 border-neutral-600'
              : 'bg-amber-400/25 text-amber-200 border-amber-400/50'
            }`}
          title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          <span className="hidden sm:inline">{isMuted ? 'Muted' : 'Sound ON'}</span>
        </button>
      </div>

      {/* Keyboard Shortcuts Modal */}
      {showHelp && (
        <div
          onClick={() => setShowHelp(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#1e1c1a] border-2 border-amber-400/50 p-4 rounded-lg text-neutral-200 shadow-2xl space-y-3"
          >
            <div className="flex items-center justify-between border-b border-neutral-700 pb-2">
              <h4 className="font-marker text-base text-amber-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Sketchbook Controls</span>
              </h4>
              <button
                onClick={() => setShowHelp(false)}
                className="text-neutral-400 hover:text-white text-xs font-mono font-bold"
              >
                [ESC]
              </button>
            </div>

            <div className="space-y-2 font-sketch text-xs sm:text-sm">
              <div className="flex justify-between items-center py-0.5 border-b border-neutral-800">
                <span className="text-neutral-200 font-semibold">Turn Next Page (3D Flip)</span>
                <kbd className="px-2 py-0.5 bg-neutral-800 rounded font-mono text-amber-300 text-xs font-bold">➔</kbd>
              </div>
              <div className="flex justify-between items-center py-0.5 border-b border-neutral-800">
                <span className="text-neutral-200 font-semibold">Turn Previous Page</span>
                <kbd className="px-2 py-0.5 bg-neutral-800 rounded font-mono text-amber-300 text-xs font-bold">⬅</kbd>
              </div>
              <div className="flex justify-between items-center py-0.5 border-b border-neutral-800">
                <span className="text-neutral-200 font-semibold">Close to Cover</span>
                <kbd className="px-2 py-0.5 bg-neutral-800 rounded font-mono text-amber-300 text-xs font-bold">ESC</kbd>
              </div>
              <div className="flex justify-between items-center py-0.5">
                <span className="text-neutral-200 font-semibold">Top Index Bookmark Tabs</span>
                <span className="text-amber-300 text-xs font-bold">Direct 3D Jump</span>
              </div>
            </div>

            <button
              onClick={() => setShowHelp(false)}
              className="w-full py-1.5 bg-amber-400 text-neutral-950 font-marker text-sm rounded cursor-pointer hover:bg-amber-300 transition-colors font-bold"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
