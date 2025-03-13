import React from 'react';
import './Home.css';
import BodyContent from '../../../BodyContent/BodyContent';
import { Link } from "react-router-dom";

function Home() {
  return (
    <BodyContent>
      <div className="home-content">
        <h2 className="home-title">Welcome to the University Sport Management System!</h2>
        <p className="home-description">
          Welcome to the official portal for managing and exploring sports activities at University of Ruhuna. Our platform is designed to streamline access to sports resources, provide up-to-date information on events, and foster a thriving sports community.
        </p>
        <div className="grid-container">
          <Link to="/sports"><button className="grid-item">Sports</button></Link>
          <Link to="/news"><button className="grid-item">News</button></Link>
          <Link to="/announcement"><button className="grid-item">Announcements</button></Link>
          <Link to="/live-update"><button className="grid-item">Live Update</button></Link>
        </div>
        <div className="offerings">
          <h3>What We Offer:</h3>
          <ul>
            <li><strong>Event Registration:</strong> Participate in tournaments, matches, and sports fests.</li>
            <li><strong>Schedules & Updates:</strong> Stay informed about practice sessions, competitions, and special events.</li>
            <li><strong>Facility Booking:</strong> Reserve courts, fields, or equipment for your personal or team use.</li>
            <li><strong>Resources:</strong> Access guides, tutorials, and fitness tips to enhance your performance.</li>
          </ul>
        </div>
      </div>
    </BodyContent>
  );
}

export default Home;
