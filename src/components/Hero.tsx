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
          &gt; 성장을 위한 전략 초기화 중...
        </div>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>
          데이터와 실험으로 <br />
          <span style={{ color: 'var(--accent-growth)' }}>지속 가능한 성장</span>을 설계합니다.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
          제품, 마케팅, 그리고 데이터 사이의 간극을 좁혀 스타트업의 스케일업을 돕습니다. 
          신규 유저 획득(Acquisition)부터 리텐션 루프(Retention) 최적화까지, 전 과정의 퍼널을 분석합니다.
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
            <div className="monospace" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>약 56억+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>누적 창출 매출</div>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            background: 'var(--bg-secondary)', 
            borderLeft: '4px solid var(--accent-data)',
            borderRadius: '4px'
          }}>
            <Target size={24} color="var(--accent-data)" style={{ marginBottom: '0.5rem' }} />
            <div className="monospace" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>-35%</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>고객 획득 비용(CAC) 절감</div>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            background: 'var(--bg-secondary)', 
            borderLeft: '4px solid #facc15',
            borderRadius: '4px'
          }}>
            <BarChart3 size={24} color="#facc15" style={{ marginBottom: '0.5rem' }} />
            <div className="monospace" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>120+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A/B 테스트 실행</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
