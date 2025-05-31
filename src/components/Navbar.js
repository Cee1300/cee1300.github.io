import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { signOut } from 'aws-amplify/auth';

const Navbar = () => {
  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.reload(); // Optional: redirect or refresh after sign-out
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <img src="logo192.png" alt="Agency Logo" className="logo" />
        <div className="agency-name">
          <h1>A. A. Farley Insurance Agency</h1>
          <p>Your Local, Trusted Coverage Partner</p>
        </div>
      </div>

      <div className="navbar-bottom">
        <ul className="nav-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/quote">Quote</Link></li>
          <li className="dropdown">
            <span>Services</span>
            <div className="dropdown-content">
              <Link to="/policy">Policies</Link>
              <Link to="/payments">Payments</Link>
              <Link to="/claims">Claims</Link>
            </div>
          </li>
          <li><Link to="/documents">Documents</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li>
            <button onClick={handleSignOut} className="nav-button">Sign Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;