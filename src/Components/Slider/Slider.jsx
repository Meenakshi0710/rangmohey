import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider2 from "react-slick";
import { Link } from "react-router-dom";
import "./Slider.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

const Slider = () => {
  var settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 600 ? 2 : 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider2 {...settings}>
      <div className="productCardColor">
        <div className="card h-100 border-0">
          <img
            src="/assets/card1.jpg"
            className="w-100  cardImage"
            alt="Cleaning"
          />
        </div>
      </div>
      <div className="productCardColor">
        <div className="card h-100 border-0">
          <img
            src="/assets/card2.jpg"
            className="w-100 cardImage"
            alt="Cleaning"
          />
        </div>
      </div>
      <div className="productCardColor">
        <div className="card h-100 border-0">
          <img
            src="/assets/card3.jpg"
            className="w-100  cardImage"
            alt="Cleaning"
          />
        </div>
      </div>
      <div className="productCardColor">
        <div className="card h-100 border-0">
          <img
            src="/assets/1031.jpg"
            className="w-100 cardImage"
            alt="Cleaning"
          />
        </div>
      </div>
      <div className="productCardColor">
        <div className=" h-100 border-0">
          <img
            src="/assets/1033.jpg"
            className="w-100  cardImage"
            alt="Cleaning"
          />
        </div>
      </div>
    </Slider2>
  );
};

export default Slider;
