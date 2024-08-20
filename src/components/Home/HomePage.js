import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem('authToken'); // Assuming you're using localStorage
    localStorage.removeItem('userDetails'); // Clear user details
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm py-3 px-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <i className="fas fa-file-alt"></i> Resume Builder
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home-page">Home</Link>
              </li>

              <li
                className={`nav-item dropdown ${isOpen ? 'show' : ''}`}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded={isOpen ? 'true' : 'false'}
                >
                  Resume Section
                </a>
                <ul
                  className={`dropdown-menu dropdown-menu-end ${isOpen ? 'show' : ''}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/list-resumes">List of Resumes</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/add-resume">Create Resume</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user"></i> Profile
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <i className="fas fa-user-circle"></i> View Profile
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-center text-light d-flex align-items-center justify-content-center bg-primary py-5" style={{ backgroundImage: 'url("https://imageio.forbes.com/specials-images/imageserve/5c963c14a7ea43206f130bed/AI-friendly-Resume/960x0.jpg?format=jpg&width=1440")', backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh' }}>
        <div className="container">
          <h1 className="display-3 text-dark font-weight-bold">Build Your Professional Future with Us</h1>
          <p className="lead mb-4 text-dark">
            Create, customize, and showcase your resume with ease. Start building a standout resume today!
          </p>
          <Link to="/add-resume" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="display-4 mb-4 font-weight-bold">About Us</h2>
          <p className="lead mb-4">
            We provide a comprehensive tool to help you craft a standout resume effortlessly. Our platform offers customizable templates and user-friendly interfaces to showcase your skills and experience professionally.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-4 font-weight-bold">What Our Users Say</h2>
          <div className="row">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="p-4 border rounded bg-white shadow-sm">
                  <p className="lead">
                    "{index % 2 === 0 ? 'An amazing tool that helped me get my dream job! The templates are professional and easy to use.' : 'I love how intuitive the platform is. It made creating my resume a breeze.'}"
                  </p>
                  <p>- {index % 2 === 0 ? 'Jane Doe' : 'John Smith'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-4 font-weight-bold">Contact Us</h2>
          <p className="lead mb-4">Have questions or need support? Reach out to us anytime!</p>
          <p className="mb-4">
            Email us: <a href="mailto:info@resumebuilder.com" className="text-primary">info@resumebuilder.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-dark py-4">
        <div className="container text-center">
          <p className="mb-4">&copy; 2024 Resume Builder. All rights reserved.</p>
          <p>
            Follow Us:
            <a href="https://facebook.com" className="text-dark ms-2"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" className="text-dark ms-2"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" className="text-dark ms-2"><i className="fab fa-linkedin-in"></i></a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
