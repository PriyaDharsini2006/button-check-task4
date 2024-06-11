// src/Background.js
import React, { useState } from 'react';
import './Background.css';

const Background = ({ children }) => {
  const backgrounds = ['b1.jpg', 'b2.jpg', 'b3.jpg'];
  const [currentBackground, setCurrentBackground] = useState(0);

  const changeBackground = () => {
    setCurrentBackground((currentBackground + 1) % backgrounds.length);
  };

  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
    >
      {children}
      <button onClick={changeBackground}>Change Background</button>
    </div>
  );
};

export default Background;
