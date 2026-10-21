import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UPMA | Command Center',
  description: 'Unified Productivity & Monitoring Agent',
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#7c3aed',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
