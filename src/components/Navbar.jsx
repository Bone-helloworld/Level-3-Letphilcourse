// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [lang, setLang] = useState('EN');

  const toggleLanguage = () => {
    setLang(lang === 'EN' ? 'VN' : 'EN');
  };

  const connectWallet = () => {
    alert("Wallet connected successfully (Demo)");
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(16, 185, 129, 0.3)'
    }}>
      <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff' }}>
        AlphaScript
      </div>

      <div style={{ display: 'flex', gap: '1.8rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Dashboard</Link>
        <Link to="/agents" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>AI Agents</Link>
        <Link to="/portfolio" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Portfolio</Link>
        <Link to="/insights" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Insights</Link>
        <Link to="/yield" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Yield Hunter</Link>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button 
          onClick={connectWallet}
          style={{
            padding: '0.6rem 1.4rem',
            background: '#10b981',
            color: '#000',
            border: 'none',
            borderRadius: '9999px',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          Connect Wallet
        </button>
        
        <button 
          onClick={toggleLanguage}
          style={{
            padding: '0.5rem 1rem',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '9999px',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          {lang} 🌐
        </button>
      </div>
    </nav>
  );
}

export default Navbar;