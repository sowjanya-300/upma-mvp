import { DashboardShell } from '@/components/dashboard-shell';
import { mailSummaries } from '@/lib/mock-data';

export default function MailPage() {
  const activeMail = mailSummaries[0];

  return (
    <DashboardShell title="AI Mail Triage" currentPage="/mail">
      <section className="stacked-grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h2>Inbox</h2>
            <button className="ghost-button small">Archive all</button>
          </div>
          <div className="mail-list">
            {mailSummaries.map((mail) => (
              <article key={mail.id} className={`mail-card ${mail.id === activeMail.id ? 'active' : ''}`}>
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
            <button className="primary-button small">Assign as task</button>
            <button className="ghost-button small">Archive</button>
            <button className="ghost-button small danger">Delete</button>
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
