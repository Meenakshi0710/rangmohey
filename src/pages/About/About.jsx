import React from 'react'
import "./About.css"
import Metadata from '../../Components/Metadata'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 250,
      mirror: false, // prevents repeated triggering
      easing: 'ease-in-out', // smoother
    });
  }, []);
  
  
  return (
   <>
    <Metadata title="About us | RangMohey" />
  




  
         
        

   <section className='aboutSection container-fluid'>
    <div className="row" data-aos="fade-down">
   <h2 className="text-center aboutHeading display-3 display-md-2 display-sm-4">
          About us
        </h2>
        </div>
        <div className="row">
          <div className="container" data-aos="fade-up">
          <p style={{textAlign:"center"}}>At Rangmohey, we believe that fashion is more than just clothing—it's an expression of culture, heritage, and
individuality. Rooted in the rich traditions of ethnic wear, our brand is a celebration of timeless elegance,
craftsmanship, and artistic excellence. We bring together the essence of tradition and the charm of modern
aesthetics, curating outfits that resonate with grace, grandeur, and sophistication.
<br/><br/>From intricate handwoven fabrics to opulent embroidery, every piece at Rangmohey is designed with a deep
appreciation for heritage while embracing contemporary trends. Our collections reflect the diversity of Indian
craftsmanship, showcasing intricate designs, luxurious textures, and vibrant colors that capture the spirit of festivities,
weddings, and everyday ethnic charm. Whether it’s a grand wedding ensemble or a subtle yet elegant traditional
outfit, we ensure that each creation tells a unique story of art and culture.</p>
          </div>
        </div>

        <div className="row" data-aos="fade-down">
   <h2 className="text-center aboutHeading display-3 display-md-2 display-sm-4">
          Our Collections
        </h2>
        </div>
<div className="card mb-3 border-0 bg-transparent"  data-aos="fade-right">
  <div className="row g-4">
    <div className="col-md-5 col-12">
      <img src="/assets/png images-02.jpg" className="img-fluid" alt="..."/>
    </div>
    <div className="col-md-7 col-12">
      <div className="card-body">
        <h1 className="card-title custom-underline">WEDDING TALES</h1>
        <p className="card-text">Introducing Wedding Tales—a bridal collection designed to
make every bride’s journey unforgettable. Featuring exquisite
lehengas , each piece is a masterpiece of fine craftsmanship
and luxurious fabrics.
<br/><br/>With intricate embroidery and timeless designs, this collection
embodies beauty and grace, ensuring you feel like royalty on
your special day. Whether you seek traditional elegance or
modern sophistication, let Wedding Tales be the perfect
start to your forever story</p>
       
      </div>
    </div>
  </div>
</div>
<div className="border-bottom"></div>
<div className="card border-0 bg-transparent" data-aos="fade-left" >
  <div className="row g-4">
   
    <div className="col-md-7 col-12">
      <div className="card-body">
        <h1 className="card-title custom-underline text-center">RUHANIYAT</h1>
        <p className="card-text">Step into the world of Ruhaniyat, where tradition meets e
legance in every stitch. Our collection celebrates the rich
heritage of Indian ethnic wear, featuring an array of
beautifully crafted ensembles that resonate with cultural
charm and modern sophistication.
<br/><br/>From intricately embroidered lehengas to graceful sarees,
each piece is thoughtfully designed to reflect the essence
of timeless beauty. The use of luxurious fabrics, vibrant colors,
 and exquisite detailing ensures that every outfit tells a story
of artistry and grace.</p>
       
      </div>
    </div>

  <div className="col-md-5 col-12">
      <img src="/assets/png images-03.jpg" className="img-fluid" alt="..."/>
    </div>
    </div>
</div>

   </section>
   </>
  )
}

export default About