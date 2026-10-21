import { DashboardShell } from '@/components/dashboard-shell';
import { notifications } from '@/lib/mock-data';

export default function NotificationsPage() {
  return (
    <DashboardShell title="Alerts & Notifications" currentPage="/notifications">
      <section className="panel">
        <div className="panel-header">
          <h2>Unified alert center</h2>
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
      </section>
    </DashboardShell>
  );
}
