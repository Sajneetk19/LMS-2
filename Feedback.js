import React from 'react';
import '../components/Feedback.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Feedback() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  
  return (
    <>

    <div className='main'>

<div className="heading " >Feedbacks</div>
     
     <div className='feedback'>
        
      
     <Slider {...settings} style={{ width: '95%', marginLeft: '40px' }}>
     {data.map((d, index) => (
  <div key={index} className="feedback-box w-100 m-4 bg-primary bg-opacity-10">
    <div className='upper-text'>
      <img src={d.profile} alt={d.name} className='profile' />
      <p className="name fw-600">{d.name}</p>
    </div>
    <div className='text'>
      <p>{d.comments}</p>
    </div>
  </div>
))}
      </Slider>
      </div>
      </div>
    </>

  );
}


const data = [
  {
    name: "Riya Sharma",
    comments: "Eduverse has made the learning process incredibly smooth for us. The user-friendly interface and intuitive design have made navigation a breeze.",
    text: "7 Courses",
    profile: "profile2.jpg"
  },
  {
    name: "Rohit Singla",
    comments: "The quality of the content provided by Eduverse is top-notch. The materials are comprehensive, well-organized, and highly informative, covering a wide range of topics relevant to our courses.",
    text: "7 Courses",
    profile: "profile2.jpg"
  },
  {
    name: "Satvik ",
    comments: "The platform's intuitive design and easy navigation have made accessing course materials effortless.",
    text: "7 Courses",
    profile: "profile2.jpg"
  },
  {
    name: "Megha Gupta",
    comments: "Eduverse has provided us with the flexibility to learn at our own pace and on our own schedule. The platform have allowed us to access course materials anytime, anywhere, making learning more convenient and accessible.",
    text: "7 Courses",
    profile: "profile2.jpg"
  },
  {
    name: "Manisha Sharma",
    comments: "The course content provided on Eduverse is well-curated, covering a wide range of topics across various disciplines. Whether it's interactive lectures or downloadable study materials, Eduverse has equipped us with everything we need to succeed academically.",
    text: "7 Courses",
    profile: "profile2.jpg"
  },
];
