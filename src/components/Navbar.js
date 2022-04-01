import React from "react";
import "./navbar.css";
import logo from "../assets/EVEX.png";

function Navbar() {
  return (
    <header className="d-flex border">
      <nav className="navbar navbar-default navbar-fixed-top navbar-expand-lg w-100 bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="logo-container">
              <img src={logo} width="75%" height="75%" alt="logo" />
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 navbar-ul">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  e-rikshaw
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  e-loader
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  e-bikes
                </a>
              </li>
            </ul>
          </div>
        <button type="button" class="btn btn-dark btn-lg dealer-btn">Become a dealer</button>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;
