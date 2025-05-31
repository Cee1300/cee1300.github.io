import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listPolicies } from '../graphql/queries';
import '../App.css';

const client = generateClient();

function Payments() {
  const [nextPayment, setNextPayment] = useState('Loading...');

  useEffect(() => {
    async function fetchPaymentInfo() {
      try {
        const result = await client.graphql({ query: listPolicies });
        const policies = result.data.listPolicies.items;
        if (policies.length > 0 && policies[0].nextPaymentDue) {
          setNextPayment(policies[0].nextPaymentDue);
        } else {
          setNextPayment('N/A');
        }
      } catch (err) {
        console.error('Error fetching payment info:', err);
        setNextPayment('Unavailable');
      }
    }

    fetchPaymentInfo();
  }, []);

  return (
    <div className="page-container">
      <h2>Payments</h2>
      <p>Manage your billing and view payment schedules.</p>
      <div className="payment-card">
        <p><strong>Billing Cycle:</strong> Monthly</p>
        <p><strong>Next Payment Due:</strong> {nextPayment}</p>
        <button className="disabled-button" disabled>Make a Payment</button>
      </div>
    </div>
  );
}

export default Payments;
