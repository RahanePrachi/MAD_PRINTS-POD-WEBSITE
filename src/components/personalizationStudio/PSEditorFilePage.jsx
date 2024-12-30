import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Navbar, Nav, ListGroup, Tab, Card } from "react-bootstrap";
import { MdOutlineLayers } from "react-icons/md";
import { BsFillTagFill, BsImages } from "react-icons/bs";
import { RiText, RiShapesLine } from "react-icons/ri";
import { SiShutterstock } from "react-icons/si";
import { TbLayoutDashboard } from "react-icons/tb";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiStickerDuotone } from "react-icons/pi";
import { TbUserScan } from "react-icons/tb";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FiInfo } from "react-icons/fi";
import "../../App.css";
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
import {
  MdDone,
  MdDoneOutline,
  MdOutlineRemoveRedEye,
  MdOutlineMoreHoriz,
  MdOutlineRotate90DegreesCw,
  MdOutlineZoomIn,
} from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { IoMdAdd } from "react-icons/io";

import showdow from "../product/assets/tshirt_design/Shadow.png";

import designlogo from "../product/assets/tshirt_design/designlogo.png";
import imageLogo from "../product/create_product/assets/FileImg/SVG (1).png";
import { useNavigate } from "react-router-dom";

import previewImg1 from "../product/create_product/assets/FileImg/preview_thumbnail (2).png";
import previewImg2 from "../product/create_product/assets/FileImg/preview_thumbnail (3).png";
import previewImg3 from "../product/create_product/assets/FileImg/preview_thumbnail (4).png";
import previewImg4 from "../product/create_product/assets/FileImg/preview_thumbnail (5).png";
import previewImg5 from "../product/create_product/assets/FileImg/preview_thumbnail (6).png";
import previewImg6 from "../product/create_product/assets/FileImg/preview_thumbnail (7).png";
import previewImg7 from "../product/create_product/assets/FileImg/preview_thumbnail (8).png";
import previewImg8 from "../product/create_product/assets/FileImg/preview_thumbnail (9).png";
import previewImg9 from "../product/create_product/assets/FileImg/preview_thumbnail (10).png";
import previewImg10 from "../product/create_product/assets/FileImg/preview_thumbnail (11).png";
import previewImg11 from "../product/create_product/assets/FileImg/preview_thumbnail (12).png";
import previewImg12 from "../product/create_product/assets/FileImg/preview_thumbnail (13).png";
import previewImg13 from "../product/create_product/assets/FileImg/preview_thumbnail (14).png";
import previewImg from "../product/create_product/assets/FileImg/preview_thumbnail (15).png";

