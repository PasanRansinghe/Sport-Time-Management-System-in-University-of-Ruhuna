
import React from 'react';
import './PDFGuide.css';
import BodyContent from '../../../../BodyContent';

function PDFGuide() {
  const pdfGuides = [
    { id: 1, title: 'Hockey Rules', url: 'https://www.example.com/hockey-rules.pdf' },
    { id: 2, title: 'Training Schedule', url: 'https://www.example.com/training-schedule.pdf' },
    { id: 3, title: 'Nutrition Guide', url: 'https://www.example.com/nutrition-guide.pdf' },
  ];

  return (
    <BodyContent>
    <div className="pdf-guide-page">
      <h2>PDF Guides</h2>
      <p>Welcome to the PDF Guide page! Here you will find various guides and resources in PDF format.</p>
      <div className="pdf-guides-list">
        {pdfGuides.map((guide) => (
          <div key={guide.id} className="pdf-guide-card">
            <h3>{guide.title}</h3>
            <a href={guide.url} target="_blank" rel="noopener noreferrer">Download PDF</a>
          </div>
        ))}
      </div>
    </div>
    </BodyContent>
  );
}

export default PDFGuide;