import type { FC } from 'react';
import { Mail, Link2, Terminal } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer id="contact" style={{ padding: '6rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>비즈니스의 <span style={{ color: 'var(--accent-growth)' }}>성장 루프</span>를 함께 만듭니다.</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          새로운 기회, 컨설팅, 또는 데이터 기반의 성장에 대한 대화는 언제든 환영입니다.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '4rem' }}>
          <a href="mailto:hello@growthmarketer.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={20} /> <span className="monospace">이메일</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link2 size={20} /> <span className="monospace">링크드인</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={20} /> <span className="monospace">깃허브</span>
          </a>
        </div>
        
        <div className="monospace" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} GROWTH_PORTFOLIO // ALL_SYSTEMS_OPERATIONAL
        </div>
      </div>
    </footer>
  );
};

export default Footer;
