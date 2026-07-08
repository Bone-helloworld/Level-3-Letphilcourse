// src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';

const mockInsights = [
  {
    id: 1,
    title: "Bitcoin is in accumulation phase ahead of halving effect",
    summary: "On-chain data shows whales accumulating BTC in the $92k-$96k range. Weekly RSI is not yet overbought.",
    type: "market",
    time: "12 minutes ago"
  },
  {
    id: 2,
    title: "Top Yield Opportunity: ETH staking pool on Pendle",
    summary: "Real APY reaches 18.4% after fees. Low impermanent loss risk.",
    type: "yield",
    time: "47 minutes ago"
  },
  {
    id: 3,
    title: "Solana ecosystem heating up again with memecoin narrative",
    summary: "DEX volume on Solana surged 142% in the past 7 days.",
    type: "narrative",
    time: "2 hours ago"
  }
];

function Dashboard() {
  const [insights, setInsights] = useState([]);
  const [marketSentiment, setMarketSentiment] = useState("neutral");

  useEffect(() => {
    setInsights(mockInsights);
    const sentiments = ["bullish", "bearish", "neutral"];
    setMarketSentiment(sentiments[Math.floor(Math.random() * 3)]);
  }, []);

  return (
    <div style={{ padding: '2.5rem 1.5rem', maxWidth: '1480px', margin: '0 auto' }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <h1 style={{ 
          fontSize: '4.5rem', 
          fontWeight: '700',
          lineHeight: 1.05,
          marginBottom: '1rem'
        }}>
          Good morning, Investor
        </h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.8, maxWidth: '620px', margin: '0 auto' }}>
          Your personal AI market intelligence — updated in real-time
        </p>
      </div>

      {/* Market Snapshot - Horizontal Layout */}
      <div style={{ 
        display: 'flex', 
        gap: '3rem', 
        justifyContent: 'center', 
        marginBottom: '5rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.1rem', opacity: 0.6, marginBottom: '0.5rem' }}>BTC DOMINANCE</div>
          <div style={{ fontSize: '4.2rem', fontWeight: '700' }}>56.8%</div>
          <div style={{ color: '#10b981' }}>↑ 0.8% today</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.1rem', opacity: 0.6, marginBottom: '0.5rem' }}>MARKET SENTIMENT</div>
          <div style={{ 
            fontSize: '4.2rem', 
            fontWeight: '700',
            color: marketSentiment === 'bullish' ? '#10b981' : marketSentiment === 'bearish' ? '#ef4444' : '#fbbf24'
          }}>
            {marketSentiment.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Insights Feed - Clean List Style */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.1rem' }}>Today's AI Insights</h2>
          <button style={{ 
            padding: '0.8rem 2rem', 
            background: 'transparent', 
            border: '1px solid #10b981', 
            color: '#10b981', 
            borderRadius: '9999px',
            cursor: 'pointer'
          }}>
            View All Insights →
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {insights.map(insight => (
            <div key={insight.id} style={{
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.paddingLeft = '1.5rem'}
            onMouseOut={(e) => e.currentTarget.style.paddingLeft = '0'}
            >
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  padding: '6px 14px', 
                  borderRadius: '9999px', 
                  fontSize: '0.85rem', 
                  fontWeight: '600',
                  background: insight.type === 'yield' ? '#2563eb20' : '#10b98120',
                  color: insight.type === 'yield' ? '#60a5fa' : '#34d399',
                  minWidth: '110px',
                  textAlign: 'center'
                }}>
                  {insight.type.toUpperCase()}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.65rem', marginBottom: '0.8rem', lineHeight: 1.35 }}>{insight.title}</h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.65, opacity: 0.85 }}>{insight.summary}</p>
                  
                  <div style={{ marginTop: '1.2rem', display: 'flex', gap: '2rem', fontSize: '0.95rem', opacity: 0.6 }}>
                    <span>{insight.time}</span>
                    <span>5 min read</span>
                  </div>
                </div>

                <button style={{
                  padding: '0.9rem 2rem',
                  background: '#10b981',
                  color: '#000',
                  border: 'none',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  alignSelf: 'flex-start',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}>
                  Read →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;