"use client";

import { DashboardShell } from '@/components/dashboard-shell';
import { projectTasks } from '@/lib/mock-data';
import { useState } from 'react';

export default function TasksPage() {
  const [tasks, setTasks] = useState(projectTasks);
  const [syncState, setSyncState] = useState('Tasks synced');

  const handleAddProject = () => {
    setTasks((current) => [
      ...current,
      {
        name: 'New AI Experiment',
        status: 'In Progress',
        completion: 18,
        owner: 'Product',
        due: '06 Oct',
        category: 'Side Hustle',
      },
    ]);
    setSyncState('New project added');
  };

  return (
    <DashboardShell
      title="Project & Task Tracker"
      currentPage="/tasks"
      syncState={syncState}
      onSyncAll={() => setSyncState('Task board synced')}
      onNewAction={handleAddProject}
    >
      <section className="panel">
        <div className="panel-header">
          <h2>Active plans</h2>
          <button className="ghost-button small" onClick={handleAddProject}>+ Add project</button>
        </div>
        <div className="task-table">
          {tasks.map((task) => (
            <div key={`${task.name}-${task.due}`} className="task-row">
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
