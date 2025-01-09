import React from 'react'
import "./Contactform.css"

const Contactform = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
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
          <div className="d-grid ">
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