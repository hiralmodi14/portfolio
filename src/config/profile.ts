import pullRequestsData from '@/data/pullRequests.json';

export interface ProfileConfig {
  name: string;
  initials: string;
  role: string;
  degree: string;
  college: string;
  batch: string;
  photo: string;
  polaroidCaption: string;
  greeting: string;
  bio: string;
  philosophy: string;
  location: string;
  phone: string;
  turnaround: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  openSource: {
    organization: string;
    project: string;
    repoUrl: string;
    websiteUrl: string;
    prs: typeof pullRequestsData;
  };
}

export const PROFILE_CONFIG: ProfileConfig = {
  name: 'Hiral Modi',
  initials: 'HM',
  role: 'CS Undergrad • AI Security & IoT Builder • OWASP BLT Contributor',
  degree: 'B.Tech in Computer Science Engineering',
  college: 'Geetanjali Institute of Technical Studies (GITS)',
  batch: '2024 – 2028 • Udaipur, Rajasthan',
  photo: '/portfolio/images/profile.jpg',
  polaroidCaption: 'Powered by curiosity & morning sunlight🌻',
  greeting: "Hey, I'm Hiral Modi!",
  bio: 'Computer Science Engineering student at Geetanjali Institute of Technical Studies (2024–2028). Active open-source contributor to OWASP BLT (Bug Logging Tool) with merged pull requests. Passionate about AI Security, Cyber Ranges (AI Flaw Factory), containerized LLM sandboxes, and privacy-first IoT systems.',
  philosophy: 'Deconstruct from first principles. Build sandboxed systems. Measure real-world impact.',
  location: 'Udaipur, Rajasthan, India',
  phone: '+91 9351386327',
  turnaround: 'Replies dispatched within 24 hours',
  socials: {
    github: 'https://github.com/hiralmodi',
    linkedin: 'https://linkedin.com/in/hiral-modi-62644b380',
    email: 'work.hiralmodi@gmail.com',
  },
  openSource: {
    organization: 'OWASP Foundation',
    project: 'OWASP BLT (Bug Logging Tool)',
    repoUrl: 'https://git.owaspblt.org/BLT',
    websiteUrl: 'https://owaspblt.org',
    prs: pullRequestsData,
  },
};
