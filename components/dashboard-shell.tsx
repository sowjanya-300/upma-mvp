"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const navItems = [
  { href: '/', label: 'Dashboard' },
  { href: '/mail', label: 'Mail' },
  { href: '/tasks', label: 'Tasks' },
  { href: '/finance', label: 'Finance' },
  { href: '/news', label: 'News' },
  { href: '/notifications', label: 'Notifications' },
];

export function DashboardShell({
  title,
  currentPage,
  children,
  onSyncAll,
  onNewAction,
  syncState,
}: {
  title: string;
  currentPage: string;
  children: ReactNode;
  onSyncAll?: () => void;
  onNewAction?: () => void;
  syncState?: string;
}) {
  const pathname = usePathname();
  const activePage = currentPage || pathname;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-logo">U</div>
          <div>
            <p className="brand-kicker">Workspace</p>
            <h2>UPMA</h2>
          </div>
        </div>

        <nav className="nav-stack" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${activePage === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sidebar-card">
          <p className="mini-label">Sync</p>
          <strong>{syncState ?? 'All systems online'}</strong>
          <span>Mail, tasks, finance, and news are synchronized.</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="content-header">
          <div>
            <p className="eyebrow">Unified Productivity & Monitoring Agent</p>
            <h1>{title}</h1>
          </div>
          <div className="header-actions">
            <button className="ghost-button" onClick={onSyncAll}>Sync all</button>
            <button className="primary-button" onClick={onNewAction}>+ New</button>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
