import React, { useState, useEffect } from "react";
import "./Announcement.css";
import BodyContent from "../../../BodyContent";
import AnnouncementCard from "./AnnouncementCard";

function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    date: "",
    description: "",
  });

  // Fetch announcements from backend
  useEffect(() => {
    fetch("http://localhost:3001/announcements")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data))
      .catch((error) => console.error("Error fetching announcements:", error));
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    setNewAnnouncement({ ...newAnnouncement, [e.target.name]: e.target.value });
  };

  // Handle adding new announcement
  const handleAddAnnouncement = async () => {
    if (!newAnnouncement.title || !newAnnouncement.date || !newAnnouncement.description) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/announcements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAnnouncement),
      });

      const data = await response.json();
      setAnnouncements([...announcements, data]); // Update cards dynamically

      setNewAnnouncement({ title: "", date: "", description: "" }); // Reset form
    } catch (error) {
      console.error("Error adding announcement:", error);
    }
  };

  // Handle deleting an announcement
  const handleDeleteAnnouncement = async (id) => {
    try {
      await fetch(`http://localhost:3001/announcements/${id}`, { method: "DELETE" });

      setAnnouncements(announcements.filter((announcement) => announcement.id !== id)); // Remove from state
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  return (
    <BodyContent>
      <div className="announcement-page">
        <h2>Announcements</h2>
        <p>Manage university sports announcements here.</p>

        {/* Announcements Cards */}
        <div className="announcement-cards">
          {announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              id={announcement.id}
              title={announcement.title}
              date={announcement.date}
              description={announcement.description}
              onDelete={handleDeleteAnnouncement}
            />
          ))}
        </div>

        {/* Add New Announcement Form */}
        <div className="add-announcement-form">
          <h3>Add New Announcement</h3>
          <input type="text" name="title" placeholder="Title" value={newAnnouncement.title} onChange={handleInputChange} />
          <input type="date" name="date" value={newAnnouncement.date} onChange={handleInputChange} />
          <textarea name="description" placeholder="Description" value={newAnnouncement.description} onChange={handleInputChange} />
          <button className="add-btn" onClick={handleAddAnnouncement}>+ Add Announcement</button>
        </div>
      </div>
    </BodyContent>
  );
}

export default Announcement;
