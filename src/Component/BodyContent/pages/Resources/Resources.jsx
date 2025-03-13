import React from 'react';
import './Resources.css';
import BodyContent from '../../../BodyContent/BodyContent';

function Resources() {
  const resourceItems = [
    { title: 'PDF Guide', description: 'Download the official sports guide.', link: '/pdf-guide' },
    { title: 'Video Tutorials', description: 'Watch training videos and match highlights.', link: '/video-tutorials' },
    { title: 'Schedules', description: 'View the sports event schedules.', link: '/schedules' },
    { title: 'Rules & Regulations', description: 'Learn about the official rules of sports.', link: '/rules' },
  ];

  return (
    <BodyContent>
      <div className="resources-content">
        <h2 className="resources-title">Resources</h2>
        <div className="resources-description">
          <p>Discover various resources to enhance your knowledge and experience in sports.</p>
        </div>
        <div className="vertical-card-container">
          {resourceItems.map((item, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <a href={item.link} className="card-link">Explore</a>
            </div>
          ))}
        </div>
      </div>
    </BodyContent>
  );
}

export default Resources;