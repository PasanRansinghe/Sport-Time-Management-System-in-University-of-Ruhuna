import React from 'react';
import './SportsCaptains.css';
import BodyContent from '../../../../BodyContent';

function SportsCaptains() {
  const captains = [
    { id: 1, name: 'John Doe', batch: '2023', department: 'Computer', email: 'john.doe@example.com', sport: 'Hockey' },
    { id: 2, name: 'Jane Smith', batch: '2024', department: 'Civil', email: 'jane.smith@example.com', sport: 'Taekwondo' },
    { id: 3, name: 'Alex Johnson', batch: '2023', department: 'Mechanical', email: 'alex.johnson@example.com', sport: 'Badminton' },
    { id: 4, name: 'Emily Davis', batch: '2025', department: 'Electrical', email: 'emily.davis@example.com', sport: 'Baseball' },
    { id: 5, name: 'Michael Brown', batch: '2023', department: 'Marine', email: 'michael.brown@example.com', sport: 'Athletics' },
    { id: 6, name: 'Sarah Wilson', batch: '2024', department: 'Computer', email: 'sarah.wilson@example.com', sport: 'Football' },
    { id: 7, name: 'David Lee', batch: '2023', department: 'Civil', email: 'david.lee@example.com', sport: 'Cricket' },
    { id: 8, name: 'Laura Martinez', batch: '2025', department: 'Mechanical', email: 'laura.martinez@example.com', sport: 'Carrom' },
    { id: 9, name: 'James Anderson', batch: '2023', department: 'Electrical', email: 'james.anderson@example.com', sport: 'Table Tennis' },
    { id: 10, name: 'Olivia Taylor', batch: '2024', department: 'Marine', email: 'olivia.taylor@example.com', sport: 'Swimming' },
    { id: 11, name: 'Daniel Thomas', batch: '2023', department: 'Computer', email: 'daniel.thomas@example.com', sport: 'Karate' },
    { id: 12, name: 'Sophia White', batch: '2025', department: 'Civil', email: 'sophia.white@example.com', sport: 'Chess' },
    { id: 13, name: 'Matthew Harris', batch: '2023', department: 'Mechanical', email: 'matthew.harris@example.com', sport: 'Basketball' },
    { id: 14, name: 'Isabella Clark', batch: '2024', department: 'Electrical', email: 'isabella.clark@example.com', sport: 'Volleyball' },
    { id: 15, name: 'Ethan Lewis', batch: '2023', department: 'Marine', email: 'ethan.lewis@example.com', sport: 'Weight Lifting' },
  ];

  return (
    <BodyContent>
    <div className="sports-captains-page">
      <h2>Sports Captains</h2>
      <div className="captains-list">
        {captains.map((captain) => (
          <div key={captain.id} className="captain-card">
            <h3>{captain.name}</h3>
            <p><strong>Batch:</strong> {captain.batch}</p>
            <p><strong>Department:</strong> {captain.department}</p>
            <p><strong>Email:</strong> <a href={`mailto:${captain.email}`}>{captain.email}</a></p>
            <p><strong>Sport:</strong> {captain.sport}</p>
          </div>
        ))}
      </div>
    </div>
    </BodyContent>
  );
}

export default SportsCaptains;