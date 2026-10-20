"use client";

import { useMemo, useState } from 'react';

type MailSummary = {
  id: number;
  senderName: string;
  senderEmail: string;
  date: string;
  folder: string;
  summary: string;
  actionItems: string[];
  body: string;
  tags: string[];
  urgency: 'High' | 'Medium' | 'Low';
};

const mailSummaries: MailSummary[] = [
  {
    id: 1,
    senderName: 'Priya Raman',
    senderEmail: 'priya@northstar.io',
    date: 'Today, 08:15',
    folder: 'Work',
    summary:
      'Client redesign review is ready for approval and the delivery timeline needs a decision before noon.',
    actionItems: ['Review landing page changes', 'Approve sprint delivery'],
    body:
      'The updated onboarding flow is complete. We need a sign-off to keep the Q4 launch on schedule. Please review the file links and confirm the final date before the design sync.',
    tags: ['Action Required', 'Urgent'],
    urgency: 'High',
  },
  {
    id: 2,
    senderName: 'Bank of India',
    senderEmail: 'alerts@bankofindia.in',
    date: 'Today, 06:40',
    folder: 'Financial',
    summary:
      'Your credit card statement is ready and shows a small overspend in the dining category across the last 7 days.',
    actionItems: ['Verify expense total', 'Tag discretionary spend'],
    body:
      'Statement summary is attached with receipts and a month-end progress review. We recommend capping discretionary spend to stay within the monthly household budget.',
    tags: ['Financial', 'Review'],
    urgency: 'Medium',
  },
  {
    id: 3,
    senderName: 'GitHub Alerts',
    senderEmail: 'noreply@github.com',
    date: 'Yesterday',
    folder: 'Productivity',
    summary:
      'Infrastructure deployment completed successfully with one issue report on the mobile push notification queue.',
    actionItems: ['Check deployment notes', 'Keep release checklist updated'],
    body:
      'Build 452 passed across staging and the mobile release is now available. One alert remains concerning queue latency in the notification worker and should be reviewed after the current release cycle.',
    tags: ['Informational'],
    urgency: 'Low',
  },
];

const projectTasks = [
  { name: 'Q4 Launch Plan', status: 'In Progress', completion: 72, owner: 'Product', due: '12 Sep', category: 'Work' },
  { name: 'Home Budget Reset', status: 'Review', completion: 68, owner: 'Finance', due: '18 Sep', category: 'Personal' },
  { name: 'Side Project AI Sprint', status: 'Blocked', completion: 36, owner: 'Engineering', due: '27 Sep', category: 'Side Hustle' },
  { name: 'Wellness Routine', status: 'Completed', completion: 100, owner: 'Health', due: 'Closed', category: 'Health' },
];

const expenseBuckets = [
  { label: 'Housing', value: 3400, color: 'violet' },
  { label: 'Food', value: 980, color: 'blue' },
  { label: 'Parents', value: 640, color: 'green' },
  { label: 'Sudden Desires', value: 420, color: 'orange' },
  { label: 'Savings', value: 1500, color: 'teal' },
];

const newsStories = [
  { title: 'AI and the Future of Knowledge Work', category: 'Technology', region: 'Global', image: 'https://images.unsplash.com/...', readTime: '4 min read' },
  { title: 'Tamil Nadu Growth Outlook', category: 'Business', region: 'Local', image: 'https://images.unsplash.com/...', readTime: '6 min read' },
  { title: 'EU energy market shift', category: 'Economy', region: 'International', image: 'https://images.unsplash.com/...', readTime: '5 min read' },
  { title: 'Weekend wellness reset', category: 'Lifestyle', region: 'Local', image: 'https://images.unsplash.com/...', readTime: '3 min read' },
];

const notifications = [
  { id: 1, title: 'Budget threshold crossed', detail: 'Dining overspend is 12% above plan.', severity: 'warning' },
  { id: 2, title: 'Task due today', detail: 'Q4 launch plan requires final approval.', severity: 'critical' },
  { id: 3, title: 'Email triaged', detail: 'Three new messages delegated to tasks.', severity: 'info' },
];

