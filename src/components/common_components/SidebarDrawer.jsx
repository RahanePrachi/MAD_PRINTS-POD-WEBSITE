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

const SidebarDrawer = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(true); // Drawer expanded/collapsed state
    const [selectedIndex, setSelectedIndex] = useState(null); // To track selected item index
  
    const [activeKey, setActiveKey] = useState('/home'); // Track the active tab
  
    const toggleExpand = () => setExpanded(!expanded);
    const routes=["/","/product","/","/mystores","/PStudio","/","/","/","/","/"]
    const handleItemSelect = (index) => {
      if(index==0 || index ==1 || index==3 || index==4)
        navigate(routes[index])
      setSelectedIndex(index); // Set selected item index
    };
  return (
    <div>
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
    </div>
  )
}

export default SidebarDrawer
