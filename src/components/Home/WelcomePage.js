import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WelcomePage.css'; // Custom CSS for additional styling

const WelcomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero text-center text-light" style={{
        position: 'relative', // Allows absolute positioning of contact and support links
        background: 'url(https://images.pexels.com/photos/8112178/pexels-photo-8112178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center',
        backgroundSize: 'cover',
        backgroundPosition: 'cover',
        color: 'white',
        padding: '120px 0',
        minHeight: '100vh',
        display: 'flex', // Centers content vertically
        alignItems: 'center', // Centers content vertically
        justifyContent: 'center' // Centers content horizontally
      }}>
        <div className="container">
          <div className="top-right-links" style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            display: 'flex',
            gap: '15px',
          }}>
            <Link to="/contact" className="text-light">Contact & Support</Link>
          </div>
          <h1 className="display-4 text-dark font-weight-bold">Welcome to Resume Builder</h1>
          <p className="lead text-dark">Craft your professional story with the best resume templates available.</p>
          <div className="d-flex justify-content-center mt-4">
            <Link to="/login" className="btn btn-primary mx-2">Login</Link>
            <Link to="/register" className="btn btn-secondary mx-2">Register</Link>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section my-3">
        <div id="resumeCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#resumeCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#resumeCarousel" data-slide-to="1"></li>
            <li data-target="#resumeCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://images.pexels.com/photos/6614830/pexels-photo-6614830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Resume Example 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Professional Templates</h5>
                <p>Choose from a variety of stunning templates to make your resume stand out.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images.pexels.com/photos/4427422/pexels-photo-4427422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Resume Example 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Easy Customization</h5>
                <p>Customize your resume effortlessly to highlight your skills and achievements.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Resume Example 3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Download and Share</h5>
                <p>Download your resume in multiple formats and share it with potential employers.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#resumeCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#resumeCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="container text-center my-5">
        <h2 className="font-weight-bold">Already a Member?</h2>
        <p>Log in to access your account and continue building your resume.</p>
        <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
      </section>

      {/* Register Section */}
      <section id="register" className="container text-center my-5">
        <h2 className="font-weight-bold">New User?</h2>
        <p>Create a new account to start building your resume today.</p>
        <Link to="/register" className="btn btn-secondary btn-lg">Register</Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-dark text-light">
        <p className="mb-0">&copy; 2024 Resume Builder. All rights reserved.</p>
      </footer>
    </>
  );
};

export default WelcomePage;
