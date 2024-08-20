import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ensure you have react-icons installed

const Register = () => {
  const [user, setUser] = useState({ username: '', password: '', confirmPassword: '', email: '', mobile: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); // New state for password match
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for showing/hiding confirm password
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // Check if passwords match
    if (name === 'confirmPassword') {
      setPasswordsMatch(user.password === value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      setPasswordsMatch(false);
      setError('Passwords do not match.');
      return;
    }
    try {
      await axiosInstance.post('/auth/register', user);
      setMessage('Registration successful! You can now log in.');
      alert('Registration successful! You can now log in.');
      navigate('/login');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center vh-100"
        style={{
          backgroundColor: 'orange',
          // backgroundImage: 'url("path_to_your_background_image.jpg")',
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
        }}
      >
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center font-weight-bold mb-3">User Registration</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Enter your username"
                    value={user.username}
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
                      value={user.password}
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
                <div className="form-group mb-3" style={{ position: 'relative' }}>
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm your password"
                      value={user.confirmPassword}
                      onChange={handleChange}
                      required
                      style={{
                        borderColor: !passwordsMatch && user.confirmPassword ? 'red' : '',
                        borderWidth: !passwordsMatch && user.confirmPassword ? '2px' : '',
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {!passwordsMatch && user.confirmPassword && (
                    <div style={{ color: 'red', position: 'absolute', top: '100%', left: '0', fontSize: '0.875rem' }}>
                      Passwords do not match
                    </div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile</label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    className="form-control"
                    placeholder="Enter your mobile number"
                    value={user.mobile}
                    onChange={(e) => {
                      // Allow only digits and limit input to 10 digits
                      const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                      if (value.length <= 10) {
                        setUser({ ...user, mobile: value });
                      }
                    }}
                    required
                    maxLength="10" // Limit the input length to 10 characters
                    pattern="\d{10}" // HTML5 pattern for 10 digits
                    title="Please enter exactly 10 digits."
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">Register</button>
                {message && <div className="alert alert-success mt-3">{message}</div>}
                {error && <div className="alert alert-danger mt-3">{error}</div>}
              </form>
              <div className="text-center mt-3">
                <p> Already have an account? <a href="/login" className="text-primary">Login here</a>.</p>
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

export default Register;
