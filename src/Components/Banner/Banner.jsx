import React from 'react'
import "./Banner.css"
import Navbar from '../Navbar/Navbar'

const Banner = () => {
  return (
   <>
 
 
          <div className="banner">
            <img
              src="/assets/1036B.jpg" /* Replace with your image path */
              alt="Banner"
              className="img-fluid banner-image"
            />
        
           <div className="hero-overlay text-white d-flex">
          
           <div className='d-flex flex-column justify-content-center  overlay-text'>
        <div className='d-flex justify-content-center align-items-center'><h1 className="text-start" style={{fontSize:"120px"}}>Festive </h1><span className="sharp-white-line mt-5"></span></div>
        <h1 className="text-uppercase text-start" style={{fontSize:"150px"}}>Fashion</h1>
        <div className='d-flex justify-content-center align-items-center'><span className="sharp-white-line mt-5"></span><h1 className="text-end" style={{fontSize:"120px"}}>Attire</h1></div>
        <p className="lead">Everlasting designs for commemmorating life's speacial moments</p>
        
        </div>

        <img 
          src="/assets/png images-01.png" 
          alt="Overlay Icon" 
          className="overlay-image img-fluid"
        />
       </div>
      </div>
    
          
    
    
   
   </>
  )
}

export default Banner