'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpiralBinding } from '@/components/book/SpiralBinding';
import { BookmarkTabs } from '@/components/book/BookmarkTabs';
import {
  Page1_About,
  Page2_HowIBuild,
  Page3_Projects1,
  Page4_Projects2,
  Page5_TechStack1,
  Page6_TechStack2,
  Page7_Journey1,
  Page8_Journey2,
  Page9_Collab,
  Page10_Postcard,
  ProjectItem,
} from '@/components/pages/BookPages';
import { sound } from '@/lib/sound';
import { ChevronLeft, ChevronRight, BookOpen, BookCheck, Layers, X } from 'lucide-react';

interface PageFlipSpreadProps {
  currentSpread: number;
  totalSpreads: number;
  onSpreadChange: (newSpread: number) => void;
  onCloseBook: () => void;
}

export function PageFlipSpread({
  currentSpread,
  totalSpreads,
  onSpreadChange,
  onCloseBook,
}: PageFlipSpreadProps) {
  // Mobile single-page state (1 to 10)
  const [mobilePage, setMobilePage] = useState(currentSpread * 2 + 1);

  // Sync mobile page with spread index
  useEffect(() => {
    setMobilePage(currentSpread * 2 + 1);
  }, [currentSpread]);

  // Flip animation states for desktop
  const [flippingState, setFlippingState] = useState<{
    isFlipping: boolean;
    direction: 'next' | 'prev';
    fromSpread: number;
    toSpread: number;
  }>({
    isFlipping: false,
    direction: 'next',
    fromSpread: currentSpread,
    toSpread: currentSpread,
  });

  const [selectedSchematic, setSelectedSchematic] = useState<ProjectItem | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    // 45px swipe threshold
    if (diff > 45) {
      goToNextMobile();
    } else if (diff < -45) {
      goToPrevMobile();
    }
    setTouchStartX(null);
  };

  const getMobilePageLabel = (page: number) => {
    switch (page) {
      case 1: return 'About Me';
      case 2: return 'Core Pillars';
      case 3: return 'Skills Arsenal';
      case 4: return 'Specifications';
      case 5: return 'Featured Builds';
      case 6: return 'PRISM AutoML';
      case 7: return 'Journey Map';
      case 8: return 'OWASP BLT & Honors';
      case 9: return 'Send Message';
      case 10: return 'Postcard & Resume';
      default: return '';
    }
  };

  const triggerFlip = (targetSpread: number) => {
    if (flippingState.isFlipping || targetSpread === currentSpread) return;
    if (targetSpread < 0 || targetSpread >= totalSpreads) return;

    const dir = targetSpread > currentSpread ? 'next' : 'prev';
    sound.playPageFlip();

    setFlippingState({
      isFlipping: true,
      direction: dir,
      fromSpread: currentSpread,
      toSpread: targetSpread,
    });
  };

  const goToNextDesktop = () => {
    if (currentSpread < totalSpreads - 1) {
      triggerFlip(currentSpread + 1);
    }
  };

  const goToPrevDesktop = () => {
    if (currentSpread > 0) {
      triggerFlip(currentSpread - 1);
    } else {
      onCloseBook();
    }
  };

  // Mobile navigation handlers
  const goToNextMobile = () => {
    sound.playPageFlip();
    if (mobilePage < 10) {
      const nextPage = mobilePage + 1;
      setMobilePage(nextPage);
      onSpreadChange(Math.floor((nextPage - 1) / 2));
    } else {
      onCloseBook();
    }
  };

  const goToPrevMobile = () => {
    sound.playPageFlip();
    if (mobilePage > 1) {
      const prevPage = mobilePage - 1;
      setMobilePage(prevPage);
      onSpreadChange(Math.floor((prevPage - 1) / 2));
    } else {
      onCloseBook();
    }
  };

  const handleFlipComplete = () => {
    const nextSpread = flippingState.toSpread;
    onSpreadChange(nextSpread);
    setFlippingState({
      isFlipping: false,
      direction: 'next',
      fromSpread: nextSpread,
      toSpread: nextSpread,
    });
  };

  const renderLeftPage = (spreadIdx: number) => {
    switch (spreadIdx) {
      case 0: return <Page1_About />;
      case 1: return <Page5_TechStack1 />;
      case 2: return <Page3_Projects1 onOpenSchematic={(p) => { sound.playPop(); setSelectedSchematic(p); }} />;
      case 3: return <Page7_Journey1 />;
      case 4: return <Page9_Collab />;
      default: return null;
    }
  };

  const renderRightPage = (spreadIdx: number) => {
    switch (spreadIdx) {
      case 0: return <Page2_HowIBuild />;
      case 1: return <Page6_TechStack2 />;
      case 2: return <Page4_Projects2 onOpenSchematic={(p) => { sound.playPop(); setSelectedSchematic(p); }} />;
      case 3: return <Page8_Journey2 />;
      case 4: return <Page10_Postcard />;
      default: return null;
    }
  };

  const renderSingleMobilePage = (pageNum: number) => {
    switch (pageNum) {
      case 1: return <Page1_About />;
      case 2: return <Page2_HowIBuild />;
      case 3: return <Page5_TechStack1 />;
      case 4: return <Page6_TechStack2 />;
      case 5: return <Page3_Projects1 onOpenSchematic={(p) => { sound.playPop(); setSelectedSchematic(p); }} />;
      case 6: return <Page4_Projects2 onOpenSchematic={(p) => { sound.playPop(); setSelectedSchematic(p); }} />;
      case 7: return <Page7_Journey1 />;
      case 8: return <Page8_Journey2 />;
      case 9: return <Page9_Collab />;
      case 10: return <Page10_Postcard />;
      default: return <Page1_About />;
    }
  };

  const getSpreadTitle = (index: number) => {
    switch (index) {
      case 0: return 'About Me & Methodology';
      case 1: return 'Skills & Technologies';
      case 2: return 'Featured Projects';
      case 3: return 'Experience & Open Source';
      case 4: return 'Contact & Connect';
      default: return '';
    }
  };

  return (
    <div className="relative w-full max-w-[440px] sm:max-w-[500px] md:max-w-[1220px] xl:max-w-[1300px] h-[calc(100dvh-100px)] min-h-[540px] max-h-[700px] md:h-auto md:min-h-0 md:aspect-[16/9.6] md:max-h-[calc(100vh-80px)] flex flex-col justify-between select-none pt-7 sm:pt-8 md:pt-9 mx-auto">
      {/* Top Bookmark Tabs */}
      <BookmarkTabs
        currentSpread={flippingState.isFlipping ? flippingState.toSpread : currentSpread}
        onSelectTab={(spreadIndex) => {
          if (spreadIndex === -1) {
            onCloseBook();
          } else {
            setMobilePage(spreadIndex * 2 + 1);
            triggerFlip(spreadIndex);
          }
        }}
      />

      {/* ================= CENTER EDGE NAVIGATION BUTTONS (< and >) - DESKTOP ONLY ================= */}
      {/* Left Center Edge Button: < (Previous Page) */}
      <motion.button
        onClick={goToPrevDesktop}
        disabled={flippingState.isFlipping}
        whileHover={{ scale: 1.15, x: -4 }}
        whileTap={{ scale: 0.9 }}
        className="hidden md:flex absolute -left-3 sm:-left-6 md:-left-7 top-1/2 -translate-y-1/2 z-50 w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#181615] hover:bg-[#2b2723] text-amber-300 border-2 border-amber-400/80 shadow-[0_6px_20px_rgba(0,0,0,0.45)] items-center justify-center font-marker text-base sm:text-xl md:text-2xl cursor-pointer transition-colors active:scale-95 disabled:opacity-50"
        title="Previous Page ( < )"
      >
        <span className="leading-none select-none -translate-x-0.5">&lt;</span>
      </motion.button>

      {/* Right Center Edge Button: > (Next Page) */}
      <motion.button
        onClick={goToNextDesktop}
        disabled={flippingState.isFlipping}
        whileHover={{ scale: 1.15, x: 4 }}
        whileTap={{ scale: 0.9 }}
        className="hidden md:flex absolute -right-3 sm:-right-6 md:-right-7 top-1/2 -translate-y-1/2 z-50 w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#181615] hover:bg-[#2b2723] text-amber-300 border-2 border-amber-400/80 shadow-[0_6px_20px_rgba(0,0,0,0.45)] items-center justify-center font-marker text-base sm:text-xl md:text-2xl cursor-pointer transition-colors active:scale-95 disabled:opacity-50"
        title="Next Page ( > )"
      >
        <span className="leading-none select-none translate-x-0.5">&gt;</span>
      </motion.button>

      {/* Master Book Container */}
      <div className="relative flex-1 w-full paper-texture-page rounded-2xl book-shadow border-4 border-[#2b2723] overflow-hidden flex flex-col perspective-container min-h-[480px]">
        {/* Left and Right Page Thickness Bevels */}
        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/35 via-black/10 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-black/35 via-black/10 to-transparent pointer-events-none z-20" />

        {/* Center Spine Spiral on Tablet/Desktop, Left Spiral on Mobile */}
        <div className="hidden md:block">
          <SpiralBinding type="center" ringsCount={18} />
        </div>
        <div className="block md:hidden">
          <SpiralBinding type="left" ringsCount={18} />
        </div>

        {/* ================= DESKTOP / TABLET DUAL-PAGE 3D SPREAD (md:flex) ================= */}
        <div className="hidden md:flex relative w-full h-full flex-1 preserve-3d overflow-hidden">
          {/* BASE STATIC LEFT PAGE */}
          <div className="w-1/2 h-full relative overflow-hidden bg-inherit border-r border-neutral-300/40">
            {flippingState.isFlipping && flippingState.direction === 'prev'
              ? renderLeftPage(flippingState.toSpread)
              : renderLeftPage(currentSpread)}
          </div>

          {/* BASE STATIC RIGHT PAGE */}
          <div className="w-1/2 h-full relative overflow-hidden bg-inherit border-l border-neutral-300/40">
            {flippingState.isFlipping && flippingState.direction === 'next'
              ? renderRightPage(flippingState.toSpread)
              : renderRightPage(currentSpread)}

            {/* Dynamic Cast Shadow */}
            {flippingState.isFlipping && flippingState.direction === 'next' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.45, 0] }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none z-10"
              />
            )}
          </div>

          {/* 3D ROTATING LEAF (FORWARD) */}
          {flippingState.isFlipping && flippingState.direction === 'next' && (
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: -180 }}
              transition={{ duration: 0.65, ease: [0.35, 0, 0.25, 1] }}
              onAnimationComplete={handleFlipComplete}
              style={{ transformOrigin: 'left center' }}
              className="absolute top-0 bottom-0 right-0 w-1/2 h-full preserve-3d z-30 shadow-2xl"
            >
              <div className="absolute inset-0 w-full h-full backface-hidden paper-texture-page overflow-hidden border-l border-neutral-300/50 shadow-md">
                {renderRightPage(flippingState.fromSpread)}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.6, 0.8] }}
                  transition={{ duration: 0.65 }}
                  className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/25 to-black/50 pointer-events-none"
                />
              </div>

              <div
                style={{ transform: 'rotateY(180deg)' }}
                className="absolute inset-0 w-full h-full backface-hidden paper-texture-page overflow-hidden border-r border-neutral-300/50 shadow-md"
              >
                {renderLeftPage(flippingState.toSpread)}
                <motion.div
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: [0.8, 0.3, 0] }}
                  transition={{ duration: 0.65 }}
                  className="absolute inset-0 bg-gradient-to-l from-black/30 via-white/10 to-transparent pointer-events-none"
                />
              </div>
            </motion.div>
          )}

          {/* 3D ROTATING LEAF (BACKWARD) */}
          {flippingState.isFlipping && flippingState.direction === 'prev' && (
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 180 }}
              transition={{ duration: 0.65, ease: [0.35, 0, 0.25, 1] }}
              onAnimationComplete={handleFlipComplete}
              style={{ transformOrigin: 'right center' }}
              className="absolute top-0 bottom-0 left-0 w-1/2 h-full preserve-3d z-30 shadow-2xl"
            >
              <div className="absolute inset-0 w-full h-full backface-hidden paper-texture-page overflow-hidden border-r border-neutral-300/50 shadow-md">
                {renderLeftPage(flippingState.fromSpread)}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.6, 0.8] }}
                  transition={{ duration: 0.65 }}
                  className="absolute inset-0 bg-gradient-to-l from-black/5 via-black/25 to-black/50 pointer-events-none"
                />
              </div>

              <div
                style={{ transform: 'rotateY(180deg)' }}
                className="absolute inset-0 w-full h-full backface-hidden paper-texture-page overflow-hidden border-l border-neutral-300/50 shadow-md"
              >
                {renderRightPage(flippingState.toSpread)}
                <motion.div
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: [0.8, 0.3, 0] }}
                  transition={{ duration: 0.65 }}
                  className="absolute inset-0 bg-gradient-to-r from-black/30 via-white/10 to-transparent pointer-events-none"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* ================= MOBILE SINGLE-PAGE VIEW (md:hidden) ================= */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex md:hidden relative w-full h-full flex-1 overflow-hidden pl-3 sm:pl-4 flex-col justify-between"
        >
          <div className="w-full flex-1 min-h-0 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobilePage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.22 }}
                className="w-full h-full overflow-y-auto"
              >
                {renderSingleMobilePage(mobilePage)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Bottom Thumb Pager Navigation Bar */}
          <div className="shrink-0 pt-1.5 pb-2 px-3 border-t border-neutral-300/80 bg-amber-50/90 backdrop-blur-xs flex items-center justify-between text-neutral-900 font-sketch text-xs select-none z-20">
            <button
              onClick={goToPrevMobile}
              className="px-2.5 py-1 bg-[#181615] text-amber-300 font-bold rounded-xs border border-neutral-900 active:scale-95 transition-transform flex items-center gap-1 shadow-2xs cursor-pointer"
            >
              <span>‹</span>
              <span>{mobilePage === 1 ? 'Cover' : 'Prev'}</span>
            </button>

            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] font-black text-neutral-600">
                PAGE {mobilePage} / 10
              </span>
              <span className="font-marker text-xs font-extrabold text-[#1d4ed8]">
                {getMobilePageLabel(mobilePage)}
              </span>
            </div>

            <button
              onClick={goToNextMobile}
              className="px-2.5 py-1 bg-[#181615] text-amber-300 font-bold rounded-xs border border-neutral-900 active:scale-95 transition-transform flex items-center gap-1 shadow-2xs cursor-pointer"
            >
              <span>{mobilePage === 10 ? 'Close' : 'Next'}</span>
              <span>›</span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= INTERACTIVE SCHEMATICS MODAL ================= */}
      <AnimatePresence>
        {selectedSchematic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedSchematic(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#fdfaf3] p-3.5 sm:p-5 rounded-lg sketch-border shadow-2xl border-4 border-neutral-800 text-neutral-900 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => {
                  sound.playPop();
                  setSelectedSchematic(null);
                }}
                className="absolute top-3 right-3 w-6 h-6 rounded-full bg-neutral-900 text-amber-200 flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-1.5 mb-1">
                <Layers className="w-4 h-4 text-[#235284]" />
                <h3 className="font-marker text-base sm:text-lg text-neutral-900 pr-6">
                  {selectedSchematic.schematic.title}
                </h3>
              </div>
              <div className="font-sketch text-xs text-[#235284] font-bold mb-2.5">
                PROJECT: {selectedSchematic.title}
              </div>

              <div className="space-y-1 mb-2.5 bg-amber-50/70 p-2 rounded-xs border border-neutral-300">
                <div className="font-sketch font-bold text-[10px] text-neutral-800 uppercase tracking-wider">
                  📐 Architecture Dataflow:
                </div>
                {selectedSchematic.schematic.flow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 font-sketch text-[10px] sm:text-xs text-neutral-900">
                    <span className="w-3.5 h-3.5 rounded-full bg-amber-300 text-neutral-900 flex items-center justify-center font-bold text-[8px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-1 mb-2.5">
                {selectedSchematic.schematic.specs.map((spec, i) => (
                  <div key={i} className="p-1 bg-white rounded-xs border border-neutral-300 text-center shadow-2xs">
                    <div className="font-marker text-[10px] sm:text-xs text-neutral-900">{spec.value}</div>
                    <div className="font-sketch text-[8px] sm:text-[9px] text-neutral-600 font-bold">{spec.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-1.5 bg-yellow-100/80 sketch-box text-[10px] sm:text-xs font-caveat text-amber-950 font-bold">
                📝 Field Note: {selectedSchematic.schematic.notes}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
