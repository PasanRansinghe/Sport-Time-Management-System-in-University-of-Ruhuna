import React from 'react';
import './VideoTutorials.css';
import BodyContent from '../../../../BodyContent';

function VideoTutorials() {
  const tutorials = [
    { id: 1, title: 'Hockey Basics', url: 'https://www.example.com/video1' },
    { id: 2, title: 'Advanced Hockey Techniques', url: 'https://www.example.com/video2' },
    { id: 3, title: 'Hockey Drills', url: 'https://www.example.com/video3' },
  ];

  return (
    <BodyContent>
    <div className="video-tutorials-page">
      <h2>Video Tutorials</h2>
      <p>Welcome to the Video Tutorials page! Here you will find various video tutorials to help you improve your skills.</p>
      <div className="tutorials-list">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="tutorial-card">
            <h3>{tutorial.title}</h3>
            <a href={tutorial.url} target="_blank" rel="noopener noreferrer">Watch Video</a>
          </div>
        ))}
      </div>
    </div>
    </BodyContent>
  );
}

export default VideoTutorials;