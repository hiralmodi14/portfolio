'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  StampBadge,
  PaperclipDoodle,
  CoffeeMugDoodle,
  StarDoodle,
  HeartDoodle,
} from '@/components/doodles/DoodleAssets';
import { GithubIcon, LinkedinIcon } from '@/components/doodles/SocialIcons';
import { PROFILE_CONFIG } from '@/config/profile';
import { sound } from '@/lib/sound';
import confetti from 'canvas-confetti';
import pullRequestsData from '@/data/pullRequests.json';

export interface PullRequestItem {
  id: string;
  number: number;
  title: string;
  fullTitle?: string;
  repo: string;
  repoUrl?: string;
  url: string;
  branch: string;
  status: string;
  issueFixed?: string;
  summary: string;
  tags?: string[];
  date?: string;
}

export const ALL_PULL_REQUESTS: PullRequestItem[] = pullRequestsData;
import {
  ExternalLink,
  Layers,
  Code,
  Sparkles,
  Wrench,
  Cpu,
  Terminal,
  Compass,
  Flag,
  Award,
  MessageSquareQuote,
  Handshake,
  Zap,
  HelpCircle,
  Send,
  Mail,
  CheckCircle2,
  GraduationCap,
  FileText,
  Phone,
  Target,
} from 'lucide-react';

// ==========================================
// PAGE 1: ABOUT & BACKGROUND
// ==========================================
export function Page1_About() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full h-full p-4 sm:p-5 md:pr-10 flex flex-col justify-between relative text-neutral-900 select-none overflow-y-auto md:overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-neutral-300/80 pb-1.5">
        <div className="font-sketch font-extrabold text-sm sm:text-base md:text-lg tracking-widest text-[#1d4ed8]">
          ABOUT &amp; BACKGROUND
        </div>
        <StampBadge text="OWASP CONTRIBUTOR &amp; BUILDER ⚡" color="border-emerald-600 text-emerald-800" rotate="-2deg" />
      </div>

      {/* Main Body */}
      <div className="my-auto py-1 flex flex-col gap-2.5">
        {/* Polaroid & Bio Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          {/* Static Vintage Polaroid Frame */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="relative w-36 sm:w-42 bg-white p-2.5 pb-3.5 shadow-md sketch-box rotate-[-2deg] shrink-0"
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 sm:w-18 h-3.5 washi-tape washi-tape-pink -rotate-1" />
            <div className="absolute -top-2 -left-1.5">
              <PaperclipDoodle className="w-4 h-7" />
            </div>

            {/* Polaroid Photo Box */}
            <div className="w-full aspect-square bg-[#ebdcc4] rounded-xs border border-neutral-300 relative overflow-hidden flex flex-col items-center justify-center">
              {!imageError && PROFILE_CONFIG.photo ? (
                <div className="relative w-full h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={PROFILE_CONFIG.photo}
                    alt={PROFILE_CONFIG.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover rounded-xs filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-neutral-800 bg-amber-100 flex items-center justify-center font-marker text-2xl text-neutral-900 shadow-inner font-extrabold">
                    {PROFILE_CONFIG.initials}
                  </div>
                  <div className="mt-1 font-sketch text-sm font-extrabold text-neutral-900">
                    {PROFILE_CONFIG.name}
                  </div>
                  <div className="font-caveat text-xs text-neutral-700 font-bold">
                    {PROFILE_CONFIG.role}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Polaroid Handwritten Caption */}
            <div className="mt-1 text-center font-caveat text-xs sm:text-sm text-neutral-800 font-bold">
              &ldquo;{PROFILE_CONFIG.polaroidCaption}&rdquo;
            </div>
          </motion.div>

          {/* Bio & Education text */}
          <div className="space-y-2 flex-1">
            <h2 className="font-marker text-2xl sm:text-3xl text-neutral-900 tracking-tight font-extrabold">
              {PROFILE_CONFIG.greeting}
            </h2>

            <p className="font-sketch text-xs sm:text-sm text-neutral-900 font-bold leading-snug">
              Machine Learning enthusiast and active open-source contributor to <strong>OWASP BLT (Bug Logging Tool)</strong> with merged pull requests. Skilled in Python, deep learning, and AI security, with hands-on project experience bridging ML with IoT to build smart and secure systems.
            </p>

            {/* Open Source Contribution Badge */}
            <div className="p-2 bg-violet-50/95 border-2 border-violet-400 rounded-xs shadow-2xs font-sketch text-xs text-neutral-900 flex items-start gap-2">
              <span className="text-base shrink-0">🛡️</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-extrabold text-neutral-950 text-xs sm:text-sm">
                    Open Source: OWASP BLT Contributor
                  </span>
                  <span className="font-mono text-[9px] font-black bg-purple-200 text-purple-950 px-1.5 py-0.5 rounded-xs border border-purple-400">
                    MERGED CONTRIBUTIONS
                  </span>
                </div>
                <p className="text-xs text-neutral-800 font-bold leading-tight mt-1">
                  Actively contributing to OWASP BLT (Bug Logging Tool) with merged pull requests across platform tooling, documentation, and CI/CD pipelines.
                </p>
              </div>
            </div>

            {/* Single Education Badge Card */}
            <div className="p-2.5 bg-[#fef08a]/80 border-2 border-amber-500 rounded-xs shadow-2xs font-sketch text-xs sm:text-sm text-neutral-900 flex items-start gap-2.5">
              <GraduationCap className="w-5 h-5 text-amber-900 shrink-0 mt-0.5" />
              <div>
                <div className="font-extrabold text-neutral-950 text-xs sm:text-sm">{PROFILE_CONFIG.degree}</div>
                <div className="text-neutral-800 font-bold text-xs">{PROFILE_CONFIG.college}</div>
                <div className="font-mono text-xs text-amber-950 font-extrabold">{PROFILE_CONFIG.batch}</div>
              </div>
            </div>

            <div className="p-2 bg-amber-50/90 sketch-border text-xs font-sketch font-bold text-neutral-900 flex items-center gap-1.5">
              <span className="font-extrabold text-[#b91c1c]">Core Tenet:</span>
              <span>Deconstruct from first principles • Build local-first • Measure real impact.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Signature */}
      <div className="pt-1.5 border-t border-neutral-300 flex items-center justify-between">
        <span className="font-caveat text-xs sm:text-sm text-neutral-800 font-bold italic">
          📍 Udaipur (Rajasthan) • {PROFILE_CONFIG.phone}
        </span>
        <span className="font-marker text-sm sm:text-base text-neutral-900 rotate-[-4deg] font-extrabold">
          — Hiral Modi
        </span>
      </div>
    </div>
  );
}

// ==========================================
// PAGE 2: ENGINEERING DNA & CORE PILLARS (RIGHT PAGE)
// ==========================================
export function Page2_HowIBuild() {
  const pillars = [
    {
      icon: '🛡️',
      pill: 'AI SECURITY',
      title: 'Cyber Ranges',
      subtitle: 'AI Flaw Factory & CTFs',
      desc: 'Architecting modular, containerized Cyber Range sandboxes teaching prompt jailbreaks, LangChain Python REPL RCE, vector DB leaks, and MCP boundary defense.',
      bg: 'bg-rose-50/95 border-rose-400 hover:bg-rose-100/90',
      tagColor: 'bg-rose-200 text-rose-950',
      tags: ['Docker Blast Walls', 'LangChain', 'CTF Sandboxes'],
      rot: '-rotate-1',
    },
    {
      icon: '📟',
      pill: 'IOT & EMBEDDED',
      title: 'Pi & ESP32 Builds',
      subtitle: 'Hardware & Edge AI',
      desc: 'Prototyping assistive wearables and embedded sensor rigs with 100% offline speech recognition, OLED status displays, and sub-GHz LoRa telemetry.',
      bg: 'bg-emerald-50/95 border-emerald-400 hover:bg-emerald-100/90',
      tagColor: 'bg-emerald-200 text-emerald-950',
      tags: ['Raspberry Pi', 'ESP32', 'LoRa SX1278'],
      rot: 'rotate-1',
    },
    {
      icon: '🧠',
      pill: 'AI & MACHINE LEARNING',
      title: 'Machine Learning & AI',
      subtitle: 'Deep Learning & Pipelines',
      desc: 'Developing end-to-end ML workflows, neural architectures (LSTM, CNNs), RAG retrieval agents, and automated data preprocessing pipelines.',
      bg: 'bg-amber-50/95 border-amber-400 hover:bg-amber-100/90',
      tagColor: 'bg-amber-200 text-amber-950',
      tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'RAG / LLMs'],
      rot: '-rotate-1',
    },
    {
      icon: '🌐',
      pill: 'OPEN SOURCE',
      title: 'OWASP Contributor',
      subtitle: 'Bug Logging Tool (BLT)',
      desc: 'Active contributor to OWASP BLT with merged PRs across developer guides, CI/CD automation, and platform tooling.',
      bg: 'bg-purple-50/95 border-purple-400 hover:bg-purple-100/90',
      tagColor: 'bg-purple-200 text-purple-950',
      tags: ['OWASP BLT', 'Merged PRs', 'CI/CD'],
      rot: 'rotate-1',
    },
  ];

  return (
    <div className="w-full h-full p-4 sm:p-5 md:pl-10 flex flex-col justify-between relative text-neutral-900 select-none overflow-y-auto md:overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b-2 border-neutral-300/80 pb-1.5">
        <div>
          <div className="font-sketch font-extrabold text-xs sm:text-sm tracking-widest text-[#1d4ed8]">
            CORE ARCHITECTURES &amp; PILLARS
          </div>
          <h2 className="font-marker text-base sm:text-xl text-neutral-900 tracking-tight flex items-center gap-1.5 font-extrabold">
            <Zap className="w-4 h-4 text-amber-600" />
            <span>Engineering DNA &amp; Core Strengths</span>
          </h2>
        </div>
        <StampBadge text="4 PILLARS ⚡" color="border-purple-600 text-purple-800" rotate="2deg" />
      </div>

      {/* Main Content: 2x2 Grid with generous spacing and details */}
      <div className="my-auto py-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 font-sketch">
        {pillars.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -3, scale: 1.02, rotate: 0 }}
            onMouseEnter={() => sound.playPop()}
            className={`p-3 sm:p-3.5 rounded-xs border-2 ${card.bg} text-left shadow-xs transition-all cursor-default flex flex-col justify-between ${card.rot}`}
          >
            <div>
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-xl sm:text-2xl">{card.icon}</span>
                <span className={`font-mono text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-xs uppercase ${card.tagColor} border border-neutral-900/20`}>
                  {card.pill}
                </span>
              </div>
              <div className="font-marker text-sm sm:text-base text-neutral-950 font-extrabold leading-tight">
                {card.title}
              </div>
              <div className="font-caveat text-xs text-neutral-700 font-bold mb-1">
                {card.subtitle}
              </div>
              <p className="font-sketch text-xs sm:text-sm text-neutral-800 font-bold leading-snug">
                {card.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-1 mt-2 pt-1.5 border-t border-neutral-900/10">
              {card.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.5 bg-white/80 border border-neutral-300 rounded-xs font-mono text-[9px] sm:text-[10px] font-bold text-neutral-800 shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-1.5 border-t border-neutral-300 flex items-center justify-between text-xs font-caveat text-neutral-700 font-bold">
        <span>* Deconstructing complex architectures into secure, local-first, production-ready systems.</span>
        <StarDoodle className="w-4 h-4 text-emerald-600" />
      </div>
    </div>
  );
}

