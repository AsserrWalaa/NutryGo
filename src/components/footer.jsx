import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blog from "./../pages/blog";

const Footer = () => {
  return (
    <>
      <div className="d-flex justify-content-center ">
      
        <a href="/blog" className="text-decoration-none text-secondary ms-3">
          <h6>Blog</h6>
        </a>
        <a
          href="/contact"
          className="text-decoration-none text-secondary ms-3   "
        >
          <h6>Contact Us</h6>
        </a>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <a href="">
          {" "}
          <FontAwesomeIcon icon="fa-solid fa-copyright" />        </a>
        <a href="">
        <FontAwesomeIcon icon="fa-solid fa-copyright" />        </a>
        <a href="">
        {" "}
        <FontAwesomeIcon icon="fa-solid fa-copyright" />        </a>
        <a href="">
        {" "}

        <FontAwesomeIcon icon="fa-solid fa-copyright" />        </a>
      </div>
      <div className="text-center mt-3">
        <p className="text-secondary">© 2024 Nutry, Inc. All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
