// src/pages/Home.jsx
import { useEffect, useState } from 'react';

const featuredAgents = [
  { name: "Momentum Agent", strategy: "Momentum", followers: 1240, roi: 32 },
  { name: "Mean Reversion", strategy: "Reversion", followers: 890, roi: 18 },
  { name: "Breakout Hunter", strategy: "Breakout", followers: 2140, roi: 47 },
];

function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setFeatured(featuredAgents);
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div className="hero" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.4rem', lineHeight: 1.1, marginBottom: '1rem' }}>
          AI Autonomous<br />Trading Agents
        </h1>
        <p style={{ fontSize: '1.35rem', maxWidth: '720px', margin: '0 auto 2rem' }}>
          Welcome to the AlphaScript Marketplace! Intelligent AI-powered agents for cryptocurrency trading.
        </p>
        <button 
          onClick={() => window.location.hash = 'agents'}
          style={{
            padding: '1rem 2rem',
            background: '#10b981',
            color: '#000',
            fontWeight: '700',
            borderRadius: '9999px',
            border: 'none',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}
        >
          Browse All Agents →
        </button>
      </div>

      <h2 style={{ textAlign: 'center', margin: '4rem 0 1rem', fontSize: '2rem' }}>
        Latest Agent Results
      </h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {featured.map((agent, index) => (
          <div key={index} style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '24px',
            padding: '1.5rem',
            transition: 'all 0.3s'
          }}>
            <span style={{ 
              background: 'rgba(16,185,129,0.2)', 
              color: '#10b981', 
              padding: '6px 16px', 
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: '700'
            }}>
              {agent.strategy}
            </span>
            
            <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.5rem' }}>{agent.name}</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Followers</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{agent.followers}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>30d ROI</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#10b981' }}>+{agent.roi}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;