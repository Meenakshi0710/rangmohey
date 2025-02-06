import React from 'react'
import "./Banner.css"
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
   <>
  
  <section className="aboutHero">
  <img src="/assets/abouthero.png" alt="Hero Section Image" className="img-fluid w-100" />
 
    <div className="container">
    <div className="hero-content ">
     
    <h1>Hidden</h1>
    <h1>Gems</h1>
    <p >Embrace tradition with our stunning ethnic wear that celebrate cultural heritage </p>
  </div>
  </div>
  
</section>
    </>
  )
}

export default Banner