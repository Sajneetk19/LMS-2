import React from 'react';
import CertificateData from './CertificateData';
import { Outlet, Link } from "react-router-dom";
import '../components/CertificateBoxes.css';

const CertificateBoxes = () => {
  const data = CertificateData;
  
  return (
    <>
      <h1 style={{ fontSize: "65px", fontWeight: 500, marginTop: "5%" }}>Certificates</h1>
      <div className='certification-container'>
        {data.map((certificate) => (
          <div key={certificate.id} className='border card'>
            <Link to={"/certificate-detail/"+certificate.id} >
            <div className='text'>
              <img src={certificate.image} alt="Certificate" className='images' />
            </div>
            <div>
              <p className='texts'>{certificate.name}</p>
              <p className='texts2'>{certificate.text}</p>
             <button className='buttons'>Buy Now</button>
            </div></Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default CertificateBoxes;