// ==========================================
// RESUME PROJECTS DATA
// ==========================================
export interface ProjectItem {
  id: string;
  title: string;
  category: 'ai' | 'fullstack' | 'hardware' | 'research';
  status: 'CURRENT' | 'SHIPPED' | 'PROTOTYPE' | 'RESEARCH';
  tagColor: string;
  washiColor: string;
  desc: string;
  tech: string[];
  metrics: string;
  githubUrl?: string;
  schematic: {
    title: string;
    flow: string[];
    specs: { label: string; value: string }[];
    notes: string;
  };
}

export const ALL_PROJECTS: ProjectItem[] = [
  {
    id: 'ai-flaw-factory',
    title: 'AI Flaw Factory — Vulnerable AI Playground',
    category: 'ai',
    status: 'CURRENT',
    tagColor: 'border-rose-600 text-rose-800 bg-rose-100',
    washiColor: 'washi-tape-pink',
    desc: 'Modular, containerized Cyber Range & CTF platform teaching security risks of AI architectures, LangChain pipelines, Vector DBs, and MCP integrations.',
    tech: ['Python', 'FastAPI', 'Docker', 'LangChain', 'ChromaDB', 'Ollama', 'MCP', 'LLM-Guard'],
    metrics: 'Modular Cyber Range • Docker CTF • OWASP AIVSS',
    githubUrl: 'https://github.com/hiralmodi/ai-flaw-machine',
    schematic: {
      title: 'AI Flaw Factory — Sandboxed Cyber Range Architecture',
      flow: [
        'Multi-Provider Inference Router (Ollama llama3.2 / OpenAI / Anthropic)',
        'Offline Container Isolation Engine (Docker Blast Wall & Strict Network Egress Blocking)',
        '4-Phase Exploit Assembly Line: Prompt Injections, Tool RCE, RAG Leakage & MCP Hijacking',
        'Dual-State Defense Proxy (LLM-Guard Firewall) & Dynamic SHA-256 CTF Flag Engine',
      ],
      specs: [
        { label: 'Lab Phases', value: '4 Tracks (8 Labs)' },
        { label: 'Isolation', value: 'Docker Blast Walls' },
        { label: 'Defense Layer', value: 'LLM-Guard Firewall' },
        { label: 'Risk Metric', value: 'OWASP AIVSS Scorecard' },
      ],
      notes: 'Features real-time attack visualizer, raw token breakdown, live payload logs, and dynamic one-click factory reset controls.',
    },
  },
  {
    id: 'memoraid-wearable',
    title: 'Memoraid — Offline Wearable Assistant',
    category: 'hardware',
    status: 'PROTOTYPE',
    tagColor: 'border-emerald-600 text-emerald-800 bg-emerald-100',
    washiColor: 'washi-tape-green',
    desc: 'Wearable Raspberry Pi device mitigating short-term memory loss in dementia patients through 100% offline ASR conversation logging and OLED alerts.',
    tech: ['Wearable', 'Offline ASR', 'Python', 'Raspberry Pi', 'OLED'],
    metrics: 'Raspberry Pi • Offline ASR • 24/7 Edge',
    schematic: {
      title: 'Offline Edge Audio & Instant Query Pipeline',
      flow: [
        'Continuous Microphone Audio Stream on Raspberry Pi',
        'On-Device Quantized Speech-to-Text (Offline ASR)',
        'Local SQLite Vector Log for Semantic Context Retrieval',
        'Low-Power OLED Display for Instant Time-Sensitive Alerts',
      ],
      specs: [
        { label: 'Target Node', value: 'Raspberry Pi' },
        { label: 'ASR Engine', value: 'Offline Model' },
        { label: 'Display UI', value: 'I2C OLED' },
      ],
      notes: 'Engineered with optimized storage and memory footprints for uninterrupted 24/7 continuous operation.',
    },
  },
  {
    id: 'lora-survey-research',
    title: 'LoRa Protocol & Architecture Survey',
    category: 'research',
    status: 'RESEARCH',
    tagColor: 'border-amber-600 text-amber-800 bg-amber-100',
    washiColor: 'washi-tape-yellow',
    desc: 'Authored research review paper analyzing LoRa modulation, MAC protocol layers, energy profiles, and long-range IoT architectures.',
    tech: ['Research Paper', 'LoRaWAN', 'IoT Protocols', 'Embedded Systems'],
    metrics: 'Survey Paper 2026 • GITS / Tie-U',
    githubUrl: 'https://ijarcs.info/index.php/Ijarcs/article/view/7480/6010',
    schematic: {
      title: 'LoRa Modulation & Gateway Architecture',
      flow: [
        'Chirp Spread Spectrum (CSS) Modulation Analysis',
        'LoRaWAN Class A / B / C Power-Delay Tradeoffs',
        'Star-of-Stars Mesh Topology Security Verification',
        'Empirical Range & Signal Attenuation Benchmarks',
      ],
      specs: [
        { label: 'Frequency Band', value: 'Sub-GHz ISM' },
        { label: 'Modulation', value: 'CSS' },
        { label: 'Topology', value: 'Star-of-Stars' },
      ],
      notes: 'Synthesizes protocols and architectures for ultra-low power distributed telemetry.',
    },
  },
  {
    id: 'prism-automl',
    title: 'PRISM — Automated ML & Model Selection',
    category: 'ai',
    status: 'SHIPPED',
    tagColor: 'border-purple-600 text-purple-800 bg-purple-100',
    washiColor: 'washi-tape-pink',
    desc: 'Automated ML pipeline that ingests datasets, cleans data, handles missing values, safely encodes categorical features, and cross-validates multiple models on Streamlit.',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy'],
    metrics: 'AutoML Pipeline • Scikit-learn • Streamlit UI',
    githubUrl: 'https://github.com/hiralmodi14/prism',
    schematic: {
      title: 'PRISM — Automated Preprocessing & Cross-Validation Pipeline',
      flow: [
        'Dataset Ingestion & Interactive Target Column Selection (Streamlit UI)',
        'Automated Missing Value Imputation with SimpleImputer & Data Cleaning',
        'Safe Categorical Encoding (Handling Unknowns) & Numerical Feature Scaling',
        'Multi-Model Training, K-Fold Cross-Validation & Automated Winner Selection',
      ],
      specs: [
        { label: 'ML Framework', value: 'Scikit-learn Pipelines' },
        { label: 'Frontend UI', value: 'Streamlit Dashboard' },
        { label: 'Data Processing', value: 'NumPy & Pandas' },
        { label: 'Validation', value: 'K-Fold Cross-Val' },
      ],
      notes: 'Automates data preprocessing, model benchmarking, and metric comparisons with interactive visualization.',
    },
  },
];

// ==========================================
// PAGE 3: CORE PROJECTS
// ==========================================
export function Page3_Projects1({ onOpenSchematic }: { onOpenSchematic: (p: ProjectItem) => void }) {
  const projects = ALL_PROJECTS.slice(0, 2);

  return (
    <div className="w-full h-full p-3.5 sm:p-4 md:pr-9 flex flex-col justify-between relative text-neutral-900 select-none overflow-y-auto md:overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-neutral-300/80 pb-1">
        <div>
          <div className="font-sketch font-extrabold text-xs sm:text-sm tracking-widest text-[#1d4ed8]">
            CORE PROJECTS
          </div>
          <h2 className="font-marker text-lg sm:text-xl text-neutral-900 tracking-tight font-extrabold">
            Featured AI Security &amp; Edge Builds
          </h2>
        </div>
        <StampBadge text="FEATURED BUILDS" color="border-purple-600 text-purple-800" rotate="-2deg" />
      </div>

      <div className="my-auto py-2 space-y-3">
        {projects.map((project) => (
          <ProjectCardFit key={project.id} project={project} onOpenSchematic={onOpenSchematic} />
        ))}
      </div>

      <div className="pt-1 border-t border-neutral-300 flex items-center justify-between text-xs font-caveat text-neutral-700 font-bold">
        <span>* Click &ldquo;Inspect Schematic 📐&rdquo; for architecture diagrams.</span>
        <StarDoodle className="w-4 h-4 text-amber-600" />
      </div>
    </div>
  );
}

