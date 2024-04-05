import React from 'react';
import './categories.css'; // Import your CSS files

const WebDevelopment = () => {
  const listVideo = document.querySelectorAll(".video-list .vid");
  const mainVideo = document.querySelector(".main-video iframe");
  const title = document.querySelector(".main-video .title");

  const handleClick = (video) => {
    listVideo.forEach((vid) => vid.classList.remove("active"));
    video.classList.add("active");
    if (video.classList.contains("active")) {
      const src = video.children[0].getAttribute("src");
      mainVideo.src = src;
      const text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <a href="/" className="navbar-logo"> EDUVERSE </a>
        <div className="menu-icon" onClick={handleClick}>
          <span id="icon-toggle">&#9776;</span>
        </div>
        <ul className="nav-menu" id="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={handleClick}>
              Dashboard
            </a>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <a className="nav-links" href="www.google.com" onClick={handleClick}>            
            </a>
            <div id="dropdown" className="dropdown"></div>
          </li>
          <li className="nav-item">
            <a href="/cf" className="nav-links" onClick={handleClick}>
              Certifications
            </a>
          </li>
        </ul>
      </nav>
      <h3 className="heading">Web Development</h3>
      <div className="container">
        <div className="main-video">
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/l1EssrLxt7E?si=j9E-yPZzArcbtx_v"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">
              01.Introduction to Web Development | World's most premium Web
              Development Course
            </h3>
          </div>
        </div>
        <div className="video-list">
          <div className="vid active" onClick={() => handleClick(listVideo[0])}>
            <iframe
              src="https://www.youtube.com/embed/Rek0NWPCNOc?si=EuDg77IyZ-9Vt3Hl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">
              02.HTML Course | From Beginners to Advance Level
            </h3>
          </div>
          <div className="vid" onClick={() => handleClick(listVideo[1])}>
            <iframe
              src="https://www.youtube.com/embed/2QR11oDukn4?si=WbgJBIimz53d-pIQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">
              03.HTML Course | World's most premium HTML Course
            </h3>
          </div>
          <div className="vid" onClick={() => handleClick(listVideo[2])}>
            <iframe
              src="https://www.youtube.com/embed/jRAZlTEZi9I?si=PQHKwVLs_1gok2Mc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">04.Media elements | Lecture 3</h3>
          </div>
          <div className="vid" onClick={() => handleClick(listVideo[3])}>
            <iframe
              src="https://www.youtube.com/embed/61ppyY5rUB0?si=jTaYe9OOjvRuzBZt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">05.Structuring a Mega project</h3>
          </div>
          <div className="vid" onClick={() => handleClick(listVideo[4])}>
            <iframe
              src="https://www.youtube.com/embed/sqJ6xZ9mUwE?si=-IHybat_61K-1j9B"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">06.CSS- What are selectors?</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
