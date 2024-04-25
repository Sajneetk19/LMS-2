// import React from 'react';
// import './MainPage.css'; // import the CSS file

// const MainPage = () => {
//   return (
//     <div className="container">
//       <div className="content-container">
//         <div className="form-container">
//           <div className="image-and-buttons-container">
//             <img src="https://img.freepik.com/premium-vector/student-woman-with-laptop-studying-online-course-online-education-concept-vector-illustration-flat_186332-1147.jpg" alt="Study" />
//             <div className="button-container">
//               <button className="login-button">Student Login</button>
//               <button className="login-button">Teacher Login</button>
//             </div>
//           </div>
//           <div className="text-container">
//             <h2>Welcome to the Study Hub</h2>
//             <p>The ultimate platform for students and educators to connect, learn, and grow.</p>
//             <a href="/" className="blue-link">Learn More</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainPage;
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
      <div className="text-container"> <h2>Welcome to the Eduverse</h2> <p>Connect with educators and students from around the world.</p>
      </div>
    </div>
  );
}

export default MainPage;