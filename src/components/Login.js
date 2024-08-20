import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/login', credentials);
      localStorage.setItem('token', response.data.baererToken);
      alert('Login Successful! You can now loged in.');
      navigate('/home-page');
    } catch (error) {
      setError('Invalid Credentials. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <div
      className="container-fluid d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundColor: 'orange'
        // backgroundImage: 'url("path_to_your_background_image.jpg")',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
      }}
    >
      <div className="col-md-6 col-lg-4">
        <div className="card shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-center font-weight-bold mb">User Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Enter your username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
            <div className="text-center mt-3">
              <p>Don’t have an account yet? <a href="/register" className="text-primary">Register here</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     {/* Footer */}
     <footer className="text-center py-4 bg-dark text-light">
        <p className="mb-0">&copy; 2024 Resume Builder. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Login;
