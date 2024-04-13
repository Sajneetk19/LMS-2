import React from 'react';
import '../Pages/Register.css'; // Import your CSS file

const Register = () => {
  return (
    <form>
      <div className="container">
        <div className="box2">
          <p style={{ fontSize: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>SIGNUP</p>
          <div className="details">
            <div className="username">
              <label htmlFor="uname"><b>FIRST NAME</b></label>
              <input type="text" placeholder="Enter first name" required />
            </div>
            <div className="lastname">
              <label htmlFor="lname"><b>LAST NAME</b></label>
              <input type="text" placeholder="Enter last name" required />
            </div>
            <div className="paswrd">
              <label htmlFor="psw"><b>CREATE PASSWORD</b></label>
              <input type="password" placeholder="Enter Password" required />
            </div>
            <div className="paswrd2">
              <label htmlFor="confirmPsw"><b> CONFIRM PASSWORD</b></label>
              <input type="password" placeholder="Confirm password" required />
            </div>
            <div className="button">
              <button type="submit"> Signin</button>
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="lines">
            <div className="line1">
              <p> <b>  Welcome to Signin Page </b> </p>
            </div>
            <div className="line2">
              <p>Already have an account?</p>
            </div>
            <button className="signing"> <a href="login.html">Login</a> </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
