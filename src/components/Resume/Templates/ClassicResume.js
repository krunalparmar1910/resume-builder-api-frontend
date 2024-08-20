import React from 'react';
import './ClassicResume.css'; // Ensure you have the corresponding CSS file

const ClassicResume = ({ resume }) => {
  if (!resume) {
    return <div>Loading...</div>;
  }

  const safeGet = (obj, path) => {
    return path.reduce((acc, key) => acc && acc[key], obj) || 'N/A';
  };

  return (
    <div className="resume-container">
      <h2 className="resume-header">Classic Resume</h2>
      <div className="resume-section">
        <h3>{safeGet(resume, ['name'])}</h3>
        <p>Email: {safeGet(resume, ['email'])}</p>
        <p>Phone: {safeGet(resume, ['phone'])}</p>
        <p>Address: {safeGet(resume, ['address'])}</p>
      </div>

      <div className="resume-section">
        <h3>Work History</h3>
        {resume.workExperienceDTO && resume.workExperienceDTO.length > 0 ? (
          resume.workExperienceDTO.map((work, index) => (
            <div key={index}>
              <p>Title: {safeGet(work, ['designation'])}</p>
              <p>Company: {safeGet(work, ['companyName'])}</p>
              <p>Dates: {safeGet(work, ['comStartDate'])} - {safeGet(work, ['comEndDate'])}</p>
              <p>Location: {safeGet(work, ['workLocation'])}</p>
            </div>
          ))
        ) : (
          <p>No work history available</p>
        )}
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        {resume.educationDTO && resume.educationDTO.length > 0 ? (
          resume.educationDTO.map((edu, index) => (
            <div key={index}>
              <p>Degree: {safeGet(edu, ['degree'])}</p>
              <p>Institution: {safeGet(edu, ['instituteName'])}</p>
              <p>Period: {safeGet(edu, ['degStartDate'])} - {safeGet(edu, ['degEndDate'])}</p>
            </div>
          ))
        ) : (
          <p>No education details available</p>
        )}
      </div>
    </div>
  );
};

export default ClassicResume;
