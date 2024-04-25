
import React from 'react';
import './MainPage.css';

function MainPage() {
  return (
    <div className="landing-page">
      <img src="https://img.freepik.com/free-vector/hand-drawn-college-entrance-exam-illustration_23-2150359356.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713571200&semt=ais" alt="Study" className="image" />
      <div className="button-container">
        <button className="button">Login as a Student</button>
        <button className="button">Login as a Admin</button>
      </div>
      <div className="text-container"> 
      <p style={{ fontSize: 50 , fontWeight: 700}}>Welcome to the Eduverse</p>

      </div>
    </div>
  );
}

export default MainPage;
