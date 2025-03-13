import React from "react";
import "./LiveUpdateCard.css";

function LiveUpdateCard({ id, title, time, description, onDelete }) {
  return (
    <div className="live-update-card">
      <h3>{title}</h3>
      <p className="live-update-time">{time}</p>
      <p className="live-update-description">{description}</p>
      <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default LiveUpdateCard;
