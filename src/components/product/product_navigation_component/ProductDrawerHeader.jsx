import React, { useState } from 'react';
import { Navbar, Nav, Button, ListGroup, Container, Tab, Row, Col, Card } from 'react-bootstrap';
import { FaBars, FaUser, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { BiHome, BiPurchaseTag, BiShoppingBag, BiStoreAlt, BiNavigation, BiLayout } from "react-icons/bi";
import { TbUserScan } from "react-icons/tb";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { PiSelectionAllLight } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import book from '../assets/catalog/book.png'
import brands from '../assets/catalog/brands.png'
import calendars from '../assets/catalog/calendars.png'
import card from '../assets/catalog/card.png'
import hats from '../assets/catalog/hats.png'
import kids from '../assets/catalog/kids.png'
import mugs from '../assets/catalog/mugs.png'
import offer from '../assets/catalog/offer.png'
import phonecases from '../assets/catalog/phonecases.png'
import stationary from '../assets/catalog/stationary.png'
import totebags from '../assets/catalog/totebags.png'
import wallart from '../assets/catalog/wallart.png'
import womenscloth from '../assets/catalog/womenscloth.png'
import menscloth from '../assets/catalog/menscloth.png'
import { MdDone } from "react-icons/md";
import ProductDesignCreateProduct from '../create_product/ProductDesignCreateProduct';
import { FaArrowLeft } from "react-icons/fa6";
import Mockups from '../create_product/Mockups';
import ProductDetails from '../create_product/ProductDetails';
import ProductReview from '../create_product/ProductReview';
import ProductPrices from '../create_product/ProductPrices';
import PStudio from '../../personalizationStudio/PStudio';
import MyStores from '../../mystores/MyStores';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true); // Drawer expanded/collapsed state
  const [selectedIndex, setSelectedIndex] = useState(1); // To track selected item index

  const [activeKey, setActiveKey] = useState('/home'); // Track the active tab
  const toggleExpand = () => {
    setIsDrawerActive(true)
    setExpanded(!expanded);
  }

  const routes = ["/", "/product", "/product", "/product", "/product", "/product", "/product", "/product", "/product", "/product"]
  const handleItemSelect = (index) => {

    navigate(routes[index])
    setSelectedIndex(index); // Set selected item index
  };
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    console.log('Selected Region:', e.target.value);
  };

  const [isCreateProduct, seIsCreateProduct] = useState(false)
  const [isDrawerActive, setIsDrawerActive] = useState(true)
  const [createDesigns, setCreateDesign] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  // create product steps

  const [steps, setStep] = useState([
    { label: 'Product', isCompleted: true },
    { label: 'Design', isCompleted: false },
    { label: 'Mockups', isCompleted: false },
    { label: 'Details', isCompleted: false },
    { label: 'Prices', isCompleted: false },
    { label: 'Review', isCompleted: false },
  ]);

  const handlePublish = () => {
    navigate('/storeproducts')
  }

  const handleCreateProduct = () => {
    setSelectedIndex(1)
    seIsCreateProduct(true)
    setIsDrawerActive(false)
    setCreateDesign(true)
    navigate("/product")

  }

  const handleNaviagteDesign = () => {
    // Create a new steps array with updated values
    setStep(prevSteps => {
      const updatedSteps = [...prevSteps];
      updatedSteps[currentStep + 1].isCompleted = true; // Set 'Design' step as completed
      return updatedSteps;
    });

    setCreateDesign(true)
    setCurrentStep(currentStep + 1)
  }

  const HandleStepBack = () => {
    setCurrentStep((prev) => {
      if (prev < 0)
        return 0
      if (prev === 0) {
        setCreateDesign(false)
        return 0
      }
      setStep(prevSteps => {
        const updatedSteps = [...prevSteps];
        updatedSteps[prev].isCompleted = false; // Set 'Design' step as completed
        return updatedSteps;
      });
      setCreateDesign(true)
      return prev - 1
    })
    if (currentStep === 0) {
      setCreateDesign(false)
    }


  }

  // when we click on shirt and add stickers by file selecting handle navbar content 
  const [createDesignFile, setCreateDesignFile] = useState(false)
  const handleImageClickCreateDesignFile =()=>{
    setCreateDesignFile(prev=>!prev)
  }

  const handleAddToOrder=()=>{
    navigate("/addToOrder")
    
  }

  const [selectedCatalog, setSelectedCatalog] = useState([])
  const [catalogOpen, setCatalogOpen] = useState(false)
  const handleSelectCatalog = (index) => {
    setCatalogOpen((prev) => !prev);
    setSelectedCatalog(shoppinItems[index]);
  };
  const handleNavigate = () => {
    navigate('/view-product-details')

  }



  const catalogData = [
    { id: 1, img: offer, title: "New Lower Prices" },
    { id: 2, img: menscloth, title: "Men's clothing" },
    { id: 3, img: womenscloth, title: "Women's clothing" },
    { id: 4, img: kids, title: "Kids & baby clothing" },
    { id: 5, img: totebags, title: "Tote Bags" },
    { id: 6, img: wallart, title: "Wall art" },
    { id: 7, img: calendars, title: "Calendars" },
    { id: 8, img: card, title: "Cards" },
    { id: 9, img: book, title: "Photo books" },
    { id: 10, img: hats, title: "Hats" },
    { id: 11, img: phonecases, title: "Phone cases" },
    { id: 12, img: mugs, title: "Mugs & Bottle" },
    { id: 13, img: stationary, title: "Stationery & Business" },
    { id: 14, img: brands, title: "Brands" },
  ]

  const tShirts = [
    { id: 1, img: menscloth, title: "Men's clothing" },
    { id: 2, img: menscloth, title: "Men's clothing" },
    { id: 2, img: menscloth, title: "Men's clothing" },

  ]
  const shoppinItems = {
    1: [],
    2: tShirts,
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: []
  }
  return (
    <div className="d-flex">


      {/* Sidebar Drawer */}
      {isDrawerActive &&
        <div className={`drawer bg-light bg-white ${expanded ? isDrawerActive ? 'expanded' : "hide" : isDrawerActive ? 'collapsed' : "hide"}`}>

          {/* Drawer Header */}

          <div className="drawer-header d-flex align-items-center p-3 border-bottom">

            <Button variant="outline-dark" className="me-2" style={{ border: 'none' }} onClick={toggleExpand}>
              <FaBars />
            </Button>

            <Navbar.Brand onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }} className="text-start flex-grow-1">
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

      }

      {/* Main Content Area */}
      <div className="main-content flex-grow-1">
        {/* Top Navbar */}
        {createDesignFile ?
          <Navbar bg="light" variant="light" className="px-3  m-2  bg-white" style={{ height: "60px" }}>
            <Nav>
              <span> Back to Heavyweight Unisex Crewneck T-shirt | Gildan® 5000</span>
            </Nav>
            <Nav
              className="ms-auto gap-4 "
              
            >
              <div>
                <span>Price</span><br/>
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
          :
          <Navbar bg="light" variant="light" className="px-3 bg-white" style={{ height: "80px" }}>
            {currentStep === 0 ? <>
              {!isDrawerActive && <Button variant="outline-dark" className="me-2" style={{ border: 'none' }} onClick={toggleExpand}>
                <FaBars />
              </Button>
              }
              <Navbar.Brand onClick={() => navigate('/')} className='align-items-center'
                style={{ cursor: 'pointer' }}>

                {!expanded || !isDrawerActive ? <span className="fw-bold" style={{ fontFamily: 'Phudu', fontSize: "22px" }}>MAD PRINTS</span> : ""}
              </Navbar.Brand>
            </> : <button onClick={HandleStepBack} className='d-flex align-items-center gap-2 p-4'>
              <FaArrowLeft size={24} /> back
            </button>}

            {
              isCreateProduct ?
                <>

                  <Nav
                    className="ms-auto "
                    style={{
                      gap: '10px',

                    }}
                  >
                    {steps.map((step, index) => (
                      <div
                        key={index}
                        className="d-flex flex-column align-items-center  justify-content-center text-center pe-1"
                        style={{
                          borderTop: step.isCompleted ? '4px solid black' : '',

                        }}
                      >
                        <div
                          className="d-flex align-items-center justify-content-center mt-1"
                          style={{
                            width: '35px',
                            height: '35px',
                            borderRadius: '50%',
                            backgroundColor: step.isCompleted ? '#F4F6F8' : 'transparent',
                            border: step.isCompleted
                              ? '3px solid #000088'
                              : '3px solid #8E8E8E',
                          }}
                        >
                          <MdDone
                            size="20px"
                            color={step.isCompleted ? '#000088' : '#8E8E8E'}
                          />
                        </div>
                        <p
                          style={{
                            fontSize: '10px',
                            color: step.isCompleted ? '#000088' : '#8E8E8E',
                            paddingTop: '6px',
                            fontWeight: 'bold',
                          }}
                        >
                          {step.label}
                        </p>
                      </div>

                    ))}

                  </Nav>
                  <Nav
                    className="ms-auto "
                    style={{
                      gap: '10px',

                    }}
                  >

                    {currentStep === 1 && <Button
                      variant="primary"
                      className='fw-bold'
                      style={{
                        backgroundColor: "#000088", // Background color
                        color: "white", // Text color
                        borderColor: "#000088", // Border color (if needed)
                      }}
                      onClick={handleNaviagteDesign}
                    >
                      Continue to Mockups
                    </Button>}

                    {currentStep === 2 && <Button
                      variant="primary"
                      className='fw-bold'
                      style={{
                        backgroundColor: "#000088", // Background color
                        color: "white", // Text color
                        borderColor: "#000088", // Border color (if needed)
                      }}
                      onClick={handleNaviagteDesign}
                    >
                      Continue to Details
                    </Button>}
                    {currentStep === 3 && <Button
                      variant="primary"
                      className='fw-bold'
                      style={{
                        backgroundColor: "#000088", // Background color
                        color: "white", // Text color
                        borderColor: "#000088", // Border color (if needed)
                      }}
                      onClick={handleNaviagteDesign}
                    >
                      Continue to Prices
                    </Button>}
                    {currentStep === 4 && <Button
                      variant="primary"
                      className='fw-bold'
                      style={{
                        backgroundColor: "#000088", // Background color
                        color: "white", // Text color
                        borderColor: "#000088", // Border color (if needed)
                      }}
                      onClick={handleNaviagteDesign}
                    >
                      Continue to Review
                    </Button>}
                    {currentStep === 5 && <Button
                      variant="primary"
                      className='fw-bold'
                      style={{
                        backgroundColor: "#000088", // Background color
                        color: "white", // Text color
                        borderColor: "#000088", // Border color (if needed)
                      }}
                      onClick={handlePublish}
                    >
                      Publish
                    </Button>}

                  </Nav>
                </>
                :
                <Nav className="ms-auto align-items-center">
                  <Button
                    variant="outline-dark"
                    className="d-flex align-items-center fw-bold me-4"
                    onClick={handleCreateProduct}
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
            }


          </Navbar>
        }

        {currentStep === 1 && <div> <hr /> <ProductDesignCreateProduct createDesignFile={createDesignFile} handleImageClickCreateDesignFile={handleImageClickCreateDesignFile} /></div>}
        {currentStep === 2 && <div> <hr /> <Mockups /></div>}
        {currentStep === 3 && <div> <hr /> <ProductDetails /></div>}
        {currentStep === 4 && <div> <hr /> <ProductPrices /></div>}
        {currentStep === 5 && <div> <hr /> <ProductReview /></div>}

        {/* Page Content */}

        {selectedIndex === 1 && ((currentStep === 0) &&
          <Container fluid className="pt-2 ps-5 pe-5 " style={{ backgroundColor: "#F5F6F8" }}>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">

                <Form.Control type="text" className='ps-5' style={{ color: "#BFBFBFDE", fontSize: "14px" }} placeholder="Search for product" />
              </Form.Group>

            </Form>
            <p className='fs-4 fw-bold mb-1 mt-1' style={{ color: "#333333" }}>Choose product</p>
            <hr />


            <Container>
              <Tab.Container activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
                <Nav style={{ color: "black" }} className="mb-3">
                  <Nav.Item style={{ borderBottom: activeKey === "/home" ? "2px solid black" : "none" }}>
                    <Nav.Link style={{ color: "black", fontWeight: activeKey === "/home" ? "bold" : "normal" }} eventKey="/home">Product Catalog</Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ borderBottom: activeKey === "/templates" ? "2px solid black" : "none" }}>
                    <Nav.Link style={{ color: "black", fontWeight: activeKey === "/templates" ? "bold" : "normal" }} eventKey="/templates">My Template</Nav.Link>
                  </Nav.Item>
                </Nav>


                <Row>
                  <Col sm={3} md={3}>
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
                  <Col >


                    <Tab.Content>
                      <Tab.Pane eventKey="/home">
                        <Form className='d-flex '>
                          <Form.Group controlId="categoryInput1" className='mr-3' >

                            <Form.Control type="text" style={{ color: "#C8C8C8", fontSize: "14px", borderRadius: "10px" }} placeholder="Category" />
                          </Form.Group>
                          <Form.Group controlId="technolInput1" className='mr-3'>

                            <Form.Control type="text" style={{ color: "#BFBFBFDE", fontSize: "14px", borderRadius: "10px" }} placeholder="Technol" />
                          </Form.Group>
                          <Form.Group controlId="brandInput1" className='mr-3'>

                            <Form.Control type="text" style={{ color: "#BFBFBFDE", fontSize: "14px", borderRadius: "10px" }} placeholder="Brand" />
                          </Form.Group>
                          <Form.Group controlId="colorInput1" className='mr-3'>

                            <Form.Control type="text" style={{ color: "#BFBFBFDE", fontSize: "14px", borderRadius: "10px" }} placeholder="Color" />
                          </Form.Group>
                          <Button variant="link" style={{ textDecoration: "none" }}>Reset_filters</Button>
                        </Form>
                        <Form.Group controlId="regionSelect" className='d-flex pt-4' style={{ minWidth: 'fit-content', width: "175px", borderRadius: "20px" }}>
                          <Form.Label className='fs-6 pe-2 d-flex align-items-center'><div style={{ whiteSpace: "nowrap" }}>Shipping region</div></Form.Label>
                          <Form.Select
                            value={selectedRegion}
                            onChange={handleRegionChange}
                            className="mt-2 mb-2"
                            style={{ minWidth: 'fit-content', borderRadius: "10px" }}

                          >

                            <option selected value="asia">Asia</option>
                            <option value="north-america">North America</option>
                            <option value="europe">Europe</option>
                            <option value="australia">Australia</option>
                            <option value="africa">Africa</option>
                            <option value="south-america">South America</option>
                          </Form.Select>
                          {/* {selectedRegion && (
                          <p className="mt-2 text-success">You selected: {selectedRegion}</p>
                        )} */}
                        </Form.Group>

                        <Row>
                          {
                            catalogOpen ?
                              <div>
                                <Button onClick={() => handleSelectCatalog(0)} className='d-flex  align-items-center' variant="link" style={{ color: 'black', textDecoration: 'none' }}>
                                  <FaChevronLeft style={{ marginRight: '5px', textDecoration: "none" }} />
                                  Back
                                </Button>

                                <Row>
                                  {
                                    selectedCatalog.map((item, index) => {
                                      return <Col key={index} md={4} className='mb-4' >
                                        <Card onClick={handleNaviagteDesign} style={{ borderRadius: "0px", border: "none" }}>
                                          <Card.Img style={{ borderRadius: "0px" }} variant="top" src={item.img} />
                                          <Card.Body>
                                            <Card.Title className='fs-6'>{item.title}</Card.Title>
                                          </Card.Body>
                                        </Card>
                                      </Col>
                                    })
                                  }
                                </Row>
                              </div>
                              : catalogData.map((item, index) => {
                                return <Col key={index} md={4} className='mb-4' >
                                  <Card onClick={() => (createDesigns ? handleSelectCatalog(item.id) : handleNavigate())}
                                    style={{ borderRadius: "0px", border: "none" }}>
                                    <Card.Img style={{ borderRadius: "0px" }} variant="top" src={item.img} />
                                    <Card.Body>
                                      <Card.Title className='fs-6'>{item.title}</Card.Title>
                                    </Card.Body>
                                  </Card>
                                </Col>
                              })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="/templates">
                        <h4>My Template Content</h4>
                        <p>Here goes the content for the My Template tab.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Container>
          </Container>)
        }

        {selectedIndex === 2 && <div> 2nd component</div>}
        {selectedIndex === 3 && <MyStores />}

        {selectedIndex === 4 && <PStudio handleCreateProduct={handleCreateProduct} />}
        {selectedIndex === 5 && <div> 5nd component</div>}
        {selectedIndex === 6 && <div> 6nd component</div>}
        {selectedIndex === 7 && <div> 7nd component</div>}
        {selectedIndex === 8 && <div> 8 component</div>}
        {selectedIndex === 9 && <div> 9 component</div>}
        {selectedIndex === 10 && <div> 10 component</div>}

      </div>
    </div>
  );
};

export default DashboardLayout;
