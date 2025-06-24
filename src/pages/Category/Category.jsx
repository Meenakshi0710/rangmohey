import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Metadata from "../../Components/Metadata";
import emailjs from "@emailjs/browser";
import "./Category.css";

const Category = () => {
  const { categoryName } = useParams();

  const categories = {
    lehnga: [
      "/assets/product/only models-01.png",
      "/assets/product/only models-07.png",
      "/assets/product/only models-08.png",
      "/assets/product/only models-09.png",
      "/assets/product/only models-10.png",
      "/assets/product/only models-11.png",
      "/assets/product/only models-12.png",
    ],
    indowestern: [
      "/assets/product/only models-02.png",
      "/assets/product/only models-03.png",
      "/assets/product/only models-04.png",
      "/assets/product/only models-05.png",
      "/assets/product/only models-06.png",
      "/assets/product/only models-13.png",
      "/assets/product/only models-14.png",
      "/assets/product/only models-15.png",
      "/assets/product/only models-16.png",
      "/assets/product/only models-18.png",
    ],
  };

  const form = useRef();
  const modalRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Open modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setShowConfirmation(false);

    const modalEl = modalRef.current;
    if (modalEl) {
      const modalInstance = window.bootstrap.Modal.getOrCreateInstance(modalEl);
      modalInstance.show();
    }
  };

  // Handle email sending
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1hoqnnu",
        "template_ydcojyl",
        form.current,
        "HPgte57NTxyh20h5s"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowConfirmation(true);

          // Auto close modal after 2 seconds
          setTimeout(() => {
            const modalEl = modalRef.current;
            if (modalEl) {
              const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
              modalInstance.hide();
              setShowConfirmation(false);
            }
          }, 2000);

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send enquiry.");
        }
      );
  };

  return (
    <>
      <Metadata title={`${categoryName} | RangMohey`} />
      <section className="categoryBackground">
        <div className="container mt-5 pb-5">
          <h1 className="text-center mb-5 display-5 text-uppercase">
            {categoryName}
          </h1>
          <div className="row">
            {categories[categoryName]?.map((image, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="card bg-transparent border-0 category-card position-relative overflow-hidden rounded">
                  <img
                    src={image}
                    className="card-img-top img-fluid w-100"
                    style={{ height: "450px", objectFit: "cover" }}
                    alt={`${categoryName}-${index}`}
                  />
                  {/* Enquire Now button, shown on hover */}
                  <button
                    className="btn btn-dark enquire-btn position-absolute"
                    onClick={() => openModal(image)}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            )) || (
              <p className="text-center">No items found for this category.</p>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      <div
  className="modal fade"
  id="enquiryModal"
  tabIndex="-1"
  aria-labelledby="enquiryModalLabel"
  aria-hidden="true"
  ref={modalRef}
>
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content" style={{ maxHeight: "90vh", overflow: "hidden" }}>
      <form ref={form} onSubmit={sendEmail}>
        <div className="modal-header">
          <h5 className="modal-title" id="enquiryModalLabel">
            Enquire About This Outfit
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setShowConfirmation(false)}
          ></button>
        </div>

        {/* Two-column layout */}
        <div className="modal-body p-0">
          <div className="row g-0">
            {/* Left: Image */}
            <div className="col-md-6 d-flex align-items-center justify-content-center bg-light p-3">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="img-fluid"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>

            {/* Right: Form */}
            <div
              className="col-md-6 p-4 d-flex flex-column"
              style={{ maxHeight: "60vh", overflowY: "auto" }}
            >
              {showConfirmation ? (
                <div className="alert alert-success text-center" role="alert">
                  Your enquiry has been sent successfully!
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    name="name"
                    className="form-control mb-2"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control mb-2"
                    placeholder="Your Email"
                    required
                  />
                  <textarea
                    name="message"
                    className="form-control mb-3"
                    placeholder="Your Message"
                    rows="3"
                    required
                  ></textarea>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer always visible */}
        {!showConfirmation && (
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setShowConfirmation(false)}
            >
              Close
            </button>
            <button type="submit" className="btn btn-dark">
              Send Enquiry
            </button>
          </div>
        )}
      </form>
    </div>
  </div>
</div>

    </>
  );
};

export default Category;
