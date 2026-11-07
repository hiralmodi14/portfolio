'use client';

import React from 'react';
import { sound } from '@/lib/sound';

export interface TabItem {
  id: string;
  label: string;
  spreadIndex: number;
  color: string;
  textColor: string;
  tag?: string;
}

export const BOOK_TABS: TabItem[] = [
  { id: 'cover', label: 'Cover', spreadIndex: -1, color: 'bg-amber-300', textColor: 'text-neutral-950' },
  { id: 'about', label: 'About Me', spreadIndex: 0, color: 'bg-rose-300', textColor: 'text-neutral-950' },
  { id: 'tech', label: 'Skills', spreadIndex: 1, color: 'bg-emerald-300', textColor: 'text-neutral-950' },
  { id: 'projects', label: 'Projects', spreadIndex: 2, color: 'bg-sky-300', textColor: 'text-neutral-950' },
  { id: 'journey', label: 'Experience & OS', spreadIndex: 3, color: 'bg-violet-300', textColor: 'text-neutral-950' },
  { id: 'contact', label: 'Contact', spreadIndex: 4, color: 'bg-orange-300', textColor: 'text-neutral-950' },
];

interface BookmarkTabsProps {
  currentSpread: number;
  onSelectTab: (spreadIndex: number) => void;
}

export function BookmarkTabs({ currentSpread, onSelectTab }: BookmarkTabsProps) {
  return (
    <div className="absolute top-0 left-1 sm:left-6 md:left-8 z-30 flex items-end gap-1 sm:gap-1.5 md:gap-2 select-none overflow-x-auto max-w-[94vw] sm:max-w-none pb-0 px-1 scrollbar-none">
      {BOOK_TABS.map((tab) => {
        const isActive = currentSpread === tab.spreadIndex;
        return (
          <button
            key={tab.id}
            onClick={() => {
              sound.playPageFlip();
              onSelectTab(tab.spreadIndex);
            }}
            className={`
              relative px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-t-md font-sketch text-xs sm:text-sm font-extrabold tracking-wide
              transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center shrink-0 border-t-2 border-x-2 border-neutral-900/40
              ${tab.color} ${tab.textColor}
              ${isActive ? '-translate-y-1.5 sm:-translate-y-2 shadow-lg ring-2 ring-neutral-950 font-black scale-105' : 'opacity-90 hover:opacity-100 hover:-translate-y-0.5'}
            `}
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
            }}
          >
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
