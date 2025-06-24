import React, { useEffect } from "react";
import "./Home.css";
import Slider from "../../Components/Slider/Slider";
import Carousel from "../../Components/Carasuel/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,     // re-animate on every scroll into view
      offset: 200,     // <- adjust this (try 200-400) to trigger later
    });
  }, []);
  

  return (
    <>
      <Carousel />

      {/* Section: Wedding Tales & Ruhaniyat */}
      <section className="aboutSection container-fluid" data-aos="fade-up">
        <div className="card mb-3 border-0 bg-transparent" data-aos="fade-right">
          <div className="row g-4">
            <div className="col-md-5 col-12">
              <LazyLoadImage
                src="/assets/png images-02.jpg"
                alt="aboutImage"
                className="img-fluid"
                effect="blur"
              />
            </div>
            <div className="col-md-7 col-12">
              <div className="card-body">
                <h1 className="card-title custom-underline">WEDDING TALES</h1>
                <p className="card-text">
                  Introducing Wedding Tales—a bridal collection designed to make
                  every bride’s journey unforgettable. Featuring exquisite
                  lehengas , each piece is a masterpiece of fine craftsmanship
                  and luxurious fabrics.
                  <br />
                  <br />
                  With intricate embroidery and timeless designs, this
                  collection embodies beauty and grace, ensuring you feel like
                  royalty on your special day. Whether you seek traditional
                  elegance or modern sophistication, let Wedding Tales be the
                  perfect start to your forever story
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-bottom"></div>

        <div className="card border-0 bg-transparent" data-aos="fade-left">
          <div className="row g-4">
            <div className="col-md-7 col-12">
              <div className="card-body">
                <h1 className="card-title custom-underline text-center">
                  RUHANIYAT
                </h1>
                <p className="card-text">
                  Step into the world of Ruhaniyat, where tradition meets
                  elegance in every stitch. Our collection celebrates the rich
                  heritage of Indian ethnic wear, featuring an array of
                  beautifully crafted ensembles that resonate with cultural
                  charm and modern sophistication.
                  <br />
                  <br />
                  From intricately embroidered lehengas to graceful sarees, each
                  piece is thoughtfully designed to reflect the essence of
                  timeless beauty. The use of luxurious fabrics, vibrant colors,
                  and exquisite detailing ensures that every outfit tells a
                  story of artistry and grace.
                </p>
              </div>
            </div>

            <div className="col-md-5 col-12">
              <LazyLoadImage
                src="/assets/png images-03.jpg"
                alt="aboutImage"
                className="img-fluid"
                effect="blur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Best Collection */}
      <section data-aos="zoom-in">
        <h2 className="text-center bestHeading display-3 display-md-2 display-sm-4">
          Best collection
        </h2>
        <Slider />
      </section>

      {/* Section: Below Hero / Chic Essentials */}
      <section className="belowHero" data-aos="fade-up">
        <div className="below-hero-content d-flex justify-content-center align-items-center">
          <div className="row text-center container-fluid">
            <div className="col-md-7 mb-4">
              <div className="row row-cols-2 row-cols-md-2 g-4">
                {["1030B", "1031", "1033", "1034"].map((img, idx) => (
                  <div className="col" key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
                    <div className="card h-100 border-0 bg-transparent">
                      <LazyLoadImage
                        src={`/assets/${img}.jpg`}
                        className="card-img-top below-hero-images img-fluid"
                        alt="image"
                        effect="blur"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-center align-items-center" data-aos="zoom-in">
              <LazyLoadImage
                src="/assets/Rangmoheylogo.jpg"
                alt="Logo"
                className="img-fluid mb-3"
                effect="blur"
                style={{ height: "150px", width: "auto" }}
              />
              <h1 className="display-5 text-center">chic</h1>
              <h1 className="display-5 text-center">Essentials</h1>
              <p className="lead text-center">
                an exquisite array of subtle yet striking pieces that redefine
                contemporary chic
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
