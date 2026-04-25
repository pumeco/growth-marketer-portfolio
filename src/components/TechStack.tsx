import type { FC } from 'react';

const TechStack: FC = () => {
  const stacks = [
    { category: '데이터 분석', tools: ['GA4', 'Mixpanel', 'Amplitude', 'Tableau', 'Looker'] },
    { category: 'CRM 및 인게이지먼트', tools: ['Braze', 'HubSpot', 'Klaviyo', 'Intercom', 'Customer.io'] },
    { category: '유저 획득(UA)', tools: ['Meta Ads', 'Google Ads', 'LinkedIn Ads', 'SEO (Ahrefs)', 'SEM'] },
    { category: '엔지니어링 기술', tools: ['SQL', 'Python (Pandas)', 'Javascript', 'Segment', 'HTML/CSS'] },
  ];

  return (
    <section id="stack" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>핵심 <span style={{ color: 'var(--accent-growth)' }}>기술 스택</span>.</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem' 
        }}>
          {stacks.map((s, i) => (
            <div key={i}>
              <h4 style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.8rem', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                marginBottom: '1.5rem'
              }} className="monospace">{s.category}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {s.tools.map((t, j) => (
                  <li key={j} style={{ 
                    color: 'var(--text-primary)', 
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <div style={{ width: '4px', height: '4px', background: 'var(--accent-growth)' }}></div>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
