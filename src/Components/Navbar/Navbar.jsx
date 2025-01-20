import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser';
const Result = () =>{
  return(
      <p>Your message has been successfully sent</p>
  )
}
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
   
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
console.log("in send email")
    emailjs.sendForm('service_1hoqnnu', 'template_ydcojyl', form.current, 'HPgte57NTxyh20h5s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  };

    const handleClick = () =>{
      ref.current.click();
    }
    
  return (
    <>
   
    <nav className={`navbar navbar-expand-lg mainNavbar ${scrolling ? "navbar-scrolled" : "navbar-unscrolled"}`}>
  <div className="container-fluid">
    <Link to="/">
      <img src="/assets/black and white  logo.png" alt="Logo" className="logo" />
    </Link>
    <button
      className="navbar-toggler ms-auto"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center nav-underline" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <Link className="nav-link navLinks" to="/">Home</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link navLinks" to="/about">About Us</Link>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle navLinks" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/category/lehngas">Lehngas</Link></li>
            <li><Link className="dropdown-item" to="/category/indowestern">IndoWestern</Link></li>
           
          
          </ul>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link navLinks" to="/contact">Contact Info</Link>
        </li>
        
      </ul>
      <div className="d-lg-none mt-3">
        <button className="btn searchButton" type="button" onClick={handleClick}>
          Enquire Now
        </button>
      </div>
   
  </div>
  <div className="ms-auto d-none d-lg-block">
      <button className="btn searchButton" type="submit" onClick={handleClick}>
        Enquire Now
      </button>
    </div>
  </div>
</nav>

{/*Enquire Now Form*/}
  <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Send Message
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form ref={form} onSubmit={sendEmail}>
          <div className="row mb-5">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                 name='name'
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                 name='phone'
                required
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                 name='email'
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                 name='subject'
                required
              />
            </div>
          </div>
          <div className="mb-5">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Message"
               name='message'
              required
            ></textarea>
          </div>
        </form>
            </div>
            <div className="modal-footer d-flex justify-content-between">
             
              <button type="submit" className="btn searchButton">
                Send Message
              </button>
              <button
                ref = {refClose}
                type="button"
                className="btn searchButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

</>
  )
}

export default Navbar