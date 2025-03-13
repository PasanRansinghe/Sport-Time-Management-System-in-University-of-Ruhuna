import React from 'react';
import './Sports.css';
import BodyContent from '../../../BodyContent';
import { Link } from 'react-router-dom';

function Sports() {
  return (
    <BodyContent>
      <div className="sports-container">
        {/* Title and Description */}
        <div className="sports-header">
          <h2 className="sports-title">Sports</h2>
          <p className="sports-description">
            Welcome to the Sports page! Here you will find the latest sports updates and information.
          </p>
          <p className="sports-description">
            Explore various sports categories and stay updated with recent events and news.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="sports-grid">
          <Link to="/sports/hockey" className="grid-item">Hockey</Link>
          <Link to="/sports/taekwondo" className="grid-item">Taekwondo</Link>
          <Link to="/sports/karate" className="grid-item">Karate</Link>
          <Link to="/sports/badminton" className="grid-item">Badminton</Link>
          <Link to="/sports/baseball" className="grid-item">Baseball</Link>
          <Link to="/sports/chess" className="grid-item">Chess</Link>
          <Link to="/sports/carrom" className="grid-item">Carrom</Link>
          <Link to="/sports/cricket" className="grid-item">Cricket</Link>
          <Link to="/sports/volleyball" className="grid-item">Volleyball</Link>
          <Link to="/sports/basketball" className="grid-item">Basketball</Link>
          <Link to="/sports/weightlifting" className="grid-item">Weightlifting</Link>
          <Link to="/sports/tabletennis" className="grid-item">Table Tennis</Link>
          <Link to="/sports/athletics" className="grid-item">Athletics</Link>
          <Link to="/sports/swimming" className="grid-item">Swimming</Link>
          <Link to="/sports/football" className="grid-item">Football</Link>
        </div>
      </div>
    </BodyContent>
  );
}

export default Sports;
