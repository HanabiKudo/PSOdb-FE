// components/FloatingNav.tsx
import React from 'react';
import Link from 'next/link';

const navStyle: React.CSSProperties = {
  position: 'fixed',
  top: '60px',  // Adjusted for the top bar height
  left: 0,
  width: '200px',
  height: 'calc(100% - 60px)',  // Adjusted for the top bar height
  backgroundColor: '#2a2a2a',
  padding: '20px',
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  zIndex: 999,
};

const categoryStyle: React.CSSProperties = {
  color: 'white',
  marginBottom: '6px',
  fontSize: '18px',
};

const ulStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  marginBottom: '50px',
};

const liStyle: React.CSSProperties = {
  marginBottom: '5px',
  marginLeft: '15px',
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '14px',
};

const FloatingNav: React.FC = () => {
  return (
    <nav style={navStyle}> 
      <div>
        <h3 style={categoryStyle}>Player</h3>
        <ul style={ulStyle}>
          <li style={liStyle}><Link legacyBehavior href="/"><a style={linkStyle}>SectionIDs</a></Link></li>
          <li style={liStyle}><Link legacyBehavior href="/"><a style={linkStyle}>Classes</a></Link></li>
          <li style={liStyle}><Link legacyBehavior href="/"><a style={linkStyle}>Name Calc</a></Link></li> 
        </ul>
      </div>

      <div>
        <h3 style={categoryStyle}>Gear</h3>
        <ul style={ulStyle}>
          <li style={liStyle}><Link legacyBehavior href="/"><a style={linkStyle}>Weapons</a></Link></li>
          <li style={liStyle}><Link legacyBehavior href="/"><a style={linkStyle}>Frames</a></Link></li>
          <li style={liStyle}><Link legacyBehavior href="/"><a style={linkStyle}>Barriers</a></Link></li> 
          <li style={liStyle}><Link legacyBehavior href="/"><a style={linkStyle}>Units</a></Link></li>  
          <li style={liStyle}><Link legacyBehavior href="/"><a style={linkStyle}>Mags</a></Link></li>
        </ul>
      </div>

      <div>
        <h3 style={categoryStyle}>Zones</h3>
        <ul style={ulStyle}>
          <li style={liStyle}><Link legacyBehavior href="/"><a style={linkStyle}>Monsters</a></Link></li>
          <li style={liStyle}><Link legacyBehavior href="/"><a style={linkStyle}>Maps</a></Link></li>
        </ul>
      </div>

      
    </nav>
  );
};

export default FloatingNav;