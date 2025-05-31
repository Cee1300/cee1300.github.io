import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaCreditCard, FaLifeRing, FaInfoCircle } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <main className="dashboard-content">
        <section className="dashboard-card">
          <div className="card-icon"><FaFileAlt /></div>
          <h2>Your Policies</h2>
          <p>You have no active policies yet.</p>
          <Link to="/policy" className="btn-primary">Add a Policy</Link>
        </section>

        <section className="dashboard-card">
          <div className="card-icon"><FaCreditCard /></div>
          <h2>Billing & Payments</h2>
          <Link to="/payments" className="btn-primary">Make a Payment</Link>
        </section>

        <section className="dashboard-card claims-center">
          <div className="claims-icon"><FaLifeRing /></div>
          <h2>Claims Center</h2>
        </section>

        <section className="dashboard-card quick-start">
          <div className="help-icon"><FaInfoCircle /></div>
          <h2>Quick Start / Get Help</h2>
          <p>Not sure where to begin?</p>
          <ul>
            <li><Link to="/quote">Start a New Quote</Link></li>
            <li><Link to="/contact">Live Chat with an Agent</Link></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;