import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '30px', color: '#1E3A8A' }}>
        Contact Us
      </h2>
      <div
        style={{
          backgroundColor: '#f9f9f9',
          padding: '30px',
          borderRadius: '12px',
          maxWidth: '600px',
          width: '90%',
          margin: '0 auto',
          textAlign: 'left',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)'
        }}
      >
        <p>If you have any questions or need help, reach out to us:</p>
        <ul style={{ paddingLeft: '20px', marginTop: '20px', marginBottom: '20px' }}>
          <li><strong>Phone:</strong> <a href="tel:9842149542">(984) 214-9542</a></li>
          <li><strong>Fax:</strong> 984-480-2512</li>
          <li><strong>Email:</strong> <a href="mailto:info@aafarleyns.com">info@aafarleyns.com</a></li>
          <li><strong>Website:</strong> <a href="https://www.aafarleyns.com" target="_blank" rel="noreferrer">www.aafarleyns.com</a></li>
          <li><strong>Office Location:</strong> <a href="https://www.google.com/maps?q=32+Industrial+Park+Drive,+Suite+140,+Pittsboro,+NC+27312" target="_blank" rel="noreferrer">32 Industrial Park Drive, Suite 140, Pittsboro, NC 27312</a></li>
          <li><strong>Business Hours:</strong> Mon–Fri, 9am–5pm</li>
        </ul>
        <div style={{ marginTop: '20px' }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.3376939509756!2d-79.1859289!3d35.7289721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885f0514f9df3e17%3A0xa8ed3a7b75d452a9!2s32%20Industrial%20Park%20Dr%20Suite%20140%2C%20Pittsboro%2C%20NC%2027312%2C%20USA!5e0!3m2!1sen!2sus!4v1715380000000"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;