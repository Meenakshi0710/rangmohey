import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Slider from "../../Components/Slider/Slider";

import Metadata from "../../Components/Metadata";
import MainBanner from "../../Components/Banner/MainBanner";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/Banner/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection/>

      <section className="aboutSection container-fluid">
        <div className="card mb-3 border-0 bg-transparent">
          <div className="row g-4">
            <div className="col-md-5 col-12">
              <img
                src="/assets/png images-02.jpg"
                className="img-fluid"
                alt="..."
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
        <div className="card border-0 bg-transparent">
          <div className="row g-4">
            <div className="col-md-7 col-12">
              <div className="card-body">
                <h1 className="card-title custom-underline text-center">
                  RUHANIYAT
                </h1>
                <p className="card-text">
                  Step into the world of Ruhaniyat, where tradition meets e
                  legance in every stitch. Our collection celebrates the rich
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
              <img
                src="/assets/png images-02.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
      {/*Section 2*/}

      {/*best collection*/}
      <section>
        <h2 className="text-center bestHeading display-3 display-md-2 display-sm-4">
          Best collection
        </h2>

        <Slider />
      </section>

      {/*Section 3*/}

      <section className="belowHero">
       
        <div className="below-hero-content d-flex justify-content-center align-items-center">
          <div className="row text-center container-fluid">
            <div className="col-md-7 mb-4">
              <div className="row row-cols-2 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card h-100 border-0 bg-transparent">
                    <img
                      src="/assets/1030B.jpg"
                      className="card-img-top below-hero-images img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 border-0 bg-transparent">
                    <img
                      src="/assets/1031.jpg"
                      className="card-img-top below-hero-images img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 border-0 bg-transparent">
                    <img
                      src="/assets/1033.jpg"
                      className="card-img-top below-hero-images img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 border-0 bg-transparent">
                    <img
                      src="/assets/1034.jpg"
                      className="card-img-top below-hero-images img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
              <img
                src="/assets/Rangmoheylogo.jpg "
                alt="Logo"
                className="img-fluid mb-3"
                style={{ height: "150px", width: "auto" }}
              />
              <h1 className="display-5 text-center">chic</h1>
              <h1 className="display-5 text-center">Essentials</h1>
              <p className="lead text-center">
                an equisite array of subtle yet striking pieces that redefine
                contemporary chic{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
