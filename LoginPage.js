import React from 'react';
import '../Pages/LoginPage.css'; // Import your CSS file

const LoginPage = () => {
  return (
    <form>
      <div className="container">
        <div className="box2">
          <p style={{ fontSize: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>LOGIN</p>
          <div className="details">

            <div className="username">
              <label htmlFor="uname"><b>FIRST NAME</b></label>
              <input type="text" placeholder="Enter first name" required />
            </div>

            <div className="username">
              <label htmlFor="uname"><b>LAST NAME</b></label>
              <input type="text" placeholder="Enter first name" required />
            </div>

            <div className="paswrd2">
              <label htmlFor="psw"><b> PASSWORD</b></label>
              <input type="password" placeholder="Enter password" required />
            </div>

            <div className="button">
              <button type="submit"> Login</button>
            </div>


          </div>
        </div>


        <div className="box1">
          <div className="lines">
            <div className="line1">
              <p> <b>  Welcome to Login Page </b> </p>
            </div>
            <div className="line2">
              <p>Don't have an account?</p>
            </div>
            <button className="signing"><a href="signin.html">Sign in</a> </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
