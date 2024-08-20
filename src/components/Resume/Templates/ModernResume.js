import React from 'react';
import './ModernResume.css'; // Ensure you have the corresponding CSS file

const ModernResume = ({ resume }) => {
  if (!resume) {
    return <div>Loading...</div>;
  }

  const safeGet = (obj, path) => {
    return path.reduce((acc, key) => acc && acc[key], obj) || 'N/A';
  };

  return (
    <div className="resume-container">
      <h2 className="resume-header">Modern Resume</h2>
      <div className="resume-section">
        <h3>{safeGet(resume, ['name'])}</h3>
        <p>Email: {safeGet(resume, ['email'])}</p>
        <p>Phone: {safeGet(resume, ['phone'])}</p>
        <p>Address: {safeGet(resume, ['address'])}</p>
      </div>

      <div className="resume-section">
        <h3>Experience</h3>
        {resume.workExperienceDTO && resume.workExperienceDTO.length > 0 ? (
          resume.workExperienceDTO.map((work, index) => (
            <div key={index}>
              <p>Position: {safeGet(work, ['designation'])}</p>
              <p>Company: {safeGet(work, ['companyName'])}</p>
              <p>Duration: {safeGet(work, ['comStartDate'])} - {safeGet(work, ['comEndDate'])}</p>
            </div>
          ))
        ) : (
          <p>No experience details available</p>
        )}
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        {resume.educationDTO && resume.educationDTO.length > 0 ? (
          resume.educationDTO.map((edu, index) => (
            <div key={index}>
              <p>{safeGet(edu, ['degree'])} from {safeGet(edu, ['instituteName'])}</p>
              <p>Period: {safeGet(edu, ['degStartDate'])} - {safeGet(edu, ['degEndDate'])}</p>
            </div>
          ))
        ) : (
          <p>No education details available</p>
        )}
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
        {resume.skillsInterestDTO && resume.skillsInterestDTO.length > 0 ? (
          resume.skillsInterestDTO.map((skill, index) => (
            <div key={index}>
              <p>{safeGet(skill, ['skills'])}</p>
            </div>
          ))
        ) : (
          <p>No skills available</p>
        )}
      </div>
    </div>
  );
};

export default ModernResume;
