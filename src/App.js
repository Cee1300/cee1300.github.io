import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Policy from './pages/Policy';
import Payments from './pages/Payments';
import Claims from './pages/Claims';
import ContactUs from './pages/ContactUs';
import DocumentCenter from './pages/DocumentCenter';
import Resources from './pages/Resources';
import AccountSettings from './pages/AccountSettings';
import QuoteRequest from './pages/QuoteRequest';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quote" element={<QuoteRequest />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/documents" element={<DocumentCenter />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default withAuthenticator(App);