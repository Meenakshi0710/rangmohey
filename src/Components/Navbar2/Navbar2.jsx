import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar2.css';

const Navbar2 = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg mainNavbar">
      <div className="container-fluid">
        <Link to="/">
          <img src="/assets/logo.png" alt="Logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center nav-underline"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link
                className={`nav-link navLinks ${
                  location.pathname === '/' ? 'active' : ''
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link
                className={`nav-link navLinks ${
                  location.pathname === '/about' ? 'active' : ''
                }`}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown me-3">
              <Link
                className="nav-link dropdown-toggle navLinks"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item navLinks" to="/category/lehnga">
                    Lehnga
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item navLinks" to="/category/indowestern">
                    IndoWestern
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link navLinks ${
                  location.pathname === '/contact' ? 'active' : ''
                }`}
                to="/contact"
              >
                Contact Info
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
