'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Hand-Drawn Over-Ear Studio Headphones with Animated Black Cat-Whisker (Mustache) Soundwaves
export function HeadphonesDoodle({
  className = "w-28 h-28",
  isPlaying = false,
}: {
  className?: string;
  isPlaying?: boolean;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        {/* ================= LEFT SPEAKER CAT-WHISKER SOUNDWAVES (BLACK) ================= */}
        {/* Top Left Whisker Line */}
        <motion.line
          x1="26"
          y1="88"
          x2="4"
          y2="76"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          initial={{ opacity: 0.7 }}
          animate={{
            x: isPlaying ? [0, -5, 0] : [0, -2, 0],
            scaleX: isPlaying ? [0.8, 1.3, 0.8] : [0.9, 1.12, 0.9],
            opacity: isPlaying ? [0.4, 1, 0.4] : [0.65, 1, 0.65],
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Middle Left Whisker Line (Longest) */}
        <motion.line
          x1="24"
          y1="98"
          x2="0"
          y2="98"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          initial={{ opacity: 0.8 }}
          animate={{
            x: isPlaying ? [0, -7, 0] : [0, -3, 0],
            scaleX: isPlaying ? [0.75, 1.35, 0.75] : [0.9, 1.15, 0.9],
            opacity: isPlaying ? [0.5, 1, 0.5] : [0.75, 1, 0.75],
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
        />

        {/* Bottom Left Whisker Line */}
        <motion.line
          x1="26"
          y1="108"
          x2="4"
          y2="120"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          initial={{ opacity: 0.7 }}
          animate={{
            x: isPlaying ? [0, -5, 0] : [0, -2, 0],
            scaleX: isPlaying ? [0.8, 1.3, 0.8] : [0.9, 1.12, 0.9],
            opacity: isPlaying ? [0.4, 1, 0.4] : [0.65, 1, 0.65],
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />

        {/* ================= RIGHT SPEAKER CAT-WHISKER SOUNDWAVES (BLACK) ================= */}
        {/* Top Right Whisker Line */}
        <motion.line
          x1="174"
          y1="88"
          x2="196"
          y2="76"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          initial={{ opacity: 0.7 }}
          animate={{
            x: isPlaying ? [0, 5, 0] : [0, 2, 0],
            scaleX: isPlaying ? [0.8, 1.3, 0.8] : [0.9, 1.12, 0.9],
            opacity: isPlaying ? [0.4, 1, 0.4] : [0.65, 1, 0.65],
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Middle Right Whisker Line (Longest) */}
        <motion.line
          x1="176"
          y1="98"
          x2="200"
          y2="98"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          initial={{ opacity: 0.8 }}
          animate={{
            x: isPlaying ? [0, 7, 0] : [0, 3, 0],
            scaleX: isPlaying ? [0.75, 1.35, 0.75] : [0.9, 1.15, 0.9],
            opacity: isPlaying ? [0.5, 1, 0.5] : [0.75, 1, 0.75],
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
        />

        {/* Bottom Right Whisker Line */}
        <motion.line
          x1="174"
          y1="108"
          x2="196"
          y2="120"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          initial={{ opacity: 0.7 }}
          animate={{
            x: isPlaying ? [0, 5, 0] : [0, 2, 0],
            scaleX: isPlaying ? [0.8, 1.3, 0.8] : [0.9, 1.12, 0.9],
            opacity: isPlaying ? [0.4, 1, 0.4] : [0.65, 1, 0.65],
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />

        {/* ================= PREMIUM STUDIO HEADPHONES CHASSIS ================= */}
        {/* Outer Headband Steel Curve */}
        <path
          d="M48 88 C40 34, 76 14, 100 14 C124 14, 160 34, 152 88"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Soft Headband Cushion Layer */}
        <path
          d="M54 84 C48 40, 78 20, 100 20 C122 20, 152 40, 146 84"
          stroke="#44403c"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Headband Mesh Ribs */}
        <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7">
          <line x1="78" y1="16" x2="78" y2="24" />
          <line x1="89" y1="14" x2="89" y2="22" />
          <line x1="100" y1="14" x2="100" y2="22" />
          <line x1="111" y1="14" x2="111" y2="22" />
          <line x1="122" y1="16" x2="122" y2="24" />
        </g>

        {/* Left Slider Arm & Yolk Wishbone */}
        <path d="M44 80 L44 98" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M44 94 C38 94, 34 98, 34 104" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

        {/* Left Earcup Assembly (Pivoted -8deg) */}
        <g transform="translate(28, 80) rotate(-8)">
          {/* Plush Memory Foam Cushion */}
          <rect x="0" y="0" width="28" height="46" rx="12" stroke="currentColor" strokeWidth="3" fill="#1c1917" />
          {/* Inner Speaker Grille Chamfer */}
          <rect x="4" y="4" width="20" height="38" rx="8" stroke="currentColor" strokeWidth="1.6" fill="#292524" />
          {/* Speaker Sound Port Aperture */}
          <ellipse cx="14" cy="23" rx="6" ry="12" fill="#18181b" stroke="#57534e" strokeWidth="1.2" />
          {/* Outer Metallic Accent Ring */}
          <path d="M26 8 L26 38" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Right Slider Arm & Yolk Wishbone */}
        <path d="M156 80 L156 98" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M156 94 C162 94, 166 98, 166 104" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

        {/* Right Earcup Assembly (Pivoted +8deg) */}
        <g transform="translate(144, 80) rotate(8)">
          {/* Plush Memory Foam Cushion */}
          <rect x="0" y="0" width="28" height="46" rx="12" stroke="currentColor" strokeWidth="3" fill="#1c1917" />
          {/* Inner Speaker Grille Chamfer */}
          <rect x="4" y="4" width="20" height="38" rx="8" stroke="currentColor" strokeWidth="1.6" fill="#292524" />
          {/* Speaker Sound Port Aperture */}
          <ellipse cx="14" cy="23" rx="6" ry="12" fill="#18181b" stroke="#57534e" strokeWidth="1.2" />
          {/* Outer Metallic Accent Ring */}
          <path d="M2 8 L2 38" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Braided Vintage Audio Aux Cable */}
        <path
          d="M154 126 C154 142, 164 136, 170 144 C176 150, 184 142, 192 148"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* 3.5mm Gold Jack Accent */}
        <circle cx="192" cy="148" r="2" fill="#facc15" stroke="#1c1917" strokeWidth="1" />
      </svg>
    </div>
  );
}

// Hand-Drawn Laptop Sketch (Aesthetic 2.5D Studio Laptop with Code Terminal & Keyboard)
export function LaptopDoodle({ className = "w-48 h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Soft Ground Drop Shadow */}
      <ellipse cx="110" cy="148" rx="86" ry="6.5" fill="#1c1917" fillOpacity="0.1" />

      {/* 1. SCREEN LID (Upper Assembly) */}
      {/* Outer Shell Bezel */}
      <path
        d="M48 20 C48 16 52 14 56 14 L164 14 C168 14 172 16 172 20 L166 94 L54 94 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#fdfbf7"
      />

      {/* Screen Inner Display Glass (Dark Terminal) */}
      <path
        d="M54 18 L166 18 L160 90 L60 90 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#1c1917"
      />

      {/* Glass Specular Glare (Diagonal Aesthetic Highlight) */}
      <path
        d="M136 19 L156 19 L142 89 L122 89 Z"
        fill="#ffffff"
        fillOpacity="0.05"
      />

      {/* Top Center Camera Lens */}
      <circle cx="110" cy="16.5" r="1.4" fill="#57534e" />
      <circle cx="110" cy="16.5" r="0.5" fill="#10b981" />

      {/* macOS Traffic Lights Window Controls */}
      <circle cx="67" cy="26" r="2" fill="#ef4444" />
      <circle cx="73" cy="26" r="2" fill="#f59e0b" />
      <circle cx="79" cy="26" r="2" fill="#10b981" />

      {/* Terminal Tab Bar Divider */}
      <line x1="60" y1="32" x2="160" y2="32" stroke="#292524" strokeWidth="1" />

      {/* Clean Aesthetic Code Mockup Lines */}
      {/* Prompt > dev */}
      <path d="M68 41 L72 44 L68 47" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="77" y1="44" x2="124" y2="44" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

      {/* Line 1: Keyword + Identifier */}
      <line x1="72" y1="54" x2="108" y2="54" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
      <line x1="113" y1="54" x2="146" y2="54" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />

      {/* Line 2: Nested Arrow Func */}
      <line x1="80" y1="64" x2="136" y2="64" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />

      {/* Line 3: Return + Blinking Yellow Cursor */}
      <line x1="72" y1="74" x2="114" y2="74" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
      <rect x="118" y="70.5" width="3.5" height="7" fill="#facc15" rx="0.5" />

      {/* Line 4: Comment / Log */}
      <line x1="72" y1="83" x2="105" y2="83" stroke="#71717a" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 2" />

      {/* 2. CHASSIS & KEYBOARD BASE (Lower Assembly) */}
      {/* Central Hinge */}
      <path
        d="M84 93 L136 93 L136 97 L84 97 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#292524"
      />

      {/* Top Deck Surface (Symmetrical Trapezoid) */}
      <path
        d="M54 94 L166 94 L196 138 C197 140 194 142 190 142 L30 142 C26 142 23 140 24 138 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#fdfbf7"
      />

      {/* Front Lip / Chassis Thickness */}
      <path
        d="M24 138 L24 143 C24 145.5 27 147 30 147 L190 147 C193 147 196 145.5 196 143 L196 138"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#e7e5e4"
      />

      {/* Recessed Keyboard Well */}
      <path
        d="M58 98 L162 98 L176 122 L44 122 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#1c1917"
      />

      {/* Keycap Rows (Neat Aesthetic Chiclet Rows) */}
      <g stroke="#57534e" strokeWidth="1.1" strokeLinecap="round">
        {/* Row 1 (Numbers/F-keys) */}
        <line x1="61" y1="102" x2="159" y2="102" />
        {/* Row 2 (QWERTY) */}
        <line x1="57" y1="107" x2="163" y2="107" />
        {/* Row 3 (ASDF) */}
        <line x1="53" y1="112" x2="167" y2="112" />
        {/* Row 4 (ZXCV) */}
        <line x1="49" y1="117" x2="171" y2="117" />

        {/* Vertical Key Dividers */}
        <line x1="74" y1="99" x2="68" y2="121" />
        <line x1="92" y1="99" x2="89" y2="121" />
        <line x1="110" y1="99" x2="110" y2="121" />
        <line x1="128" y1="99" x2="131" y2="121" />
        <line x1="146" y1="99" x2="152" y2="121" />
      </g>

      {/* Symmetrical Trackpad */}
      <path
        d="M92 126 L128 126 L131 138 L89 138 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#f5f5f4"
      />
      <line x1="110" y1="134" x2="110" y2="138" stroke="#78716c" strokeWidth="1" strokeLinecap="round" />

      {/* Aesthetic Sparkle/Sticker on Wrist Rest */}
      <path
        d="M38 128 L40.5 124 L39 124 L42 120 L38.5 120 L36 125 L38 125 Z"
        fill="#facc15"
        stroke="#1c1917"
        strokeWidth="0.8"
      />
      <path
        d="M178 127 L180 125 L178 123 L176 125 Z"
        fill="#a78bfa"
        stroke="#1c1917"
        strokeWidth="0.6"
      />
    </svg>
  );
}

// Hand-Drawn Animated Coffee Mug with Hot Rising Steam & Lightning Bolt
export function CoffeeMugDoodle({ className = "w-16 h-20" }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        {/* ================= ANIMATED STEAM WHISPS ================= */}
        <g className="steam-container">
          {/* Left Steam Wisp */}
          <motion.path
            d="M36 30 C30 22, 42 16, 34 8 C30 3, 38 0, 32 -6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            initial={{ opacity: 0.2, y: 0, x: 0 }}
            animate={{
              opacity: [0, 0.85, 0.9, 0],
              y: [0, -10, -22],
              x: [-1, 2, -3],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0,
            }}
          />

          {/* Center Steam Wisp (Tallest) */}
          <motion.path
            d="M48 28 C55 18, 43 10, 52 2 C56 -4, 46 -8, 50 -14"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
            initial={{ opacity: 0.3, y: 0, x: 0 }}
            animate={{
              opacity: [0, 0.95, 0.8, 0],
              y: [0, -12, -26],
              x: [1, -2, 2],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.7,
            }}
          />

          {/* Right Steam Wisp */}
          <motion.path
            d="M60 30 C56 22, 66 14, 61 7 C57 1, 65 -4, 60 -10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ opacity: 0.2, y: 0, x: 0 }}
            animate={{
              opacity: [0, 0.8, 0.85, 0],
              y: [0, -9, -20],
              x: [0, 3, -1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.4,
            }}
          />
        </g>

        {/* ================= TABLETOP CAST SHADOW ================= */}
        <ellipse cx="48" cy="98" rx="24" ry="5" fill="#000000" fillOpacity="0.18" />

        {/* ================= CERAMIC MUG HANDLE ================= */}
        <path
          d="M67 44 C82 42, 90 56, 84 74 C79 83, 68 81, 64 78"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="#fdfbf7"
        />
        <path
          d="M68 49 C78 48, 83 58, 79 70 C75 75, 68 74, 65 72"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="transparent"
        />

        {/* ================= MUG BODY WITH CERAMIC DEPTH ================= */}
        <path
          d="M24 35 C25 66, 28 88, 32 94 C36 98, 60 98, 64 94 C68 88, 71 66, 72 35"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#faf7f0"
        />

        {/* Cross-Hatching Shadow along Left Curve */}
        <g stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round">
          <line x1="28" y1="46" x2="36" y2="46" />
          <line x1="29" y1="54" x2="38" y2="54" />
          <line x1="30" y1="62" x2="40" y2="62" />
          <line x1="32" y1="70" x2="42" y2="70" />
          <line x1="34" y1="78" x2="44" y2="78" />
          <line x1="37" y1="86" x2="46" y2="86" />
        </g>

        {/* ================= MUG RIM & ESPRESSO LIQUID ================= */}
        {/* Outer ceramic rim */}
        <ellipse cx="48" cy="35" rx="24" ry="7.5" stroke="currentColor" strokeWidth="3" fill="#292524" />
        {/* Dark roast espresso crema */}
        <ellipse cx="48" cy="36" rx="21" ry="6" fill="#3f1d0b" />
        {/* Coffee reflection shine */}
        <path
          d="M34 35 C38 34, 46 34, 52 35"
          stroke="#d97706"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* ================= GOLDEN LIGHTNING BOLT EMBLEM ================= */}
        <g transform="translate(1, -1)">
          {/* Subtle drop shadow under bolt */}
          <path
            d="M48 48 L41 64 L49 64 L44 80 L58 59 L49 59 Z"
            fill="#78350f"
            opacity="0.3"
          />
          {/* Main golden lightning bolt */}
          <path
            d="M47 47 L40 63 L48 63 L43 79 L57 58 L48 58 Z"
            fill="#facc15"
            stroke="#854d0e"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Inner highlight gleam */}
          <path
            d="M46 51 L43 60 L47 60"
            stroke="#fef08a"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

// Hand-Drawn Crown Doodle
export function CrownDoodle({ className = "w-10 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M8 32 L5 12 L20 22 L30 6 L40 22 L55 12 L52 32 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="#facc15"
        fillOpacity="0.85"
      />
      <circle cx="5" cy="10" r="2.5" fill="#ca8a04" />
      <circle cx="30" cy="4" r="2.5" fill="#ca8a04" />
      <circle cx="55" cy="10" r="2.5" fill="#ca8a04" />
      <path d="M12 32 L48 32" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

// Hand-Drawn Paper Airplane
export function PaperAirplaneDoodle({ className = "w-24 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M10 50 C25 60, 40 45, 35 30 C30 18, 50 15, 65 24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />
      <g transform="translate(62, 10) rotate(-5)">
        <path
          d="M0 24 L45 0 L24 38 L16 26 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.06"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d="M45 0 L16 26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 26 L22 34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Hand-Drawn Line Chart
export function LineChartDoodle({ className = "w-36 h-28" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 15 L20 95 L145 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 22 L20 15 L23 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M138 92 L145 95 L138 98" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 75 L140 75 M20 55 L140 55 M20 35 L140 35" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.3" />
      <path d="M50 95 L50 25 M80 95 L80 25 M110 95 L110 25" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.3" />
      <path
        d="M20 90 L38 82 L55 86 L70 70 L85 78 L100 62 L115 68 L135 45"
        stroke="#2563eb"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M100 62 L140 30"
        stroke="#dc2626"
        strokeWidth="2"
        strokeDasharray="3 3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Hand-Drawn Globe
export function GlobeDoodle({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="2.2" />
      <ellipse cx="50" cy="50" rx="14" ry="28" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 2" />
      <path d="M22 50 L78 50" stroke="currentColor" strokeWidth="1.4" />
      <path d="M26 36 Q50 42 74 36" stroke="currentColor" strokeWidth="1.2" />
      <path d="M26 64 Q50 58 74 64" stroke="currentColor" strokeWidth="1.2" />
      <ellipse
        cx="50"
        cy="50"
        rx="44"
        ry="18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeDasharray="4 4"
        transform="rotate(-25 50 50)"
      />
      <circle cx="86" cy="32" r="2.5" fill="#dc2626" />
    </svg>
  );
}

// Hand-Drawn Skyline
export function SkylineDoodle({ className = "w-64 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M85 75 L85 25 L88 10 L88 25 L91 75" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="88" cy="28" r="5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.1" />
      <path d="M88 10 L88 2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="20" y="55" width="25" height="20" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <rect x="48" y="45" width="22" height="30" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <rect x="73" y="60" width="18" height="15" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <rect x="94" y="52" width="26" height="23" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <rect x="123" y="38" width="28" height="37" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <rect x="154" y="48" width="20" height="27" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <rect x="177" y="32" width="25" height="43" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <rect x="205" y="44" width="22" height="31" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <rect x="230" y="56" width="30" height="19" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M10 75 L310 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Hand-Drawn Glowing Lightbulb
export function GlowingBulbDoodle({ className = "w-12 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 12 L4 6 M50 12 L56 6 M30 5 L30 0 M5 30 L0 30 M55 30 L60 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M18 36 C13 29, 13 18, 20 12 C26 6, 34 6, 40 12 C47 18, 47 29, 42 36 C39 40, 38 44, 38 48 L22 48 C22 44, 21 40, 18 36 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="#facc15"
        fillOpacity="0.85"
        strokeLinecap="round"
      />
      <path d="M26 32 L30 22 L34 32" stroke="#713f12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 52 L37 52 M24 56 L36 56 M26 60 L34 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Hand-Drawn Lightbulb Doodle (Sticky note style)
export function LightbulbDoodle({ className = "w-12 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Light rays */}
      <path d="M14 12 L8 6 M46 12 L52 6 M30 5 L30 0 M6 26 L0 26 M54 26 L60 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M18 36 C14 30, 14 20, 20 14 C26 8, 34 8, 40 14 C46 20, 46 30, 42 36 C39 40, 38 44, 38 48 L22 48 C22 44, 21 40, 18 36 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M26 32 L30 22 L34 32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 52 L37 52 M24 56 L36 56 M26 60 L34 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Hand-Drawn Star Doodle
export function StarDoodle({ className = "w-8 h-8", filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20 4 L24 14 L35 15 L27 23 L29 34 L20 28 L11 34 L13 23 L5 15 L16 14 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill={filled ? "currentColor" : "none"}
      />
    </svg>
  );
}

// Hand-Drawn Heart Doodle
export function HeartDoodle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20 34 C12 26, 4 20, 4 13 C4 7, 9 3, 15 3 C18 3, 20 6, 20 6 C20 6, 22 3, 25 3 C31 3, 36 7, 36 13 C36 20, 28 26, 20 34 Z"
        stroke="#dc2626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#ef4444"
        fillOpacity="0.85"
      />
    </svg>
  );
}

// Hand-Drawn Stamp Badge
export function StampBadge({ text = "APPROVED", color = "border-red-600 text-red-600", rotate = "-6deg" }: { text?: string; color?: string; rotate?: string }) {
  return (
    <div
      style={{ transform: `rotate(${rotate})` }}
      className={`inline-flex flex-col items-center justify-center border-2 border-dashed ${color} px-3 py-1 font-marker text-xs tracking-widest uppercase opacity-90 select-none shadow-xs`}
    >
      <span>★ {text} ★</span>
    </div>
  );
}

// Hand-Drawn Paperclip
export function PaperclipDoodle({ className = "w-6 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M8 14 L8 36 C8 41, 16 41, 16 36 L16 8 C16 3, 4 3, 4 10 L4 38 C4 45, 20 45, 20 36 L20 16"
        stroke="#dc2626"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
