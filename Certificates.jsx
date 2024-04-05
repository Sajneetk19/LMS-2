import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './certificates.css';
// import '../Pages/CertificatePage.css';

export default function Certificates(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, // Adjusted to scroll one slide at a time
  };

  const openDetail = (d) => {
    console.log(d);
  };
  console.log("toShowHeader", props.toShowHeader);

  return (
    <>
    {props.toShowHeader === "true" ? (
      <div className='heading'>
        <p style={{ fontSize: "55px", marginLeft: "0%", fontWeight: "600" }}>Certifications</p>
        <p style={{ fontSize: "20px", marginLeft: "0%" }}>Access exclusive courses with our premium certifications.</p>
      </div>
    ) : (
      <></>
    )}
    

      <div className=' m-auto'>
        <div className='certification mt-2'>
          <Slider {...settings} style={{ width: '95%', marginLeft: '40px' }}>
          {data.map((d, index) => (
            <div key={index} className='border' onClick={() => { openDetail(d) }}>
                <div className='text'>
                  <img src={d.image} alt="Certificate" className='images' style={{ display: 'flex', maxWidth: '100%', height: 'auto' }} />
                </div>
                <div>
                  <p className='texts'>{d.name}</p>
                  <p className='texts2'>{d.text}</p>
                  <button className='buttons'> Buy Now</button>
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
    name: "Business Analytics Certification",
    image: "c6.jpg",
    text: "7 Courses",
  },
  {
    name: "Artifical Intelligence Certification",
    image: "c7.jpg",
    text: "7 Courses",
  },
  {
    name: "Python Programming Certification",
    image: "c4.jpg",
    text: "7 Courses",
  },
  {
    name: "Linux Administrator Certification",
    image: "c5.jpg",
    text: "7 Courses",
  },
  {
    name: "Java Programming Certification",
    image: "c3.jpg",
    text: "7 Courses",
  },
];
