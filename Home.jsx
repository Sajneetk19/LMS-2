import React from "react";
import { Link } from 'react-router-dom';
// import Mk1 from './mk1'; // Importing the mk1 component
import Webdev from './Web';
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="my-content">
        <h2>
          Start <span> Exploring..! </span>
        </h2>
        <p>Discover, Learn, Grow: Find Your Next Course Here.</p>
      </div>
      <section className="categories">
        <div className="web">
          <h3>
            Your journey to excellence starts here! Welcome to our array of
            courses crafted to shape your future.
          </h3>
          <div className="grid">
            <div className="grid-item">
              <Link to='/Web'>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
                  alt="Web Development"
                />
                <h4 className="text">Web Development</h4>
                
              </Link>
            </div>
            <div className="grid-item">
              <Link to='/mk1'>
                <img
                  src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/02/digital-marketing-2.jpg.optimal.jpg"
                  alt="Marketing"
                />
                <h4 className="text">Marketing</h4>
              </Link>
            </div>
            <div className="grid-item">
              <Link to='/prog1'>
                <img
                  src="https://f.hubspotusercontent10.net/hubfs/6448316/applications-of-computer-programming.jpg"
                  alt="Programming"
                />
                <h4 className="text">Programming</h4>
              </Link>
            </div>
            <div className="grid-item">
              <Link to='/cyber'>
                <img
                  src="https://www.netcov.com/wp-content/pubfiles/2022/07/shutterstock_1092829541.jpg"
                  alt="Cyber Security"
                />
                <h4 className="text">Cyber Security</h4>
              </Link>
            </div>
            <div className="grid-item">
              <Link to='/buss'>
                <img
                  src="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630"
                  alt="Business"
                />
                <h4 className="text">Business</h4>
              </Link>
            </div>
            <div className="grid-item">
              <Link to='/hefi'>
                <img
                  src="https://www.betterup.com/hs-fs/hubfs/woman-runs-and-jumping-on-mountain-ridge-at-sunset.jpg?width=964&name=woman-runs-and-jumping-on-mountain-ridge-at-sunset.jpg"
                  alt="Health and Fitness"
                />
                <h4 className="text">Health and Fitness</h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
