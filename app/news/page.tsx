import { DashboardShell } from '@/components/dashboard-shell';
import { newsStories } from '@/lib/mock-data';

export default function NewsPage() {
  return (
    <DashboardShell title="Multi-tier News" currentPage="/news">
      <section className="panel">
        <div className="panel-header">
          <h2>Curated stories</h2>
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
    </DashboardShell>
  );
}
