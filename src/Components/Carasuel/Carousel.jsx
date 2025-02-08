import React, { useEffect } from 'react'
import HeroSection from '../Banner/HeroSection'
import Banner from '../Banner/Banner'

const Carousel = ({ setActiveSlide }) => {
  useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleAutoplaying");

    if (carouselElement) {
      carouselElement.addEventListener("slide.bs.carousel", (event) => {
        setActiveSlide(event.to); // Update slide index when slide changes
      });
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("slide.bs.carousel", () => {});
      }
    };
  }, [setActiveSlide]);

  return (
  <>
  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="/assets/banner1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="/assets/banner2.jpg" class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
  </>
  )
}

export default Carousel