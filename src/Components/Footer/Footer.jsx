import React from 'react'
import "./Footer.css"
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row text-center text-md-start mt-5">
          {/* Column 1 */}
          <div className="col-md-6 col-12 mb-3">
            <p className="mb-5 heading">About Us</p>
            <ul className="list-unstyled">
              <li className='mb-3'>Welcome to RangMohey, where style meets convenience! Embrace tradition with our 
                stunning ethnic wear that celebrate cultural heritage. Whether you seek traditional elegance or modern sophistication, 
                let RangMohey be the perfect start to your forever story </li>
                <div className='d-flex '>
                <Link to = "https://www.instagram.com/rangmoheyindia?igsh=djdjbWw1MDdob2oy" ><li className='mb-3 links'><img src="/assets/instagram.png" alt="" width={40}/></li></Link>
                <Link to = "https://www.facebook.com/profile.php?id=61554321132844&mibextid=ZbWKwL" ><li className='mb-3 ms-3 links text-decoration-none'><img src="/assets/facebook.png" alt="" width={36}/></li></Link>
                </div>
             
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 col-12 mb-3">
            <p className="mb-5 heading">Quick Links</p>
            <ul className="list-unstyled">
              <Link to = "/" className='links'><li className='mb-3'>Home</li></Link>
              <Link to = "/about" className='links'><li className='mb-3'>About us</li></Link>
              <Link to = "/contact" className='links'><li className='mb-3'>Contact us</li></Link>
              
            </ul>
          </div>

         

          {/* Column 4 */}
          <div className="col-md-3 col-12 mb-3">
            <p className="mb-5 heading">Top Categories</p>
            <ul className="list-unstyled">
              <Link to = "/category/lehngas" className='links'><li className='mb-3'>Lehngas</li></Link>
              <Link to = "/category/indowestern" className='links'><li className='mb-3' >IndoWestern</li></Link>
            </ul>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer