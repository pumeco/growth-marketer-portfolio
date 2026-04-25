import type { FC } from 'react';

const MetricsOverview: FC = () => {
  const metrics = [
    { label: 'Organic Search Growth', value: '145%', trend: '+', subtext: 'YoY increase in SEO traffic' },
    { label: 'Conversion Rate', value: '4.8%', trend: '+', subtext: 'Optimized from 2.1% base' },
    { label: 'Retention (D30)', value: '32%', trend: '+', subtext: 'High-intent segment focus' },
    { label: 'ROAS', value: '4.2x', trend: '+', subtext: 'Across Meta & Google Ads' },
  ];

  return (
    <section id="metrics" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>The <span style={{ color: 'var(--accent-growth)' }}>Numbers</span> Don't Lie.</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ 
              padding: '2rem', 
              background: 'var(--bg-tertiary)', 
              borderRadius: '8px',
              border: '1px solid var(--border)',
              textAlign: 'center'
            }}>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {m.label}
              </div>
              <div className="monospace" style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {m.value}
              </div>
              <div style={{ color: 'var(--accent-growth)', fontSize: '0.85rem' }}>
                {m.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsOverview;
