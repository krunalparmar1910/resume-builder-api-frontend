import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../api/resumeApi';

const ViewResume = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [error, setError] = useState(null);

  const fetchResume = useCallback(() => {
    apiClient.get(`resumeById/${id}`)
      .then(response => {
        setResume(response.data);
        setError(null); // Clear any previous errors
      })
      .catch(error => {
        console.error('Error fetching resume:', error);
        setError(error.response?.data?.message || 'Error fetching resume. Please try again later.');
      });
  }, [id]);

  useEffect(() => {
    fetchResume();
  }, [fetchResume]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!resume) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="resume-container">
      <header className="resume-header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

        <h1 className="resume-name">{resume.name}</h1>
        <div className="resume-contact">
          <p><i className="fas fa-envelope"></i>{resume.email}</p>
          <p><i className="fas fa-phone"></i>{resume.phone}</p>
          <p><i className="fas fa-map-marker-alt"></i>{resume.address}</p>
          <p>
            <i className="fab fa-github"></i>
            <a href={resume.repoUrl} target="_blank" rel="noopener noreferrer">
              {resume.repoUrl}
            </a>
          </p>
          <p>
            <i className="fab fa-linkedin"></i>
            <a href={resume.linkdinUrl} target="_blank" rel="noopener noreferrer">
              {resume.linkdinUrl}
            </a>
          </p>
        </div>

      </header>

      <section className="resume-section">
        <h2 className="section-title">Profile Summary</h2>
        <p className="resume-summary">{resume.profileSummary}</p>
      </section>

      <section className="resume-section">
        <h2 className="section-title">Work Experience</h2>
        {resume.workExperienceDTO?.length > 0 ? (
          resume.workExperienceDTO.map((work, index) => (
            <div className="resume-entry" key={index}>
              <h3 className="entry-title">{work.companyName}</h3>
              <p className="entry-dates">{work.comStartDate} - {work.comEndDate}</p>
              <p>{/*<strong>Designation:</strong>*/} {work.designation}</p>
              <p>{/*<strong>Location:</strong>*/} {work.workLocation}</p>
            </div>
          ))
        ) : (
          <p>No work experience available</p>
        )}
      </section>

      <section className="resume-section">
        <h2 className="section-title">Education</h2>
        {resume.educationDTO?.length > 0 ? (
          resume.educationDTO.map((edu, index) => (
            <div className="resume-entry" key={index}>
              <h3 className="entry-title">{edu.instituteName}</h3>
              <p className="entry-dates">{edu.degStartDate} - {edu.degEndDate}</p>
              <p> {/* <strong>Degree:</strong>  */} {edu.degree}</p>
            </div>
          ))
        ) : (
          <p>No education details available</p>
        )}
      </section>

      <section className="resume-section">
        <h2 className="section-title">Projects</h2>
        {resume.projectDTO?.length > 0 ? (
          resume.projectDTO.map((proj, index) => (
            <div className="resume-entry" key={index}>
              <h3 className="entry-title">{proj.projectTitle}</h3>
              <p>{proj.projectDescription}</p>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </section>

      <section className="resume-section">
        <h2 className="section-title">Certificates</h2>
        {resume.certificateDTO?.length > 0 ? (
          resume.certificateDTO.map((cert, index) => (
            <div className="resume-entry" key={index}>
              <h3 className="entry-title">{cert.certificateTitle}</h3>
              <p> {/*<strong>Issuing Organization:</strong>*/} {cert.issuingOrg}</p>
            </div>
          ))
        ) : (
          <p>No certificates available</p>
        )}
      </section>

      <section className="resume-section">
        <h2 className="section-title">Skills and Interests</h2>
        {resume.skillsInterestDTO?.length > 0 ? (
          resume.skillsInterestDTO.map((skill, index) => (
            <div className="resume-entry" key={index}>
              <p><strong>Skills:</strong> {skill.skills}</p>
              <p><strong>Interests:</strong> {skill.interest}</p>
            </div>
          ))
        ) : (
          <p>No skills and interests available</p>
        )}
      </section>

    </div>
  );
};

export default ViewResume;
