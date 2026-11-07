'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  LaptopDoodle,
  CoffeeMugDoodle,
  HeadphonesDoodle,
  CrownDoodle,
  StarDoodle,
  HeartDoodle,
  LightbulbDoodle,
} from '@/components/doodles/DoodleAssets';
import { SpiralBinding } from '@/components/book/SpiralBinding';
import { sound } from '@/lib/sound';

interface CoverPageProps {
  onOpen: () => void;
  isOpening?: boolean;
}

interface ExactCoverData {
  titleLine1: string;
  titleLine2: string;
  roleTags: string[];
  versionTag: string;
  thingsILove: { id: string; text: string; checked: boolean }[];
  quoteLine1: string;
  quoteLine1Highlight: string;
  quoteLine2: string;
  quoteLine2Highlight: string;
  workflowSteps: string[];
  calloutText: string;
}

const DEFAULT_COVER_DATA: ExactCoverData = {
  titleLine1: 'HIRAL',
  titleLine2: 'MODI',
  roleTags: ['ENGINEER', 'CODER', 'OPEN SOURCE CONTRIBUTOR'],
  versionTag: 'VERSION 3.0',
  thingsILove: [
    { id: 't1', text: 'Turning ideas into real things', checked: false },
    { id: 't2', text: 'Open source (OWASP BLT contributor)', checked: false },
    { id: 't3', text: 'AI Security & Cyber Ranges', checked: false },
    { id: 't4', text: 'Wearables, Raspberry Pi & IoT', checked: false },
    { id: 't5', text: 'Docker, Linux & Python', checked: false },
    { id: 't6', text: 'Solving hard problems', checked: false },
  ],
  quoteLine1: 'TURNING IDEAS INTO',
  quoteLine1Highlight: 'WORKING CODE.',
  quoteLine2: 'SOLVING HARD PROBLEMS WITH',
  quoteLine2Highlight: 'REAL IMPACT.',
  workflowSteps: ['Ideas', '> Code', '> Impact'],
  calloutText: "Let's build something\ngreat together.  :)",
};

const STORAGE_KEY = 'hiral_resume_mockup_cover_data_v7';

