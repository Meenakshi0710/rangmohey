import React from 'react'
import "./MainBanner.css"
import { Link } from 'react-router-dom'
const MainBanner = () => {
  return (
    <>
   <section className="Hero-section">
  <img src="/assets/1036B.jpg" alt="Hero Section Image" className="img-fluid w-100" />
 
     {/* Container for the Card */}
     <div className="container card-container">
     <div class="card border-0 bg-transparent">
  <div class="row g-0">
    
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="col-md-4">
      <img src="/assets/png images-01.png" class="img-fluid card-img" alt="..."/>
    </div>
  </div>
</div>
        </div>
  
</section>
</> 
  )
}

export default MainBanner