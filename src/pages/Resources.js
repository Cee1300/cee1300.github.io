import React from 'react';
import '../App.css'; 
import bookCover from '../assets/insuring-your-business-cover.png'; 

const Resources = () => {
  return (
    <div className="page-container">
      <h2>Helpful Resources</h2>
      <ul className="card-list">
        <li className="card">
          <h4>Insurance Guide PDF</h4>
          <a href="/docs/insurance-guide.pdf" download>Download</a>
        </li>
        <li className="card">
          <h4>Filing Claims FAQ</h4>
          <a href="/docs/claims-faq.pdf" download>Download</a>
        </li>
        <li className="card">
          <h4>Get the Insurance Guide on Amazon</h4>
          <a
            href="https://www.amazon.com/dp/B0F7NM6K27?ref=cm_sw_r_ffobk_em_ud_dp_EBKJXDBFAG8BKP3HVV53"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={bookCover}
              alt="Insuring Your Business - Ashley Farley"
              style={{ width: '150px', borderRadius: '8px', marginTop: '0.5rem' }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Resources;