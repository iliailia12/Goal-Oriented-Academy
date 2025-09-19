import React from 'react';
import './styles/card.css';
import image from '../public/images/image.jpg'; 

const Card = () => {
  return (
    <div className="card">
      <img src={image} alt="Sample" className="card-img"/>
      <div className="card-content">
        <h2>Card Title</h2>
        <p>This is a simple description of the card content.</p>
      </div>
    </div>
  );
};

export default Card;
