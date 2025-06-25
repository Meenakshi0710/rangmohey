// src/components/WhatsAppButton.js
import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "919999999999"; // replace with your phone number (with country code)
  const message = "Hello, I'm interested in your services."; // optional

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
 <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
