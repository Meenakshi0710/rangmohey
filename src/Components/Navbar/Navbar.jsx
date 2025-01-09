import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
  <div class="container-fluid">
   
    <a class="navbar-brand" href="#">
      <img src="https://via.placeholder.com/150x50" alt="Logo"/>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

  
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Categorize</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Info</a>
        </li>
      </ul>
    </div>

  
    <div class="icon-container d-flex">
      <i class="fas fa-search"></i>
      <i class="fas fa-shopping-cart"></i>
      <i class="fas fa-heart"></i>
      <i class="fas fa-user"></i>
    </div>
  </div>
</nav>
  )
}

export default Navbar