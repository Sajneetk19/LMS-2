import React from 'react'
// import './CourseCertification.css'
import '../Pages/CertificatePage.css';

export default function CourseCertification() {
  return (
   <>

   <div className='certificate-box'>
   </div>

   <div className='text1'>
    <p style={{fontSize: "60px", fontWeight: "700"}}>Course Certification</p>
    <p style={{fontSize: "20px", fontWeight: "500", marginTop: "4%"}}>Use your Certification to demonstrate expertise and advance your career. Earn big by mastering technology as a whole.</p>
   </div>
   
   <div className='img'>
    <img src='certificate.jpg' width={'90%'}></img>
   </div>
   
   </>
  )
}
