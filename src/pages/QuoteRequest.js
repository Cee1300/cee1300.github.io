
import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createQuoteRequest } from '../graphql/mutations';
import '../App.css';

const client = generateClient();

function QuoteRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await client.graphql({
        query: createQuoteRequest,
        variables: { input: formData }
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit quote request.');
    }
  };

  if (submitted) {
    return <div className="dashboard-container">Quote request submitted successfully!</div>;
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-welcome">Request a Quote</h2>
      <form onSubmit={handleSubmit} className="quote-form">
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
        <button type="submit" className="download-button">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default QuoteRequest;
