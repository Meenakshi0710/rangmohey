import React, { useRef } from 'react'
import "./Navbar.css"

import {Link} from 'react-router-dom'
const Navbar = () => {
 
  const ref = useRef(null);
  const refClose = useRef(null);
  

    const handleClick = () =>{
      ref.current.click();
    }
    const handleChange = () =>{

    }
  return (
    <>
    
    <nav className="navbar navbar-expand-lg mainNavbar">
    <div className="container-fluid">
    <Link to = "/" ><img src="/assets/black and white  logo.png " alt="Logo" className='logo'/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  justify-content-center nav-underline" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to="#">Categorize</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Info</Link>
        </li>
         
         
        </ul>
        </div>
        <div className="d-flex justify-content-end me-4">
        <button class="btn searchButton" type="submit" onClick={handleClick}>Enquire Now</button>
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
        </form>
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
          </div>
        </div>
      </div>

</>
  )
}

export default Navbar