// ==========================================
// PAGE 4: RESEARCH & ML TOOLKITS
// ==========================================
export function Page4_Projects2({ onOpenSchematic }: { onOpenSchematic: (p: ProjectItem) => void }) {
  const projects = ALL_PROJECTS.slice(2, 4);

  return (
    <div className="w-full h-full p-3.5 sm:p-4 md:pl-9 flex flex-col justify-between relative text-neutral-900 select-none overflow-y-auto md:overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-neutral-300/80 pb-1">
        <div>
          <div className="font-sketch font-extrabold text-xs sm:text-sm tracking-widest text-[#1d4ed8]">
            RESEARCH &amp; ML TOOLKITS
          </div>
          <h2 className="font-marker text-lg sm:text-xl text-neutral-900 tracking-tight font-extrabold">
            IoT Survey Paper &amp; PRISM AutoML
          </h2>
        </div>
        <StampBadge text="RESEARCH &amp; ML" color="border-sky-600 text-sky-800" rotate="2deg" />
      </div>

      <div className="my-auto py-2 space-y-3">
        {projects.map((project) => (
          <ProjectCardFit key={project.id} project={project} onOpenSchematic={onOpenSchematic} />
        ))}
      </div>

      <div className="pt-1 border-t border-neutral-300 flex items-center justify-between text-xs font-caveat text-neutral-700 font-bold">
        <span>All projects developed with reproducible code & documentation.</span>
        <span className="font-marker text-xs sm:text-sm text-neutral-900 font-extrabold">HM • 2026</span>
      </div>
    </div>
  );
}

function ProjectCardFit({
  project,
  onOpenSchematic,
}: {
  project: ProjectItem;
  onOpenSchematic: (p: ProjectItem) => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -1.5 }}
      className="relative p-2.5 sm:p-3 bg-white/95 hover:bg-white sketch-box shadow-xs transition-all"
    >
      <div className={`absolute -top-2 right-3 w-14 h-3.5 washi-tape ${project.washiColor} rotate-1`} />

      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-marker text-sm sm:text-base text-neutral-950 leading-tight font-extrabold">
            {project.title}
          </h3>
          <span className="font-mono text-xs sm:text-sm text-neutral-700 font-extrabold block">{project.metrics}</span>
        </div>
        <span className={`font-marker text-xs px-2 py-0.5 border-2 rounded-xs ${project.tagColor} shrink-0 font-extrabold`}>
          {project.status}
        </span>
      </div>

      <p className="mt-0.5 font-sketch text-xs sm:text-sm text-neutral-900 font-bold leading-snug line-clamp-2">
        {project.desc}
      </p>

      <div className="mt-1 flex items-center justify-between pt-1 border-t border-neutral-300">
        <button
          onClick={() => onOpenSchematic(project)}
          className="flex items-center gap-1.5 font-sketch font-extrabold text-xs sm:text-sm text-[#1d4ed8] hover:underline cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Inspect Schematic 📐</span>
        </button>

        <div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-neutral-900 hover:text-neutral-950 transition-colors inline-flex items-center justify-center"
              title="View Project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// UNIFIED SKILLS STORE (SHARED REAL-TIME STATE FOR PAGES 5 & 6)
// ==========================================
export interface SkillCategoryDetail {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  countTag: string;
  badge: string;
  badgeColor: string;
  washiColor: string;
  mastery: number;
  subCategories: {
    title: string;
    icon: string;
    desc: string;
    color: string;
  }[];
  toolchain: string[];
  patterns: string[];
  guarantee: string;
}

