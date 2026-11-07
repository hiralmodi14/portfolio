import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hiral Modi — AI Security & IoT Builder • OWASP BLT Contributor',
  description: 'Interactive sketchbook portfolio of Hiral Modi. CS undergrad, active OWASP BLT contributor, AI security researcher, and IoT hardware builder.',
  keywords: ['Hiral Modi', 'OWASP BLT', 'Open Source Contributor', 'AI Security', 'Portfolio', 'Sketchbook', 'Engineer', 'Developer', 'AI/ML'],
  authors: [{ name: 'Hiral Modi' }],
  openGraph: {
    title: 'Hiral Modi — Sketchbook Portfolio',
    description: 'An interactive 3D sketchbook portfolio with realistic page turning animations, blueprint schematics, and open-source contributions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Kalam:wght@400;700&family=Patrick+Hand&family=Permanent+Marker&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans selection:bg-amber-300 selection:text-neutral-900 bg-[#191613] text-neutral-900 min-h-screen h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
