import React from 'react';
import './ProfessionalResume.css'; // Ensure you have the corresponding CSS file

const ProfessionalResume = ({ resume }) => {
  if (!resume) {
    return <div>Loading...</div>; // Display loading text while data is being fetched
  }

  // Helper function to safely access properties
  const safeGet = (obj, path) => {
    return path.reduce((acc, key) => acc && acc[key], obj) || 'N/A';
  };

  return (
    <div className="resume-container">
      <h2 className="resume-header">Professional Resume</h2>
      <div className="resume-section">
        <h3>Name: {safeGet(resume, ['name'])}</h3>
        <p>Email: {safeGet(resume, ['email'])}</p>
        <p>Phone: {safeGet(resume, ['phone'])}</p>
        <p>Address: {safeGet(resume, ['address'])}</p>
        <p>Repo URL: {safeGet(resume, ['repoUrl'])}</p>
        <p>LinkedIn URL: {safeGet(resume, ['linkdinUrl'])}</p>
        <p>Profile Summary: {safeGet(resume, ['profileSummary'])}</p>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        {resume.educationDTO && resume.educationDTO.length > 0 ? (
          resume.educationDTO.map((edu, index) => (
            <div key={index}>
              <p>Institute: {safeGet(edu, ['instituteName'])}</p>
              <p>Degree: {safeGet(edu, ['degree'])}</p>
              <p>Start Date: {safeGet(edu, ['degStartDate'])}</p>
              <p>End Date: {safeGet(edu, ['degEndDate'])}</p>
            </div>
          ))
        ) : (
          <p>No education details available</p>
        )}
      </div>

      <div className="resume-section">
        <h3>Certificates</h3>
        {resume.certificateDTO && resume.certificateDTO.length > 0 ? (
          resume.certificateDTO.map((cert, index) => (
            <div key={index}>
              <p>Title: {safeGet(cert, ['certificateTitle'])}</p>
              <p>Issuing Organization: {safeGet(cert, ['issuingOrg'])}</p>
            </div>
          ))
        ) : (
          <p>No certificates available</p>
        )}
      </div>

      <div className="resume-section">
        <h3>Projects</h3>
        {resume.projectDTO && resume.projectDTO.length > 0 ? (
          resume.projectDTO.map((proj, index) => (
            <div key={index}>
              <p>Title: {safeGet(proj, ['projectTitle'])}</p>
              <p>Description: {safeGet(proj, ['projectDescription'])}</p>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>

      <div className="resume-section">
        <h3>Skills and Interests</h3>
        {resume.skillsInterestDTO && resume.skillsInterestDTO.length > 0 ? (
          resume.skillsInterestDTO.map((skill, index) => (
            <div key={index}>
              <p>Skills: {safeGet(skill, ['skills'])}</p>
              <p>Interest: {safeGet(skill, ['interest'])}</p>
            </div>
          ))
        ) : (
          <p>No skills and interests available</p>
        )}
      </div>

      <div className="resume-section">
        <h3>Work Experience</h3>
        {resume.workExperienceDTO && resume.workExperienceDTO.length > 0 ? (
          resume.workExperienceDTO.map((work, index) => (
            <div key={index}>
              <p>Designation: {safeGet(work, ['designation'])}</p>
              <p>Company: {safeGet(work, ['companyName'])}</p>
              <p>Start Date: {safeGet(work, ['comStartDate'])}</p>
              <p>End Date: {safeGet(work, ['comEndDate'])}</p>
              <p>Location: {safeGet(work, ['workLocation'])}</p>
            </div>
          ))
        ) : (
          <p>No work experience available</p>
        )}
      </div>
    </div>
  );
};

export default ProfessionalResume;
