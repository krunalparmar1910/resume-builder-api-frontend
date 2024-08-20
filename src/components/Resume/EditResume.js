import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ResumeForm from './ResumeForm';
import axiosInstance from '../../utils/axiosInstance';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const EditResume = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axiosInstance.get(`/resumeBuilder/resumeById/${id}`);
        const data = response.data;
        console.log(response);
        setInitialValues(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResume();
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      const response = await axiosInstance.put(`/resumeBuilder/updateResume/${id}`, data);

      if (response.status === 200) {
        navigate('/resume-preview', {state: {myId: id}});
      } else {
        throw new Error('Failed to update resume');
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!initialValues) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="bg-light p-4 rounded shadow-sm">
        {/* <h2 className="mb-4 text-center">Edit Resume</h2> */}
        <ResumeForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isEditMode={true}
        />
      </div>
    </div>
  );
};

export default EditResume;
