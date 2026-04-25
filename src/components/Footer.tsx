import type { FC } from 'react';
import { Mail, Link2, Terminal } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer id="contact" style={{ padding: '6rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Let's Build Your <span style={{ color: 'var(--accent-growth)' }}>Growth Loop</span>.</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Open to full-time roles, consulting, or just chatting about data and experiments.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '4rem' }}>
          <a href="mailto:hello@growthmarketer.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={20} /> <span className="monospace">EMAIL</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link2 size={20} /> <span className="monospace">LINKEDIN</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={20} /> <span className="monospace">GITHUB</span>
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
