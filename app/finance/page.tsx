"use client";

import { DashboardShell } from '@/components/dashboard-shell';
import { expenseBuckets } from '@/lib/mock-data';
import { useState } from 'react';

export default function FinancePage() {
  const [yearly, setYearly] = useState(false);
  const [syncState, setSyncState] = useState('Finance synced');

  const income = yearly ? '₹14,80,000' : '₹1,20,000';
  const expense = yearly ? '₹8,56,800' : '₹71,400';

  return (
    <DashboardShell
      title="Finance Dashboard"
      currentPage="/finance"
      syncState={syncState}
      onSyncAll={() => setSyncState('Finance synced')}
      onNewAction={() => setSyncState('Forecast updated')}
    >
      <section className="stacked-grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h2>Cash overview</h2>
            <button className="ghost-button small" onClick={() => {
              setYearly((value) => !value);
              setSyncState(yearly ? 'Monthly view active' : 'Yearly view active');
            }}>Forecast</button>
          </div>
          <div className="finance-summary big">
            <div>
              <span>Income</span>
              <strong>{income}</strong>
            </div>
            <div>
              <span>Expenses</span>
              <strong>{expense}</strong>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>Budget buckets</h2>
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
    </DashboardShell>
  );
}
