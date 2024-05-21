// src/TopBar.js
import React from 'react';

const topBarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: 'white',
  position: 'fixed', // Make the top bar fixed
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000, // Ensure it stays on top of other content
};

const logoStyle = {
  fontSize: '1.5em',
  fontWeight: 'bold',
};

const searchBarContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
};

const searchBarStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '500px',
  marginLeft: '20px',
  marginRight: '20px',
};

const searchInputStyle = {
  width: '100%',
  padding: '5px 10px',
  fontSize: '1em',
  borderRadius: '20px', // Rounded ends
  border: '1px solid #ccc',
};

const profilePictureStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
};

const TopBar = () => {
  return (
    <div style={topBarStyle}>
      <div style={logoStyle}>
          Motav
      </div>
      <div style={searchBarContainerStyle}>
        <div style={searchBarStyle}>
          <input type="text" placeholder="Search..." style={searchInputStyle} />
        </div>
      </div>
      <div>
        <img 
          src="https://avatars.githubusercontent.com/u/115150173?v=4" // Placeholder image URL, replace with actual image URL  https://avatars.githubusercontent.com/u/115150173?v=4  https://via.placeholder.com/40
          alt="Profile"
          style={profilePictureStyle}
        />
      </div>
    </div>
  );
};

export default TopBar;
