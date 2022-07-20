import React from 'react'
import Slides from './Slides';
import "./Slider.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Slider() {
  return (
    <div className='carousel'>
      <div className='carousel-title'>
          <h2> Experiencias </h2>
      </div>
      <div className='carousel-container'>
        <AliceCarousel infinite mouseTracking items={Slides} />
      </div>
  </div>
  )
}

export default Slider