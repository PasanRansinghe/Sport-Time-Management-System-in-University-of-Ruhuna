import React, { useState, useEffect } from "react";
import "./News.css";
import BodyContent from "../../../BodyContent";
import NewsCard from "./NewsCard";

function News() {
  const [news, setNews] = useState([]);
  const [newNews, setNewNews] = useState({
    title: "",
    date: "",
    description: "",
  });

  // Fetch news from backend
  useEffect(() => {
    fetch("http://localhost:3001/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    setNewNews({ ...newNews, [e.target.name]: e.target.value });
  };

  // Handle adding new news
  const handleAddNews = async () => {
    if (!newNews.title || !newNews.date || !newNews.description) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNews),
      });

      const data = await response.json();
      setNews([...news, data]); // Update cards dynamically

      setNewNews({ title: "", date: "", description: "" }); // Reset form
    } catch (error) {
      console.error("Error adding news:", error);
    }
  };

  // Handle deleting news
  const handleDeleteNews = async (id) => {
    try {
      await fetch(`http://localhost:3001/news/${id}`, { method: "DELETE" });

      setNews(news.filter((item) => item.id !== id)); // Remove from state
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  return (
    <BodyContent>
      <div className="news-page">
        <h2>Latest News</h2>
        <p>Stay updated with the latest university sports news.</p>

        {/* News Cards */}
        <div className="news-cards">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              date={item.date}
              description={item.description}
              onDelete={handleDeleteNews}
            />
          ))}
        </div>

        {/* Add New News Form */}
        <div className="add-news-form">
          <h3>Add New News</h3>
          <input type="text" name="title" placeholder="Title" value={newNews.title} onChange={handleInputChange} />
          <input type="date" name="date" value={newNews.date} onChange={handleInputChange} />
          <textarea name="description" placeholder="Description" value={newNews.description} onChange={handleInputChange} />
          <button className="add-btn" onClick={handleAddNews}>+ Add News</button>
        </div>
      </div>
    </BodyContent>
  );
}

export default News;
