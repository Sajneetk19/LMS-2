import React, { useState } from "react";
import "./categories.css";


function DigitalMarketing() {
  const [mainVideoSrc, setMainVideoSrc] = useState(
    "https://www.youtube.com/embed/RPw51rZwKkM?si=8NIBvwFtoLYfG3Vl"
  );
  const [mainVideoTitle, setMainVideoTitle] = useState(
    "How to Become a Digital Marketer | Roadmap for Digital Marketer | Digital Marketing | Edureka"
  );

  const handleVideoClick = (src, title) => {
    setMainVideoSrc(src);
    setMainVideoTitle(title);
  };

  return (
    <div>
      <h3 className="heading">Digital Marketing</h3>
      <div className="container">
        <div className="main-video">
          <div className="video">
            <iframe
              width="560"
              height="315"
              src={mainVideoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">{mainVideoTitle}</h3>
          </div>
        </div>
        <div className="video-list">
          <div
            className="vid active"
            onClick={() =>
              handleVideoClick(
                "https://www.youtube.com/embed/s7sUDQni0LI?si=jsfJq-QEaK-VW1uC",
                "02.What Is Digital Marketing? |Edureka"
              )
            }
          >
            <iframe
              src="https://www.youtube.com/embed/s7sUDQni0LI?si=jsfJq-QEaK-VW1uC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">02.What Is Digital Marketing? |Edureka</h3>
          </div>

          {/* Add other videos similarly */}
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;
