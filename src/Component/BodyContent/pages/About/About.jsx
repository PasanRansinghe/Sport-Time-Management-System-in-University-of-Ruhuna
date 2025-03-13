import React, { useState } from "react";
import "./About.css";
import BodyContent from "../../../BodyContent/BodyContent";
import counsellorPhoto from "../../../../assets/OIP.png"; // Adjust the path to your image
import historyImage from "../../../../assets/OPI2.png"; // Import the OPI2.png image
import ruhunaImage from "../../../../assets/Ruhuna.png"; // Import the Ruhuna.png image

function About() {
  const [activeTab, setActiveTab] = useState("sportsCounsellor");

  const renderContent = () => {
    switch (activeTab) {
      case "sportsCounsellor":
        return (
          <div className="tab-content">
            <h2>Sports Counsellor Message</h2>
            <div className="profile-container">
              <img src={counsellorPhoto} alt="Sports Counsellor" className="profile-photo" />
              <div className="profile-info">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Position:</strong> Sports Counsellor</p>
                <p><strong>Email:</strong> john.doe@university.edu</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
              </div>
            </div>
            <div className="message">
              <p>
                Welcome to the Faculty of Engineering, University of Ruhuna! Sports and physical well-being play a crucial role in shaping well-rounded engineers...
              </p>
            </div>
          </div>
        );
      case "sportsCaptains":
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
          <div className="tab-content">
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
        );
      case "history":
        return (
          <div className="tab-content">
            <h2>History</h2>
            <div className="profile-container">
              <img src={historyImage} alt="History" className="profile-photo" />
              <div className="profile-info">
                <p><strong>Name:</strong> Dr. Jeevananda Keerthisena</p>
                <p><strong>Position:</strong> Founding Dean, Senior Lecturer</p>
                <p><strong>Qualifications:</strong> Ph.D. (Peradeniya), B.Sc.Eng.(Hons) (Ceylon), C.Eng. FIE (SL), IntPE(SL)</p>
              </div>
            </div>
            <div className="extra-info">
              <p>
                Dr. H.H.J. Keerthisena was appointed as founding dean of the faculty. The infrastructure for this faculty was well supported politically and driven by one of the former Education Ministers (the late) Richard Pathirana. As a result, within a short period of time (approximately 3 years) a large-scale infrastructure complex was built at Hapugala, including three laboratories; an administration building; a computer centre; a guest house; a lecture theater complex with two large drawing offices, two lecture theatres and two lecture rooms; three student hostels; a canteen with medical unit and student center; an audio-visual unit; a library; twenty staff quarters; internal roads and a security building. All of these facilities were designed for quick and easy access, and ample provision was made for future expansion.
              </p>
              <p>
                Academic departments: Faculty of Engineering, University of Ruhuna has four academic departments, namely the Departments of Civil and Environmental Engineering, Electrical and Information Engineering, Mechanical and Manufacturing Engineering, and Interdisciplinary Studies. The first three departments prepare students for B.Sc.Eng. degrees in disciplines as indicated in their department title. The academic advisory committee decided to incorporate a substantial amount of multi-disciplinary knowledge into engineering education. With this in mind, a fourth Department of Inter Disciplinary Studies was introduced. As stated above, this department does not offer Degrees, but extends support by delivering courses in mathematics, management, accounting, financing, economics, law, communication, presentation, entrepreneurship, human resource management, meditation, physical education, music, photographic and other similar multi-disciplinary areas.
              </p>
              
            </div>
          </div>
        );
      case "contactUs":
        return (
          <div className="tab-content">
            <h2>Contact Us</h2>
            <p>If you have any inquiries or need assistance, feel free to reach out to us!</p>
            <a href="https://www.bing.com/search?pglt=163&q=universoty+of+ruhuna+faculty+o+fengineering+location&cvid=adc09ad6541848eabf0c84163a14a7a4&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCTMxNzU0ajBqMagCALACAA&form=EX0050&ucpdpc=UCPD&adppc=EDGEESS&pc=ASTS&filters=local_ypid:%22YN8104x11555181347842712464%22&shtp=GetUrl&shid=ed74f5ae-ae18-490c-b66c-35d7eb0ac41a&shtk=RmFjdWx0eSBvZiBFbmdpbmVlcmluZywgVW5pdmVyc2l0eSBvZiBSdWh1bmE%3D&shdk=VGhlIEZhY3VsdHkgb2YgRW5naW5lZXJpbmcgb2YgVW5pdmVyc2l0eSBvZiBSdWh1bmEgd2FzIGVzdGFibGlzaGVkIG9uIDFzdCBKdWx5IDE5OTkgYXQgSGFwdWdhbGEsIEdhbGxlLiBGaXJzdCDigKY%3D&shhk=Yg9Z3WerO3g8QCTBMg7di%2B1zb5dzdww9lWNNoqU%2FGpk%3D" target="_blank" rel="noopener noreferrer">
              University of Ruhuna Faculty of Engineering Location
            </a>
            <div className="profile-container">
              <img src={ruhunaImage} alt="University of Ruhuna" className="profile-photo quadrilateral-photo" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <BodyContent>
      <div className="about-container">
        {/* Sidebar */}
        <div className="sidebar">
          <button
            className={`tab-button ${activeTab === "sportsCounsellor" ? "active" : ""}`}
            onClick={() => setActiveTab("sportsCounsellor")}
          >
            Sports Counsellor Message
          </button>
          <button
            className={`tab-button ${activeTab === "sportsCaptains" ? "active" : ""}`}
            onClick={() => setActiveTab("sportsCaptains")}
          >
            Sports Captains
          </button>
          <button
            className={`tab-button ${activeTab === "history" ? "active" : ""}`}
            onClick={() => setActiveTab("history")}
          >
            History
          </button>
          <button
            className={`tab-button ${activeTab === "contactUs" ? "active" : ""}`}
            onClick={() => setActiveTab("contactUs")}
          >
            Contact Us
          </button>
        </div>

        {/* Content Section */}
        <div className="content-section">{renderContent()}</div>
      </div>
    </BodyContent>
  );
}

export default About;