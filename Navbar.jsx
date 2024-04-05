// Navbar.js

import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import Dropdown from "./Dropdown";
// import Home from "./Home";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          EDUVERSE
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Dashboard
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/categories"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Categories
              <FaCaretDown />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/library" className="nav-links" onClick={closeMobileMenu}>
              Certifications
            </Link>
          </li>
          <Button className="abc">
            
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Logout
              </Link>
            
          </Button>
        </ul>
      </nav>

      <div>
        <div className="img">
          <div className="img-section">
            <img
              className="img1"
              src="https://img.freepik.com/premium-vector/video-tutorials-background-vector-illustration-watching-streaming-online-computer-about-education-knowledge-web-banner-brochures-poster-book-cover_2175-1338.jpg?w=826"
              alt="Reading Woman"
            />
          </div>
          <div className="text-area">
            <h3>
              {" "}
              Unlocking Knowledge, <br></br>Empowering Futures: <br></br>
               Welcome you to <br></br> Gateway of Seamless Learning           
               </h3>

            <p className="text">
              We have 100+ Online courses & 200k+ Online registered students.
              <br></br>
              Find your desired Courses from them.
            </p>
          </div>
          <div className="home-search">
            <FaSearch className="search-icon2" />
            <input
              type="text"
              placeholder="Search your favourite course....."
              className="searching"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
