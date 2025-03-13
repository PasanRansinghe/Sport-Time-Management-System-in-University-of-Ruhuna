import React, { useState } from 'react';
import './Schedules.css';
import BodyContent from '../../../../BodyContent';

function Schedules() {
  const [schedules, setSchedules] = useState([
    { id: 1, date: 'March 5, 2025', time: '4:00 PM', event: 'Hockey Practice', location: 'Stadium 1' },
    { id: 2, date: 'March 10, 2025', time: '3:30 PM', event: 'Basketball Game', location: 'Stadium 2' },
    { id: 3, date: 'March 15, 2025', time: '5:00 PM', event: 'Football Match', location: 'Main Arena' },
  ]);

  return (
    <BodyContent>
    <div className="schedules-page">
      <h2>Schedules</h2>
      <p>Welcome to the Schedules page! Here you will find the latest schedules for our sports activities.</p>
      <div className="schedules-list">
        {schedules.map((schedule) => (
          <div key={schedule.id} className="schedule-card">
            <h3>{schedule.event}</h3>
            <p><strong>Date:</strong> {schedule.date}</p>
            <p><strong>Time:</strong> {schedule.time}</p>
            <p><strong>Location:</strong> {schedule.location}</p>
          </div>
        ))}
      </div>
    </div>
    </BodyContent>
  );
}

export default Schedules;