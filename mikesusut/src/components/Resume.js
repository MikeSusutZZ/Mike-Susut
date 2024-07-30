// src/components/Resume.js
import React, { useState } from 'react';
import ResumeSection from './ResumeSection';
import SubSection from './SubSection';
import { Form, Col } from 'react-bootstrap';
import './SubSection.css'; // Import the CSS file

const sectionsData = [
  {
    id: 'retail_summary',
    title: 'Retail Summary',
    subsections: []
  },
  {
    id: 'technical_summary',
    title: 'Technical Summary',
    subsections: []
  },
  {
    id: 'esports_summary',
    title: 'Esports Summary',
    subsections: []
  },
  {
    id: 'education',
    title: 'Education',
    subsections: [
      {
        image: 'https://via.placeholder.com/150',
        text: `Education detail 1. 
        New line of detail.`
      },
      {
        image: 'https://via.placeholder.com/150',
        text: 'Education detail 2.\nAnother line.'
      },
      {
        image: 'https://via.placeholder.com/150',
        text: 'Education detail 3.\nMore details.'
      }
    ]
  },
  {
    id: 'work_experience',
    title: 'Work Experience',
    subsections: []
  },
  {
    id: 'technical_skills',
    title: 'Technical Skills',
    subsections: []
  },
  {
    id: 'collaborative_skills',
    title: 'Collaborative Skills',
    subsections: []
  },
  {
    id: 'projects',
    title: 'Projects',
    subsections: [
      {
        image: 'https://via.placeholder.com/150',
        text: 'Project detail 1.\nNew line of detail.'
      },
      {
        image: 'https://via.placeholder.com/150',
        text: 'Project detail 2.\nAnother line.'
      },
      {
        image: 'https://via.placeholder.com/150',
        text: 'Project detail 3.\nMore details.'
      }
    ]
  },
  {
    id: 'extracurricular',
    title: 'Extracurricular',
    subsections: []
  },
  {
    id: 'hobbies',
    title: 'Hobbies',
    subsections: []
  },
  {
    id: 'awards',
    title: 'Awards',
    subsections: []
  }
];

const groups = [
  { id: 'group1', label: 'Education and Skills', sections: ['education', 'technical_skills', 'collaborative_skills'] },
  { id: 'group2', label: 'Experience and Projects', sections: ['work_experience', 'projects'] },
  { id: 'group3', label: 'Summary and Hobbies', sections: ['retail_summary', 'technical_summary', 'esports_summary', 'hobbies'] },
];

const Resume = () => {
  const [visibleSections, setVisibleSections] = useState({
    retail_summary: false,
    technical_summary: false,
    esports_summary: false,
    education: false,
    work_experience: false,
    technical_skills: false,
    collaborative_skills: false,
    projects: false,
    extracurricular: false,
    hobbies: false,
    awards: false,
  });
  const [sortedSections, setSortedSections] = useState(sectionsData);

  const handleCheckboxChange = (groupSections) => {
    // Set all sections to false
    const updatedSections = Object.keys(visibleSections).reduce((acc, section) => {
      acc[section] = false;
      return acc;
    }, {});

    // Set specified sections to true
    groupSections.forEach(section => {
      updatedSections[section] = true;
    });

    setVisibleSections(updatedSections);

    // Sort sections to move open sections to the top
    const newSortedSections = [
      ...sectionsData.filter(section => updatedSections[section.id]),
      ...sectionsData.filter(section => !updatedSections[section.id])
    ];

    setSortedSections(newSortedSections);
  };

  const toggleSection = (sectionId) => {
    const updatedSections = {
      ...visibleSections,
      [sectionId]: !visibleSections[sectionId]
    };

    setVisibleSections(updatedSections);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Resume</h1>
      <Form>
        {groups.map(group => (
          <Form.Check
            key={group.id}
            type="checkbox"
            label={group.label}
            onChange={() => handleCheckboxChange(group.sections)}
            checked={group.sections.every(section => visibleSections[section])}
          />
        ))}
      </Form>
      {sortedSections.map((section) => (
        <ResumeSection
          key={section.id}
          title={section.title}
          isOpen={visibleSections[section.id]}
          toggleOpen={() => toggleSection(section.id)}
        >
          {section.subsections.map((subsection, index) => (
            <Col key={index} md={4}>
              <SubSection image={subsection.image} text={subsection.text} />
            </Col>
          ))}
        </ResumeSection>
      ))}
    </div>
  );
};

export default Resume;
