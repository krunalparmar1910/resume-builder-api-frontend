import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import apiClient from '../../api/resumeApi';

const PreviewResume = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [isEditing, setEditing] = useState(false);
  const [error, setError] = useState('');

 const location = useLocation();
 const {myId} = location.state || {};
  // Fetch resume data based on ID from the API
  useEffect(() => {
    apiClient.get(`resumeById/${myId}`)
      .then(response => setResume(response.data))
      .catch(error => {
        console.error('Error fetching resume:', error);
        setError('Error fetching resume. Please try again.');
      });
  }, [id]);

  // Handle input change for single input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResume(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle input change for array fields (education, certificates, projects, etc.)
  const handleArrayChange = (e, index, arrayName, fieldName) => {
    const { value } = e.target;
    const newArray = [...resume[arrayName]];
    newArray[index][fieldName] = value;
    setResume(prevState => ({
      ...prevState,
      [arrayName]: newArray
    }));
  };

  // Handle adding a new item to an array field (education, certificates, projects, etc.)
  const handleAddItem = (arrayName, newItem) => {
    setResume(prevState => ({
      ...prevState,
      [arrayName]: [...prevState[arrayName], newItem]
    }));
  };

  // Handle removing an item from an array field (education, certificates, projects, etc.)
  const handleRemoveItem = (arrayName, index) => {
    const newArray = resume[arrayName].filter((item, idx) => idx !== index);
    setResume(prevState => ({
      ...prevState,
      [arrayName]: newArray
    }));
  };

  // Handle update resume after editing
  const handleUpdateResume = (e) => {
    e.preventDefault();
    apiClient.put(`/updateResume/${id}`, resume)
      .then(response => {
        console.log('Resume updated:', response.data);
        setEditing(false); // Exit editing mode after successful update
      })
      .catch(error => {
        console.error('Error updating resume:', error);
        setError('Error updating resume. Please try again.');
      });
  };

  // Function to generate PDF from resume data (replace with your actual implementation)
  const generatePDF = (resume) => {
    // Replace this with actual PDF generation logic
    console.log('Generating PDF for resume:', resume);
  };

  // Render preview or edit form based on editing mode
  return (
    <div>
      {resume ? (
        <div>
          {isEditing ? (
            <form onSubmit={handleUpdateResume}>
              {/* Input fields for resume details */}
              <input type="text" name="name" value={resume.name} onChange={handleChange} placeholder="Name" />
              <input type="email" name="email" value={resume.email} onChange={handleChange} placeholder="Email" />
              <input type="text" name="phone" value={resume.phone} onChange={handleChange} placeholder="Phone" />
              <input type="text" name="address" value={resume.address} onChange={handleChange} placeholder="Address" />
              <input type="text" name="repoUrl" value={resume.repoUrl} onChange={handleChange} placeholder="GitHub URL" />
              <input type="text" name="linkdinUrl" value={resume.linkdinUrl} onChange={handleChange} placeholder="LinkedIn URL" />
              <textarea name="profileSummary" value={resume.profileSummary} onChange={handleChange} placeholder="Profile Summary"></textarea>

              <h3>Education</h3>
              {resume.educationDTO.map((education, index) => (
                <div key={index}>
                  <input type="text" value={education.instituteName} onChange={(e) => handleArrayChange(e, index, 'educationDTO', 'instituteName')} placeholder="Institute Name" />
                  <input type="text" value={education.degree} onChange={(e) => handleArrayChange(e, index, 'educationDTO', 'degree')} placeholder="Degree" />
                  <input type="text" value={education.degStartDate} onChange={(e) => handleArrayChange(e, index, 'educationDTO', 'degStartDate')} placeholder="Start Date" />
                  <input type="text" value={education.degEndDate} onChange={(e) => handleArrayChange(e, index, 'educationDTO', 'degEndDate')} placeholder="End Date" />
                  <button type="button" onClick={() => handleRemoveItem('educationDTO', index)}>Remove</button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('educationDTO', { instituteName: '', degree: '', degStartDate: '', degEndDate: '' })}>Add Education</button>

              {/* Buttons to add or remove education details */}
              <h3>Certificates</h3>
              {resume.certificateDTO.map((certificate, index) => (
                <div key={index}>
                  <input type="text" value={certificate.certificateTitle} onChange={(e) => handleArrayChange(e, index, 'certificateDTO', 'certificateTitle')} placeholder="Certificate Title" />
                  <input type="text" value={certificate.issuingOrg} onChange={(e) => handleArrayChange(e, index, 'certificateDTO', 'issuingOrg')} placeholder="Issuing Organization" />
                  <button type="button" onClick={() => handleRemoveItem('certificateDTO', index)}>Remove</button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('certificateDTO', { certificateTitle: '', issuingOrg: '' })}>Add Certificate</button>

              {/* Display other resume sections (projects, skills, work experience) similarly */}
              <h3>Projects</h3>
              {resume.projectDTO.map((project, index) => (
                <div key={index}>
                  <input type="text" value={project.projectTitle} onChange={(e) => handleArrayChange(e, index, 'projectDTO', 'projectTitle')} placeholder="Project Title" />
                  <textarea value={project.projectDescription} onChange={(e) => handleArrayChange(e, index, 'projectDTO', 'projectDescription')} placeholder="Project Description"></textarea>
                  <button type="button" onClick={() => handleRemoveItem('projectDTO', index)}>Remove</button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('projectDTO', { projectTitle: '', projectDescription: '' })}>Add Project</button>

              <h3>Skills and Interests</h3>
              {resume.skillsInterestDTO.map((skillsInterest, index) => (
                <div key={index}>
                  <input type="text" value={skillsInterest.skills} onChange={(e) => handleArrayChange(e, index, 'skillsInterestDTO', 'skills')} placeholder="Skills" />
                  <input type="text" value={skillsInterest.interest} onChange={(e) => handleArrayChange(e, index, 'skillsInterestDTO', 'interest')} placeholder="Interest" />
                  <button type="button" onClick={() => handleRemoveItem('skillsInterestDTO', index)}>Remove</button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('skillsInterestDTO', { skills: '', interest: '' })}>Add Skills/Interest</button>

              <h3>Work Experience</h3>
              {resume.workExperienceDTO.map((workExperience, index) => (
                <div key={index}>
                  <input type="text" value={workExperience.designation} onChange={(e) => handleArrayChange(e, index, 'workExperienceDTO', 'designation')} placeholder="Designation" />
                  <input type="text" value={workExperience.companyName} onChange={(e) => handleArrayChange(e, index, 'workExperienceDTO', 'companyName')} placeholder="Company Name" />
                  <input type="text" value={workExperience.comStartDate} onChange={(e) => handleArrayChange(e, index, 'workExperienceDTO', 'comStartDate')} placeholder="Start Date" />
                  <input type="text" value={workExperience.comEndDate} onChange={(e) => handleArrayChange(e, index, 'workExperienceDTO', 'comEndDate')} placeholder="End Date" />
                  <input type="text" value={workExperience.workLocation} onChange={(e) => handleArrayChange(e, index, 'workExperienceDTO', 'workLocation')} placeholder="Work Location" />
                  <button type="button" onClick={() => handleRemoveItem('workExperienceDTO', index)}>Remove</button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('workExperienceDTO', { designation: '', companyName: '', comStartDate: '', comEndDate: '', workLocation: '' })}>Add Work Experience</button>

              <button type="submit">Update Resume</button>
            </form>
          ) : (
            <div>
              <h2>Preview Resume</h2>
              <p>Name: {resume.name}</p>
              <p>Email: {resume.email}</p>
              <p>Phone: {resume.phone}</p>
              <p>Address: {resume.address}</p>
              <p>GitHub: {resume.repoUrl}</p>
              <p>LinkedIn: {resume.linkdinUrl}</p>
              <p>Profile Summary: {resume.profileSummary}</p>

              <h3>Education</h3>
              {resume.educationDTO.map((education, index) => (
                <div key={index}>
                  <p>Institute: {education.instituteName}</p>
                  <p>Degree: {education.degree}</p>
                  <p>Start Date: {education.degStartDate}</p>
                  <p>End Date: {education.degEndDate}</p>
                </div>
              ))}

              <h3>Certificates</h3>
              {resume.certificateDTO.map((certificate, index) => (
                <div key={index}>
                  <p>Title: {certificate.certificateTitle}</p>
                  <p>Issuing Org: {certificate.issuingOrg}</p>
                </div>
              ))}

              <h3>Projects</h3>
              {resume.projectDTO.map((project, index) => (
                <div key={index}>
                  <p>Title: {project.projectTitle}</p>
                  <p>Description: {project.projectDescription}</p>
                </div>
              ))}

              <h3>Skills and Interests</h3>
              {resume.skillsInterestDTO.map((skillsInterest, index) => (
                <div key={index}>
                  <p>Skills: {skillsInterest.skills}</p>
                  <p>Interest: {skillsInterest.interest}</p>
                </div>
              ))}

              <h3>Work Experience</h3>
              {resume.workExperienceDTO.map((workExperience, index) => (
                <div key={index}>
                  <p>Designation: {workExperience.designation}</p>
                  <p>Company: {workExperience.companyName}</p>
                  <p>Start Date: {workExperience.comStartDate}</p>
                  <p>End Date: {workExperience.comEndDate}</p>
                  <p>Location: {workExperience.workLocation}</p>
                </div>
              ))}

              <Link to={`/updateResume/${resume.id}`}>Edit Resume</Link>
              <button onClick={() => generatePDF(resume)}>Generate PDF</button>
              {error && <p>{error}</p>}
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PreviewResume;
