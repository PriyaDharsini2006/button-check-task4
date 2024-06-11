// src/App.js
import React from 'react';
import './App.css';
import Header from './Header';
import CartoonImage from './CartoonImage';
import Background from './Background';

function App() {
  return (
    <Background>
      <div className="App">
        <Header />
        <CartoonImage />
      </div>
    </Background>
  );
}

export default App;

