import React from 'react'
import { ListGroup,  } from 'react-bootstrap';
import { BiHome, BiPurchaseTag, BiShoppingBag, BiStoreAlt, BiNavigation, BiLayout } from "react-icons/bi";
import { TbUserScan } from "react-icons/tb";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { PiSelectionAllLight } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";
const DrawerMenuItems = ({ selectedIndex, handleItemSelect, expanded ,setIsPublish}) => {
    return (
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
                onClick={() => { handleItemSelect(3); setIsPublish(false) }} // Set selected item when clicked
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
    )
}

export default DrawerMenuItems