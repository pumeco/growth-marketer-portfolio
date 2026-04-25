import type { FC } from 'react';
import { ExternalLink, Database, Cpu, PieChart } from 'lucide-react';

const CaseStudies: FC = () => {
  const cases = [
    {
      title: "Fintech App: Referral Loop Optimization",
      impact: "+210% User Acquisition",
      desc: "Redesigned the referral incentive structure and flow, focusing on social proof and reduced friction.",
      tech: ["Python", "Mixpanel", "A/B Testing"],
      icon: <Cpu size={20} />
    },
    {
      title: "SaaS: Churn Reduction Strategy",
      impact: "-18% Monthly Churn",
      desc: "Implemented a lifecycle email sequence based on product usage triggers and behavioral segmentation.",
      tech: ["Braze", "Segment", "SQL"],
      icon: <Database size={20} />
    },
    {
      title: "E-commerce: LTV Maximization",
      impact: "+45% Avg. Order Value",
      desc: "Launched a tiered loyalty program and cross-sell engine powered by predictive analytics.",
      tech: ["Google Analytics", "Klaviyo", "Shopify"],
      icon: <PieChart size={20} />
    }
  ];

  return (
    <section id="cases" className="container">
      <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>Selected <span style={{ color: 'var(--accent-data)' }}>Experiments</span>.</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {cases.map((c, i) => (
          <div key={i} style={{ 
            background: 'var(--bg-secondary)', 
            borderRadius: '12px',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ 
              padding: '1.5rem', 
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.02)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-growth)' }}>
                {c.icon}
                <span className="monospace" style={{ fontSize: '0.8rem' }}>PROJECT_00{i+1}</span>
              </div>
              <ExternalLink size={16} color="var(--text-muted)" />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-growth)' }}>{c.impact}</h3>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{c.title}</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {c.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {c.tech.map((t, j) => (
                  <span key={j} style={{ 
                    fontSize: '0.7rem', 
                    padding: '0.25rem 0.75rem', 
                    background: 'var(--bg-tertiary)', 
                    color: 'var(--text-secondary)',
                    borderRadius: '20px',
                    border: '1px solid var(--border)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
