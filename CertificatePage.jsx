import React from 'react';
import Certificatebanner from '../components/Certificatebanner';
import CertificateData from '../components/CertificateData';
import CourseCertification from '../components/CourseCertification';
import CertificateBottom from '../components/CertificateBottom';
import CertificateBoxes from '../components/CertificateBoxes';
import Footer from '../components/Footer';

export default function CertificatePage() {
  console.log(CertificateData , 'CertificateData')
  return (
    <div>
      <Certificatebanner/>
      
      {/* <CertificateData/> */}
      <CourseCertification/>
      <CertificateBoxes/>
      {/* <Certificates toShowHeader="false" ></Certificates> */}

      <CertificateBottom/>
      {/* <CertificateDetails/> */}

      
      <Footer/>
      
      
    </div>
  );
}
