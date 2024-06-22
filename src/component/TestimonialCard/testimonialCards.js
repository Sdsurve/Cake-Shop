import React from 'react'
import "./testimonialCard.css"
import Background from "./../../views/Home/homeImg/highlight-1.jpg"
import { theme } from '../../configData'
import Testimonials from './testimonialData'
import { useState } from 'react'
import Button from "./../../component/ButtonBox/ButtonBox"

const TestimonialCards = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleClick = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % Testimonials.length);
   
  };

  return (
    <div class="image-container">
    <img src={Background} alt="Image" className='test-img'/>
    <div className="text-container text-overlay d-flex">
      <p className='headingFont fs-3' style={{color:theme.primaryColor}}>Testimonials</p>
      <p className='subHeadingFont fs-3' >What Our Clients Say</p>
      <p className='descriptionFont'>"{Testimonials[currentTestimonial].quote}"</p>
      <p className='descriptionFont '> - {Testimonials[currentTestimonial].name}</p>
     <div onClick={handleClick}><Button  
     text=" See More " /></div>
      
     
    </div>
    </div>
  );
};


export default TestimonialCards