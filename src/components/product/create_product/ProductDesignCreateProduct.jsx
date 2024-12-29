import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Navbar, Nav, ListGroup, Tab, Card } from 'react-bootstrap';
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
import "../../../App.css"
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
import { MdDoneOutline, MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoMdAdd } from "react-icons/io";
import rawTshirt from "../assets/tshirt_design/Light.svg"
import showdow from "../assets/tshirt_design/Shadow.png"
import shirtColor from "../assets/tshirt_design/tShirtColor.png"
import designlogo from "../assets/tshirt_design/designlogo.png"

const ProductDesignCreateProduct = () => {
    const colors = [
        '#E7CEB5', '#E4C6D4', '#C8C9C7', '#CABFAD', '#A4C8E1', '#EEAD1A',
        '#7BA4DB', '#97999B', '#DD74A1', '#F4633A', '#DB3E79', '#5E7461',
        '#00A74A', '#224D8F', '#D50032', '#7D2935', '#8A1538', '#5B2B42',
        '#273B33', '#263147', '#351F65', '#25282A'
    ];
    const [selectedColor, setSelectedColor] = useState('#FFFFFF'); // Default selected is white

    const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

    const menuItems = [
        { title: 'Product', icon: <BsFillTagFill size={24} /> },
        { title: 'Layers', icon: <MdOutlineLayers size={24} /> },
        { title: 'Files', icon: <BsImages size={24} /> },
        { title: 'Text', icon: <RiText size={24} /> },
        { title: 'Shapes', icon: <RiShapesLine size={24} /> },
        { title: 'Shutterstock', icon: <SiShutterstock size={24} /> },
        { title: 'Layouts', icon: <TbLayoutDashboard size={24} /> },
        { title: 'Settings', icon: <GiSettingsKnobs style={{ transform: 'rotate(90deg)' }} size={24} /> },
        { title: 'Stickers', icon: <PiStickerDuotone size={24} /> },
        { title: 'Personalize', icon: <TbUserScan size={24} /> },
        { title: 'Collections', icon: <HiOutlineSquares2X2 style={{ transform: 'rotate(45deg)' }} size={24} /> },
    ];

    const styles = {
        container: {
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            alignItems: 'center'
        },
        image: {
            position: 'relative',

            objectFit: 'contain',
        },

    }
    return (
        <Row >
            <div className="d-flex" style={{ fontFamily: 'Roboto' }}>
                <div className={`menu-drawer bg-light bg-white collapsed`}>
                    {/* Drawer Menu */}
                    <ListGroup variant="flush" style={{ border: 'none' }}>
                        {menuItems.map((item) => {
                            return (
                                <ListGroup.Item
                                    action
                                    className="d-flex flex-col align-items-center"
                                    style={{
                                        border: 'none',
                                        borderLeft: '4px solid black', // Apply border on selected item
                                    }}
                                // onClick={() => handleItemSelect(0)} // Set selected item when clicked
                                >
                                    <span className="me-2">
                                        {item.icon}
                                    </span>
                                    <span>{item.title}</span>
                                </ListGroup.Item>


                            )
                        })}
                    </ListGroup>
                </div>
                <Row className='g-0'>
                    <Col md={3} sm={3}>
                        <div className='p-2 w-80 border-end me-2 '>
                            <div className='d-flex align-items-center'>
                                <div className='d-flex align-items-center' style={{
                                    fontFamily: 'Roboto',
                                    fontSize: '21px',
                                    fontWeight: '400',
                                    lineHeight: '32px',
                                    letterSpacing: '0.25px',
                                    textAlign: 'left',
                                    textUnderlinePosition: 'from-font',
                                    textDecorationSkipInk: 'none',
                                    gap: "5px"
                                }}>
                                    Product <FiInfo />
                                </div>
                            </div>

                            <hr />
                            <div style={{ color: "#212121" }} >
                                <h2 style={{ color: "#212121" }} className="fs-5 fw-bold">Heavyweight Unisex Crewneck T-shirt | Gildan® 5000</h2>
                                <div style={{ color: "#212121" }} className="text-muted">Top selling Embroidery Product</div>

                            </div>
                            <div className="mb-4 pt-0 mt-0" style={{ height: "15px", backgroundColor: "#E7E9EB" }}></div>

                            {/* Print Technology */}
                            <div className="mb-2">
                                <h3 className="fs-6 fw-semibold">Print Technology</h3>
                                <Button variant="outline-secondary" style={{ backgroundColor: "#F2F2F2", color: "#212121" }} className="w-100 mb-2">Direct-to-garment (DTG)</Button>
                                <Button variant="outline-secondary" style={{ color: "#212121" }} className="w-100">Embroidery</Button>
                            </div>
                            <div style={{ height: "15px", backgroundColor: "#E7E9EB" }}></div>
                            {/* Colors */}
                            <div className="mb-2 mt-4">
                                <h3 className="fs-6 fw-semibold">Color</h3>
                                <div className="d-flex flex-wrap gap-2 mt-2 ">
                                    {colors.map((color, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedColor(color)}
                                            style={{
                                                backgroundColor: color,
                                                width: '32px',
                                                height: '32px',
                                                border: selectedColor === color ? '2px solid black ' : '1px solid #ccc',
                                                display: 'flex',
                                                alignItems: 'center',
                                                borderRadius: "2px",
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                position: 'relative'
                                            }}
                                        >
                                            {selectedColor === color && (
                                                <MdDoneOutline size="18px" color="#909090" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ height: "15px", backgroundColor: "#E7E9EB" }}></div>
                            {/* Sizes */}
                            <div className="mt-4">
                                <h3 className="fs-6 fw-semibold">Size</h3>
                                <div className="d-flex flex-wrap gap-2 mt-2 w-80">
                                    {sizes.map((size, index) => (
                                        <Button key={index} style={{ color: "#212121" }} variant="outline-secondary" className="px-3 py-2">
                                            {size}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col md={9} sm={9}>
                        <Row className='g-0'>
                            {/* Toolbar Section */}
                            <Col md={12} sm={12} className="p-2 mt-2">
                                <div style={{ width: "100%" }}>
                                    <div className="d-flex gap-2">
                                        <button>
                                            <LuUndo2 size={24} />
                                        </button>
                                        <button>
                                            <LuRedo2 size={24} />
                                        </button>
                                        <div className='pl-2 pe-2' style={{
                                            borderRight: "1px #E9E9E9 solid",
                                            borderLeft: "1px #E9E9E9 solid",
                                        }}>
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
                                                        <MdDoneOutline color='#787e87' className='p-1' />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='ms-auto d-flex gap-3'>
                                            <button className='d-flex  align-items-center gap-1'>
                                                <MdOutlineRemoveRedEye />
                                                Preview
                                            </button>
                                            <Button style={{ color: "black" }} variant='outline-secondary' className='d-flex  align-items-center gap-1 p-1 ps-2 pe-2 m-0 text-color-black'>
                                                <IoMdAdd />
                                                Add new
                                            </Button>
                                        </div>

                                    </div>
                                    <hr style={{ width: "100%" }} />
                                </div>
                            </Col>

                            {/* Main T-Shirt Display Section */}
                            <Col md={9} sm={9}>
                                {/* <div style={{ width: "90%", textAlign: "center" }}>
                                    <img
                                        src={rawTshirt}
                                        alt="T-shirt with your design"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            backgroundColor: selectedColor || 'transparent',
                                        }}
                                    />
                                </div> */}

                                
                                <img src={showdow} height="100%" width="100%" alt="Shadow" style={{ ...styles.image, zIndex: 3 }} />
                               
                            </Col>

                            {/* Sidebar Section */}
                            <Col md={3} sm={3} className="p-4 border-start mt-0" style={{ backgroundColor: "#F4F4FA" }}>
                                <h3 className="fs-6 fw-semibold mb-4">All Variants</h3>
                                <div style={{ height: "50px", width: "fit-content" }}>
                                    <Form>
                                        <Form.Check
                                            type="radio"
                                            label={
                                                <div
                                                    className="d-flex flex-row w-100 p-1 bg-white"
                                                    style={{ border: "1px solid black", borderRadius: "10px" }}
                                                >
                                                    <div style={{
                                                        width: "40px",
                                                        height: "25px"
                                                    }}>
                                                        <img
                                                            src={rawTshirt}
                                                            alt="T-shirt variant preview"
                                                            style={{ width: '100%', height: '100%' }}
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
            </div >
        </Row >
    )
}

export default ProductDesignCreateProduct