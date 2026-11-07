'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CoverPage } from '@/components/cover/CoverPage';
import { PageFlipSpread } from '@/components/book/PageFlipSpread';
import { sound } from '@/lib/sound';

export function Sketchbook() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [currentSpread, setCurrentSpread] = useState(0);

  const TOTAL_SPREADS = 5;

  const handleOpenBook = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
    }, 450);
  };

  const handleCloseBook = useCallback(() => {
    sound.playElasticSnap();
    setIsOpen(false);
    setCurrentSpread(0);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleCloseBook();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleCloseBook]);

  return (
    <div className="w-full flex items-center justify-center p-1 sm:p-2 relative max-w-full">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* ================= CLOSED SKETCHBOOK COVER ================= */
          <motion.div
            key="cover"
            initial={{ scale: 0.95, opacity: 0, rotateY: -10 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{
              rotateY: -85,
              scale: 0.9,
              opacity: 0,
              transition: { duration: 0.45, ease: 'easeInOut' },
            }}
            className="w-full flex justify-center perspective-container"
          >
            <CoverPage onOpen={handleOpenBook} isOpening={isOpening} />
          </motion.div>
        ) : (
          /* ================= OPEN TWO-PAGE SPREAD ================= */
          <motion.div
            key="open-book"
            initial={{ scale: 0.92, opacity: 0, rotateY: 25 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{
              scale: 0.92,
              opacity: 0,
              rotateY: 25,
              transition: { duration: 0.35 },
            }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="w-full flex justify-center"
          >
            <PageFlipSpread
              currentSpread={currentSpread}
              totalSpreads={TOTAL_SPREADS}
              onSpreadChange={(newIndex) => setCurrentSpread(newIndex)}
              onCloseBook={handleCloseBook}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
