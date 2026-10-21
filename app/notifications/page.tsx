"use client";

import { DashboardShell } from '@/components/dashboard-shell';
import { notifications } from '@/lib/mock-data';
import { useState } from 'react';

export default function NotificationsPage() {
  const [items, setItems] = useState(notifications);
  const [syncState, setSyncState] = useState('Notifications live');

  const markAllRead = () => {
    setItems((current) => current.map((item) => ({ ...item, read: true })));
    setSyncState('All notifications marked read');
  };

  return (
    <DashboardShell
      title="Alerts & Notifications"
      currentPage="/notifications"
      syncState={syncState}
      onSyncAll={() => setSyncState('Notification center synced')}
      onNewAction={() => setSyncState('New alert added')}
    >
      <section className="panel">
        <div className="panel-header">
          <h2>Unified alert center</h2>
          <button className="ghost-button small" onClick={markAllRead}>Mark all read</button>
        </div>
        <div className="notification-list">
          {items.map((item) => (
            <div key={item.id} className={`notification ${item.severity} ${item.read ? 'read' : 'unread'}`}>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
              <small>{item.read ? 'Read' : 'Unread'}</small>
            </div>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
