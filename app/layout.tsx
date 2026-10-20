import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UPMA',
  description: 'Unified Productivity & Monitoring Agent',
  manifest: '/manifest.webmanifest',
  themeColor: '#7c3aed',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
