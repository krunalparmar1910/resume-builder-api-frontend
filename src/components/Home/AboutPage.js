import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faPaintBrush, faShareSquare, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* About Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-4">About Us</h2>
          <p className="lead mb-4">
            Welcome to Resume Builder, your go-to platform for crafting professional resumes that stand out. Our mission is to provide you with an intuitive and efficient way to create, customize, and share your resume.
          </p>
          
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <FontAwesomeIcon icon={faFileAlt} size="3x" className="text-primary mb-3" />
                <h3 className="h4 mb-2">Easy to Use</h3>
                <p>Create your resume effortlessly with our user-friendly interface.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <FontAwesomeIcon icon={faPaintBrush} size="3x" className="text-primary mb-3" />
                <h3 className="h4 mb-2">Customizable Templates</h3>
                <p>Choose from a variety of professional templates to match your style.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <FontAwesomeIcon icon={faShareSquare} size="3x" className="text-primary mb-3" />
                <h3 className="h4 mb-2">Share Easily</h3>
                <p>Download your resume in multiple formats and share it with employers.</p>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          <h3 className="h3 mb-4">Why Choose Us?</h3>
          <ul className="list-unstyled">
            <li className="mb-3"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Intuitive and user-friendly interface</li>
            <li className="mb-3"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Wide range of customizable templates</li>
            <li className="mb-3"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Real-time preview of your resume</li>
            <li className="mb-3"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Secure and private storage of your data</li>
            <li className="mb-3"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> 24/7 customer support</li>
          </ul>

          <hr className="my-5" />

          <h3 className="h3 mb-4">What Our Users Say</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="border rounded bg-white shadow-sm p-4">
                <p className="lead fst-italic">"An amazing tool that helped me get my dream job! The templates are professional and easy to use."</p>
                <p>- Jane Doe</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="border rounded bg-white shadow-sm p-4">
                <p className="lead fst-italic">"I love how intuitive the platform is. It made creating my resume a breeze."</p>
                <p>- John Smith</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="border rounded bg-white shadow-sm p-4">
                <p className="lead fst-italic">"Highly recommend this resume builder. The features are fantastic and the support is excellent."</p>
                <p>- Emily Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