export default function UpmaDashboard() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [expandedMailId, setExpandedMailId] = useState<number | null>(mailSummaries[0].id);

  const selectedMail = useMemo(
    () => mailSummaries.find((mail) => mail.id === expandedMailId) ?? mailSummaries[0],
    [expandedMailId],
  );

  return (
    <main className={`shell ${theme}`}>
      <div className="app-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Unified Productivity & Monitoring Agent</p>
            <h1>UPMA Command Center</h1>
          </div>
          <div className="topbar-actions">
            <button className="ghost-button">Sync all</button>
            <button className="primary-button">Create task</button>
            <button className="icon-button" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </header>

        <section className="stats-row">
          <div className="stat-card">
            <span>Inbox queued</span>
            <strong>184</strong>
            <small>+22 vs yesterday</small>
          </div>
          <div className="stat-card">
            <span>Tasks at risk</span>
            <strong>07</strong>
            <small>2 overdue</small>
          </div>
          <div className="stat-card">
            <span>Monthly cash flow</span>
            <strong>₹1,48,000</strong>
            <small>+₹12,400 this month</small>
          </div>
          <div className="stat-card">
            <span>News digest</span>
            <strong>28</strong>
            <small>9 saved for later</small>
          </div>
        </section>

        <div className="content-grid">
          <section className="panel mail-panel">
            <div className="panel-header">
              <h2>AI Mail Triage</h2>
              <button className="ghost-button small">Archive all</button>
            </div>

            <div className="mail-list">
              {mailSummaries.map((mail) => (
                <article
                  key={mail.id}
                  className={`mail-card ${expandedMailId === mail.id ? 'active' : ''}`}
                  onClick={() => setExpandedMailId(mail.id)}
                >
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
                  <div className="mail-actions">
                    <button className="ghost-button small">Assign as task</button>
                    <button className="ghost-button small">Archive</button>
                    <button className="ghost-button small danger">Delete</button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mail-detail">
              <div className="panel-header">
                <h3>{selectedMail.senderName}</h3>
                <span>{selectedMail.date}</span>
              </div>
              <p className="detail-meta">
                {selectedMail.senderEmail} · {selectedMail.folder}
              </p>
              <p>{selectedMail.summary}</p>
              <div className="detail-actions">
                <span className="badge">Detected actions</span>
                {selectedMail.actionItems.map((item) => (
                  <span key={item} className="tiny-tag">{item}</span>
                ))}
              </div>
              <div className="mail-body">
                <p>{selectedMail.body}</p>
              </div>
            </div>
          </section>

          <aside className="panel right-rail">
            <div className="panel-header">
              <h2>Notifications</h2>
            </div>
            <div className="notification-list">
              {notifications.map((item) => (
                <div key={item.id} className={`notification ${item.severity}`}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              ))}
            </div>

            <div className="mini-panel">
              <h3>Remote sync</h3>
              <div className="sync-status">
                <span className="dot online" />
                <span>Supabase connected</span>
              </div>
              <div className="sync-status">
                <span className="dot online" />
                <span>Mail sync active</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="lower-grid">
          <section className="panel">
            <div className="panel-header">
              <h2>Project & Task Tracker</h2>
              <button className="ghost-button small">+ Add project</button>
            </div>
            <div className="task-table">
              {projectTasks.map((task) => (
                <div key={task.name} className="task-row">
                  <div>
                    <strong>{task.name}</strong>
                    <small>{task.owner} · {task.category}</small>
                  </div>
                  <span className="status-pill">{task.status}</span>
                  <div className="progress-block">
                    <div className="progress-bar">
                      <span style={{ width: `${task.completion}%` }} />
                    </div>
                    <small>{task.completion}%</small>
                  </div>
                  <span className="due-date">{task.due}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel">
            <div className="panel-header">
              <h2>Finance dashboard</h2>
              <button className="ghost-button small">Forecast</button>
            </div>
            <div className="finance-box">
              <div className="finance-summary">
                <div>
                  <span>Income</span>
                  <strong>₹1,20,000</strong>
                </div>
                <div>
                  <span>Expenses</span>
                  <strong>₹71,400</strong>
                </div>
              </div>
              <div className="bucket-list">
                {expenseBuckets.map((bucket) => (
                  <div key={bucket.label} className="bucket-row">
                    <div className="bucket-label-row">
                      <span className={`bullet ${bucket.color}`} />
                      <span>{bucket.label}</span>
                    </div>
                    <strong>₹{bucket.value.toLocaleString('en-IN')}</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="panel full-width">
          <div className="panel-header">
            <h2>Multi-tier news</h2>
            <button className="ghost-button small">Saved for later</button>
          </div>
          <div className="news-grid">
            {newsStories.map((story) => (
              <article key={story.title} className="news-card">
                <div className="news-image" />
                <div className="news-content">
                  <span>{story.region} · {story.category}</span>
                  <h3>{story.title}</h3>
                  <small>{story.readTime}</small>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
