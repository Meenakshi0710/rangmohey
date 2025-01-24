import React from 'react'
import "./HeroSection.css"
import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
   <>
      <section className="Hero">
       
       <div className="above-hero-content d-flex justify-content-center align-items-center">
         <div className="row text-center container-fluid pe-0 hero-row ">
         <div className="col-md-6 d-flex flex-column justify-content-center align-items-center hero-col">
        
             <h1 className="display-5 text-center">Festive</h1>
             <h1 className="display-5 text-center">Fashion</h1>
             <h1 className="display-5 text-center">Attire</h1>
             <p className="lead text-center mt-4">
             Everlasting designs for commemorating life's special moments
             </p>
             <Link className="btn aboutButton mt-4" to="/about">About us</Link>
           </div>
           <div className="col-md-6 pe-0 hero-col">
            
                 <div className="card h-100 border-0 bg-transparent">
                   <img
                     src="/assets/png images-01.png"
                     className="card-img-top above-hero-image img-fluid"
                     alt="..."
                   />
                 </div>
              
             </div>
           </div>
         
         </div>
      
     </section>
   
   </>
  )
}

export default HeroSection
