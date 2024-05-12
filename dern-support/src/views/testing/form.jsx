import React, { useState } from 'react';
import database from '../../databases/loginCredentials.credentials.json'; // Importing the JSON database

function Form() {
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
      setError('Invalid username or password');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
