import type { FC } from 'react';

const MetricsOverview: FC = () => {
  const metrics = [
    { label: '오가닉 유입 성장', value: '145%', trend: '+', subtext: 'SEO 최적화를 통한 전년 대비 성장' },
    { label: '전환율(CVR) 최적화', value: '4.8%', trend: '+', subtext: '2.1%에서 점진적 개선 달성' },
    { label: '리텐션 (D30)', value: '32%', trend: '+', subtext: '고관여 유저 세그먼트 집중 관리' },
    { label: '광고 수익률(ROAS)', value: '4.2x', trend: '+', subtext: 'Meta 및 Google 광고 성과' },
  ];

  return (
    <section id="metrics" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>데이터는 <span style={{ color: 'var(--accent-growth)' }}>거짓말</span>하지 않습니다.</h2>
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
