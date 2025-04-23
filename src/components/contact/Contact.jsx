import React from "react";
import "./Contact.css"; 

const ContactUs = () => {
  return (
    <div className="contact py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form>
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="you@example.com" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" placeholder="Your message..."></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
