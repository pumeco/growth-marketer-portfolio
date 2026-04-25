import type { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      zIndex: 1000
    }}>
      <div className="container" style={{
        height: '70px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="monospace" style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          color: 'var(--accent-growth)' 
        }}>
          GROWTH_ENGINEER_v1.0
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about">About</a>
          <a href="#metrics">Metrics</a>
          <a href="#cases">Case Studies</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
