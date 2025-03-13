import React from 'react';
import './HockeyCard.css';

function HockeyCard({ image, name, position, title }) {
  return (
    <div className="hockey-card">
      <img src={image} alt={name} className="hockey-card-image" />
      <div className="hockey-card-info">
        <p><strong>{title}:</strong> {name}</p>
        <p><strong>Position:</strong> {position}</p>
      </div>
    </div>
  );
}

export default HockeyCard;