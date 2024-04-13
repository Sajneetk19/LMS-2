import React from 'react';
import '../Pages/CertificatePage.css';


export default function Certificatebanner() {
  return (
    <div>
      <div className='header'>
        <div className='img-section'>
         
        </div>
        <div className='text-area'>
          <p style={{fontSize:"80px", fontWeight: '600', marginTop: '0'}}>Online Certifications</p>
          <p style={{fontSize:"36px", fontWeight: '600', marginTop: '20px'}}>Curated Bundles for Enhanced Learning</p>
          <p style={{fontSize:"20px", fontWeight: '500', marginTop: '20px'}}>Elevate your learning experience with thoughtfully curated online Certifications programs.</p>
        </div>
      </div>

      <div className='text-area2'>
        <p style={{fontSize: "30px", fontWeight: "400"}}>Elevate your learning with</p>
        <p style={{fontSize: "50px", fontWeight: "600"}}>Latest Certifications</p>
      </div>
      
    </div>
  );
}
