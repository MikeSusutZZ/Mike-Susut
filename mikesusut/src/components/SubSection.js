// src/components/SubSection.js
import React from 'react';
import { Card } from 'react-bootstrap';
import './SubSection.css'; // Import the CSS file

const SubSection = ({ image, text }) => {
  return (
    <Card className="mb-3 subsection-card">
      <div className="subsection-image-wrapper">
        <Card.Img variant="top" src={image} className="subsection-image" />
      </div>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SubSection;
