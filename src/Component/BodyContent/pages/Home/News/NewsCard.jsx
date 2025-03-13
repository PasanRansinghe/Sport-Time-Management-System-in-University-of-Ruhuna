import React from "react";
import "./NewsCard.css";

function NewsCard({ id, title, date, description, onDelete }) {
  return (
    <div className="news-card">
      <h3>{title}</h3>
      <p className="news-date">{date}</p>
      <p className="news-description">{description}</p>
      <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default NewsCard;
