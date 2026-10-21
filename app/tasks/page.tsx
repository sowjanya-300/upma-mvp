import { DashboardShell } from '@/components/dashboard-shell';
import { projectTasks } from '@/lib/mock-data';

export default function TasksPage() {
  return (
    <DashboardShell title="Project & Task Tracker" currentPage="/tasks">
      <section className="panel">
        <div className="panel-header">
          <h2>Active plans</h2>
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
    </DashboardShell>
  );
}
