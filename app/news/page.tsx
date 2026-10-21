"use client";

import { DashboardShell } from '@/components/dashboard-shell';
import { newsStories } from '@/lib/mock-data';
import { useState } from 'react';

export default function NewsPage() {
  const [items, setItems] = useState(newsStories);
  const [syncState, setSyncState] = useState('News feed synced');

  const toggleSaved = (title: string) => {
    setItems((current) =>
      current.map((story) =>
        story.title === title ? { ...story, saved: !story.saved } : story,
      ),
    );
    setSyncState('News preferences updated');
  };

  return (
    <DashboardShell
      title="Multi-tier News"
      currentPage="/news"
      syncState={syncState}
      onSyncAll={() => setSyncState('News feed synced')}
      onNewAction={() => setSyncState('Saved list refreshed')}
    >
      <section className="panel">
        <div className="panel-header">
          <h2>Curated stories</h2>
          <button className="ghost-button small" onClick={() => setSyncState('Saved list refreshed')}>Saved for later</button>
        </div>
        <div className="news-grid">
          {items.map((story) => (
            <article key={story.title} className="news-card">
              <div className="news-image" />
              <div className="news-content">
                <span>{story.region} · {story.category}</span>
                <h3>{story.title}</h3>
                <small>{story.readTime}</small>
                <button className="ghost-button small saved-button" onClick={() => toggleSaved(story.title)}>
                  {story.saved ? 'Saved' : 'Save for later'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
