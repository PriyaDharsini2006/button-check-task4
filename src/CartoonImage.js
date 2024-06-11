// src/CartoonImage.js
import React, { useState } from 'react';
import './CartoonImage.css';

const CartoonImage = () => {
  const images = ['1.jpg', '2.jpg', '3.jpg'];
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="cartoon-image-container">
      <img src={images[currentImage]} alt="Cartoon" />
      <button onClick={changeImage}>Change Cartoon</button>
    </div>
  );
};

export default CartoonImage;
