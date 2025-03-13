import React from 'react';
import './RulesAndRegulations.css';
import BodyContent from '../../../../BodyContent';

function RulesAndRegulations() {
  return (
    <BodyContent>
    <div className="rules-and-regulations-page">
      <h2>Rules and Regulations</h2>
      <p>Welcome to the Rules and Regulations page! Here you will find the guidelines and policies that govern our sports activities.</p>
      <div className="rules-list">
        <h3>General Rules</h3>
        <ul>
          <li>All participants must adhere to the schedule and be punctual.</li>
          <li>Proper sports attire must be worn during all activities.</li>
          <li>Respect and sportsmanship must be maintained at all times.</li>
          <li>Any form of misconduct will result in disciplinary action.</li>
        </ul>
        <h3>Specific Regulations</h3>
        <ul>
          <li>Equipment must be handled with care and returned after use.</li>
          <li>Participants must follow the instructions of coaches and officials.</li>
          <li>Medical clearance is required for participation in certain activities.</li>
          <li>Alcohol and drugs are strictly prohibited during sports events.</li>
        </ul>
      </div>
    </div>
    </BodyContent>
  );
}

export default RulesAndRegulations;