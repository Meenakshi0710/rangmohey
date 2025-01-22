import React from 'react'
import "./Header.css"
const Header = () => {
  return (
   <>
    <header className="header__container">
      <div className="header__image">
        <img src="/assets/png images-01.png" alt="header" />
      </div>
      <div className="header__content">
        <h2>UI UX DESIGN AGENCY</h2>
        <h1>
          Make Digital<br /><span className="h1__span-1">Product</span>
          <span className="h1__span-2">with our Agency</span>
        </h1>
        <p>
          From concept to launch, our expert team is dedicated to delivering
          exceptional solutions tailored to your needs. Let's bring your vision
          to life and create something extraordinary together.
        </p>
        <div className="header__btn">
          <button className="btn">Learn More</button>
        </div>
        <ul className="socials">
          <li>
            <a href="#"><i className="ri-facebook-circle-fill"></i></a>
          </li>
          <li>
            <a href="#"><i className="ri-twitter-fill"></i></a>
          </li>
          <li>
            <a href="#"><i className="ri-youtube-fill"></i></a>
          </li>
        </ul>
        <div className="header__bar">
          Copyright © 2024 Web Design Mastery. All rights reserved.
        </div>
      </div>
    </header>
   </>
  )
}

export default Header