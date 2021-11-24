import React from 'react'
import "./Header.css"
import {
  
  Link,
} from "react-router-dom";

 function Header  ()  {
    return (
        <div>
              <header id="header" className="fixed-top ">
          <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo"><a href="index.html">Ipt Solutions</a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            <nav id="navbar" className="navbar">
              <ul>
                <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                <li><Link className="nav-link scrollto" to="/about">About</Link></li>
                <li><Link className="nav-link scrollto" to="/service">Services</Link></li>
                  {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li> */}
                <li><Link className="nav-link scrollto" to="/team">Team</Link></li>
                <li><Link className="nav-link scrollto" to="/faq">Faq</Link></li>

                <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}
          </div>
        </header>{/* End Header */}
                {/* ======= Hero Section ======= */}
                <section id="hero">
          <div className="hero-container">
            <h3>Welcome to <strong>Ipt Solutions</strong></h3>
            <h1>We're Creative Agency</h1>
            <h2>We are team of talented developers making websites...</h2>
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
          </div>
        </section>{/* End Hero */}

      
        </div>
    );
}
export default Header;
