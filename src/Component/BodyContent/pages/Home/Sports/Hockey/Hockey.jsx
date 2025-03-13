import React, { useState, useEffect } from "react";
import "./Hockey.css";
import BodyContent from "../../../../BodyContent";

function Hockey() {
  const [schedule, setSchedule] = useState([]); // Stores fetched schedule
  const [newSchedule, setNewSchedule] = useState({
    date: "",
    time: "",
    place: "",
    announcement: "",
  });

  // Fetch hockey schedule from backend
  useEffect(() => {
    fetch("http://localhost:3001/hockey")
      .then((res) => res.json())
      .then((data) => setSchedule(data))
      .catch((error) => console.error("Error fetching schedule:", error));
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    setNewSchedule({ ...newSchedule, [e.target.name]: e.target.value });
  };

  // Handle adding new schedule
  const handleAddSchedule = async () => {
    if (!newSchedule.date || !newSchedule.time || !newSchedule.place || !newSchedule.announcement) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/hockey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSchedule),
      });

      const data = await response.json();
      setSchedule([...schedule, data]); // Update table dynamically

      setNewSchedule({ date: "", time: "", place: "", announcement: "" }); // Reset form
    } catch (error) {
      console.error("Error adding schedule:", error);
    }
  };

  // Handle deleting a schedule
  const handleDeleteSchedule = async (id) => {
    try {
      await fetch(`http://localhost:3001/hockey/${id}`, { method: "DELETE" });

      setSchedule(schedule.filter((match) => match.id !== id)); // Update UI after deletion
    } catch (error) {
      console.error("Error deleting schedule:", error);
    }
  };

  return (
    <BodyContent>
      <div className="hockey-page">
        <h2 className="hockey-title">Hockey</h2>
        <p className="hockey-description">Manage Hockey Match Schedules.</p>

        {/* Schedule Table */}
        <div className="hockey-timetable">
          <h3>Hockey Match Schedule</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Place</th>
                <th>Announcement</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((match) => (
                <tr key={match.id}>
                  <td>{match.date}</td>
                  <td>{match.time}</td>
                  <td>{match.place}</td>
                  <td>{match.announcement}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDeleteSchedule(match.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add New Schedule Form */}
        <div className="add-schedule-form">
          <h3>Add New Schedule</h3>
          <input type="date" name="date" value={newSchedule.date} onChange={handleInputChange} />
          <input type="time" name="time" value={newSchedule.time} onChange={handleInputChange} />
          <input type="text" name="place" placeholder="Place" value={newSchedule.place} onChange={handleInputChange} />
          <input type="text" name="announcement" placeholder="Other Announcements" value={newSchedule.announcement} onChange={handleInputChange} />
          <button className="add-btn" onClick={handleAddSchedule}>+ Add Schedule</button>
        </div>
      </div>
    </BodyContent>
  );
}

export default Hockey;
