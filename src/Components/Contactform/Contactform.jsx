import React, { useRef } from 'react'
import "./Contactform.css"
import emailjs from '@emailjs/browser';
const Result = () =>{
  return(
      <p>Your message has been successfully sent</p>
  )
}

const Contactform = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1hoqnnu', 'template_ydcojyl', form.current, 'HPgte57NTxyh20h5s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  };
  return (
    <div className="row justify-content-center contactForm">
      <div className="col-md-10">
      <form ref={form} onSubmit={sendEmail} className="d-flex flex-column h-100">
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
          <div className="d-grid mt-auto mb-0 pb-0">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Contactform