// src/components/Profile/ProfilePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from an API or localStorage
    const fetchUserDetails = () => {
      const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
      setUser(userDetails);
    };
    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userDetails');
    navigate('/login');
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 mb-4">Profile</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Details</h5>
              <p className="card-text"><strong>Name:</strong> {user.name || 'N/A'}</p>
              <p className="card-text"><strong>Email:</strong> {user.email || 'N/A'}</p>
              <p className="card-text"><strong>Phone:</strong> {user.phone || 'N/A'}</p>
              {/* Add more fields as needed */}
              <button className="btn btn-primary mt-3">Edit Profile</button>
              <button className="btn btn-danger mt-3 ms-2" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Settings</h5>
              {/* Add profile settings or other relevant sections here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
