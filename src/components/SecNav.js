import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function SecNav() {
  const sliderSettings = {
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  };

  return (
    <div>
      <div className="container-fluid px-5 main text-center bg-dark text-white text-uppercase">
        <Slider {...sliderSettings} className="slider slide-show">
          <div>
            <p>HTML</p>
          </div>
          <div>
            <p>CSS</p>
          </div>
          <div>
            <p>Javascript</p>
          </div>
          <div>
            <p>Python</p>
          </div>
          <div>
            <p>Java</p>
          </div>
          <div>
            <p>C</p>
          </div>
          <div>
            <p>C++</p>
          </div>
          <div>
            <p>React js</p>
          </div>
          <div>
            <p>Node js</p>
          </div>
          <div>
            <p>My Sql</p>
          </div>
          <div>
            <p>Monog db</p>
          </div>
          <div>
            <p>Ruby</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
