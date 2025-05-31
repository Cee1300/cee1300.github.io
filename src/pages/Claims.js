import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listClaims } from '../graphql/queries';
import '../App.css';

const client = generateClient();

function Claims() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    async function fetchClaims() {
      try {
        const result = await client.graphql({ query: listClaims });
        setClaims(result.data.listClaims.items || []);
      } catch (error) {
        console.error('Error loading claims:', error);
      }
    }

    fetchClaims();
  }, []);

  return (
    <div className="container">
      <h2>Recent Claims</h2>
      {claims.length === 0 ? (
        <p>No claims submitted.</p>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>Claim #</th>
              <th>Policy</th>
              <th>Date Filed</th>
              <th>Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {claims.map(claim => (
              <tr key={claim.id}>
                <td>{claim.claimNumber || claim.id}</td>
                <td>{claim.policyID}</td>
                <td>{claim.dateFiled || 'N/A'}</td>
                <td>{claim.status}</td>
                <td>{claim.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Claims;
