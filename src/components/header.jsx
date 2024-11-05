import React from "react";
import logo from "../assets/imgs/NUTRY.png";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import blog from "./../pages/blog";
import features from "./../pages/features";
import Home from "./../pages/home";

const Header = () => {
  return (
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <div className="container-fluid container">
    <Navbar.Brand href="/home" target="_blank">
      <img src={logo} alt="Logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="me-auto mb-2 mb-lg-0">
        <Nav.Link href="/features" target="_blank">Features</Nav.Link>
        <Nav.Link href="/blog" target="_blank">Blog</Nav.Link>
      </Nav>
      <form className="">
        <button className="get-access py-1 px-lg-2" type="submit">
          Get Access
        </button>
      </form>
    </Navbar.Collapse>
  </div>
</Navbar>
  );
};

export default Header;
