import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../api/resumeApi'; // Ensure to replace with correct API client setup

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get('/getResumes')
      .then(response => setResumes(response.data))
      .catch(error => setError('Error fetching resumes.'));
  }, []);

  const handleDelete = (id) => {
    apiClient.delete(`/resume/${id}`)
      .then(response => {
        console.log('Resume deleted:', response.data);
        setResumes(resumes.filter(resume => resume.id !== id));
      })
      .catch(error => {
        console.error('Error deleting resume:', error);
        setError('Error deleting resume. Please try again.');
      });
  };

  return (
    <div>
      <h2>Resumes</h2>
      <Link to="/add-resume">Add Resume</Link>
      {resumes.length === 0 && <p>No resumes found.</p>}
      {resumes.map(resume => (
        <div key={resume.id}>
          <p>Name: {resume.name}</p>
          <p>Email: {resume.email}</p>
          <p>Phone: {resume.phone}</p>
          <button onClick={() => handleDelete(resume.id)}>Delete</button>
        </div>
      ))}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Dashboard;
