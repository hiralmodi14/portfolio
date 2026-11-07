'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { sound } from '@/lib/sound';

interface ElasticBandProps {
  isOpening?: boolean;
  onSnap?: () => void;
}

export function ElasticBand({ isOpening = false, onSnap }: ElasticBandProps) {
  return (
    <motion.div
      onClick={() => {
        sound.playElasticSnap();
        onSnap?.();
      }}
      initial={{ x: 0, opacity: 1, scaleY: 1 }}
      animate={
        isOpening
          ? {
              x: 90,
              rotate: 15,
              opacity: 0,
              scaleY: 1.1,
              transition: { duration: 0.45, ease: 'easeInOut' },
            }
          : {
              x: 0,
              rotate: 0,
              opacity: 1,
              scaleY: 1,
            }
      }
      whileHover={{ scaleX: 1.1, x: 2 }}
      className="absolute top-0 bottom-0 right-6 sm:right-9 w-6 sm:w-7 z-40 cursor-pointer group select-none"
      title="Click to snap release elastic band"
    >
      {/* Elastic Band Strap */}
      <div className="w-full h-full bg-[#181615] rounded-xs shadow-[inset_0_0_4px_rgba(255,255,255,0.15),0_4px_12px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-around py-4 transition-transform">
        {/* Ridge stitch lines */}
        <div className="absolute inset-y-0 left-1 w-px bg-white/15" />
        <div className="absolute inset-y-0 right-1 w-px bg-black/60" />

        {/* Small pull tab hint */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-3 bg-amber-400 text-neutral-900 text-[10px] font-marker px-1.5 py-0.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          SNAP!
        </div>
      </div>
    </motion.div>
  );
}
