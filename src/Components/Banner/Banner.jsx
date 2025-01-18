import React from 'react'
import "./Banner.css"
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
   <>
   <section className="banner d-flex align-items-center">
    
  <img src="/assets/1036B.jpg" alt="Hero Section Image" className="img-fluid w-100" />
  
  <div className="hero-overlay ">
  <img 
            src="/assets/png images-01.png" 
            alt="Overlay Icon" 
            className="overlay-image img-fluid mb-0 pb-0 "
          />
      <div className="row g-0">
        
       
        <div className="col-12 col-md-10 text-white text-center ">
          <div className="d flex flex-column justify-content-center align-items-center ps-5">
          <div className="d-flex justify-content-start align-items-center">
            <h1 className="text-start" style={{ fontSize: "120px" }}>Festive</h1>
            <span className="sharp-white-line mt-5"></span>
          </div>
          <h1 className="text-uppercase text-start" style={{ fontSize: "140px" }}>Fashion</h1>
          <div className="d-flex justify-content-start align-items-center">
            <span className="sharp-white-line mt-5"></span>
            <h1 className="text-end" style={{ fontSize: "120px" }}>Attire</h1>
          </div>
          </div>
          <p className="lead mt-5 mb-5" style={{ fontSize: "30px" }}>Everlasting designs for commemorating life's special moments</p>
          <Link className="btn aboutButton" to="/about">About us</Link>
        </div>


        <div className="col-12 col-md-2 mb-0 pb-0">
          
        </div>
      </div>
    </div>
  
</section>

          
    
    
   
   </>
  )
}

export default Banner