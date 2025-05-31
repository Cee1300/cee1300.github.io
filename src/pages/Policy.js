import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listPolicies } from '../graphql/queries';
import '../App.css';

const client = generateClient();

function PolicyInfo() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    async function fetchPolicies() {
      try {
        const result = await client.graphql({ query: listPolicies });
        setPolicies(result.data.listPolicies.items || []);
      } catch (error) {
        console.error('Failed to fetch policies:', error);
      }
    }

    fetchPolicies();
  }, []);

  return (
    <div className="container">
      <h2>Your Active Policies</h2>
      {policies.length === 0 ? (
        <p>No policies available.</p>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>Policy Number</th>
              <th>Holder</th>
              <th>Effective</th>
              <th>Expiry</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            {policies.map(policy => (
              <tr key={policy.id}>
                <td>{policy.policyNumber}</td>
                <td>{policy.holderName}</td>
                <td>{policy.effectiveDate || 'N/A'}</td>
                <td>{policy.expiryDate || 'N/A'}</td>
                <td>${policy.premiumAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PolicyInfo;