const PSEditorFilePage = () => {
    const previewImage = [
        designlogo,
        previewImg,
        previewImg1,
        previewImg2,
        previewImg3,
        previewImg4,
        previewImg5,
        previewImg6,
        previewImg7,
        previewImg8,
        previewImg9,
        previewImg10,
        previewImg11,
        previewImg12,
        previewImg13,
      ];
      const navigate = useNavigate();
      const [selectedColor, setSelectedColor] = useState("#FFFFFF"); // Default selected is white
      const [activeDiv, setActiveDiv] = useState(0);
      const [selectedImage, setSelectedImage] = useState(previewImage[0]); // Default image
      const handleImageClick = (img) => {
        setSelectedImage(img); // Update selected image
        setStickerClicked(true);
      };
      const handleAddToOrder = () => {
        navigate("/addToOrder")
    
      }
    
      
      const handleItemSelect = (index) => {
        setActiveDiv(index); // Activate div2 for item 10, else div1
        setStickerClicked(false);
      };
    
    
      const [stickerClicked, setStickerClicked] = useState(false);
    
      const menuItems = [
        { title: "Product", icon: <BsFillTagFill size={24} /> },
        { title: "Layers", icon: <MdOutlineLayers size={24} /> },
        { title: "Files", icon: <BsImages size={24} /> },
        { title: "Text", icon: <RiText size={24} /> },
        { title: "Shapes", icon: <RiShapesLine size={24} /> },
        { title: "Shutterstock", icon: <SiShutterstock size={24} /> },
        { title: "Layouts", icon: <TbLayoutDashboard size={24} /> },
        {
          title: "Settings",
          icon: (
            <GiSettingsKnobs style={{ transform: "rotate(90deg)" }} size={24} />
          ),
        },
        { title: "Stickers", icon: <PiStickerDuotone size={24} /> },
        { title: "Personalize", icon: <TbUserScan size={24} /> },
        {
          title: "Collections",
          icon: (
            <HiOutlineSquares2X2 style={{ transform: "rotate(45deg)" }} size={24} />
          ),
        },
      ];
    
  return (
    <div>
        <Row>
            <Navbar bg="light" variant="light" className="px-3 py-2  bg-white border-b-2" style={{ height: "60px" }}>
                        <Nav>
                          <span> Back to Heavyweight Unisex Crewneck T-shirt | Gildan® 5000</span>
                        </Nav>
                        <Nav
                          className="ms-auto gap-4 "
            
                        >
                          <div>
                            <span>Price</span><br />
                            <span className='fw-bold fs-5'>959.79 INR</span>
                          </div>
                          <Button
                            variant="primary"
                            className='fw-bold'
                            style={{
                              backgroundColor: "#000088", // Background color
                              color: "white", // Text color
                              borderColor: "#000088", // Border color (if needed)
                            }}
                            onClick={handleAddToOrder}
                          >
                            Add to order
                          </Button>
            
                        </Nav>
                      </Navbar>
        </Row>
        <Row>
      <div className="d-flex" style={{ fontFamily: "Roboto" }}>
        <div className={`menu-drawer bg-light bg-white collapsed border-x-2`}>
          {/* Drawer Menu */}
          <ListGroup variant="flush" style={{ border: "none" }}>
            {menuItems.map((item, index) => {
              return (
                <ListGroup.Item
                  action
                  className="d-flex flex-col align-items-center"
                  style={{
                    border: "none",
                    borderLeft:
                      activeDiv === index ? "4px solid black" : "none",
                  }}
                  onClick={() => handleItemSelect(index)}
                  // onClick={() => handleItemSelect(0)} // Set selected item when clicked
                >
                  <span className="me-2">{item.icon}</span>
                  <span>{item.title}</span>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
        <Row className="g-0">
          <div
            style={{
              width: "20.83%", // Custom width for a 2.5/12 equivalent
              flex: "0 0 auto", // Prevent column from shrinking
              maxWidth: "20.83%", // Ensure consistent width
            }}
          >
          
             {/* File */}
            
              <div className={`border-r `}>
                <div className="d-flex align-items-center border-b">
                  <div
                    className="d-flex align-items-center p-2"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "21px",
                      fontWeight: "bold",
                      lineHeight: "32px",
                      letterSpacing: "0.25px",
                      textAlign: "left",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                      gap: "5px",
                    }}
                  >
                    Files <FiInfo />
                  </div>
                </div>

                <div
                  className="text-[#000088] text-base w-full items-center"
                  style={{ fontFamily: "Roboto" }}
                >
                  <button className="flex border-1 p-2 w-full items-center justify-center border-[#000080] rounded-md gap-2">
                    <img src={imageLogo} alt="" className="object-contain" />
                    <div>Choose File</div>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 p-4  blur-sm ">
                  {previewImage.map((img, index) => (
                    <div
                      key={index}
                      className="overflow-hidden "
                      onClick={() => handleImageClick(img)}
                    >
                      <img
                        src={img}
                        alt={`Preview ${index + 1}`}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
           
           
          
          </div>
          <Col md={9} sm={9}>
            <Row className="g-0 border-l">
              {/* Toolbar Section */}
              <Col md={12} sm={12}>
                <div style={{ width: "100%" }} className="border-b ">
                  <div className="d-flex gap-3 p-2">
                    <button>
                      <LuUndo2 size={24} />
                    </button>
                    <button>
                      <LuRedo2 size={24} />
                    </button>
                    {!stickerClicked && (
                      <div
                        className="pl-2 pe-2 d-flex gap-3"
                        style={{
                          borderRight: "1px #E9E9E9 solid",
                          borderLeft: "1px #E9E9E9 solid",
                        }}
                      >
                        <div
                          className="d-flex justify-content-center align-items-center rounded-circle "
                          style={{
                            height: "30px",
                            width: "30px",
                            backgroundColor: "white",
                            border: "3px black solid",
                          }}
                        >
                          <div
                            className="d-flex justify-content-center align-items-center rounded-circle "
                            style={{
                              height: "20px",
                              width: "20px",
                              backgroundColor: "white",
                              border: "2px #2121211A solid",
                            }}
                          >
                            <MdDoneOutline color="#787e87" className="p-1" />
                          </div>
                        </div>
                      </div>
                    )}

                    { stickerClicked ? (
                      <>
                        <div
                          className="pl-2 pe-2 d-flex gap-3"
                          style={{
                            borderRight: "1px #E9E9E9 solid",
                            borderLeft: "1px #E9E9E9 solid",
                          }}
                        >
                          <div
                            className="d-flex justify-content-center align-items-center rounded-circle "
                            style={{
                              height: "30px",
                              width: "30px",
                              backgroundColor: "white",
                              border: "3px black solid",
                            }}
                          >
                            <div
                              className="d-flex justify-content-center align-items-center rounded-circle "
                              style={{
                                height: "20px",
                                width: "20px",
                                backgroundColor: "white",
                                border: "2px #2121211A solid",
                              }}
                            >
                              <MdDoneOutline color="#787e87" className="p-1" />
                            </div>
                          </div>

                          <div
                            className="d-flex justify-content-center align-items-center rounded-circle "
                            style={{
                              height: "30px",
                              width: "30px",
                              backgroundColor: "white",
                              border: "3px black solid",
                            }}
                          >
                            <div
                              className="d-flex justify-content-center align-items-center rounded-circle "
                              style={{
                                height: "20px",
                                width: "20px",
                                backgroundColor: "#F4633A",
                                border: "2px #2121211A solid",
                              }}
                            >
                              {/* <MdDoneOutline color="#787e87" className="p-1" /> */}
                            </div>
                          </div>
                          <div
                            className="d-flex justify-content-center align-items-center rounded-circle "
                            style={{
                              height: "30px",
                              width: "30px",
                              backgroundColor: "white",
                              border: "3px black solid",
                            }}
                          >
                            <div
                              className="d-flex justify-content-center align-items-center rounded-circle "
                              style={{
                                height: "20px",
                                width: "20px",
                                backgroundColor: "#1C78A7",
                                border: "2px #2121211A solid",
                              }}
                            >
                              {/* <MdDoneOutline color="#787e87" className="p-1" /> */}
                            </div>
                          </div>
                          <div
                            className="d-flex justify-content-center align-items-center rounded-circle "
                            style={{
                              height: "30px",
                              width: "30px",
                              backgroundColor: "white",
                              border: "3px black solid",
                            }}
                          >
                            <div
                              className="d-flex justify-content-center align-items-center rounded-circle "
                              style={{
                                height: "20px",
                                width: "20px",
                                backgroundColor: "#141C26",
                                border: "2px #2121211A solid",
                              }}
                            >
                              {/* <MdDoneOutline color="#787e87" className="p-1" /> */}
                            </div>
                          </div>
                        </div>

                        <div
                          className="d-flex gap-4 align-items-center pe-2"
                          style={{ borderRight: "1px #E9E9E9 solid" }}
                        >
                          <svg
                            width="25"
                            height="25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <title>Layer 1</title>
                              <rect
                                id="svg_1"
                                height="24"
                                width="24"
                                y="0.75265"
                                x="0.67018"
                                stroke="#000"
                                fill="#fff"
                              />
                              <rect
                                stroke-width="2"
                                id="svg_2"
                                height="23"
                                width="11"
                                y="0.45884"
                                x="7.01035"
                                stroke="#000"
                                fill="#fff"
                              />
                            </g>
                          </svg>

                          <svg
                            width="22"
                            height="26"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <title>Layer 1</title>
                              <rect
                                stroke-width="2"
                                id="svg_1"
                                height="24"
                                width="20"
                                y="0.75265"
                                x="0.87637"
                                stroke="#000"
                                fill="#fff"
                              />
                              <rect
                                stroke="#000"
                                id="svg_2"
                                height="9.64961"
                                width="19.17526"
                                y="8.3815"
                                x="1.08255"
                                fill="#fff"
                              />
                            </g>
                          </svg>

                          <MdOutlineRotate90DegreesCw size={30} />

                          <MdOutlineZoomIn size={30} />

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 16 16"
                            id="flip"
                          >
                            <path
                              fill="#444"
                              d="m0 15 6-5-6-4.9zM9 10.1l6 4.9V5l-6 5.1zm5 2.8-3.4-2.8 3.4-3v5.8zM7 5h1v1H7V5zM7 3h1v1H7V3zM7 7h1v1H7V7zM7 9h1v1H7V9zM7 11h1v1H7v-1zM7 13h1v1H7v-1zM7 15h1v1H7v-1z"
                            ></path>
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 16 16"
                            id="flip"
                          >
                            <path
                              fill="#444"
                              d="m1 1 5 6 4.94-6H1zM5.94 10 1 16h10zm-2.82 5 2.83-3.44 3 3.44H3.12zM10 8h1v1h-1V8zM12 8h1v1h-1V8zM8 8h1v1H8V8zM6 8h1v1H6V8zM4 8h1v1H4V8zM2 8h1v1H2V8zM0 8h1v1H0V8z"
                            ></path>
                          </svg>
                        </div>

                        <div className="d-flex gap-4 align-items-center">
                          <button className="">Pattern</button>
                          <button>Crop</button>
                          <button>Position</button>
                          <button
                            style={{
                              backgroundColor: "#04AA6D",
                              borderRadius: "20px",
                            }}
                            className="d-flex p-1 text-white fw-bold  align-items-center gap-1"
                          >
                            <MdDone
                              size={24}
                              stroke={4}
                              color="white"
                              fill="white"
                            />
                            good dpi
                          </button>
                          <button>
                            <MdOutlineMoreHoriz size={24} />
                          </button>
                          <button>
                            <RiDeleteBin6Line size={24} />
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="ms-auto d-flex gap-3">
                        <button className="d-flex align-items-center gap-1">
                          <MdOutlineRemoveRedEye />
                          Preview
                        </button>
                        <Button
                          style={{ color: "black" }}
                          variant="outline-secondary"
                          className="d-flex  align-items-center gap-1 p-1 ps-2 pe-2 m-0 text-color-black"
                        >
                          <IoMdAdd />
                          Add new
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Col>

              {/* Main T-Shirt Display Section */}
              <Col
                md={12}
                sm={12}
              >
                <div
                  //onClick={handleImageClickCreateDesignFile1}
                  style={{
                    position: "relative",
                    width: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={showdow}
                    alt="T-shirt with your design"
                    style={{
                      width: "100%",
                      height: "auto",
                      backgroundColor: selectedColor || "transparent",
                    }}
                  />
                  {/* Design Logo Positioned at the Center  */}

                  <img
                    src={selectedImage}
                    alt="Design Logo"
                    style={{
                      position: "absolute",
                      top: "50%", // Vertically center the logo
                      left: "48%", // Horizontally center the logo
                      transform: "translate(-50%, -50%)", // Offset to truly center the image
                      width: "20%", // Adjust the size of the logo image as needed
                      backgroundColor: "transparent", // Ensure logo background is transparent
                      zIndex: 1, // Ensure the logo stays above the T-shirt image
                      border: "1px dotted black",
                    }}
                  />
                </div>
              </Col>

             
            </Row>
          </Col>
        </Row>
      </div>
    </Row>
      
    </div>
  )
}

export default PSEditorFilePage
