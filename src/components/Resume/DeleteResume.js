// src/components/DeleteResume.js
import React, { useState } from 'react';
import apiClient from '../../api/resumeApi';

const DeleteResume = ({ id }) => {
    const [message, setMessage] = useState('');

    const handleDelete = () => {
        apiClient.delete(`/deleteResume/${id}`)
            .then(response => setMessage('Resume deleted successfully.'))
            .catch(error => setMessage('Error deleting resume.'));
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete Resume</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteResume;
