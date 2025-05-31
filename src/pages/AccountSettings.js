import React, { useState } from 'react';
import '../App.css';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sms: true,
    emailNotif: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings updated successfully!');
    console.log(formData); // You can replace this with backend submission later
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-welcome">Account Settings</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <div className="notification-settings">
            <label>
              <input
                type="checkbox"
                name="sms"
                checked={formData.sms}
                onChange={handleChange}
              />
              Receive SMS notifications
            </label>
            <label>
              <input
                type="checkbox"
                name="emailNotif"
                checked={formData.emailNotif}
                onChange={handleChange}
              />
              Receive Email notifications
            </label>
          </div>
          <button className="download-button" type="submit">Update Settings</button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;