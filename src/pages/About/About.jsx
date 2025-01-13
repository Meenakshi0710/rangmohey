import React from 'react'
import "./About.css"
const About = () => {
  return (
   <>
   <section className="aboutHero">
  <img src="/assets/aboutHero.jpg" alt="Hero Section Image" className="img-fluid w-100" />
  <div className="hero-content d-flex flex-column justify-content-start">
    <h1>Hidden</h1>
    <h1>Gems</h1>
    <p>Embrace tradition with our stunning ethnic wear that celebrate cultural heritage </p>
  </div>
</section>

  


  
         
        

   <section className='aboutSection'>
<div className="aboutcontainer">
<div className="card mb-3 border-0 bg-transparent" >
  <div className="row g-4">
    <div className="col-md-5">
      <img src="/assets/png images-02.jpg" className="img-fluid" alt="..."/>
    </div>
    <div className="col-md-7">
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
<div className="card border-0 bg-transparent" >
  <div className="row g-4">
   
    <div className="col-md-7">
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

  <div className="col-md-5">
      <img src="/assets/png images-02.jpg" className="img-fluid" alt="..."/>
    </div>
    </div>
</div>
</div>
   </section>
   </>
  )
}

export default About