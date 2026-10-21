"use client";

import { DashboardShell } from '@/components/dashboard-shell';
import { mailSummaries } from '@/lib/mock-data';
import { useState } from 'react';

export default function MailPage() {
  const [mailItems, setMailItems] = useState(mailSummaries);
  const [selectedMailId, setSelectedMailId] = useState(mailSummaries[0].id);
  const [syncState, setSyncState] = useState('Mail sync active');

  const activeMail = mailItems.find((mail) => mail.id === selectedMailId) ?? mailItems[0];

  const handleAssignTask = () => setSyncState('Task created from selected mail');
  const handleArchive = () => {
    setMailItems((current) => current.filter((mail) => mail.id !== selectedMailId));
    setSyncState('Selected mail archived');
    setSelectedMailId(mailItems[0]?.id ?? 0);
  };
  const handleDelete = () => {
    setMailItems((current) => current.filter((mail) => mail.id !== selectedMailId));
    setSyncState('Selected mail deleted');
    setSelectedMailId(mailItems[0]?.id ?? 0);
  };

  return (
    <DashboardShell
      title="AI Mail Triage"
      currentPage="/mail"
      syncState={syncState}
      onSyncAll={() => setSyncState('Mail sync complete')}
      onNewAction={() => setSyncState('New mail filter created')}
    >
      <section className="stacked-grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h2>Inbox</h2>
            <button className="ghost-button small" onClick={() => setSyncState('Archive queue updated')}>Archive all</button>
          </div>
          <div className="mail-list">
            {mailItems.map((mail) => (
              <article key={mail.id} className={`mail-card ${mail.id === activeMail.id ? 'active' : ''}`} onClick={() => setSelectedMailId(mail.id)}>
                <div className="mail-topline">
                  <div>
                    <strong>{mail.senderName}</strong>
                    <span>{mail.senderEmail}</span>
                  </div>
                  <span className={`priority ${mail.urgency.toLowerCase()}`}>{mail.urgency}</span>
                </div>
                <p className="mail-summary">{mail.summary}</p>
                <div className="tag-row">
                  {mail.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>{activeMail.senderName}</h2>
            <span>{activeMail.date}</span>
          </div>
          <p className="detail-meta">{activeMail.senderEmail} · {activeMail.folder}</p>
          <p className="summary-note">{activeMail.summary}</p>
          <div className="detail-actions">
            {activeMail.actionItems.map((item) => (
              <span key={item} className="tiny-tag">{item}</span>
            ))}
          </div>
          <div className="mail-body">
            <p>{activeMail.body}</p>
          </div>
          <div className="mail-actions">
            <button className="primary-button small" onClick={handleAssignTask}>Assign as task</button>
            <button className="ghost-button small" onClick={handleArchive}>Archive</button>
            <button className="ghost-button small danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
