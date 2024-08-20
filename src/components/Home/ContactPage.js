import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ContactPage = () => {
  return (
    <div className="container mt-4">
      {/* Contact Information */}
      <section className="bg-light py-5">
        <h1 className="display-4 text-center mb-4">Contact Us</h1>
        <p className="lead text-center mb-4">We’re here to help you with any questions or concerns. Reach out to us using the information below or fill out our contact form.</p>
        <div className="text-center mb-4">
          <p>If you have questions or need assistance, feel free to reach out to us at <a href="mailto:info@resumebuilder.com" className="text-primary">info@resumebuilder.com</a>.</p>
        </div>
        <div className="text-center">
          <h3 className="mb-4">Our Office</h3>
          <p className="mb-2">123 Resume Builder Lane, Suite 100</p>
          <p>City, State, 12345</p>
          <p>Phone: <a href="tel:+1234567890" className="text-primary">+1 (234) 567-890</a></p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="display-4 text-center mb-4">Send Us a Message</h2>
            <form>
              <div className="form-group mb-4">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control rounded-3" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control rounded-3" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="message">Message</label>
                <textarea className="form-control rounded-3" id="message" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5">
        <h2 className="display-4 text-center mb-4">What Our Users Say</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="border rounded bg-white shadow-sm p-4">
              <p className="lead fst-italic">"The support team was incredibly helpful and responsive. I had all my questions answered in no time!"</p>
              <p>- Alex Johnson</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="border rounded bg-white shadow-sm p-4">
              <p className="lead fst-italic">"Fantastic service! The team went above and beyond to ensure I had a smooth experience."</p>
              <p>- Sarah Williams</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="border rounded bg-white shadow-sm p-4">
              <p className="lead fst-italic">"Quick responses and helpful advice. I felt well-supported throughout my resume creation process."</p>
              <p>- Michael Brown</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
