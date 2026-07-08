// src/pages/Portfolio.jsx
import { useState } from 'react';

function Portfolio() {
  const [portfolio, setPortfolio] = useState([
    { asset: "BTC", amount: 2.45, value: 238000, allocation: 48 },
    { asset: "ETH", amount: 18.7, value: 68000, allocation: 14 },
    { asset: "SOL", amount: 420, value: 65000, allocation: 13 },
  ]);

  const totalValue = portfolio.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Portfolio Intelligence</h1>

      <div style={{ background: 'rgba(255,255,255,0.06)', padding: '2rem', borderRadius: '24px', marginBottom: '2rem' }}>
        <h2>Total Portfolio Value: ${totalValue.toLocaleString()}</h2>
        <p>AI Risk Score: <strong style={{color: '#10b981'}}>Medium</strong></p>
      </div>

      <h3 style={{ marginBottom: '1rem' }}>Current Allocation</h3>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {portfolio.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
            <div>
              <strong>{item.asset}</strong> — {item.amount} units
            </div>
            <div style={{ textAlign: 'right' }}>
              ${item.value.toLocaleString()} <span style={{opacity: 0.7}}>({item.allocation}%)</span>
            </div>
          </div>
        ))}
      </div>

      <button style={{
        marginTop: '2rem', padding: '1rem 2rem', background: '#10b981', color: '#000',
        border: 'none', borderRadius: '9999px', fontSize: '1.1rem', fontWeight: '700'
      }}>
        Get AI Rebalancing Suggestion
      </button>
    </div>
  );
}

export default Portfolio;