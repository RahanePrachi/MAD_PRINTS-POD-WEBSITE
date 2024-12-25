import React, { useState } from "react";
import SidebarDrawer from "../common_components/SidebarDrawer";
import { Navbar, Nav, Button } from "react-bootstrap";
import image1 from "../personalizationStudio/assets/image1.png";
import image2 from "../personalizationStudio/assets/image2.png";
import image3 from "../personalizationStudio/assets/image3.png";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
const PStudio = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex">
      <SidebarDrawer />

      {/* Main Content Area */}
      <div className="main-content flex-grow-1">
        {/* Top Navbar */}
        <Navbar bg="light" variant="light" className="px-3 bg-white">
          <Navbar.Brand>
            {!expanded ? (
              <span
                className="fw-bold"
                style={{ fontFamily: "Phudu", fontSize: "22px" }}
              >
                MAD PRINTS
              </span>
            ) : (
              ""
            )}
          </Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Button
              variant="outline-dark"
              className="d-flex align-items-center fw-bold me-4"
              style={{
                minHeight: "14px",
                padding: "8.8px 12.8px",
                borderRadius: "8px",
                border: "1px solid #0000004D",
                opacity: "1",
                height: "32px",
              }}
            >
              <IoMdAdd /> Create Product
            </Button>
            <Nav.Link href="#profile">
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%", // Makes it a circle
                  backgroundColor: "#000088", // Light background color
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "white",
                  border: "1px solid #ccc",
                }}
              >
                JK
              </div>
            </Nav.Link>
          </Nav>
        </Navbar>

        {/* page content */}
        <div className="m-5 flex gap-3">
          <div className=" flex gap-3 ">
            <div className="flex flex-col w-[82%] ">
              <p className="font-outfit font-semibold text-4xl text-[#0E0E0E]">
                Sell Personalized Products
              </p>
              <p className="font-outfit font-semibold text-md text-[#0E0E0E]">
                Let your customer personalize the products!
              </p>
              <p className="font-manrope font-base text-lg">
                Personalization Studio is the creation and sale of personalized
                items, removing manual tasks to increase your customer
                satisfaction with unique products tailored for them.
              </p>

              <div className="mt-5">
                <button className="font-manrope font-bold text-base bg-[#000088] rounded-lg text-white py-6 px-10">
                  Get Started
                </button>
              </div>
            </div>

            
              <div className="relative w-full h-[500px] flex justify-center items-center ">
                <img
                  src={image1}
                  alt=""
                  className="absolute top-[-14%] left-[10%] w-1/8 h-1/8"
                />
                <img
                  src={image2}
                  alt=""
                  className="absolute w-1/8 h-1/8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <img
                  src={image3}
                  alt=""
                  className="absolute w-1/8 h-1/8 top-[75%] right-[30%] transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>


            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PStudio;
