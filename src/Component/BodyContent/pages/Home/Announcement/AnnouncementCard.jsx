import React from 'react';
import './AnnouncementCard.css';


function AnnouncementCard({ id, title, date, description, onDelete }) {
  return (
    <div className="announcement-card">
      <div className="announcement-header">
        <h3>{title}</h3>
        <p className="announcement-date">{date}</p>
      </div>
      <p className="announcement-description">{description}</p>
      <a href="#" className="read-more">Read More</a>

      {/* Delete Button */}
      <button className="delete-btn" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default AnnouncementCard;

