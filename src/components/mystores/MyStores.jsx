import React, { useState } from "react";
import SidebarDrawer from "../common_components/SidebarDrawer";
import shopifyLogo from "../mystores/assets/logos/shopifyLogo.png"
import EtsyLogo from "../mystores/assets/logos/EtsyLogo.png"
import amazonLogo from "../mystores/assets/logos/amazonLogo.png"
import wixLogo from "../mystores/assets/logos/wixLogo.png"
import shopify from "../mystores/assets/logos/shopify.png";
import {
  Navbar,
  Nav,
  Button,
  ListGroup,
  Container,
  Tab,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
const MyStores = () => {
  const [expanded, setExpanded] = useState(true); // Drawer expanded/collapsed state
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/storeSetting");
  };
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

        {/* Page Content */}

        <div className="m-5 flex flex-col gap-3">
          <div className="font-segoe font-semibold text-2xl">My Store</div>
          <div className="flex shadow-[0px_3px_13px_rgba(0,0,0,0.2)] p-3 items-center justify-between flex-wrap md:flex-nowrap h-[120px]">
            <div className="flex gap-4 items-center justify-center">
              <img src={shopify} alt="" width={100} />
              <div className="font-poppins font-bold text-lg text-center">
                My Store
              </div>
            </div>

            <div className="flex gap-4 items-center font-segoe">
              <button
                onClick={handleClick}
                className="rounded-md text-center py-[11px] px-[21px]"
              >
                Settings
              </button>
              <button className="bg-[#000080] text-white font-bold rounded-md text-center py-[11px] px-[21px]">
                Add Product
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
          <div className="font-segoe font-semibold text-3xl mt-4">Connect to a new store</div>
          <div className="font-poppins font-semibold text-lg">All integrations</div>
          <div className=" flex flex-wrap font-poppins font-medium gap-2">
            <div className="w-[120px] h-[110px] flex flex-col items-center justify-center gap-2 shadow-[3px_4px_0px_rgba(0,0,0,0.1)] rounded-md">
                <img src={EtsyLogo} alt="" height={48} width={48} />
                <p>Etsy</p>
            </div>

            <div className="w-[120px] h-[110px] flex flex-col items-center justify-center gap-2 shadow-[3px_4px_0px_rgba(0,0,0,0.1)]  rounded-md">
                <img src={wixLogo} alt="" height={48} width={48} />
                <p>Wix</p>
            </div>

            <div className="w-[120px] h-[110px] flex flex-col items-center justify-center gap-2 shadow-[3px_4px_0px_rgba(0,0,0,0.1)]  rounded-md">
                <img src={EtsyLogo} alt="" height={48} width={48} />
                <p>Etsy</p>
            </div>

            <div className="w-[120px] h-[110px] flex flex-col items-center justify-center gap-2 shadow-[3px_4px_0px_rgba(0,0,0,0.1)] rounded-md">
                <img src={amazonLogo} alt="" height={48} width={48} />
                <p>Amazon</p>
            </div>

            <div className="w-[120px] h-[110px] flex flex-col items-center justify-center gap-2 shadow-[3px_4px_0px_rgba(0,0,0,0.1)]  rounded-md">
                <img src={wixLogo} alt="" height={48} width={48} />
                <p>Wix</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStores;