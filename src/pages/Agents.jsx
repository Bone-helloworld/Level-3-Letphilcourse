// src/pages/Agents.jsx
import { useState, useEffect } from 'react';

const agentsData = [
  { id:1, name:"Momentum Hunter", strategy:"Short-term", risk:"Medium", followers:1240, roi:32, description:"Captures strong price momentum with tight stop-loss." },
  { id:2, name:"Mean Reversion Pro", strategy:"Medium-term", risk:"Low", followers:890, roi:18, description:"Exploits price returning to average." },
  { id:3, name:"Breakout Master", strategy:"Short-term", risk:"High", followers:2140, roi:47, description:"Detects and rides strong breakouts." },
  { id:4, name:"Long-term Value", strategy:"Long-term", risk:"Low", followers:670, roi:25, description:"Fundamental analysis + on-chain metrics." },
  { id:5, name:"Yield Optimizer", strategy:"Medium-term", risk:"Medium", followers:1560, roi:14, description:"Finds best DeFi yield opportunities." }
];

function Agents() {
  const [agents, setAgents] = useState(agentsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [strategyFilter, setStrategyFilter] = useState('');

  useEffect(() => {
    let filtered = agentsData.filter(agent => 
      agent.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (strategyFilter) {
      filtered = filtered.filter(a => a.strategy === strategyFilter);
    }

    setAgents(filtered);
  }, [searchTerm, strategyFilter]);

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>AI Strategy Agents</h1>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="Search agents..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.85rem 1.4rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', width: '320px' }}
        />

        <select value={strategyFilter} onChange={(e) => setStrategyFilter(e.target.value)} 
          style={{ padding: '0.85rem 1.4rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.08)', color: 'white' }}>
          <option value="">All Strategies</option>
          <option value="Short-term">Short-term</option>
          <option value="Medium-term">Medium-term</option>
          <option value="Long-term">Long-term</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
        {agents.map(agent => (
          <div key={agent.id} className="agent-card" style={{
            padding: '2rem', borderRadius: '24px', background: 'rgba(255,255,255,0.06)'
          }}>
            <h3 style={{ marginBottom: '0.5rem' }}>{agent.name}</h3>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>{agent.description}</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Strategy</div>
                <div style={{ fontWeight: '600' }}>{agent.strategy}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>30d ROI</div>
                <div style={{ color: '#10b981', fontWeight: '700' }}>+{agent.roi}%</div>
              </div>
            </div>

            <button style={{
              marginTop: '2rem', width: '100%', padding: '0.9rem', background: '#10b981',
              color: '#000', border: 'none', borderRadius: '9999px', fontWeight: '700', cursor: 'pointer'
            }}>
              Subscribe to Agent
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agents;