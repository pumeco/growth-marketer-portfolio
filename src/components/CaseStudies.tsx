import type { FC } from 'react';
import { ExternalLink, Database, Cpu, PieChart } from 'lucide-react';

const CaseStudies: FC = () => {
  const cases = [
    {
      title: "핀테크 앱: 추천인 루프 최적화",
      impact: "신규 유저 획득 +210%",
      desc: "사회적 증거(Social Proof)와 마찰 감소에 집중하여 추천인 보상 구조 및 플로우를 전면 개편했습니다.",
      tech: ["Python", "Mixpanel", "A/B Testing"],
      icon: <Cpu size={20} />
    },
    {
      title: "SaaS: 이탈률(Churn) 감소 전략",
      impact: "월간 이탈률 -18% 개선",
      desc: "제품 사용 트리거 기반의 라이프사이클 이메일 시퀀스 및 행동 세그먼트별 맞춤형 온보딩을 구현했습니다.",
      tech: ["Braze", "Segment", "SQL"],
      icon: <Database size={20} />
    },
    {
      title: "이커머스: 고객 생애 가치(LTV) 극대화",
      impact: "평균 주문 금액(AOV) +45%",
      desc: "예측 분석 데이터를 활용한 등급별 로열티 프로그램 및 개인화 추천 엔진을 도입했습니다.",
      tech: ["Google Analytics", "Klaviyo", "Shopify"],
      icon: <PieChart size={20} />
    }
  ];

  return (
    <section id="cases" className="container">
      <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>엄선된 <span style={{ color: 'var(--accent-data)' }}>성장 실험들</span>.</h2>
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
