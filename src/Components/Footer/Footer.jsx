import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row text-center text-md-start mt-5">
          {/* Column 1 */}
          <div className="col-md-3 col-12 mb-4">
            <p className="mb-5 heading">About Us</p>
            <ul className="list-unstyled">
              <li className='mb-3'>Who are we?</li>
              <li className='mb-3'>Careers</li>
              <li className='mb-3'>Authenticity</li>
              <li className='mb-3'>Press</li>
              <li className='mb-3'>Testimonials</li>
              <li className='mb-3'>Rangmohey CSR</li>
              <li className='mb-3'>Responsible Disclosure</li>
              <li className='mb-3'>Investor Relations</li>
              <li className='mb-3'>Link to Smart ODR</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 col-12 mb-4">
            <p className="mb-5 heading">Help</p>
            <ul className="list-unstyled">
              <li className='mb-3'>Contact Us</li>
              <li className='mb-3'>Frequently Asked Questions</li>
              <li className='mb-3' >Store Locator</li>
              <li className='mb-3'>Cancellation & Return</li>
              <li className='mb-3'>Shipping & Delivery</li>
              <li className='mb-3'>Sell on Rangmohey</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 col-12 mb-4">
            <p className="mb-5 heading">Inspire Me</p>
            <ul className="list-unstyled">
              <li className='mb-3'>Rangmohey Network</li>
              <li className='mb-3'>Buying Guides</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 col-12 mb-4">
            <p className="mb-5 heading">Top Categories</p>
            <ul className="list-unstyled">
              <li className='mb-3'>Category 1</li>
              <li className='mb-3' >Category 2</li>
              <li className='mb-3'>Category 3</li>
              <li className='mb-3'>Category 4</li>
            </ul>
            {/* Social Icons */}
            <div className="d-flex justify-content-start">
              <a href="#" className="me-3">
                <i
                  className="fab fa-instagram text-dark"
                  style={{ fontSize: "24px" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fab fa-facebook text-dark"
                  style={{ fontSize: "24px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer