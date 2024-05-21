// components/FloatingNav.tsx
import React, { useState } from 'react';
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
  marginBottom: '20px',
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

const toggleContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 0',
  borderTop: '1px solid #444',
  color: 'white',
  marginBottom: '30px',
};

const toggleLabelStyle: React.CSSProperties = {
  fontSize: '14px',
  marginRight: '10px',
};

const toggleSwitchStyle: React.CSSProperties = {
  position: 'relative',
  display: 'inline-block',
  width: '40px',
  height: '20px',
};

const toggleSliderStyle: React.CSSProperties = {
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#ccc',
  transition: '.4s',
  borderRadius: '20px',
};

const toggleSliderBeforeStyle: React.CSSProperties = {
  position: 'absolute',
  content: '""',
  height: '14px',
  width: '14px',
  borderRadius: '50%',
  backgroundColor: 'white',
  transition: '.4s',
  left: '3px',
  bottom: '3px',
};

const toggleSliderCheckedStyle: React.CSSProperties = {
  backgroundColor: '#2196F3',
};

const toggleSliderCheckedBeforeStyle: React.CSSProperties = {
  transform: 'translateX(20px)',
};

const FloatingNav: React.FC = () => {
  const [toggleState, setToggleState] = useState<boolean>(false);

  const handleToggleChange = () => {
    setToggleState(!toggleState);
  };

  return (
    <nav style={navStyle}> 
      <div>
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
      </div>

      <div style={toggleContainerStyle}>
        <span style={toggleLabelStyle}>{toggleState ? 'Ragol' : 'Vanilla'}</span>
        <label style={toggleSwitchStyle}>
          <input type="checkbox" checked={toggleState} onChange={handleToggleChange} style={{ display: 'none' }} />
          <span style={{ 
            ...toggleSliderStyle, 
            ...(toggleState ? toggleSliderCheckedStyle : {}),
          }}>
            <span style={{ 
              ...toggleSliderBeforeStyle, 
              ...(toggleState ? toggleSliderCheckedBeforeStyle : {}),
            }}></span>
          </span>
        </label>
      </div>
    </nav>
  );
};

export default FloatingNav;
