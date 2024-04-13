import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CertificateData from '../components/CertificateData';
import '../Pages/CertificateDetails.css';

const CertificateDetails = () => {
  const { certificateId } = useParams();
  const [certificateData, setCertificateData] = useState(null);

  useEffect(() => {
    const data = CertificateData.find(certificate => certificate.id == certificateId);
    setCertificateData(data);
  }, [certificateId]);

  if (!certificateData) {
    return <div>Loading...</div>; // Handle loading state while fetching data
  }

  return (
    <>
      <header>
        <h1>{certificateData.name}</h1>
      </header>

      <div className="overview">
        <div className="box">
          <h1>Overview</h1>
          <p className="java-overview">{certificateData.overview}</p>
        </div>
        <div className="box2">
          {certificateData.image && <img src={certificateData.image} alt="Overview" />}
        </div>
      </div>

      <div className="certificate-box"></div>

      <div className="text1">
        <h1>Course Certification</h1>
        <p>Use your Certification to demonstrate expertise and advance your career. Earn big by mastering technology as a whole.</p>
      </div>

      <div className="img">
        <img src="certificate.jpg" alt="Course Certification" width="90%" />
      </div>

      <div className="course-curriculum">
        <div className="prerequisites">
          <h1>Course Curriculum</h1>
          <ul>
            {certificateData.curriculum.map((module, index) => (
              <div key={index} className='module-container'>
               <div className='module'>
                <h2>{module.title}</h2>
                <p>{module.description}</p>
              </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CertificateDetails;
