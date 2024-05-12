  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import { Helmet } from 'react-helmet';
  import SupporTable from "../components/table.jsx"

  import './support-request-page.css';

  const SupportRequestPage = (props) => {
    const [formData, setFormData] = useState({
      Requester: 'Individual',
      RequestType: 'Full Repair',
      SchuldeARepair: '',
      PartsNeeded: '',
      ProblemDescription: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
      try {
        // Check if any required fields are empty
        if (!formData.Requester || !formData.RequestType || !formData.SchuldeARepair || !formData.PartsNeeded || !formData.ProblemDescription) {
          throw new Error('Please fill out all required fields');
        }
  
        const response = await fetch('http://localhost:9002/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          alert('Form submitted successfully');
          // Optionally, reset the form after successful submission
          setFormData({
            Requester: 'Individual',
            RequestType: 'Full Repair',
            SchuldeARepair: '',
            PartsNeeded: '',
            ProblemDescription: ''
          });
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert(error.message || 'Error submitting form. Please try again later.');
      }
    };
    

    return (
      <div className="support-request-page-container">
        <Helmet>
          <title>Support-Request-Page - Dern-Support</title>
          <meta property="og:title" content="Support-Request-Page - Dern-Support" />
        </Helmet>
        <header data-role="Header" className="support-request-page-header">
          <div className="support-request-page-nav"></div>
          <h1 className="support-request-page-text">
            <Link to="/HomeClient">Dern-Support</Link>
          </h1>
        </header>
        <form className="support-request-page-form">
          <h1 className="support-request-page-text01">Support Request</h1>
          <div className="support-request-page-container1">
            <label className="support-request-page-text02">Requester</label>
            <select
              className="support-request-page-select"
              name="Requester"
              value={formData.Requester}
              onChange={handleChange}
            >
              <option value="Individual">Individual</option>
              <option value="Organization">Organization</option>
            </select>
            <label className="support-request-page-text03">Request Type</label>
            <select
              className="support-request-page-select1"
              name="RequestType"
              value={formData.RequestType}
              onChange={handleChange}
            >
              <option value="Full Repair">Full Repair</option>
              <option value="Inspection">Inspection</option>
              <option value="Optimization">Optimization</option>
              <option value="Organizing">Organizing</option>
              <option value="Recovery">Recovery</option>
            </select>
            <label className="support-request-page-text04">Schulde a Repair</label>
            <div className="support-request-page-container2">
              <form>
                <label htmlFor="date">Choose a date:</label>
                <input
                  type="date"
                  id="date"
                  name="SchuldeARepair"
                  value={formData.SchuldeARepair}
                  onChange={handleChange}
                />
              </form>
            </div>
            <label className="support-request-page-text05">
              <span>Parts Needed</span>
              <br />
            </label>
            <textarea
              placeholder="placeholder"
              className="support-request-page-textarea textarea"
              name="PartsNeeded"
              value={formData.PartsNeeded}
              onChange={handleChange}
            ></textarea>
            <label className="support-request-page-text08">
              <span>Problem Description</span>
              <br />
            </label>
            <textarea
              placeholder="placeholder"
              className="support-request-page-textarea1 textarea"
              name="ProblemDescription"
              value={formData.ProblemDescription}
              onChange={handleChange}
            ></textarea>
            <button
              type="button"
              className="support-request-page-button button"
              onClick={handleSubmit}
            >
              Submit Request
            </button>
          </div>
          <SupporTable/>
        </form>
        <footer className="support-request-page-footer">
          <h1 className="support-request-page-text11">Dern-Support</h1>
          <span className="support-request-page-text12">
            © 2024 Dern-Support, All Rights Reserved.
          </span>
          <div className="support-request-page-icon-group">
          <animate-on-reveal
            animation="swing"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              data-thq-animate-on-reveal="true"
              className="account-setup-page-sign-in-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </animate-on-reveal>
          <animate-on-reveal
            animation="swing"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              data-thq-animate-on-reveal="true"
              className="account-setup-page-sign-in-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </animate-on-reveal>
          <animate-on-reveal
            animation="swing"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <svg
              viewBox="0 0 602.2582857142856 1024"
              data-thq-animate-on-reveal="true"
              className="account-setup-page-sign-in-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </animate-on-reveal>
          </div>
        </footer>
      </div>
    );
  };

  export default SupportRequestPage;
