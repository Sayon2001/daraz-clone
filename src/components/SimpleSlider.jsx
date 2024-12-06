import React from "react";
import Slider from "react-slick";
import Slick1 from "../assets/images/slick1.jpg"
import Slick2 from "../assets/images/slick2.jpg"
import Slick3 from "../assets/images/slick3.jpg"
import Slick4 from "../assets/images/slick4.jpg"

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-[61.5rem]">

        <Slider className="w-[61.5rem] " {...settings} >
          <div>
            <img src={Slick1} alt="" />
          </div>
          <div>
            <img src={Slick2} alt="" />
          </div>
          <div>
            <img src={Slick3} alt="" />
          </div>
          <div>
            <img src={Slick4} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}