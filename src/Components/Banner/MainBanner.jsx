import React from 'react'
import "./MainBanner.css"
const MainBanner = () => {
  return (
    <section class="hero-section d-flex align-items-center">
    <div class="container-fluid px-0">
      <div class="row g-0">
       
        <div class="col-12 col-md-7 d-flex align-items-center justify-content-center text-section">
          <div class="text-content px-4 text-center text-md-start">
            <h1 class="display-4">Welcome to Our World</h1>
            <p class="lead">Discover amazing content and explore endless possibilities with us. Experience something unique.</p>
            <button class="btn btn-primary btn-lg mt-3">Learn More</button>
          </div>
        </div>
  
       
        <div class="col-12 col-md-5 position-relative">
          <img src="/assets/png images-01.png" alt="Right Side Image" class="img-fluid full-height secondary-image"/>
        </div>
      </div>
    </div>
  
 
    <div class="background-image"></div>
  </section>
  )
}

export default MainBanner