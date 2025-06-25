import React from 'react'
import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Contactform from '../../Components/Contactform/Contactform';
import {Link} from 'react-router-dom'
import Metadata from '../../Components/Metadata';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {

    useEffect(() => {
      AOS.init({
        duration: 1200,
        once: true,
        mirror: false, // prevents repeated triggering
        easing: 'ease-in-out', // smoother
      });
    }, []);
    
  return (
    <>
       <Metadata title="Contact | RangMohey" />
  <section className='contactSection'>
<div className="container">
  <div className="row text-center">
<p className='mt-5' data-aos="fade-down"><span><FaLocationDot/></span> E/9 - 103, Sharnam Metrolinks, Ajod Dairy Road, Industrial Area, Amraiwadi, 
  Ahmedabad, Gujrat - 380021
</p>
  </div>
  <div className="row mt-5 mb-5 social">
  <div className="col-12 col-md-4 col-lg-4 text-center" data-aos="zoom-in" data-aos-delay="100"><p><span><FaPhoneAlt /></span> 9327628336</p></div>
   <div className="col-12 col-md-4 col-lg-4 text-center" data-aos="zoom-in" data-aos-delay="200"><p><span><img src="/assets/instagram.png" alt="" width={40}/> </span> rangmohey.india</p></div>
    <div className="col-12 col-md-4 col-lg-4 text-center" data-aos="zoom-in" data-aos-delay="300"><p><span><img src="/assets/facebook.png" alt="" width={40}/> </span> Rang Mohey</p></div>
  </div>
  <div className="row mt-5 mb-5 g-4 d-flex align-items-stretch">

  {/* Contact Form Card */}
  <div className="col-md-6 d-flex "  data-aos="fade-right"
    data-aos-offset="300">
    <div className="card w-100 shadow contact-card">
      <div className="card-body d-flex flex-column">
        <h4 className="mb-4 text-center">Send a Message</h4>
        <Contactform />
      </div>
    </div>
  </div>

  {/* Map + Contact Info */}
  <div className="col-md-6 d-flex"  data-aos="fade-left"
    data-aos-offset="300">
    <div className="card w-100 shadow contact-card">
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="map-responsive mb-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.409139667354!2d72.6201503!3d23.0124577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87dbb9e7d337%3A0x998b654b9c9e2d51!2sRang%20Mohey%20(Factory%20Outlet)!5e0!3m2!1sen!2sin!4v1716812445000!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Rang Mohey Map"
      ></iframe>
      </div>
      <div className="why-visit-box text-center px-4 py-3 mt-4">
  <h5 className="mb-3 fw-semibold fs-2">Why Visit Us?</h5>
  <ul className="list-unstyled mb-4  text-secondary  fs-5">
    <li>Exclusive factory outlet discounts</li>
    <li>Personalized shopping assistance</li>
    <li>Try-before-you-buy experience</li>
    <li>Easy access & ample parking space</li>
  </ul>
</div>
</div>
    </div>
  </div>
</div>
<div className="row mt-5 pb-5">
  <div className="col-12" data-aos="fade-up">
    <h3 className="text-center mb-4">Frequently Asked Questions</h3>
    <div className="accordion" id="faqAccordion">
      {[
        {
          question: "What are your store hours?",
          answer: "We are open from 10 AM to 8 PM, Monday to Saturday."
        },
        {
          question: "Do you offer custom tailoring?",
          answer: "Yes, we offer custom tailoring services for all traditional outfits."
        },
        {
          question: "Can I place orders online?",
          answer: "Currently we take orders via WhatsApp or Instagram. Our online store is coming soon!"
        },
        {
          question: "What is your return policy?",
          answer: "We accept returns within 7 days of purchase with original billing and tags."
        },
        {
          question: "Where is your factory outlet located?",
          answer: "Our factory outlet is at E/9 - 103, Sharnam Metrolinks, Amraiwadi, Ahmedabad, Gujarat."
        }
      ].map((faq, idx) => (
        <div className="accordion-item" key={idx}>
          <h2 className="accordion-header" id={`heading${idx}`}>
            <button
              className={`accordion-button ${idx !== 0 ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${idx}`}
              aria-expanded={idx === 0 ? "true" : "false"}
              aria-controls={`collapse${idx}`}
            >
              {faq.question}
            </button>
          </h2>
          <div
            id={`collapse${idx}`}
            className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
            aria-labelledby={`heading${idx}`}
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

</div>
  </section>
  </>
  )
}

export default Contact