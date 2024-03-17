import React from "react";
import logo from "../assets/imgs/NUTRY.png";
import blog from "./../pages/blog";
import features from "./../pages/features";
import Home from "./../pages/home";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid container">
        <a className="navbar-brand" href="/home" target="_blank">
          <img src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/features" target="_blank">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/blog" target="_blank">
                Blog
              </a>
            </li>
          </ul>
          <form className="">
            <button className=" get-access py-1 px-2" type="submit">
              Get Access
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