export function CoverPage({ onOpen, isOpening = false }: CoverPageProps) {
  const [data, setData] = useState<ExactCoverData>(DEFAULT_COVER_DATA);
  const [isHeadphonePlaying, setIsHeadphonePlaying] = useState(false);

  const toggleLoveItem = (id: string) => {
    sound.playPop();
    setData((prev) => ({
      ...prev,
      thingsILove: prev.thingsILove.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  const handleHeadphoneClick = () => {
    sound.playLoFiBeat();
    setIsHeadphonePlaying(true);
    setTimeout(() => {
      setIsHeadphonePlaying(false);
    }, 3200);
  };

  const handleOpenBook = () => {
    sound.playElasticSnap();
    setTimeout(() => {
      sound.playPageFlip();
    }, 150);
    onOpen();
  };

  const roleTagsList = data.roleTags;
  const loveItemsList = data.thingsILove;

  return (
    <div className="relative w-full max-w-[440px] sm:max-w-[500px] md:max-w-[560px] h-[calc(100dvh-100px)] min-h-[540px] max-h-[700px] md:h-auto md:min-h-0 md:aspect-[3/4.2] md:max-h-[calc(100vh-80px)] paper-texture-kraft rounded-2xl book-shadow border-4 border-[#2b2723] overflow-hidden select-none p-3.5 sm:p-5 md:p-5 flex flex-col justify-between transition-all duration-300 mx-auto">
      {/* Left Double-Loop Spiral Wire Binding */}
      <SpiralBinding type="left" ringsCount={16} />

      {/* Right Vertical Black Elastic Bookmark Band */}
      <div className="absolute top-0 bottom-0 right-3 sm:right-5 w-2.5 sm:w-3.5 bg-[#141210] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),0_0_8px_rgba(0,0,0,0.6)] z-30 pointer-events-none border-x border-[#2d2824]" />

      {/* Atmospheric Stains & Warm Tone */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-amber-900/10 pointer-events-none" />

      {/* ================= 1. TOP HEADER & ACCENTS ================= */}
      <div className="relative z-10 flex items-start justify-between pl-5 sm:pl-7 pr-6 sm:pr-8 pt-0.5">
        {/* TOP-LEFT: Pink Watercolor Wash with Slanted Text */}
        <div className="flex items-start">
          <div className="relative transform rotate-[-7deg] origin-top-left -mt-0.5">
            <div className="absolute -inset-1.5 sm:-inset-2 bg-[#fca5a5]/55 blur-[2px] rounded-[60%_40%_70%_30%/40%_60%_30%_70%] pointer-events-none" />
            <div className="relative z-10 font-sketch font-bold text-[10px] sm:text-xs tracking-widest text-[#181615] uppercase leading-tight">
              <div>
                {roleTagsList.map((tag, idx) => (
                  <div key={idx} className="block">
                    {tag}
                  </div>
                ))}
                <div className="w-14 sm:w-18 h-0.5 bg-[#181615] mt-0.5" />
              </div>
            </div>
          </div>
        </div>

        {/* TOP-CENTER: Crown & Star Doodles */}
        <div className="flex items-center gap-1.5 sm:gap-2 pt-0.5">
          <motion.div
            animate={{ y: [-1, 2, -1], rotate: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-neutral-900"
          >
            <CrownDoodle className="w-6 sm:w-7 h-4 sm:h-5" />
          </motion.div>

          <div className="text-pink-500 transform rotate-12">
            <StarDoodle className="w-4 sm:w-5 h-4 sm:h-5 text-pink-500" />
          </div>
        </div>

        {/* TOP-RIGHT: Yellow Sticky Note with Lightbulb & Heart */}
        <div className="flex items-start">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative w-11 sm:w-13 aspect-square bg-[#fef08a] rounded-xs shadow-md border border-neutral-400/60 p-0.5 flex flex-col items-center justify-center transform rotate-[4deg]"
          >
            <div className="absolute -top-1 left-1.5 w-6 sm:w-8 h-2.5 washi-tape washi-tape-yellow opacity-85 rotate-[-2deg]" />
            <div className="flex items-center justify-center gap-0.5 mt-0.5">
              <LightbulbDoodle className="w-5 sm:w-6 h-6 sm:h-7 text-neutral-900" />
              <HeartDoodle className="w-2.5 h-2.5 text-red-500 -mt-1 -ml-0.5" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= 2. MASTHEAD CENTERPIECE & QUOTE ================= */}
      <div className="relative z-10 flex flex-col items-center text-center justify-center pl-5 sm:pl-7 pr-6 sm:pr-8 my-auto py-1">
        {/* Main Watercolor Splash Masthead */}
        <div className="relative inline-block my-0.5 px-6 sm:px-10 py-1.5 sm:py-2 transform rotate-[-2deg]">
          <div className="absolute inset-x-0 top-1 bottom-1 bg-gradient-to-r from-transparent via-[#facc15] to-transparent opacity-95 rounded-[300px_30px_320px_25px/30px_320px_25px_300px] pointer-events-none scale-105 shadow-xs" />
          <div className="absolute inset-x-3 top-1.5 bottom-1.5 bg-[#eab308]/80 blur-xs rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <h1 className="font-marker text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#181615] drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] leading-none uppercase">
              {data.titleLine1 || DEFAULT_COVER_DATA.titleLine1}
            </h1>
            <h1 className="font-marker text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#181615] drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] leading-none uppercase mt-0.5">
              {data.titleLine2 || DEFAULT_COVER_DATA.titleLine2}
            </h1>
          </div>
        </div>

        {/* Hand-Drawn Downward Swooping Arrow */}
        <div className="relative w-28 sm:w-36 h-4 my-0.5">
          <svg viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-neutral-900">
            <path d="M10 8 C60 18, 140 18, 185 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M185 8 C195 12, 192 22, 180 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M180 26 L186 20 M180 26 L188 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Two-Tone Quote */}
        <div className="font-sketch font-bold text-[11px] sm:text-xs text-neutral-900 space-y-0.5">
          <div>
            <span>{data.quoteLine1 || DEFAULT_COVER_DATA.quoteLine1} </span>
            <span className="relative text-[#2563eb] inline-block font-extrabold">
              {data.quoteLine1Highlight || DEFAULT_COVER_DATA.quoteLine1Highlight}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563eb]" />
            </span>
          </div>
          <div>
            <span>{data.quoteLine2 || DEFAULT_COVER_DATA.quoteLine2} </span>
            <span className="relative text-[#dc2626] inline-block font-extrabold">
              {data.quoteLine2Highlight || DEFAULT_COVER_DATA.quoteLine2Highlight}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#dc2626]" />
            </span>
          </div>
        </div>
      </div>

      {/* ================= 3. THINGS I LOVE BLUEPRINT CARD ================= */}
      <div className="relative z-10 pl-5 sm:pl-7 pr-6 sm:pr-8 my-auto">
        <motion.div
          whileHover={{ rotate: 0, scale: 1.01 }}
          className="relative w-full p-2.5 sm:p-3 bg-[#fefdfb] border-2 border-[#1d4ed8] rounded-xs shadow-md transform rotate-[-1deg]"
        >
          {/* Top Right Decorative Washi Tape */}
          <div className="absolute -top-2 right-4 w-12 sm:w-14 h-3 washi-tape washi-tape-blue rotate-2" />

          {/* Card Header with Icon */}
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#1d4ed8]/30">
            <div className="font-sketch font-extrabold text-[11px] sm:text-xs text-[#1d4ed8] tracking-wider flex items-center gap-1">
              <span>THINGS I LOVE</span>
              <span className="text-rose-500 text-[11px]">❤️</span>
            </div>
            <span className="font-mono text-[9px] text-neutral-500 font-bold">CLICK TO CHECK</span>
          </div>

          {/* Interactive Checkable Items (Compact Grid on Portrait Cover) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1">
            {loveItemsList.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleLoveItem(item.id)}
                className="flex items-center gap-1.5 text-[10.5px] sm:text-[11.5px] font-sketch text-neutral-950 font-bold cursor-pointer hover:text-blue-700 transition-colors group select-none"
              >
                <motion.span
                  whileTap={{ scale: 0.85 }}
                  className={`w-3.5 h-3.5 rounded-xs border-2 border-neutral-900 flex items-center justify-center text-[9px] font-black shrink-0 transition-all ${item.checked ? 'bg-amber-400 text-neutral-950 shadow-xs' : 'bg-white group-hover:border-blue-600'
                    }`}
                >
                  {item.checked ? '✓' : ''}
                </motion.span>
                <span className={`leading-snug truncate transition-all ${item.checked ? 'line-through opacity-60 text-neutral-600' : 'group-hover:translate-x-0.5'}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Perched Gold Star */}
          <div className="absolute -bottom-2.5 -right-1.5 text-amber-500 transform rotate-12 drop-shadow-xs">
            <StarDoodle className="w-4 h-4 text-amber-500" filled />
          </div>
        </motion.div>
      </div>

      {/* ================= 4. DOODLE ACCENTS & WORKFLOW ROW ================= */}
      <div className="relative z-10 flex items-center justify-between pl-5 sm:pl-7 pr-6 sm:pr-8 py-1">
        {/* Left: Laptop & Steaming Coffee Mug */}
        <div className="flex items-end gap-1.5 relative">
          <motion.div whileHover={{ scale: 1.05 }} className="relative text-neutral-900 z-10">
            <LaptopDoodle className="w-22 sm:w-28 h-15 sm:h-19" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.12, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative text-neutral-900 z-20 cursor-pointer -ml-1"
            onClick={() => sound.playPop()}
            title="Click coffee mug for fresh brew!"
          >
            <CoffeeMugDoodle className="w-9 sm:w-11 h-12 sm:h-15" />
          </motion.div>
        </div>

        {/* Right: Headphones & Workflow */}
        <div className="flex items-center gap-1.5 relative">
          <motion.div
            whileHover={{ scale: 1.12, rotate: 3 }}
            whileTap={{ scale: 0.92 }}
            animate={isHeadphonePlaying ? { y: [0, -3, 0], rotate: [-2, 3, -2] } : {}}
            transition={{ duration: 0.6, repeat: isHeadphonePlaying ? Infinity : 0 }}
            onClick={handleHeadphoneClick}
            className="text-neutral-900 cursor-pointer relative"
            title="Click headphones for Lo-Fi coding beats! ♫"
          >
            <HeadphonesDoodle className="w-22 sm:w-28 h-18 sm:h-22" isPlaying={isHeadphonePlaying} />

            {/* Floating Now Playing Lo-Fi Badge */}
            {isHeadphonePlaying && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -top-7 -left-5 bg-neutral-900 text-amber-300 font-mono text-[9px] font-black px-1.5 py-0.5 rounded-xs border border-amber-400 shadow-md whitespace-nowrap z-30 flex items-center gap-1 pointer-events-none animate-pulse"
              >
                <span>♫</span>
                <span>Lo-Fi Beats 🎧</span>
              </motion.div>
            )}
          </motion.div>

          <div className="font-sketch font-bold text-[10px] sm:text-[11px] text-neutral-900 leading-tight">
            <div>Ideas</div>
            <div className="text-neutral-700">&gt; Code</div>
            <div className="text-neutral-900">&gt; Impact</div>
          </div>
        </div>
      </div>

      {/* ================= 5. OPEN THE SKETCHBOOK CTA BUTTON ================= */}
      <div className="relative z-10 flex flex-col items-center justify-center pl-5 sm:pl-7 pr-6 sm:pr-8 pb-1">
        <div className="relative inline-block w-full text-center">
          <motion.button
            onClick={handleOpenBook}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative w-full max-w-[340px] px-5 sm:px-7 py-2 sm:py-2.5 bg-[#181615] hover:bg-[#292524] text-white font-sketch font-extrabold text-xs sm:text-sm tracking-widest uppercase rounded-[120px_8px_140px_10px/8px_140px_10px_120px] shadow-lg cursor-pointer flex items-center justify-center gap-2 border-2 border-neutral-900 transition-all group mx-auto"
          >
            <span className="text-amber-100 group-hover:underline">OPEN THE SKETCHBOOK</span>
            <span className="text-amber-300 font-bold text-sm sm:text-base group-hover:translate-x-1 transition-transform">➔</span>
          </motion.button>

          <div className="w-32 sm:w-44 h-1.5 bg-pink-400/70 blur-[1px] rounded-full mx-auto mt-1 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
