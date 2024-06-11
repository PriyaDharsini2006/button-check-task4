// src/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [rotation, setRotation] = useState(0);
  const [visible, setVisible] = useState(true);

  const rotateHeader = () => {
    setRotation(rotation + 90);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="header-container">
      {visible && (
        <h1 style={{ transform: `rotate(${rotation}deg)` }}>Dynamic Header</h1>
      )}
      <button onClick={rotateHeader}>Rotate Header</button>
      <button onClick={toggleVisibility}>
        {visible ? 'Hide Header' : 'Show Header'}
      </button>
    </div>
  );
};

export default Header;
