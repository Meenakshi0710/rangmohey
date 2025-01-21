import React from 'react'
import "./About.css"
import Metadata from '../../Components/Metadata'
const About = () => {
  return (
   <>
    <Metadata title="About us | RangMohey" />
   <section className="aboutHero">
  <img src="/assets/aboutHero.jpg" alt="Hero Section Image" className="img-fluid w-100" />
  <div className="hero-content d-flex flex-column justify-content-center align-items-center">
    <div className="row container">
      <div className="col-md-6 ms-5 col-sm-6 ">
    <h1 className='display-5 text-center'>Hidden</h1>
    <h1 className='display-5 text-center'>Gems</h1>
    <p className='lead text-center'>Embrace tradition with our stunning ethnic wear that celebrate cultural heritage </p>
  </div>
  </div>
  </div>
</section>

  


  
         
        

   
   </>
  )
}

export default About