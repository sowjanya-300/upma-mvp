import { DashboardShell } from '@/components/dashboard-shell';
import { expenseBuckets } from '@/lib/mock-data';

export default function FinancePage() {
  return (
    <DashboardShell title="Finance Dashboard" currentPage="/finance">
      <section className="stacked-grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h2>Cash overview</h2>
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
