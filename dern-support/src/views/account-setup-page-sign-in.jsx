import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from 'react';
import database from '../databases/loginCredentials.credentials.json'; // Importing the JSON database

import "./account-setup-page-sign-in.css";
function AccountSetupPageSignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Find user in the database
    const user = database.find(user => user.username === username && user.password === password);

    if (user) {
      if (user.role === 'admin') {
        // Redirect to admin site
        window.location.href = '/homeEmployee';
      } else {
        // Redirect to regular user site
        window.location.href = '/homeClient';
      }
    } else {
      alert('Invalid username or password');
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div className="account-setup-page-sign-in-container">
      <Helmet>
        <title>Dern-Support</title>
        <meta
          property="og:title"
          content="Account-Setup-Page-Sign-In - Dern-Support"
        />
      </Helmet>
      <header data-role="Header" className="account-setup-page-sign-in-header">
        <div className="account-setup-page-sign-in-nav"></div>
        <h1 className="account-setup-page-sign-in-text"><Link to="/HomeNewUser">Dern-Support</Link></h1>
      </header>
      <form className="account-setup-page-sign-in-form" onSubmit={handleSubmit}>
        <div className="account-setup-page-sign-in-container1">
          <label className="account-setup-page-sign-in-text01">
            Username
          </label>
          <input
            type="text"
            autoFocus="true"
            placeholder="Username"
            className="account-setup-page-sign-in-textinput input"
            name="username" value={formData.username} onChange={handleChange}
          />
          <label className="account-setup-page-sign-in-text02">Password</label>
          <input
            placeholder="Password"
            className="account-setup-page-sign-in-textinput1 input"
            type="password" name="password" value={formData.password} onChange={handleChange}
          />
          <button
            type="submit"
            className="account-setup-page-sign-in-button button"
          >
            <span>
              <span >Sign In</span>
              <br></br>
            </span>
          </button>
          <div className="account-setup-page-sign-in-container2">
            <svg
              viewBox="0 0 860.0137142857142 1024"
              className="account-setup-page-sign-in-icon"
            >
              <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="account-setup-page-sign-in-icon02"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </div>
          <span className="account-setup-page-sign-in-text06">
            <span className="account-setup-page-sign-in-text07">
              don&apos;t have an account? sign up from
            </span>
            <span className="account-setup-page-sign-in-text08">
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <Link className="account-setup-page-sign-in-text09" to={"/signup"}>here</Link>
            <span className="account-setup-page-sign-in-text10">!</span>
          </span>
        </div>
      </form>
      <footer className="account-setup-page-sign-in-footer">
        <h1 className="account-setup-page-sign-in-text11">Dern-Support</h1>
        <span className="account-setup-page-sign-in-text12">
          © 2024 Dern-Support, All Rights Reserved.
        </span>
        <div className="account-setup-page-sign-in-icon-group">
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

export default AccountSetupPageSignIn;
