import React from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/Certificates.css'; 


const Certificates = ({ toShowHeader }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    const openDetail = (d) => {
        console.log(d)
    }

    return (
        <>

        
            {toShowHeader === "true" ? (
                <div className='heading'>
                    <p style={{fontSize:"55px", marginLeft: "0%", fontWeight: "600"}}>Certifications</p>
                    <p style={{fontSize:"20px", marginLeft: "0%"}}>Access exclusive courses with our premium certifications.</p>
                </div>
            ) : (
                <></>
            )}
            
            <div className='m-auto'>
                <div className='certification mt-2'>
                    <Slider {...settings} style={{ width: '95%', marginLeft: '40px' }}>
                        {data.map((d, index) => (
                            <div key={index} className='border' onClick={() => {openDetail(d)}}>
                                {/* <Link to={`/certificate/${index}`}> */}
                                    <div className='text'>
                                        <img src={d.image} alt="Certificate" className='images' style={{display:'flex',  maxWidth: '100%', height: 'auto' }}/>
                                    </div>
                                    <div >
                                        <p className='texts'>{d.name}</p>
                                        <p className='texts2'>{d.text}</p>
                                        <button className='buttons'> Buy Now</button>
                                    </div>
                                {/* </Link> */}
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
        text: "7 Courses"
    },
    {
        name: "Artificial Intelligence and Machine Learning",
        image: "c7.jpg",
        text: "7 Courses"
    },
    {
        name: "Python Programming Certification",
        image: "c4.jpg",
        text: "7 Courses"
    },
    {
        name: "Linux System Administrator Certification",
        image: "c5.jpg",
        text: "7 Courses"
    },
    {
        name: "Java Programming Certification",
        image: "c3.jpg",
        text: "7 Courses"
    },
];

export default Certificates;
