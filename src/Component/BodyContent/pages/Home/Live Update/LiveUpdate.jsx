import React, { useState, useEffect } from "react";
import "./LiveUpdate.css";
import BodyContent from "../../../BodyContent";
import LiveUpdateCard from "./LiveUpdateCard";

function LiveUpdate() {
  const [updates, setUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState({
    title: "",
    time: "",
    description: "",
  });

  // Fetch live updates from backend
  useEffect(() => {
    fetch("http://localhost:3001/live-updates")
      .then((res) => res.json())
      .then((data) => setUpdates(data))
      .catch((error) => console.error("Error fetching live updates:", error));
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    setNewUpdate({ ...newUpdate, [e.target.name]: e.target.value });
  };

  // Handle adding new live update
  const handleAddLiveUpdate = async () => {
    if (!newUpdate.title || !newUpdate.time || !newUpdate.description) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/live-updates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUpdate),
      });

      const data = await response.json();
      setUpdates([...updates, data]); // Update cards dynamically

      setNewUpdate({ title: "", time: "", description: "" }); // Reset form
    } catch (error) {
      console.error("Error adding live update:", error);
    }
  };

  // Handle deleting live update
  const handleDeleteLiveUpdate = async (id) => {
    try {
      await fetch(`http://localhost:3001/live-updates/${id}`, { method: "DELETE" });

      setUpdates(updates.filter((update) => update.id !== id)); // Remove from state
    } catch (error) {
      console.error("Error deleting live update:", error);
    }
  };

  return (
    <BodyContent>
      <div className="live-update-page">
        <h2>Live Updates</h2>
        <p>Stay informed with the latest real-time updates.</p>

        {/* Live Update Cards */}
        <div className="live-update-cards">
          {updates.map((update) => (
            <LiveUpdateCard
              key={update.id}
              id={update.id}
              title={update.title}
              time={update.time}
              description={update.description}
              onDelete={handleDeleteLiveUpdate}
            />
          ))}
        </div>

        {/* Add New Live Update Form */}
        <div className="add-live-update-form">
          <h3>Add New Live Update</h3>
          <input type="text" name="title" placeholder="Title" value={newUpdate.title} onChange={handleInputChange} />
          <input type="time" name="time" value={newUpdate.time} onChange={handleInputChange} />
          <textarea name="description" placeholder="Description" value={newUpdate.description} onChange={handleInputChange} />
          <button className="add-btn" onClick={handleAddLiveUpdate}>+ Add Live Update</button>
        </div>
      </div>
    </BodyContent>
  );
}

export default LiveUpdate;
