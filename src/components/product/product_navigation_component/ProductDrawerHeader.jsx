import React, { useState } from 'react';
import { Navbar, Nav, Button, ListGroup, Container, Tab, Row, Col } from 'react-bootstrap';
import { FaBars, FaUser, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { BiHome, BiPurchaseTag, BiShoppingBag, BiStoreAlt, BiNavigation, BiLayout } from "react-icons/bi";
import { TbUserScan } from "react-icons/tb";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { PiSelectionAllLight } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true); // Drawer expanded/collapsed state
  const [selectedIndex, setSelectedIndex] = useState(null); // To track selected item index

  const [activeKey, setActiveKey] = useState('/home'); // Track the active tab

  const toggleExpand = () => setExpanded(!expanded);
  const routes=["/","/product","/","/","/","/","/","/","/","/"]
  const handleItemSelect = (index) => {
    if(index==0 || index ==1)
      navigate(routes[index])
    setSelectedIndex(index); // Set selected item index
  };

  return (
    <div className="d-flex">
      {/* Sidebar Drawer */}
      <div className={`drawer bg-light bg-white ${expanded ? 'expanded' : 'collapsed'}`}>
        {/* Drawer Header */}
        <div className="drawer-header d-flex align-items-center p-3 border-bottom">
          <Button variant="outline-dark" className="me-2" style={{ border: 'none' }} onClick={toggleExpand}>
            <FaBars />
          </Button>
          <Navbar.Brand className="text-start flex-grow-1">
            {expanded && <span className="fw-bold" style={{ fontFamily: 'Phudu', fontSize: "22px" }}>MAD PRINTS</span>}
          </Navbar.Brand>
        </div>

        {/* Drawer Menu */}
        <ListGroup variant="flush" style={{ border: 'none' }}>
          <ListGroup.Item
            action
            className="d-flex align-items-center"
            style={{
              border: 'none',
              borderLeft: selectedIndex === 0 ? '4px solid black' : 'none', // Apply border on selected item
            }}
            onClick={() => handleItemSelect(0)} // Set selected item when clicked
          >
            <span className="me-2">
              <BiHome size="32px" />
            </span>
            {expanded && <span>Home</span>}
          </ListGroup.Item>

          <ListGroup.Item
            action
            className="d-flex align-items-center"
            style={{
              border: 'none',
              borderLeft: selectedIndex === 1 ? '4px solid black' : 'none', // Apply border on selected item
            }}
            onClick={() => handleItemSelect(1)} // Set selected item when clicked
          >
            <span className="me-2">
              <BiPurchaseTag size="32px" />
            </span>
            {expanded && <span>Product Catalog</span>}
          </ListGroup.Item>

          <ListGroup.Item
            action
            className="d-flex align-items-center"
            style={{
              border: 'none',
              borderLeft: selectedIndex === 2 ? '4px solid black' : 'none', // Apply border on selected item
            }}
            onClick={() => handleItemSelect(2)} // Set selected item when clicked
          >
            <span className="me-2">
              <BiShoppingBag size="32px" />
            </span>
            {expanded && <span>Orders</span>}
          </ListGroup.Item>

          <ListGroup.Item
            action
            className="d-flex align-items-center"
            style={{
              border: 'none',
              borderLeft: selectedIndex === 3 ? '4px solid black' : 'none', // Apply border on selected item
            }}
            onClick={() => handleItemSelect(3)} // Set selected item when clicked
          >
            <span className="me-2">
              <BiStoreAlt size="32px" />
            </span>
            {expanded && <span>Stores</span>}
          </ListGroup.Item>

          <ListGroup.Item
            action
            className="d-flex align-items-center"
            style={{
              border: 'none',
              borderLeft: selectedIndex === 4 ? '4px solid black' : 'none', // Apply border on selected item
            }}
            onClick={() => handleItemSelect(4)} // Set selected item when clicked
          >
            <span className="me-2">
              <TbUserScan size="32px" />
            </span>
            {expanded && <span>Personalization Studio</span>}
          </ListGroup.Item>

          <ListGroup.Item
            action
            className="d-flex align-items-center"
            style={{
              border: 'none',
              borderLeft: selectedIndex === 5 ? '4px solid black' : 'none', // Apply border on selected item
            }}
            onClick={() => handleItemSelect(5)} // Set selected item when clicked
          >
            <span className="me-2">
              <BiLayout size="32px" />
            </span>
            {expanded && <span>Templates</span>}
          </ListGroup.Item>

          <ListGroup.Item
            action
            className="d-flex align-items-center"
            style={{
              border: 'none',
              borderLeft: selectedIndex === 6 ? '4px solid black' : 'none', // Apply border on selected item
            }}
            onClick={() => handleItemSelect(6)} // Set selected item when clicked
          >
            <span className="me-2">
              <FaAward size="32px" />
            </span>
            {expanded && <span>Branded packaging</span>}
          </ListGroup.Item>

          <ListGroup.Item
            action
            className="d-flex align-items-center"
            style={{
              border: 'none',
              borderLeft: selectedIndex === 7 ? '4px solid black' : 'none', // Apply border on selected item
            }}
            onClick={() => handleItemSelect(7)} // Set selected item when clicked
          >
            <span className="me-2">
              <HiMiniArrowTrendingUp size="32px" />
            </span>
            {expanded && <span>Analytics</span>}
          </ListGroup.Item>

          <ListGroup.Item
            action
            className="d-flex align-items-center"
            style={{
              border: 'none',
              borderLeft: selectedIndex === 8 ? '4px solid black' : 'none', // Apply border on selected item
            }}
            onClick={() => handleItemSelect(8)} // Set selected item when clicked
          >
            <span className="me-2">
              <BiNavigation size="32px" />
            </span>
            {expanded && <span>Price Navigator</span>}
          </ListGroup.Item>

          <ListGroup.Item
            action
            className="d-flex align-items-center pb-5"
            style={{
              border: 'none',
              borderLeft: selectedIndex === 9 ? '4px solid black' : 'none', // Apply border on selected item
            }}
            onClick={() => handleItemSelect(9)} // Set selected item when clicked
          >
            <span className="me-2">
              <PiSelectionAllLight size="32px" />
            </span>
            {expanded && <span>Mockup Studio</span>}
          </ListGroup.Item>
        </ListGroup>
      </div>

      {/* Main Content Area */}
      <div className="main-content flex-grow-1">
        {/* Top Navbar */}
        <Navbar bg="light" variant="light" className="px-3 bg-white">
          <Navbar.Brand>{!expanded ? <span className="fw-bold" style={{ fontFamily: 'Phudu', fontSize: "22px" }}>MAD PRINTS</span> : ""}</Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Button
              variant="outline-dark"
              className="d-flex align-items-center fw-bold me-4"
              style={{
                minHeight: '14px',
                padding: '8.8px 12.8px',
                borderRadius: '8px',
                border: '1px solid #0000004D',
                opacity: '1',
                height: "32px"
              }}
            >
              <IoMdAdd /> Create Product
            </Button>
            <Nav.Link href="#profile">
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%', // Makes it a circle
                  backgroundColor: '#000088', // Light background color
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  color: 'white',
                  border: '1px solid #ccc'
                }}
              >
                JK
              </div>
            </Nav.Link>
          </Nav>
        </Navbar>

        {/* Page Content */}
        <Container fluid className="pt-2 ps-5 pe-5 " style={{ backgroundColor: "#F5F6F8" }}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">

              <Form.Control type="text" className='ps-5' style={{ color: "#BFBFBFDE", fontSize: "14px" }} placeholder="Search for product" />
            </Form.Group>

          </Form>
          <p className='fs-4 fw-bold mb-1 mt-1' style={{ color: "#333333" }}>Choose product</p>
          <hr />
          <div>
            <Tab.Container activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
              <Nav style={{ color: "black" }} className="mb-3">
                <Nav.Item style={{ borderBottom: activeKey === "/home" ? "2px solid black" : "none" }}>
                  <Nav.Link style={{ color: "black", fontWeight: activeKey === "/home" ? "bold" : "normal" }} eventKey="/home">Product Catalog</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ borderBottom: activeKey === "/templates" ? "2px solid black" : "none" }}>
                  <Nav.Link style={{ color: "black", fontWeight: activeKey === "/templates" ? "bold" : "normal" }} eventKey="/templates">My Template</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="/home">
                  <h4>Product Catalog Content</h4>
                  <p>Here goes the content for the Product Catalog tab.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="/templates">
                  <h4>My Template Content</h4>
                  <p>Here goes the content for the My Template tab.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        
          <Container>
            <Row>
              <Col sm={4} md={4}>
                <ListGroup variant="flush" style={{ borderBottom: "1px solid #BFBFBFDE", color: "#333333" }}>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>New Lower Prices</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Men's clothing</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Women's clothing</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Kids & baby clothing</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Tote Bags</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Wall art</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Calendars</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Cards</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Photo books</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Hats</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Phone cases</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Mugs & Bottle</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Stationery & Business</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center fs-6"
                    style={{ width: "fit-content", height: "40px", minWidth: "226px", backgroundColor: "transparent", color: "#333333" }}
                  >
                    <span>Brands</span>
                  </ListGroup.Item>


                </ListGroup>

              </Col>
              <Col sm={8} md={8}>
               
                  <Form className='d-flex align-items-left '>
                    <Form.Group controlId="exampleForm.ControlInput1" className='mr-3' >

                      <Form.Control type="text" style={{ color: "#C8C8C8", fontSize: "14px" ,borderRadius:"10px"}} placeholder="Category" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1" className='mr-3'>

                      <Form.Control type="text" style={{ color: "#BFBFBFDE", fontSize: "14px",borderRadius:"10px" }} placeholder="Technol" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1" className='mr-3'>

                      <Form.Control type="text" style={{ color: "#BFBFBFDE", fontSize: "14px" ,borderRadius:"10px"}} placeholder="Brand" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1" className='mr-3'>

                      <Form.Control type="text" style={{ color: "#BFBFBFDE", fontSize: "14px",borderRadius:"10px" }} placeholder="Color" />
                    </Form.Group>
                    <Button variant="link" style={{textDecoration:"none"}}>Reset_filters</Button>
                  </Form>


            
                <Row>
                  Product
                </Row>

              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default DashboardLayout;
