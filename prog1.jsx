import React, { useState } from "react";
import "./categories.css";

const Programming = () => {
  const [mainVideoSrc, setMainVideoSrc] = useState(
    "https://www.youtube.com/embed/7wnove7K-ZQ?si=ZPYTGLczxcKjzuDO"
  );
  const [mainVideoTitle, setMainVideoTitle] = useState(
    "Introduction to Programming & Python | Python Tutorial - Day #1"
  );

  const handleVideoClick = (src, text) => {
    setMainVideoSrc(src);
    setMainVideoTitle(text);
  };

  return (
    <div>
      <h3 className="heading">Python Programming</h3>
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
                "https://www.youtube.com/embed/Tto8TS-fJQU?si=7aQW_lcfCVnW056z",
                "02.Some Amazing Python Programs - The Power of Python | Python Tutorial - Day #2"
              )
            }
          >
            <iframe
              src="https://www.youtube.com/embed/Tto8TS-fJQU?si=7aQW_lcfCVnW056z"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">
              02.Some Amazing Python Programs - The Power of Python | Python
              Tutorial - Day #2
            </h3>
          </div>
          <div
            className="vid"
            onClick={() =>
              handleVideoClick(
                "https://www.youtube.com/embed/xwKO_y2gHxQ?si=NXmWofrCAusVC23w",
                "03.Modules and Pip | Python Tutorial - Day #3"
              )
            }
          >
            <iframe
              src="https://www.youtube.com/embed/xwKO_y2gHxQ?si=NXmWofrCAusVC23w"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">
              03.Modules and Pip | Python Tutorial - Day #3
            </h3>
          </div>
          <div
            className="vid"
            onClick={() =>
              handleVideoClick(
                "https://www.youtube.com/embed/7IWOYhfAcVg?si=X4EgjDYBMT1h-d5F",
                "04.Our First Python Program | Python Tutorial - Day #4"
              )
            }
          >
            <iframe
              src="https://www.youtube.com/embed/7IWOYhfAcVg?si=X4EgjDYBMT1h-d5F"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">
              04.Our First Python Program | Python Tutorial - Day #4
            </h3>
          </div>
          <div
            className="vid"
            onClick={() =>
              handleVideoClick(
                "https://www.youtube.com/embed/qxPMmW93eDs?si=t84K8JonTNb_WKCP",
                "05.Comments, Escape Sequences & Print Statement | Python Tutorial - Day #5"
              )
            }
          >
            <iframe
              src="https://www.youtube.com/embed/qxPMmW93eDs?si=t84K8JonTNb_WKCP"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">
              05.Comments, Escape Sequences & Print Statement | Python
              Tutorial - Day #5
            </h3>
          </div>
          <div
            className="vid"
            onClick={() =>
              handleVideoClick(
                "https://www.youtube.com/embed/ORCuz7s5cCY?si=bGW71lYyZuCSAF10&amp;controls=0",
                "06.Variables and Data Types | Python Tutorial - Day #6"
              )
            }
          >
            <iframe
              src="https://www.youtube.com/embed/ORCuz7s5cCY?si=bGW71lYyZuCSAF10&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 className="title">
              06.Variables and Data Types | Python Tutorial - Day #6
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programming;
