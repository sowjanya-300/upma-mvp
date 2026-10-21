import { DashboardShell } from '@/components/dashboard-shell';
import { appStats, expenseBuckets, mailSummaries, newsStories, notifications, projectTasks } from '@/lib/mock-data';

export default function HomePage() {
  const featuredMail = mailSummaries[0];

  return (
    <DashboardShell title="Command Center" currentPage="/">
      <section className="stats-row">
        {appStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.hint}</small>
          </div>
        ))}
      </section>

      <section className="stacked-grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h2>AI Mail Triage</h2>
            <button className="ghost-button small">Archive all</button>
          </div>
          <div className="mail-list">
            {mailSummaries.map((mail) => (
              <article key={mail.id} className={`mail-card ${mail.id === featuredMail.id ? 'active' : ''}`}>
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
            <h2>{featuredMail.senderName}</h2>
            <span>{featuredMail.date}</span>
          </div>
          <p className="detail-meta">{featuredMail.senderEmail} · {featuredMail.folder}</p>
          <p className="summary-note">{featuredMail.summary}</p>
          <div className="detail-actions">
            {featuredMail.actionItems.map((item) => (
              <span key={item} className="tiny-tag">{item}</span>
            ))}
          </div>
          <div className="mail-body">
            <p>{featuredMail.body}</p>
          </div>
        </div>
      </section>

      <section className="stacked-grid two-col">
        <div className="panel">
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
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>Finance Snapshot</h2>
            <button className="ghost-button small">Forecast</button>
          </div>
          <div className="finance-summary big">
            <div>
              <span>Income</span>
              <strong>₹1,20,000</strong>
            </div>
            <div>
              <span>Expenses</span>
              <strong>₹71,400</strong>
            </div>
          </div>
          <div className="bucket-list compact">
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

      <section className="stacked-grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h2>News Digest</h2>
            <button className="ghost-button small">Saved for later</button>
          </div>
          <div className="news-grid compact-grid">
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
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>Alert Center</h2>
            <button className="ghost-button small">Mark all read</button>
          </div>
          <div className="notification-list">
            {notifications.map((item) => (
              <div key={item.id} className={`notification ${item.severity}`}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
