import React from 'react';
import '../Pages/CertificatePage.css';

export default function CertificateBottom() {
  return (
    <div>
        
      <div className='bottom-texts' style={{marginTop: '3%'}}>
        <p>Certifications is an innovative program by EduVerse to help learners get started with technology from scratch and achieve mastery by learning as a whole. The program entails a bundle of courses that teach technology with video lectures, examples, and projects. Then a graded certificate is awarded at the end of the program following a thorough assessment.</p>
        <p className="fw-bold" style={{ fontSize: '30px' }}>Comprehensive Online Certification Programs</p>

        <p>The exclusive online certification programs by EduVerse are thoughtfully curated comprising expert-taught courses. It is to help learners master technology as a whole in one place without having to go through searching for one course after the other.</p>
        <p>Along with teaching you a technology, the certification also offers a detailed assessment and based on your performance awards a graded certification that showcases your expertise. EduVerse categorized its certification programs for you to easily navigate and find the best-suited program that meets your needs. The categories are:</p>
        <p className="fw-bold" style={{ fontSize: '30px' }}>Most Popular Certifications</p>

        <p>These are the certification programs curated by analyzing the popular technologies and the growing demand for them. It is the result of extensive research by our team who consistently look for the most in-demand technologies and what learners are actually looking for. Find the list of the </p>
        <p className="fw-bold" style={{ fontSize: '30px' }}>Most Popular Certifications here:</p>
       
        <ul>
          <li>Business Analytics Certification</li>
          <li>Apache Spark Certification</li>
          <li>Linux System Administrator Certification</li>
          <li>Artificial Intelligence and Machine Learning Certification</li>
          <li>Python Programming Certification</li>
        </ul>
      </div>
    </div>
  );
}
