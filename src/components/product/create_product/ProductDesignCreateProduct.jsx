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
import "../../../App.css";
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
import { MdDoneOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import rawTshirt from "../assets/tshirt_design/Light.svg";
import showdow from "../assets/tshirt_design/Shadow.png";
import shirtColor from "../assets/tshirt_design/tShirtColor.png";
import designlogo from "../assets/tshirt_design/designlogo.png";
import imageLogo from "./assets/FileImg/SVG (1).png";
import previewImg from "./assets/FileImg/preview_thumbnail (2).png";
import previewImg1 from "./assets/FileImg/preview_thumbnail (3).png";
import previewImg2 from "./assets/FileImg/preview_thumbnail (4).png";
import previewImg3 from "./assets/FileImg/preview_thumbnail (5).png";
import previewImg4 from "./assets/FileImg/preview_thumbnail (6).png";
import previewImg5 from "./assets/FileImg/preview_thumbnail (7).png";
import previewImg6 from "./assets/FileImg/preview_thumbnail (8).png";
import previewImg7 from "./assets/FileImg/preview_thumbnail (9).png";
import previewImg8 from "./assets/FileImg/preview_thumbnail (10).png";
import previewImg9 from "./assets/FileImg/preview_thumbnail (11).png";
import previewImg10 from "./assets/FileImg/preview_thumbnail (12).png";
import previewImg11 from "./assets/FileImg/preview_thumbnail (13).png";
import previewImg12 from "./assets/FileImg/preview_thumbnail (14).png";
import previewImg13 from "./assets/FileImg/preview_thumbnail (15).png";

import dotImg from "./assets/FileImg/Frame 1597881811.png";
const ProductDesignCreateProduct = () => {
  const colors = [
    "#E7CEB5",
    "#E4C6D4",
    "#C8C9C7",
    "#CABFAD",
    "#A4C8E1",
    "#EEAD1A",
    "#7BA4DB",
    "#97999B",
    "#DD74A1",
    "#F4633A",
    "#DB3E79",
    "#5E7461",
    "#00A74A",
    "#224D8F",
    "#D50032",
    "#7D2935",
    "#8A1538",
    "#5B2B42",
    "#273B33",
    "#263147",
    "#351F65",
    "#25282A",
  ];
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
  const [selectedColor, setSelectedColor] = useState("#FFFFFF"); // Default selected is white
  const [activeDiv, setActiveDiv] = useState(0);
  const [isSecondSectionActive, setIsSecondSectionActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(previewImage[0]); // Default image

  const handleImageClick = (img) => {
    setSelectedImage(img); // Update selected image
  };
  const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
  const handleItemSelect = (index) => {
    setActiveDiv(index); // Activate div2 for item 10, else div1
  };
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
            {/* Product */}
            {activeDiv === 0 && (
              <div className={` border-r ${activeDiv === 0 ? "" : "d-none"}`}>
                <div className="d-flex align-items-center p-2 ">
                  <div
                    className="d-flex align-items-center"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "21px",
                      fontWeight: "400",
                      lineHeight: "32px",
                      letterSpacing: "0.25px",
                      textAlign: "left",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                      gap: "5px",
                    }}
                  >
                    Product <FiInfo />
                  </div>
                </div>

                <hr />
                <div style={{ color: "#212121" }} className="p-2 m-2">
                  <h2 style={{ color: "#212121" }} className="fs-5 fw-bold">
                    Heavyweight Unisex Crewneck T-shirt | Gildan® 5000
                  </h2>
                  <div style={{ color: "#212121" }} className="text-muted">
                    Top selling Embroidery Product
                  </div>
                </div>
                <div
                  className="mb-4 p-2 mt-0 m-2"
                  style={{ height: "15px", backgroundColor: "#E7E9EB" }}
                ></div>

                {/* Print Technology */}
                <div className="mb-2 p-2">
                  <h3 className="fs-6 fw-semibold">Print Technology</h3>
                  <Button
                    variant="outline-secondary"
                    style={{ backgroundColor: "#F2F2F2", color: "#212121" }}
                    className="w-100 mb-2"
                  >
                    Direct-to-garment (DTG)
                  </Button>
                  <Button
                    variant="outline-secondary"
                    style={{ color: "#212121" }}
                    className="w-100"
                  >
                    Embroidery
                  </Button>
                </div>
                <div
                  style={{ height: "15px", backgroundColor: "#E7E9EB" }}
                  className="m-2"
                ></div>
                {/* Colors */}
                <div className="mb-2 mt-4 p-2">
                  <h3 className="fs-6 fw-semibold">Color</h3>
                  <div className="d-flex flex-wrap gap-2 mt-2 ">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        style={{
                          backgroundColor: color,
                          width: "32px",
                          height: "32px",
                          border:
                            selectedColor === color
                              ? "2px solid black "
                              : "1px solid #ccc",
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "2px",
                          justifyContent: "center",
                          cursor: "pointer",
                          position: "relative",
                        }}
                      >
                        {selectedColor === color && (
                          <MdDoneOutline size="18px" color="#909090" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  style={{ height: "15px", backgroundColor: "#E7E9EB" }}
                  className="m-2"
                ></div>
                {/* Sizes */}
                <div className="mt-4 p-2">
                  <h3 className="fs-6 fw-semibold">Size</h3>
                  <div className="d-flex flex-wrap gap-2 mt-2 w-80">
                    {sizes.map((size, index) => (
                      <Button
                        key={index}
                        style={{ color: "#212121" }}
                        variant="outline-secondary"
                        className="px-3 py-2"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Files */}
            {activeDiv === 2 && (
              <div className={`border-r  ${activeDiv === 2 ? "" : "d-none"}`}>
                <div className="d-flex align-items-center flex-col border-b">
                  <div
                    className="d-flex align-items-center p-2 "
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
            )}
            {/* Layers */}
            {activeDiv === 1 && (
              <div className={`border-r  ${activeDiv === 1 ? "" : "d-none"}`}>
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
                    Layers <FiInfo />
                  </div>
                </div>
              </div>
            )}
            {/* Texts */}
            {activeDiv === 3 && (
              <div className={`border-r  ${activeDiv === 3 ? "" : "d-none"}`}>
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
                    Text <FiInfo />
                  </div>
                </div>
              </div>
            )}
            {/* Shapes */}
            {activeDiv === 4 && (
              <div className={`border-r  ${activeDiv === 4 ? "" : "d-none"}`}>
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
                    Shapes <FiInfo />
                  </div>
                </div>
              </div>
            )}
            {/* Stutterstocks */}
            {activeDiv === 5 && (
              <div className={`border-r  ${activeDiv === 5 ? "" : "d-none"}`}>
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
                    Shutterstock <FiInfo />
                  </div>
                </div>
              </div>
            )}
            {/* Layout */}
            {activeDiv === 6 && (
              <div className={`border-r  ${activeDiv === 6 ? "" : "d-none"}`}>
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
                    Layouts <FiInfo />
                  </div>
                </div>
              </div>
            )}
            {/* Settings */}
            {activeDiv === 7 && (
              <div className={`border-r  ${activeDiv === 7 ? "" : "d-none"}`}>
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
                    Settings <FiInfo />
                  </div>
                </div>
              </div>
            )}
            {/* Stickers */}
            {activeDiv === 8 && (
              <div className={`border-r  ${activeDiv === 8 ? "" : "d-none"}`}>
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
                    Stickers <FiInfo />
                  </div>
                </div>
              </div>
            )}

            {/* Personalization */}
            {activeDiv === 9 && (
              <div className={`border-r  ${activeDiv === 9 ? "" : "d-none"}`}>
                <div className="d-flex align-items-center border-b">
                  <div
                    className="d-flex align-items-center p-2"
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "21px",
                      fontWeight: "400",
                      lineHeight: "32px",
                      letterSpacing: "0.25px",
                      textAlign: "left",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                      gap: "5px",
                    }}
                  >
                    Personalization <FiInfo />
                  </div>
                </div>

                <div className="p-2 ">
                  <div
                    className="font-bold text-xl"
                    style={{
                      fontFamily: "Roboto",
                    }}
                  >
                    Cutomer Settings
                  </div>
                  <div
                    className="font-bold text-xl py-3"
                    style={{
                      fontFamily: "Roboto",
                    }}
                  >
                    {" "}
                    Add Personalized Layers
                  </div>
                  <div
                    className="flex flex-col gap-3 "
                    style={{
                      fontFamily: "Roboto",
                    }}
                  >
                    <div className="py-2 px-3 font-medium border-1 border-[#000088] text-[#000088] rounded-md w-32 text-center">
                      Add text
                    </div>
                    <div className="py-2 px-3 border-1 border-[#BCBCBC] rounded-md  w-32 text-center">
                      Add image
                    </div>
                  </div>
                  <div className="border-1 rounded-md font-normal mt-2 text-base text-[#212121] p-2  border-[#212121]  h-56">
                    <div className="flex gap-2 ">
                      <div className="p-1">
                        <img src={dotImg} alt="" />
                      </div>
                      <p className=" font-poppins"># Text 1</p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Sample text"
                        className="border rounded-md p-2 border-[#212121]"
                        style={{ fontFamily: "Roboto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Collection */}
            {activeDiv === 10 && (
              <div className={`border-r  ${activeDiv === 10 ? "" : "d-none"}`}>
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
                    Collections <FiInfo />
                  </div>
                </div>
              </div>
            )}
          </div>
          <Col md={9} sm={9}>
            <Row className="g-0 border-l">
              {/* Toolbar Section */}
              <Col md={12} sm={12}>
                <div className="border-b ">
                  <div className="d-flex gap-2 p-2">
                    <button>
                      <LuUndo2 size={24} />
                    </button>
                    <button>
                      <LuRedo2 size={24} />
                    </button>
                    <div
                      className="pl-2 pe-2"
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
                          backgroundColor: "black",
                        }}
                      >
                        <div
                          className="d-flex justify-content-center align-items-center rounded-circle"
                          style={{
                            height: "25px",
                            width: "25px",
                            backgroundColor: "#e8eaed",
                          }}
                        >
                          <div
                            className="d-flex justify-content-center align-items-center rounded-circle"
                            style={{
                              height: "15px",
                              width: "15px",
                              backgroundColor: "white",
                            }}
                          >
                            <MdDoneOutline color="#787e87" className="p-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ms-auto d-flex gap-3">
                      <button className="d-flex  align-items-center gap-1">
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
                  </div>
                </div>
              </Col>

              {/* Main T-Shirt Display Section */}
              <Col md={9} sm={9}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {/* T-shirt Image */}
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
                      left: "50%", // Horizontally center the logo
                      transform: "translate(-50%, -50%)", // Offset to truly center the image
                      width: "20%", // Adjust the size of the logo image as needed
                      backgroundColor: "transparent", // Ensure logo background is transparent
                      zIndex: 1, // Ensure the logo stays above the T-shirt image
                    }}
                  />
                </div>
              </Col>
              {/* Sidebar Section */}
              <Col
                md={3}
                sm={3}
                className="p-4 border-start mt-0"
                style={{ backgroundColor: "#F4F4FA" }}
              >
                <h3 className="fs-6 fw-semibold mb-4">All Variants</h3>
                <div style={{ height: "50px", width: "fit-content" }}>
                  <Form>
                    <Form.Check
                      type="radio"
                      label={
                        <div
                          className="d-flex flex-row w-100 p-1 bg-white"
                          style={{
                            border: "1px solid black",
                            borderRadius: "10px",
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "25px",
                            }}
                          >
                            <img
                              src={rawTshirt}
                              alt="T-shirt variant preview"
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>

                          <div className="d-flex flex-column w-100 p-1">
                            <b>White</b>
                            <div>S, L, XL, 2XL, 3XL</div>
                          </div>
                        </div>
                      }
                      defaultChecked
                    />
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default ProductDesignCreateProduct;
