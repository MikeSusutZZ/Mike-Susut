// src/components/ResumeSection.js
import React from 'react';
import { Card, Button, Collapse, Row } from 'react-bootstrap';

const ResumeSection = ({ title, children, isOpen, toggleOpen }) => {
  return (
    <Card className="mb-3">
      <Card.Header>
        <Button
          variant="link"
          onClick={toggleOpen}
          aria-controls="example-collapse-text"
          aria-expanded={isOpen}
        >
          {title}
        </Button>
      </Card.Header>
      <Collapse in={isOpen}>
        <div>
          <Card.Body>
            <Row>
              {children}
            </Row>
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default ResumeSection;
