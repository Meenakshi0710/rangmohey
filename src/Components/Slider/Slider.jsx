import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider2 from "react-slick";
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
  const cardData = [
   "/assets/product/only models-01.png",
          "/assets/product/only models-07.png",
          "/assets/product/only models-08.png",
          "/assets/product/only models-09.png",
          "/assets/product/only models-10.png",
          "/assets/product/only models-11.png",
          "/assets/product/only models-12.png",
          "/assets/product/only models-04.png",
          "/assets/product/only models-05.png",
          "/assets/product/only models-06.png",
          "/assets/product/only models-13.png",
  ];

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 768 ? (window.innerWidth < 480 ? 1 : 2) : 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container-fluid py-4">
      <Slider2 {...settings}>
        {cardData.map((card, index) => (
          <div className="productCardColor" key={index}>
            <div className="card h-100 border-0">
              <img src={card} className="w-100 cardImage" alt="image" />
            </div>
          </div>
        ))}
      </Slider2>
    </div>
  );
};

export default Slider;
