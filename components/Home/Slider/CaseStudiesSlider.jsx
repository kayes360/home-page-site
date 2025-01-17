import React from 'react'
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

export default function CaseStudiesSlider() {
  return (
    <>

        <div>CaseStudiesSlider</div>

        {/* <!-- Slider main container --> */}
        <div className="swiper">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
                {/* <!-- Slides --> */}
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
                ...
            </div>
            {/* <!-- If we need pagination --> */}
            <div className="swiper-pagination"></div>

            {/* <!-- If we need navigation buttons --> */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {/* <!-- If we need scrollbar --> */}
            <div className="swiper-scrollbar"></div>
        </div>
    </>

  )
}
