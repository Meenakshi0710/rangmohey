import React from 'react'
import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Contactform from '../../Components/Contactform/Contactform';
import {Link} from 'react-router-dom'
import Metadata from '../../Components/Metadata';
const Contact = () => {
  return (
    <>
       <Metadata title="Contact | RangMohey" />
  <section className='contactSection'>
<div className="container">
  <div className="row text-center">
<p className='mt-5'><span><FaLocationDot/></span> E/9 - 103, Sharnam Metrolinks, Ajod Dairy Road, Industrial Area, Amraiwadi, 
  Ahmedabad, Gujrat - 380021
</p>
  </div>
  <div className="row mt-5 mb-5 social">
  <div className="col-12 col-md-4 col-lg-4 text-center"><p><span><FaPhoneAlt /></span> 9327628336</p></div>
   <div className="col-12 col-md-4 col-lg-4 text-center"><p><span><img src="/assets/instagram.png" alt="" width={40}/> </span> rangmohey.india</p></div>
    <div className="col-12 col-md-4 col-lg-4 text-center"><p><span><img src="/assets/facebook.png" alt="" width={40}/> </span> Rang Mohey</p></div>
  </div>
  <div className="row text-center" style={{marginTop:"120px"}}><p>Send a Message</p></div>
  <Contactform/>
</div>
  </section>
  </>
  )
}

export default Contact