export const ALL_SKILL_CATEGORIES: Record<string, SkillCategoryDetail> = {
  'genai-rag-mcp': {
    id: 'genai-rag-mcp',
    title: 'Generative AI, RAG Pipelines & Agentic MCP',
    shortTitle: 'GenAI, RAG & MCP Agents',
    icon: '🤖',
    countTag: 'LangChain, MCP, RAG, ChromaDB',
    badge: 'AGENTIC AI & RAG',
    badgeColor: 'border-violet-500 text-violet-900 bg-violet-100',
    washiColor: 'washi-tape-pink',
    mastery: 96,
    subCategories: [
      { title: 'Agent Orchestration & LangChain', icon: '🤖', desc: 'Multi-agent reasoning loops, tool-calling abstractions & dynamic router fallbacks.', color: 'bg-violet-50 border-violet-300 text-violet-950' },
      { title: 'Model Context Protocol (MCP)', icon: '📡', desc: 'Anthropic JSON-RPC 2.0 tools connecting LLMs to databases & AST codebases.', color: 'bg-sky-50 border-sky-300 text-sky-950' },
      { title: 'Dense RAG & Vector Stores', icon: '🔍', desc: 'ChromaDB vector embeddings, semantic chunking, reciprocal rank fusion & search.', color: 'bg-emerald-50 border-emerald-300 text-emerald-950' },
      { title: 'Local LLMs & Airgapped Inference', icon: '⚡', desc: 'Ollama (Llama 3.3, Mistral, DeepSeek), quantized GGUF & 0-cost offline inference.', color: 'bg-amber-50 border-amber-300 text-amber-950' },
    ],
    toolchain: ['LangChain Agents', 'Model Context Protocol (MCP)', 'RAG Architecture', 'ChromaDB Vector DB', 'Ollama (Local LLMs)', 'Semantic Chunking', 'Embeddings', 'JSON-RPC 2.0'],
    patterns: [
      'Dense RAG retrieval with hybrid vector search, reciprocal rank fusion & re-ranking',
      'Tool-enabled autonomous agent reasoning with strict output schemas and error handling',
      'Anthropic MCP client/server integration for local code repository intelligence',
      'Zero-cost airgapped local LLM inference with Ollama & quantized GGUF weights',
    ],
    guarantee: '🤖 Deterministic agentic tool boundaries, zero API token waste & high-accuracy semantic grounding.',
  },

  'ai-security': {
    id: 'ai-security',
    title: 'AI Security, Sandboxing & Defensive Firewalls',
    shortTitle: 'AI Security & Sandboxing',
    icon: '🛡️',
    countTag: 'Docker Blast Walls, LLM-Guard, CTF',
    badge: 'DEFENSIVE AI & SECURITY',
    badgeColor: 'border-rose-500 text-rose-900 bg-rose-100',
    washiColor: 'washi-tape-pink',
    mastery: 93,
    subCategories: [
      { title: 'Container Blast Walls', icon: '🐳', desc: 'Docker chroot jails, isolated process execution & strict network egress blocking.', color: 'bg-rose-50 border-rose-300 text-rose-950' },
      { title: 'Defensive AI Firewalls', icon: '🔒', desc: 'LLM-Guard proxy, prompt injection sanitization & system prompt leak mitigation.', color: 'bg-amber-50 border-amber-300 text-amber-950' },
      { title: 'Red Teaming & CTF Ranges', icon: '🧪', desc: 'Automated exploit probing, canary tokens & dynamic SHA-256 CTF flag generation.', color: 'bg-sky-50 border-sky-300 text-sky-950' },
      { title: 'Risk Scoring & Threat Audits', icon: '📋', desc: 'OWASP AIVSS threat models, vulnerability metrics & blast radius code audits.', color: 'bg-emerald-50 border-emerald-300 text-emerald-950' },
    ],
    toolchain: ['Docker Blast Walls', 'LLM-Guard Firewall', 'Prompt Injection Shields', 'OWASP AIVSS', 'Canary Tokens', 'Blast Radius Analysis', 'Linux Security Auditing'],
    patterns: [
      'Isolated process blast-walls with 0 host network connectivity for untrusted code',
      'Multi-layer defense against indirect prompt injections & jailbreak attacks',
      'Deterministic dynamic CTF flag verification for automated agent evaluation',
      'OWASP AIVSS vulnerability scoring for enterprise AI pipelines',
    ],
    guarantee: '🔒 Zero unvetted cloud egress, strict tool execution boundaries & zero prompt leakage.',
  },

  'ml-libraries': {
    id: 'ml-libraries',
    title: 'Libraries, Machine Learning & Deep Learning',
    shortTitle: 'ML, Deep Learning & Time Series',
    icon: '🧠',
    countTag: 'TensorFlow, PyTorch, Scikit-learn, LSTM',
    badge: 'AI & DATA ANALYSIS',
    badgeColor: 'border-purple-500 text-purple-900 bg-purple-100',
    washiColor: 'washi-tape-pink',
    mastery: 95,
    subCategories: [
      { title: 'Deep Learning & LSTMs', icon: '⚡', desc: 'TensorFlow, PyTorch & LSTM recurrent networks for time series forecasting.', color: 'bg-purple-50 border-purple-300 text-purple-950' },
      { title: 'Machine Learning & AutoML', icon: '🧠', desc: 'Scikit-learn Pipelines, SimpleImputer preprocessing & K-fold cross-validation.', color: 'bg-amber-50 border-amber-300 text-amber-950' },
      { title: 'Data Wrangling & Vector Ops', icon: '📊', desc: 'NumPy & Pandas tabular data pipelines, feature extraction & temporal modeling.', color: 'bg-sky-50 border-sky-300 text-sky-950' },
      { title: 'Visual Analytics & Metrics', icon: '📈', desc: 'Matplotlib & Streamlit dashboards with predictive metric graphs & evaluations.', color: 'bg-emerald-50 border-emerald-300 text-emerald-950' },
    ],
    toolchain: ['TensorFlow', 'PyTorch', 'LSTM Models', 'Scikit-learn Pipelines', 'NumPy', 'Pandas', 'Matplotlib', 'Streamlit'],
    patterns: [
      'Sequential deep learning pipelines for stock market time series forecasting',
      'Hyperparameter tuning & validation for improved predictive modeling',
      'Missing value imputation & safe categorical scaling in Scikit-learn',
      'Data Analysis & exploratory visualization with Pandas, NumPy & Matplotlib',
    ],
    guarantee: '📊 Strict leakage-free validation, extensible experimentation & reproducible ML pipelines.',
  },

  'languages-dsa': {
    id: 'languages-dsa',
    title: 'Programming Languages & Algorithmic Rigor',
    shortTitle: 'Programming Languages & DSA',
    icon: '💻',
    countTag: 'Python, C++ (STL), Javascript',
    badge: 'SYSTEMS SPEED & DSA',
    badgeColor: 'border-amber-500 text-amber-900 bg-amber-100',
    washiColor: 'washi-tape-yellow',
    mastery: 94,
    subCategories: [
      { title: 'Python (Advanced)', icon: '🐍', desc: 'Core driver for ML/DL, data analysis, automation, FastAPI & Flask backends.', color: 'bg-amber-50 border-amber-300 text-amber-950' },
      { title: 'Modern C++ (STL)', icon: '⚡', desc: 'High-performance C++ systems, competitive programming, pointers & low-latency STL.', color: 'bg-sky-50 border-sky-300 text-sky-950' },
      { title: 'Javascript (Modern ES6+)', icon: '🌐', desc: 'Modern web scripting, React & Next.js frontend dynamic UI event loops.', color: 'bg-emerald-50 border-emerald-300 text-emerald-950' },
      { title: 'DSA — Strivers A2Z Sheet', icon: '📚', desc: 'In Progress: Trees, Graphs, DP, Heaps, Sliding Windows & O(1) Space Rigor.', color: 'bg-purple-50 border-purple-300 text-purple-950' },
    ],
    toolchain: ['Python 3.12', 'C++20 (STL)', 'Javascript / TypeScript', 'Strivers A2Z DSA Sheet', 'Data Structures', 'Asymptotic Complexity'],
    patterns: [
      'Algorithmic time and space complexity optimization (O(1) auxiliary space)',
      'Clean modular Python codebases with strict type hinting and docstrings',
      'Memory management and pointer hygiene in modern C++',
      'Modern asynchronous Javascript execution for client UI events',
    ],
    guarantee: '🚀 Asymptotically optimal time/space complexity and clean modular design.',
  },

  'backend-web': {
    id: 'backend-web',
    title: 'Backend Engineering, APIs & AST Code Intelligence',
    shortTitle: 'Backend APIs & Code Intel',
    icon: '⚡',
    countTag: 'FastAPI, Next.js, SQLite, Tree-sitter',
    badge: 'ASYNC & LOCAL-FIRST',
    badgeColor: 'border-sky-500 text-sky-900 bg-sky-100',
    washiColor: 'washi-tape-pink',
    mastery: 92,
    subCategories: [
      { title: 'FastAPI & Rest API', icon: '⚡', desc: 'Async high-throughput REST endpoints, Pydantic type validation & OpenAPI.', color: 'bg-sky-50 border-sky-300 text-sky-950' },
      { title: 'Flask Microservices', icon: '🌐', desc: 'Lightweight microservices, local routing & modular backend service controllers.', color: 'bg-amber-50 border-amber-300 text-amber-950' },
      { title: 'Next.js & Frontend', icon: '⚛️', desc: 'Local-first visual intelligence interfaces & interactive flow visualization.', color: 'bg-purple-50 border-purple-300 text-purple-950' },
      { title: 'SQLite & Tree-sitter', icon: '🗄️', desc: 'Local-first SQLite storage & Tree-sitter AST syntax parser for codebase navigation.', color: 'bg-emerald-50 border-emerald-300 text-emerald-950' },
    ],
    toolchain: ['Rest API', 'Fast API', 'Flask', 'Next.js App Router', 'SQLite', 'Tree-sitter AST', 'Tailwind CSS', 'JSON-RPC'],
    patterns: [
      'High-throughput asynchronous non-blocking I/O with FastAPI',
      'Local-first privacy-focused execution model with offline analysis support',
      'Dependency-aware blast radius analysis & AST code comprehension with Tree-sitter',
      'Type-safe REST contracts and responsive browser-based visualization',
    ],
    guarantee: '⚡ Local-first execution, type-safe API contracts & low-latency async services.',
  },

  'iot-embedded': {
    id: 'iot-embedded',
    title: 'IoT Basics, Wearables & LoRa Research',
    shortTitle: 'IoT Basics, Edge AI & LoRa',
    icon: '📟',
    countTag: 'IoT (Offline), Raspberry Pi, LoRa',
    badge: 'HARDWARE & RESEARCH',
    badgeColor: 'border-emerald-500 text-emerald-900 bg-emerald-100',
    washiColor: 'washi-tape-green',
    mastery: 90,
    subCategories: [
      { title: 'Wearable Hardware Rigs', icon: '📟', desc: 'Raspberry Pi dementia assistant wearable with 24/7 continuous edge logging.', color: 'bg-emerald-50 border-emerald-300 text-emerald-950' },
      { title: 'Offline ASR & Speech', icon: '🎙️', desc: 'On-device Speech-to-Text conversation logging with zero cloud data leaks.', color: 'bg-sky-50 border-sky-300 text-sky-950' },
      { title: 'LoRa Technology Survey', icon: '📄', desc: 'Review Paper (2026): A Comprehensive Survey on LoRa Protocol, Architecture & Apps.', color: 'bg-purple-50 border-purple-300 text-purple-950' },
      { title: 'OLED & IoT Peripherals', icon: '🔌', desc: 'I2C SSD1306 OLED displays, sensor data acquisition & 15µA sleep profiling.', color: 'bg-amber-50 border-amber-300 text-amber-950' },
    ],
    toolchain: ['IoT Basics', 'IOT (Offline)', 'Wearable Edge Nodes', 'Raspberry Pi', 'Offline ASR Models', 'SX1276 LoRa (CSS)', 'I2C SSD1306 OLED'],
    patterns: [
      'Localized privacy-first wearable device engineering to mitigate memory loss',
      'Continuous offline audio pipeline eliminating cloud data vulnerability',
      'Comprehensive LoRa Chirp Spread Spectrum protocol & network architecture survey',
      'Optimized memory/storage footprints for 24/7 continuous edge data logging',
    ],
    guarantee: '🔒 100% localized privacy-first edge execution & zero cloud data leaks.',
  },

  'devops-rig': {
    id: 'devops-rig',
    title: 'DevOps, Linux Rig & Open Source Engineering',
    shortTitle: 'DevOps, Linux & Open Source',
    icon: '🛠️',
    countTag: 'OWASP BLT, Docker, Linux, Git',
    badge: 'DEV RIG & OPEN SOURCE',
    badgeColor: 'border-orange-500 text-orange-950 bg-orange-100',
    washiColor: 'washi-tape-yellow',
    mastery: 94,
    subCategories: [
      { title: 'OWASP BLT & Open Source', icon: '🛡️', desc: 'Active contributor to OWASP BLT, merging pull requests across blt-pages, tooling, and CodeRabbit.', color: 'bg-violet-50 border-violet-300 text-violet-950' },
      { title: 'Docker & Git Workflows', icon: '🐳', desc: 'Containerized sandboxes, Git branching, PR workflows & upstream forkmesh code reviews.', color: 'bg-rose-50 border-rose-300 text-rose-950' },
      { title: 'Linux (Ubuntu & Kali)', icon: '🐧', desc: 'Primary OS daily driver, shell scripting, terminal automation & security auditing.', color: 'bg-orange-50 border-orange-300 text-orange-950' },
      { title: 'Ideathons & Recognition', icon: '🏆', desc: 'GITS Ideathon (2025), TiE-U Ideathon (2024 Finalist), MLH Global Hack Week:Agents.', color: 'bg-purple-50 border-purple-300 text-purple-950' },
    ],
    toolchain: ['OWASP BLT (Merged PRs)', 'Git & Forkmesh', 'Docker', 'Linux (Ubuntu/Kali)', 'VS Code', 'Jupyter Lab', 'TiE-U / GITS Ideathons'],
    patterns: [
      'Active open-source contributor to OWASP BLT with merged pull requests',
      'Hermetic containerized runtime environments with isolated resources',
      'Clean Git version control with atomic commits and descriptive branches',
      'End-to-end rapid prototyping in competitive 24-hour ideathons',
    ],
    guarantee: '🏆 Proven open-source contributor, hermetic environments & continuous technical mastery.',
  },
};

// Global reactive category selection state
type CategoryListener = () => void;
let globalSelectedCategory = 'genai-rag-mcp';
const categoryListeners = new Set<CategoryListener>();

function emitCategoryChange() {
  categoryListeners.forEach((l) => l());
}

export function useSkillCategory() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const listener = () => setTick((t) => t + 1);
    categoryListeners.add(listener);
    return () => {
      categoryListeners.delete(listener);
    };
  }, []);

  const selectCategory = (id: string) => {
    sound.playPop();
    globalSelectedCategory = id;
    emitCategoryChange();
  };

  return {
    selectedCategory: globalSelectedCategory,
    currentDetail: ALL_SKILL_CATEGORIES[globalSelectedCategory] || ALL_SKILL_CATEGORIES['genai-rag-mcp'],
    selectCategory,
  };
}

// ==========================================
// PAGE 5: MASTER SKILLS DIRECTORY (LEFT PAGE)
// ==========================================
export function Page5_TechStack1() {
  const { selectedCategory, selectCategory } = useSkillCategory();

  const categoryList = Object.values(ALL_SKILL_CATEGORIES);

  return (
    <div className="w-full h-full pt-2 sm:pt-3 p-3.5 sm:p-4 md:pr-9 flex flex-col justify-between relative text-neutral-900 select-none overflow-y-auto md:overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-neutral-300/80 pb-1">
        <div>
          <div className="font-sketch font-extrabold text-xs sm:text-sm tracking-widest text-[#1d4ed8]">
            MASTER SKILLS ARSENAL (1/2)
          </div>
          <h2 className="font-marker text-base sm:text-lg text-neutral-900 tracking-tight flex items-center gap-1 font-extrabold">
            <Code className="w-4 h-4 text-neutral-800" />
            <span>Select Domain Category</span>
          </h2>
        </div>
        <StampBadge text="CLICK TO INSPECT" color="border-emerald-600 text-emerald-800" rotate="-2deg" />
      </div>

      {/* Categories Vertical Directory List */}
      <div className="my-auto py-0.5 space-y-1 sm:space-y-1.5 font-sketch">
        {categoryList.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <motion.button
              key={cat.id}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => selectCategory(cat.id)}
              className={`w-full p-1.5 sm:p-2 rounded-xs border-2 text-left transition-all cursor-pointer flex items-center justify-between ${isSelected
                  ? 'bg-amber-300 border-neutral-900 shadow-xs font-black -translate-y-0.5'
                  : 'bg-white/90 border-neutral-300 text-neutral-800 hover:bg-amber-100/70'
                }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">{cat.icon}</span>
                <div>
                  <div className="font-marker text-xs sm:text-sm text-neutral-950 font-extrabold leading-tight">
                    {cat.shortTitle}
                  </div>
                  <div className="font-sketch text-[9px] sm:text-[10px] text-neutral-700 font-bold">
                    {cat.countTag}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className={`font-mono text-[9px] font-black px-1.5 py-0.2 rounded-xs border ${isSelected ? 'bg-neutral-900 text-amber-300 border-neutral-950' : 'bg-neutral-100 text-neutral-700 border-neutral-300'
                  }`}>
                  {cat.mastery}%
                </span>
                <span className="font-marker text-xs font-extrabold text-[#1d4ed8]">
                  {isSelected ? '👉' : '›'}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-1 border-t border-neutral-300 flex items-center justify-between text-xs font-caveat text-neutral-700 font-bold">
        <span>* Click any category above to inspect its deep sub-categories and toolchains on the right page ➔</span>
        <StarDoodle className="w-4 h-4 text-amber-500" />
      </div>
    </div>
  );
}

// ==========================================
// PAGE 6: DEEP-DIVE SUB-CATEGORIES & TOOLCHAINS (RIGHT PAGE)
// ==========================================
export function Page6_TechStack2() {
  const { currentDetail } = useSkillCategory();

  return (
    <div className="w-full h-full pt-2 sm:pt-3 p-4 sm:p-5 md:pl-10 flex flex-col justify-between relative text-neutral-900 select-none overflow-y-auto md:overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-neutral-300/80 pb-1.5">
        <div>
          <div className="font-sketch font-extrabold text-xs sm:text-sm tracking-widest text-[#1d4ed8]">
            DOMAIN SPECIFICATIONS
          </div>
          <h2 className="font-marker text-base sm:text-xl text-neutral-900 tracking-tight flex items-center gap-1.5 font-extrabold">
            <span>{currentDetail.icon}</span>
            <span className="truncate">{currentDetail.title}</span>
          </h2>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs sm:text-sm font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-xs border border-emerald-300">
            {currentDetail.badge}
          </span>
        </div>
      </div>

      <div className="my-auto py-1 space-y-3 sm:space-y-4 font-sketch">
        {/* 1. Applied Engineering Pillars 4-Grid Breakdown */}
        <div>
          <div className="font-sketch font-extrabold text-xs sm:text-sm text-[#1d4ed8] uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Layers className="w-4 h-4 text-neutral-800" />
              <span>Applied Engineering Pillars &amp; Architectures</span>
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-black text-neutral-600">4 CORE PILLARS</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            {currentDetail.subCategories.map((sub, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -1 }}
                onClick={() => sound.playPop()}
                className={`p-2.5 sm:p-3 rounded-xs border-2 shadow-2xs cursor-pointer flex flex-col justify-between ${sub.color}`}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-base sm:text-lg">{sub.icon}</span>
                  <span className="font-marker text-xs sm:text-sm font-extrabold leading-tight">
                    {sub.title}
                  </span>
                </div>
                <p className="font-sketch text-xs sm:text-sm font-bold leading-snug">
                  {sub.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Key Toolchain & Libraries Chips */}
        <div className="p-3 bg-white/95 border-2 border-neutral-800 rounded-xs shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="font-sketch font-extrabold text-xs sm:text-sm text-[#1d4ed8] uppercase tracking-wider flex items-center gap-1">
              <Wrench className="w-4 h-4 text-neutral-800" />
              <span>Key Frameworks, Tools &amp; Libraries</span>
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-xs border border-emerald-300">
              {currentDetail.mastery}% MASTERY
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {currentDetail.toolchain.map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-neutral-100 hover:bg-amber-100 border border-neutral-400 rounded-xs font-mono text-[10px] sm:text-xs font-bold text-neutral-900 shadow-2xs transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-1.5 border-t border-neutral-300 flex items-center justify-between text-xs font-caveat text-neutral-700 font-bold">
        <span>* Select other categories on the left page to inspect their complete specifications and toolchains.</span>
        <StarDoodle className="w-4 h-4 text-emerald-600" />
      </div>
    </div>
  );
}

// ==========================================
// PAGE 7: FULL-PAGE WHIMSICAL WINDING ROADMAP
// ==========================================
interface JourneyWaypoint {
  id: string;
  step: number;
  year: string;
  title: string;
  organization: string;
  desc: string;
  badge: string;
  badgeColor: string;
  icon: string;
  color: string;
  bgLight: string;
  keyHighlights: string[];
  // % coordinates on the full page canvas
  leftPct: number;
  topPct: number;
  calloutPlacement: 'left' | 'right' | 'bottom-left' | 'bottom-right' | 'top-right';
}

const FULL_PAGE_WAYPOINTS: JourneyWaypoint[] = [
  {
    id: 'btech',
    step: 1,
    year: '2024',
    title: 'B.Tech CSE Genesis',
    organization: 'Geetanjali Institute of Technical Studies, Udaipur',
    desc: 'Began CS undergrad journey focusing on C++ OOP, DSA algorithms, and computer systems.',
    badge: 'STUDENT 🎓',
    badgeColor: 'bg-emerald-600 text-white',
    icon: '🎓',
    color: 'border-emerald-500 text-emerald-800',
    bgLight: 'bg-emerald-50/95',
    keyHighlights: ['DSA in C++', 'OOP Systems', 'GITS Udaipur'],
    leftPct: 78,
    topPct: 86,
    calloutPlacement: 'left',
  },
  {
    id: 'hackathons',
    step: 2,
    year: '2024–25',
    title: 'Ideathons & Global Hackathons',
    organization: 'GITS Ideathon (2025) • Tie-U (2024) • MLH Agents',
    desc: 'Finalist at GITS & Tie-U Ideathons presenting IoT prototypes; explored autonomous agent systems.',
    badge: 'HACKATHONS ⚡',
    badgeColor: 'bg-amber-500 text-neutral-950',
    icon: '⚡',
    color: 'border-amber-500 text-amber-800',
    bgLight: 'bg-amber-50/95',
    keyHighlights: ['GITS Ideathon Finalist', 'Tie-U Finalist', 'MLH Agents'],
    leftPct: 32,
    topPct: 68,
    calloutPlacement: 'right',
  },
  {
    id: 'research',
    step: 3,
    year: '2026',
    title: 'Published Research Review Paper',
    organization: 'International Publication Review — LoRa IoT Protocols',
    desc: 'Authored comprehensive survey evaluating Chirp Spread Spectrum modulation & sub-GHz meshes.',
    badge: 'RESEARCH 📄',
    badgeColor: 'bg-sky-600 text-white',
    icon: '📄',
    color: 'border-sky-500 text-sky-800',
    bgLight: 'bg-sky-50/95',
    keyHighlights: ['LoRaWAN & CSS', '868MHz Mesh', 'Review Paper 2026'],
    leftPct: 68,
    topPct: 46,
    calloutPlacement: 'left',
  },
  {
    id: 'projects',
    step: 4,
    year: '2026 (NOW)',
    title: 'AI Security & OWASP Contributor',
    organization: 'OWASP BLT (Bug Logging Tool) • AI Flaw Factory',
    desc: 'Actively contributing to OWASP BLT with merged pull requests; architecting containerized Cyber Range teaching AI security risks, LangChain RCE, and MCP sandboxing.',
    badge: 'OWASP & BUILDS 🛡️',
    badgeColor: 'bg-rose-600 text-white',
    icon: '🛡️',
    color: 'border-rose-500 text-rose-800',
    bgLight: 'bg-rose-50/95',
    keyHighlights: ['OWASP BLT Contributor', 'Merged Pull Requests', 'AI Flaw Factory CTF', 'Docker Sandboxes'],
    leftPct: 34,
    topPct: 26,
    calloutPlacement: 'right',
  },
  {
    id: 'future',
    step: 5,
    year: '2026+',
    title: 'SDE & ML Engineering Horizon',
    organization: 'Targeting High-Impact Internships & Full-Time Roles',
    desc: 'Ready to contribute production async microservices and ML pipelines to dynamic teams.',
    badge: 'DESTINATION 📍',
    badgeColor: 'bg-rose-600 text-white',
    icon: '📍',
    color: 'border-rose-500 text-rose-800',
    bgLight: 'bg-rose-50/95',
    keyHighlights: ['SDE / ML Intern', 'Bangalore, Pune, NCR & Remote', 'Available 2025–26'],
    leftPct: 22,
    topPct: 8,
    calloutPlacement: 'right',
  },
];

export function Page7_Journey1() {
  const [hoveredWaypoint, setHoveredWaypoint] = useState<JourneyWaypoint | null>(null);
  const [selectedWaypoint, setSelectedWaypoint] = useState<JourneyWaypoint | null>(null);

  const activeWaypoint = hoveredWaypoint || selectedWaypoint;

  const handleSelectWaypoint = (wp: JourneyWaypoint) => {
    sound.playPop();
    setSelectedWaypoint((prev) => (prev?.id === wp.id ? null : wp));
  };

  return (
    <div className="w-full h-full p-3 sm:p-4 md:pr-8 flex flex-col justify-between relative text-neutral-900 select-none overflow-y-auto md:overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b-2 border-neutral-300/80 pb-1 z-20 shrink-0">
        <div>
          <div className="font-sketch font-extrabold text-xs sm:text-sm tracking-widest text-[#1d4ed8]">
            ACADEMIC &amp; CAREER JOURNEY
          </div>
          <h2 className="font-marker text-base sm:text-lg text-neutral-900 tracking-tight flex items-center gap-1 font-extrabold">
            <Compass className="w-4 h-4 text-neutral-800" />
            <span>The Winding Journey Map</span>
          </h2>
        </div>
        <StampBadge text="HOVER PATH 🧭" color="border-purple-600 text-purple-800" rotate="-2deg" />
      </div>

      {/* Main Full-Page Winding Roadmap Canvas */}
      <div className="relative flex-1 w-full my-1 overflow-hidden font-sketch">
        {/* Full-Height Winding SVG Path */}
        <svg
          viewBox="0 0 400 480"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Path Glow */}
          <path
            d="M 312,415 C 300,455 220,445 160,435 C 115,425 90,390 105,335 C 120,280 185,305 170,365 C 155,410 115,360 135,305 C 155,250 275,280 270,225 C 265,160 160,185 135,125 C 115,80 90,55 90,38"
            stroke="#fbbf24"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.35"
            fill="none"
          />

          {/* Main Hand-Drawn Dashed Winding Path */}
          <path
            d="M 312,415 C 300,455 220,445 160,435 C 115,425 90,390 105,335 C 120,280 185,305 170,365 C 155,410 115,360 135,305 C 155,250 275,280 270,225 C 265,160 160,185 135,125 C 115,80 90,55 90,38"
            stroke="#181615"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="9,8"
            fill="none"
          />

          {/* Destination Cross '+' under top destination pin */}
          <line x1="82" y1="38" x2="98" y2="38" stroke="#181615" strokeWidth="3" strokeLinecap="round" />
          <line x1="90" y1="30" x2="90" y2="46" stroke="#181615" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Interactive Waypoint Nodes Placed Along the Winding Path */}
        {FULL_PAGE_WAYPOINTS.map((wp) => {
          const isSelected = activeWaypoint?.id === wp.id;
          const isDestination = wp.step === 5;

          return (
            <div
              key={wp.id}
              style={{ left: `${wp.leftPct}%`, top: `${wp.topPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
            >
              {/* Checkpoint Node Trigger */}
              <motion.div
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelectWaypoint(wp)}
                onMouseEnter={() => {
                  sound.playPop();
                  setHoveredWaypoint(wp);
                }}
                onMouseLeave={() => setHoveredWaypoint(null)}
                className="relative cursor-pointer flex flex-col items-center justify-center p-1"
              >
                {isDestination ? (
                  /* Destination Top Pin */
                  <div className="relative">
                    {isSelected && (
                      <div className="absolute -inset-2 bg-rose-500/30 rounded-full animate-ping pointer-events-none" />
                    )}
                    <div className="w-8 h-8 rounded-full bg-rose-600 text-white border-2 border-neutral-900 shadow-md flex items-center justify-center font-marker text-sm font-extrabold">
                      📍
                    </div>
                  </div>
                ) : wp.step === 1 ? (
                  /* Start Node Ring */
                  <div className="relative flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-white text-neutral-950 border-3 border-neutral-900 shadow-sm flex items-center justify-center font-marker text-xs font-black">
                      ◎
                    </div>
                    <span className="font-sketch font-black text-[10px] text-neutral-900 bg-amber-200/90 px-1 py-0.2 rounded-xs border border-neutral-700">
                      START
                    </span>
                  </div>
                ) : (
                  /* Standard Checkpoint Pin */
                  <div className="relative">
                    {isSelected && (
                      <div className="absolute -inset-2 bg-amber-400/40 rounded-full animate-pulse pointer-events-none" />
                    )}
                    <div className={`w-7 h-7 rounded-full border-2 border-neutral-900 shadow-xs flex items-center justify-center text-xs font-extrabold ${isSelected ? 'bg-neutral-900 text-amber-300 scale-110' : 'bg-white text-neutral-900 hover:bg-amber-100'
                      }`}>
                      {wp.icon}
                    </div>
                  </div>
                )}

                {/* Year Pill Tag */}
                <div className={`mt-0.5 font-mono text-[9px] font-black px-1.5 py-0.2 rounded-xs border shadow-2xs whitespace-nowrap ${isSelected ? 'bg-neutral-950 text-amber-300 border-amber-400' : 'bg-white text-neutral-900 border-neutral-800'
                  }`}>
                  {wp.year}
                </div>
              </motion.div>

              {/* FLOATING MILESTONE DOSSIER CARD (Directly next to the pin) */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute z-40 w-60 sm:w-68 p-2.5 rounded-xs border-2 shadow-xl ${wp.color} ${wp.bgLight} ${wp.calloutPlacement === 'left'
                        ? 'right-full mr-3 top-1/2 -translate-y-1/2'
                        : wp.calloutPlacement === 'bottom-left'
                          ? 'right-full mr-2 top-0'
                          : 'left-full ml-3 top-1/2 -translate-y-1/2'
                      }`}
                  >
                    {/* Washi Tape Corner */}
                    <div className="absolute -top-2 left-4 w-12 h-3.5 washi-tape washi-tape-pink -rotate-1 pointer-events-none" />

                    {/* Header */}
                    <div className="flex items-center justify-between pb-1 border-b border-neutral-300/80">
                      <div className="flex items-center gap-1 font-marker text-xs sm:text-sm text-neutral-950 font-extrabold leading-tight">
                        <span>{wp.icon}</span>
                        <span>{wp.title}</span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <span className={`font-mono text-[8px] font-black px-1.5 py-0.2 rounded-xs uppercase ${wp.badgeColor}`}>
                          {wp.badge}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedWaypoint(null);
                            setHoveredWaypoint(null);
                          }}
                          className="w-4 h-4 rounded-full bg-neutral-900/10 hover:bg-neutral-900/25 text-neutral-900 text-[10px] font-black flex items-center justify-center cursor-pointer transition-colors"
                          title="Close"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* Organization & Year */}
                    <div className="font-mono text-[10px] text-neutral-700 font-bold mt-1">
                      📅 {wp.year} • {wp.organization}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-neutral-900 font-bold leading-snug mt-1">
                      {wp.desc}
                    </p>

                    {/* Verified Chips */}
                    <div className="flex flex-wrap gap-1 pt-1.5 border-t border-neutral-300/60 mt-1.5">
                      {wp.keyHighlights.map((hl) => (
                        <span
                          key={hl}
                          className="px-1.5 py-0.5 bg-white/95 border border-neutral-400 rounded-xs font-sketch text-[10px] font-extrabold text-neutral-950 shadow-2xs"
                        >
                          ✓ {hl}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-1 border-t border-neutral-300 flex items-center justify-between text-xs sm:text-sm font-caveat text-neutral-700 font-bold z-20 shrink-0">
        <span>* Hover or click any checkpoint along the winding trail to reveal its story.</span>
        <Flag className="w-4 h-4 text-[#1d4ed8]" />
      </div>
    </div>
  );
}

// ==========================================
// PAGE 8: OPEN SOURCE & RESEARCH SPOTLIGHT
// ==========================================
export function Page8_Journey2() {
  const [activeTab, setActiveTab] = useState<'oss' | 'survey' | 'ideathons'>('oss');

  return (
    <div className="w-full h-full p-3.5 sm:p-4 md:pl-9 flex flex-col justify-between relative text-neutral-900 select-none overflow-y-auto md:overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-neutral-300/80 pb-1">
        <div>
          <div className="font-sketch font-extrabold text-xs sm:text-sm tracking-widest text-[#1d4ed8]">
            PUBLICATIONS, OPEN SOURCE &amp; HONORS
          </div>
          <h2 className="font-marker text-base sm:text-lg text-neutral-900 tracking-tight flex items-center gap-1 font-extrabold">
            <Award className="w-4 h-4 text-neutral-800" />
            <span>OWASP, Research &amp; Hackathon Honors</span>
          </h2>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => { sound.playPop(); setActiveTab('oss'); }}
            className={`px-2 py-0.5 font-sketch text-xs font-extrabold rounded-xs border-2 cursor-pointer transition-colors ${activeTab === 'oss' ? 'bg-[#181615] text-amber-200 border-neutral-900' : 'bg-white text-neutral-800 border-neutral-400'
              }`}
          >
            OWASP BLT 🛡️
          </button>
          <button
            onClick={() => { sound.playPop(); setActiveTab('survey'); }}
            className={`px-2 py-0.5 font-sketch text-xs font-extrabold rounded-xs border-2 cursor-pointer transition-colors ${activeTab === 'survey' ? 'bg-[#181615] text-amber-200 border-neutral-900' : 'bg-white text-neutral-800 border-neutral-400'
              }`}
          >
            LoRa Paper 📄
          </button>
          <button
            onClick={() => { sound.playPop(); setActiveTab('ideathons'); }}
            className={`px-2 py-0.5 font-sketch text-xs font-extrabold rounded-xs border-2 cursor-pointer transition-colors ${activeTab === 'ideathons' ? 'bg-[#181615] text-amber-200 border-neutral-900' : 'bg-white text-neutral-800 border-neutral-400'
              }`}
          >
            Ideathons ⚡
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-1 font-sketch">
        {activeTab === 'oss' ? (
          <div className="space-y-1.5 font-sketch">
            {/* Top Project Overview Banner */}
            <div className="p-2 sm:p-2.5 bg-violet-50/95 rounded-xs border-2 border-violet-400 shadow-2xs">
              <div className="flex items-start justify-between gap-1.5 border-b border-violet-200 pb-1">
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-mono text-[9px] font-black text-purple-900 bg-purple-200 px-1.5 py-0.2 rounded-xs border border-purple-300 uppercase">
                      OWASP Foundation • Open Source
                    </span>
                    <span className="font-mono text-[9px] font-black text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded-xs border border-emerald-300">
                      ACTIVE CONTRIBUTOR
                    </span>
                  </div>
                  <h3 className="font-marker text-sm sm:text-base text-neutral-950 font-extrabold mt-0.5 leading-tight flex items-center gap-1">
                    <span>🛡️</span>
                    <span>OWASP BLT (Bug Logging Tool)</span>
                  </h3>
                </div>
                <a
                  href="https://git.owaspblt.org/BLT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 bg-[#181615] text-amber-200 font-marker text-[11px] sm:text-xs rounded-xs flex items-center gap-1 hover:bg-neutral-800 transition-colors shrink-0 shadow-2xs font-extrabold"
                  title="View BLT Repository"
                >
                  <span>git.owaspblt.org</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-900 font-bold leading-snug mt-1">
                A crowdsourced vulnerability reporting &amp; bug bounty platform under the OWASP Foundation. Contributing across platform documentation, CI automation, and developer guides.
              </p>
            </div>

            {/* Scrollable PR Contributions List */}
            <div className="pt-0.5">
              <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono font-bold text-neutral-800 px-0.5 mb-1">
                <span className="font-extrabold text-purple-950">
                  Merged Pull Requests
                </span>
                <span className="text-[10px] text-neutral-600 font-bold italic">
                  ↓ Scroll for all PRs
                </span>
              </div>

              <div className="max-h-[175px] sm:max-h-[195px] md:max-h-[210px] overflow-y-auto space-y-1.5 pr-1 scrollbar-sketch">
                {ALL_PULL_REQUESTS.map((pr) => (
                  <div
                    key={pr.id}
                    className="p-2 bg-white/95 rounded-xs border-2 border-neutral-800 shadow-2xs hover:border-purple-600 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-1">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                          <span className="font-mono text-[9px] font-black bg-purple-600 text-white px-1.5 py-0.2 rounded-full uppercase">
                            MERGED #{pr.number} 🟣
                          </span>
                          <span className="font-mono text-[10px] text-neutral-600 font-bold truncate">
                            {pr.branch}
                          </span>
                          {pr.date && (
                            <span className="font-mono text-[9px] text-neutral-500 font-bold">
                              • {pr.date}
                            </span>
                          )}
                        </div>
                        <h4 className="font-marker text-xs sm:text-sm text-neutral-950 font-extrabold leading-tight">
                          {pr.title}
                        </h4>
                      </div>
                      <a
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-purple-700 hover:text-purple-950 shrink-0 inline-flex items-center"
                        title={`Open PR #${pr.number}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-neutral-800 font-bold leading-tight mt-1">
                      {pr.issueFixed && <strong>Resolves {pr.issueFixed}: </strong>}
                      {pr.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : activeTab === 'survey' ? (
          <div className="p-3 bg-[#fdfaf3] rounded-xs border-2 border-neutral-800 shadow-xs space-y-1.5">
            <div className="flex items-start justify-between gap-2 border-b border-neutral-300 pb-1">
              <div>
                <span className="font-mono text-[9px] font-black text-amber-800 bg-amber-200 px-1.5 py-0.2 rounded-xs border border-amber-400 uppercase">
                  Survey Research Review Paper (2026)
                </span>
                <h3 className="font-marker text-sm sm:text-base text-neutral-950 font-extrabold mt-0.5 leading-snug">
                  Comprehensive Survey on LoRa Technology, Chirp Spread Spectrum &amp; Sub-GHz Architectures
                </h3>
              </div>
            </div>

            <p className="text-xs text-neutral-900 font-bold leading-relaxed">
              Authored an in-depth academic survey evaluating LoRa physical-layer Chirp Spread Spectrum (CSS) modulation, MAC-layer arbitration, and multi-gateway mesh propagation characteristics in sub-GHz spectrums.
            </p>

            <div className="grid grid-cols-2 gap-1 pt-1 border-t border-neutral-300/80 font-mono text-[10px]">
              <div className="p-1 bg-sky-50 border border-sky-300 rounded-xs">
                <strong>Frequency Band:</strong> 868 MHz / 915 MHz ISM
              </div>
              <div className="p-1 bg-amber-50 border border-amber-300 rounded-xs">
                <strong>Modulation:</strong> CSS &bull; LoRaWAN Class A/B/C
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-neutral-300/80 font-mono text-[10px]">
              <div className="text-neutral-700 font-bold text-[10px]">
                📄 Published in <strong>IJARCS</strong> (Vol. 17)
              </div>
              <a
                href="https://ijarcs.info/index.php/Ijarcs/article/view/7480/6010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-0.5 bg-[#181615] text-amber-300 rounded-xs font-sketch text-xs font-extrabold hover:bg-neutral-800 transition-colors shadow-2xs"
              >
                <span>Read Published Paper</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-1.5">
            <div className="p-2.5 bg-amber-50/90 rounded-xs border-2 border-amber-400 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-marker text-xs sm:text-sm text-neutral-950 font-extrabold">
                  ⚡ GITS Ideathon 2025 (Finalist)
                </span>
                <span className="font-mono text-[9px] font-black bg-amber-300 text-amber-950 px-1.5 py-0.2 rounded-xs">
                  2025
                </span>
              </div>
              <p className="text-xs text-neutral-900 font-bold mt-0.5 leading-snug">
                Presented Assistive Wearable prototype with offline speech processing for dementia memory support.
              </p>
            </div>

            <div className="p-2.5 bg-purple-50/90 rounded-xs border-2 border-purple-400 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-marker text-xs sm:text-sm text-neutral-950 font-extrabold">
                  🏆 TiE-U Global Ideathon (Campus Finalist)
                </span>
                <span className="font-mono text-[9px] font-black bg-purple-300 text-purple-950 px-1.5 py-0.2 rounded-xs">
                  2024
                </span>
              </div>
              <p className="text-xs text-neutral-900 font-bold mt-0.5 leading-snug">
                Selected as college finalist presenting viable IoT hardware solutions with scalable microservice architectures.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-1 border-t border-neutral-300 flex items-center justify-between text-xs font-caveat text-neutral-700 font-bold">
        <span>* Research driven by practical hardware &amp; software prototyping.</span>
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
      </div>
    </div>
  );
}

// ==========================================
// PAGE 9: COLLABORATION & SERVICES
// ==========================================
export function Page9_Collab() {
  return (
    <div className="w-full h-full p-4 sm:p-5 md:pr-10 flex flex-col justify-between relative text-neutral-900 select-none overflow-y-auto md:overflow-hidden">
      {/* Header without [PAGE 09] */}
      <div className="flex items-center justify-between border-b-2 border-neutral-300/80 pb-1.5">
        <div>
          <div className="font-sketch font-extrabold text-sm sm:text-base tracking-widest text-[#1d4ed8]">
            COLLABORATION & SERVICES
          </div>
          <h2 className="font-marker text-lg sm:text-xl text-neutral-900 tracking-tight flex items-center gap-1.5 font-extrabold">
            <Handshake className="w-4 h-4 text-neutral-800" />
            <span>Areas We Can Build Together</span>
          </h2>
        </div>
        <StampBadge text="OPEN TO CONNECT" color="border-emerald-600 text-emerald-800" rotate="-2deg" />
      </div>

      <div className="my-auto py-1 space-y-2 font-sketch text-xs sm:text-sm">
        {[
          { title: 'Open Source Security & Tooling (OWASP BLT)', desc: 'Active contributor to OWASP BLT; open to collaborating on developer tooling, documentation architectures, vulnerability workflows, and CI/CD automation.', color: 'border-l-4 border-violet-500 bg-violet-50/90' },
          { title: 'AI Security & Cyber Ranges (AI Flaw Factory)', desc: 'Modular containerized CTF cyber range, LLM jailbreaks, LangChain Python REPL RCE, Vector DB cross-tenant leakage, and MCP boundary defense.', color: 'border-l-4 border-rose-500 bg-rose-50/90' },
          { title: 'Privacy-First Wearables & Edge AI (Memoraid)', desc: 'Embedded Raspberry Pi / ESP32 sensor systems, offline ASR, OLED displays, and low-power hardware.', color: 'border-l-4 border-emerald-500 bg-emerald-50/90' },
          { title: 'IoT Research & AutoML (LoRa & PRISM)', desc: 'Published wireless IoT survey research, end-to-end data cleaning pipelines, SimpleImputer, and cross-validation dashboards.', color: 'border-l-4 border-sky-500 bg-sky-50/90' },
        ].map((collab, idx) => (
          <div key={idx} className={`p-2 rounded-xs shadow-2xs ${collab.color}`}>
            <div className="font-extrabold text-neutral-950 flex items-center gap-1.5 text-xs sm:text-sm">
              <Zap className="w-3.5 h-3.5 text-neutral-800" />
              <span>{collab.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-800 font-bold leading-snug mt-0.5">{collab.desc}</p>
          </div>
        ))}

        <div className="relative p-2.5 bg-[#fef9c3] sticky-note rounded-xs border border-amber-300">
          <div className="absolute -top-2 left-6 w-14 h-3.5 washi-tape washi-tape-yellow" />
          <div className="flex items-center gap-1.5 font-sketch font-extrabold text-xs sm:text-sm text-amber-950">
            <HelpCircle className="w-4 h-4 text-amber-700" />
            <span>Direct Student Dispatch:</span>
          </div>
          <div className="mt-1 space-y-0.5 font-sketch text-xs sm:text-sm text-amber-950 font-extrabold">
            <div>📍 <strong>Location:</strong> {PROFILE_CONFIG.location}</div>
            <div>🎓 <strong>College:</strong> {PROFILE_CONFIG.college} (B.Tech CSE)</div>
            <div>📞 <strong>Phone:</strong> {PROFILE_CONFIG.phone}</div>
          </div>
        </div>
      </div>

      <div className="pt-1.5 border-t border-neutral-300 flex items-center justify-between text-xs sm:text-sm font-caveat text-neutral-700 font-bold">
        <span>* Open for internships, research collaborations & projects.</span>
        <Sparkles className="w-4 h-4 text-amber-500" />
      </div>
    </div>
  );
}

// ==========================================
// PAGE 10: GET IN TOUCH
// ==========================================
export function Page10_Postcard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sound.playPop();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      sound.playSuccessChime();

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#3b82f6', '#ec4899', '#10b981'],
      });
    }, 900);
  };

  return (
    <div className="w-full h-full p-4 sm:p-5 md:pl-10 flex flex-col justify-between relative text-neutral-900 select-none overflow-y-auto md:overflow-hidden">
      {/* Header without [PAGE 10] */}
      <div className="flex items-center justify-between border-b-2 border-neutral-300/80 pb-1.5">
        <div>
          <div className="font-sketch font-extrabold text-sm sm:text-base tracking-widest text-[#1d4ed8]">
            GET IN TOUCH
          </div>
          <h2 className="font-marker text-lg sm:text-xl text-neutral-900 tracking-tight font-extrabold">
            Postcard to Hiral Modi
          </h2>
        </div>
        <div className="font-mono text-xs sm:text-sm font-bold text-neutral-600">UDAIPUR • AIRMAIL</div>
      </div>

      <div className="my-auto py-1">
        <div className="relative p-3 sm:p-4 bg-[#fffefb] sketch-box shadow-md border-2 border-neutral-800">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[repeating-linear-gradient(45deg,#c0392b,#c0392b_10px,#fff_10px,#fff_20px,#235284_20px,#235284_30px,#fff_30px,#fff_40px)] rounded-t-xs" />

          <div className="flex justify-between items-start pt-0.5 mb-2">
            <div>
              <span className="font-caveat text-sm text-neutral-800 font-extrabold block">
                To: Hiral Modi
              </span>
              <span className="font-mono text-xs text-neutral-600 font-bold">
                {PROFILE_CONFIG.socials.email} • {PROFILE_CONFIG.phone}
              </span>
            </div>
            <div className="w-12 h-14 border-2 border-dashed border-red-700 bg-amber-50 rounded-xs flex flex-col items-center justify-center text-center p-0.5 relative rotate-2 shadow-2xs">
              <div className="font-marker text-[9px] text-red-800 leading-none font-bold">UDAIPUR</div>
              <div className="font-marker text-xs text-neutral-900 mt-0.5 font-bold">₹ 25</div>
              <div className="font-mono text-[7px] text-neutral-600 font-bold">RAJASTHAN</div>
            </div>
          </div>

          {isSent ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-5 text-center space-y-2"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-marker text-base sm:text-lg text-neutral-950 font-extrabold">
                Dispatched to Hiral!
              </h3>
              <p className="font-sketch text-xs sm:text-sm text-neutral-800 font-bold max-w-xs mx-auto">
                Thanks for reaching out, {formData.name}! Your message has been logged.
              </p>
              <button
                onClick={() => {
                  sound.playPop();
                  setIsSent(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-3 py-1 bg-neutral-900 text-amber-200 font-marker text-xs sm:text-sm rounded-xs cursor-pointer hover:bg-neutral-800 font-bold"
              >
                Send Another ✉️
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-1.5 font-sketch text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-neutral-800 font-extrabold mb-0.5">Your Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Recruiter / Collaborator"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-2 py-1 bg-neutral-50 border-b-2 border-neutral-400 focus:border-neutral-900 outline-hidden font-sketch text-xs sm:text-sm font-bold"
                  />
                </div>
                <div>
                  <label className="block text-neutral-800 font-extrabold mb-0.5">Your Email:</label>
                  <input
                    type="email"
                    required
                    placeholder="hello@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-2 py-1 bg-neutral-50 border-b-2 border-neutral-400 focus:border-neutral-900 outline-hidden font-sketch text-xs sm:text-sm font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-800 font-extrabold mb-0.5">Subject / Role:</label>
                <input
                  type="text"
                  placeholder="AI Security / OWASP Open Source / SDE Collaboration..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-2 py-1 bg-neutral-50 border-b-2 border-neutral-400 focus:border-neutral-900 outline-hidden font-sketch text-xs sm:text-sm font-bold"
                />
              </div>

              <div>
                <label className="block text-neutral-800 font-extrabold mb-0.5">Message:</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Hey Hiral, saw your OWASP BLT contributions and AI Flaw Factory projects..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-2 py-1 bg-neutral-50 border-b-2 border-neutral-400 focus:border-neutral-900 outline-hidden font-sketch text-xs sm:text-sm font-bold resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 bg-neutral-950 hover:bg-neutral-850 text-amber-100 font-marker text-xs sm:text-sm tracking-wider uppercase rounded-xs shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors font-extrabold"
              >
                {isSending ? (
                  <span>Folding Paper Airplane...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>Dispatch Airmail to Hiral 🚀</span>
                  </>
                )}
              </motion.button>
            </form>
          )}
        </div>

        {/* Verified Social & Direct Links */}
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2">
          <a
            href={PROFILE_CONFIG.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playPop()}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#bae6fd] border-2 border-sky-400 rounded-xs font-sketch text-xs sm:text-sm font-extrabold text-neutral-950 shadow-2xs hover:scale-105 transition-transform"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PROFILE_CONFIG.socials.email}`}
            onClick={() => sound.playPop()}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#fbcfe8] border-2 border-pink-400 rounded-xs font-sketch text-xs sm:text-sm font-extrabold text-neutral-950 shadow-2xs hover:scale-105 transition-transform"
          >
            <Mail className="w-4 h-4" />
            <span>{PROFILE_CONFIG.socials.email}</span>
          </a>
          <a
            href={`tel:${PROFILE_CONFIG.phone}`}
            onClick={() => sound.playPop()}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#fed7aa] border-2 border-orange-400 rounded-xs font-sketch text-xs sm:text-sm font-extrabold text-neutral-950 shadow-2xs hover:scale-105 transition-transform"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{PROFILE_CONFIG.phone}</span>
          </a>
          <a
            href={PROFILE_CONFIG.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playPop()}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#fef08a] border-2 border-amber-400 rounded-xs font-sketch text-xs sm:text-sm font-extrabold text-neutral-950 shadow-2xs hover:scale-105 transition-transform"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="pt-1.5 border-t border-neutral-300 flex items-center justify-between text-xs sm:text-sm font-caveat text-neutral-700 font-bold">
        <span>* Udaipur, Rajasthan • Geetanjali Institute of Technical Studies</span>
        <span className="font-marker text-xs sm:text-sm text-neutral-950 font-extrabold">Hiral Modi • 2026</span>
      </div>
    </div>
  );
}
