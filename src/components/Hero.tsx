import type { FC } from 'react';
import { TrendingUp, BarChart3, Target } from 'lucide-react';

const Hero: FC = () => {
  return (
    <section id="about" className="container" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      paddingTop: '100px'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <div className="monospace" style={{ color: 'var(--accent-growth)', marginBottom: '1rem' }}>
          &gt; INITIALIZING GROWTH STRATEGY...
        </div>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>
          Driving <span style={{ color: 'var(--accent-growth)' }}>Sustainable Growth</span> Through Data & Experimentation.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
          I help high-growth startups scale by bridging the gap between product, marketing, and data. 
          Expert in customer acquisition, retention loops, and full-funnel optimization.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          <div style={{ 
            padding: '1.5rem', 
            background: 'var(--bg-secondary)', 
            borderLeft: '4px solid var(--accent-growth)',
            borderRadius: '4px'
          }}>
            <TrendingUp size={24} color="var(--accent-growth)" style={{ marginBottom: '0.5rem' }} />
            <div className="monospace" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$4.2M+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Revenue Driven</div>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            background: 'var(--bg-secondary)', 
            borderLeft: '4px solid var(--accent-data)',
            borderRadius: '4px'
          }}>
            <Target size={24} color="var(--accent-data)" style={{ marginBottom: '0.5rem' }} />
            <div className="monospace" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>-35%</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>CAC Reduction</div>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            background: 'var(--bg-secondary)', 
            borderLeft: '4px solid #facc15',
            borderRadius: '4px'
          }}>
            <BarChart3 size={24} color="#facc15" style={{ marginBottom: '0.5rem' }} />
            <div className="monospace" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>120+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A/B Tests Ran</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
