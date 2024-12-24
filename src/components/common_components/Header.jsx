import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="bg-[#030357]">
        <Navbar expand="lg" className=" text-white justify-content-center w-10/12 mx-auto  ">
      <Container className="d-flex justify-content-center items-center">
        {/* Brand Name */}
        <Navbar.Brand
          href="#home"
          style={{
            fontFamily: "'Phudu', cursive",
            fontWeight: "600",
            fontSize: "32px",
            lineHeight: "38.4px",
            color:"white"
          }}
        >
          MAD PRINTS
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {/* Navigation Links */}
          <Nav
            className="me-auto justify-content-end w-100"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#home" className="text-white px-3">
              Home
            </Nav.Link>
            <Nav.Link href="#AboutUs" className="text-white px-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#Services" className="text-white px-3">
              Services
            </Nav.Link>
            <Nav.Link href="#Products" className="text-white px-3">
              Products
            </Nav.Link>
            <Nav.Link href="#Pricing" className="text-white px-3">
              Pricing
            </Nav.Link>
            <Nav.Link href="#ContactUs" className="text-white px-3">
              Contact Us
            </Nav.Link>
            <Nav.Item>
  <Button
    className="mt-1 mb-1  mr-3 ml-3 custom-outline text-white py-2 px-6 rounded-lg text-center"
    style={{ backgroundColor: "#FB5711", borderColor: "#FB5711" }}
  >
    Get A Quote
  </Button>
</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
