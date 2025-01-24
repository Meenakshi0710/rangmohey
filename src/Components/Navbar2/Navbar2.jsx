import React, { useEffect, useRef, useState } from 'react'
import "./Navbar2.css"
import {Link} from 'react-router-dom'

const Navbar2 = () => {
  const [scrolling, setScrolling] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolling(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
     
    }, []);
    const ref = useRef(null);
    const refClose = useRef(null);
   
      const handleClick = () =>{
        ref.current.click();
      }
      const handleChange = () =>{
  
      }
  return (
  <>
   <nav className={`navbar navbar-expand-lg aboutNavbar ${scrolling ? "navbar-scrolled2" : "navbar-unscrolled2"}`}>
    <div className="container-fluid">
    <Link to = "/" ><img src="/assets/Rangmoheylogo.jpg " alt="Logo" className='logo'/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  justify-content-center nav-underline" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <Link className="nav-link navLink" to="/">Home</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link navLink" to="/about">About Us</Link>
        </li>
         <li className="nav-item dropdown me-3">
                 <Link className="nav-link dropdown-toggle navLink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Categories
                 </Link>
                 <ul className="dropdown-menu">
                   <li><Link className="dropdown-item navLink" to="/category/lehngas">Lehngas</Link></li>
                   <li><Link className="dropdown-item navLink" to="/category/indowestern">IndoWestern</Link></li>
                  
                 
                 </ul>
               </li>
        <li className="nav-item">
          <Link className="nav-link navLink" to="/contact">Contact Info</Link>
        </li>
         
         
        </ul>
        <div className="d-lg-none mt-3">
        <button className="btn searchButton" type="button" onClick={handleClick}>
          Enquire Now
        </button>
      </div>
        </div>
        <div className="ms-auto d-none d-lg-block">
        <button className="btn searchButton" type="submit" onClick={handleClick}>Enquire Now</button>
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
            <form>
          <div className="row mb-5">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
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
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
          </div>
          <div className="mb-5">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="modal-footer d-flex justify-content-between">
             
             <button type="button" className="btn searchButton">
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
        </form>
            </div>
           
          </div>
        </div>
      </div>

  </>
  )
}

export default Navbar2