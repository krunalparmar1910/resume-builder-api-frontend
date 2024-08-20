import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeForm from './ResumeForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AddResume = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:9091/api/resumeBuilder/addResume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to add resume');
      }

      navigate('/resume-preview');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="background-image d-flex align-items-center justify-content-center">
        <div className="form-container bg-light p-4 rounded shadow-sm w-75 mx-auto mt-4">
          <ResumeForm
            onSubmit={handleSubmit}
            initialValues={{
              name: '',
              email: '',
              phone: '',
              address: '',
              repoUrl: '',
              linkdinUrl: '',
              profileSummary: '',
              educationDTO: [{}],
              certificateDTO: [{}],
              projectDTO: [{}],
              skillsInterestDTO: [{}],
              workExperienceDTO: [{}],
            }}
            isEditMode={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AddResume;
