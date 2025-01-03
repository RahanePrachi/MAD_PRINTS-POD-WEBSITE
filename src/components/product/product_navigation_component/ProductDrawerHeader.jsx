import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Button,
  ListGroup,
  Container,
  Tab,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { FaBars, FaUser, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import axios from "axios";
import { FaChevronDown, FaChevronUp, FaEllipsisV } from "react-icons/fa";

import { IoMdAdd } from "react-icons/io";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import book from "../assets/catalog/book.png";
import brands from "../assets/catalog/brands.png";
import calendars from "../assets/catalog/calendars.png";
import card from "../assets/catalog/card.png";
import hats from "../assets/catalog/hats.png";
import kids from "../assets/catalog/kids.png";
import mugs from "../assets/catalog/mugs.png";
import offer from "../assets/catalog/offer.png";
import phonecases from "../assets/catalog/phonecases.png";
import stationary from "../assets/catalog/stationary.png";
import totebags from "../assets/catalog/totebags.png";
import wallart from "../assets/catalog/wallart.png";
import womenscloth from "../assets/catalog/womenscloth.png";
import menscloth from "../assets/catalog/menscloth.png";
import ProductDesignCreateProduct from "../create_product/ProductDesignCreateProduct";
import { FaArrowLeft } from "react-icons/fa6";
import Mockups from "../create_product/Mockups";
import ProductDetails from "../create_product/ProductDetails";
import ProductReview from "../create_product/ProductReview";
import ProductPrices from "../create_product/ProductPrices";
import PStudio from "../../personalizationStudio/PStudio";
import MyStores from "../../mystores/MyStores";
import OrderProducts from "../../addToOrder/OrderProducts";
import DrawerMenuItems from "./DrawerMenuItems";
import CreateProductNavbar from "./CreateProductNavbar";
const DashboardLayout = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true); // Drawer expanded/collapsed state
  const [selectedIndex, setSelectedIndex] = useState(1); // To track selected item index
  const [loading, setLoading] = useState(false);
  const [activeKey, setActiveKey] = useState("/home"); // Track the active tab
  const toggleExpand = () => {
    setIsDrawerActive(true);
    setExpanded(!expanded);
  };

  const routes = [
    "/",
    "/product",
    "/product",
    "/product",
    "/product",
    "/product",
    "/product",
    "/product",
    "/product",
    "/product",
  ];
  const handleItemSelect = (index) => {
    navigate(routes[index]);
    setSelectedIndex(index); // Set selected item index
  };

  const [isAddToOrder, setIsAddToOrder] = useState(false);

  const handleAddToOrder = () => {
    // navigate("/addToOrder")
    setIsAddToOrder(true);
    setIsDrawerActive(true);
    seIsCreateProduct(false);
    setCreateDesign(false);
  };

  const [isPublish, setIsPublish] = useState(false);
  const handlePublish = () => {
    setSelectedIndex(3);
    setIsPublish(true);
    seIsCreateProduct(false);
    setIsDrawerActive(true);
    setCreateDesign(false);
    setCurrentStep(0);
    setStep([
      { label: "Product", isCompleted: true },
      { label: "Design", isCompleted: false },
      { label: "Mockups", isCompleted: false },
      { label: "Details", isCompleted: false },
      { label: "Prices", isCompleted: false },
      { label: "Review", isCompleted: false },
    ]);
  };

  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    console.log("Selected Region:", e.target.value);
  };

  const [isCreateProduct, seIsCreateProduct] = useState(false);
  const [isDrawerActive, setIsDrawerActive] = useState(true);
  const [createDesigns, setCreateDesign] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  // create product steps

  const [steps, setStep] = useState([
    { label: "Product", isCompleted: true },
    { label: "Design", isCompleted: false },
    { label: "Mockups", isCompleted: false },
    { label: "Details", isCompleted: false },
    { label: "Prices", isCompleted: false },
    { label: "Review", isCompleted: false },
  ]);

  const handleCreateProduct = () => {
    setSelectedIndex(1);
    seIsCreateProduct(true);
    setIsDrawerActive(false);
    setCreateDesign(true);
    navigate("/product");
  };

  const handleNaviagteDesign = () => {
    // Create a new steps array with updated values
    setStep((prevSteps) => {
      const updatedSteps = [...prevSteps];
      updatedSteps[currentStep + 1].isCompleted = true; // Set 'Design' step as completed
      return updatedSteps;
    });

    setCreateDesign(true);
    setCurrentStep(currentStep + 1);
  };

  const HandleStepBack = () => {
    setCurrentStep((prev) => {
      if (prev < 0) return 0;
      if (prev === 0) {
        setCreateDesign(false);
        return 0;
      }
      setStep((prevSteps) => {
        const updatedSteps = [...prevSteps];
        updatedSteps[prev].isCompleted = false; // Set 'Design' step as completed
        return updatedSteps;
      });
      setCreateDesign(true);
      return prev - 1;
    });
    if (currentStep === 0) {
      setCreateDesign(false);
    }
  };

  // when we click on shirt and add stickers by file selecting handle navbar content
  const [createDesignFile, setCreateDesignFile] = useState(false);
  const handleImageClickCreateDesignFile = () => {
    setCreateDesignFile((prev) => !prev);
  };

  const [selectedCatalog, setSelectedCatalog] = useState([]);
  const [catalogOpen, setCatalogOpen] = useState(false);
  // const handleSelectCatalog = (index) => {
  //   setCatalogOpen((prev) => !prev);
  //   setSelectedCatalog(shoppinItems[index]);
  // };
  const handleNavigate = () => {
    navigate("/view-product-details");
  };

  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/category/showAllCategories"
      );
      console.log("Printing response of showAllCategories: ", response);
      setCategories(response.data.data); // Assuming the data is in `data.data`
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };
  useEffect(() => {


    fetchCategories();
  }, []);

  const handleSelectCatalog = async (id, index, isSubcategory = false) => {
    try {
      setLoading(true);
      // const url = isSubcategory
      //   ? `http://localhost:5000/api/v1/product/getproducts?subcategoryId=${id}`
      //   : `http://localhost:5000/api/v1/product/getproducts?categoryId=${id}`;

      const response = await axios.get(url);
      console.log("Products Response: ", response);
      // Check if response contains data and if data is not empty
      const products = categories[index]?.subcategories || []; // Default to an empty array if data is undefined
      if (products.length > 0) {
        setSelectedCatalog(products); // If products are found, set them
      } else {
        setSelectedCatalog([]); // If no products are found, set selectedCatalog to an empty array
      }
      setCatalogOpen(true);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setCatalogOpen(false);
    setSelectedCatalog([]);
  };

  // const catalogData = [
  //   { id: 1, img: offer, title: "New Lower Prices" },
  //   { id: 2, img: menscloth, title: "Men's clothing" },
  //   { id: 3, img: womenscloth, title: "Women's clothing" },
  //   { id: 4, img: kids, title: "Kids & baby clothing" },
  //   { id: 5, img: totebags, title: "Tote Bags" },
  //   { id: 6, img: wallart, title: "Wall art" },
  //   { id: 7, img: calendars, title: "Calendars" },
  //   { id: 8, img: card, title: "Cards" },
  //   { id: 9, img: book, title: "Photo books" },
  //   { id: 10, img: hats, title: "Hats" },
  //   { id: 11, img: phonecases, title: "Phone cases" },
  //   { id: 12, img: mugs, title: "Mugs & Bottle" },
  //   { id: 13, img: stationary, title: "Stationery & Business" },
  //   { id: 14, img: brands, title: "Brands" },
  // ];

  // const tShirts = [
  //   { id: 1, img: menscloth, title: "Men's clothing" },
  //   { id: 2, img: menscloth, title: "Men's clothing" },
  //   { id: 2, img: menscloth, title: "Men's clothing" },
  // ];
  // const shoppinItems = {
  //   1: [],
  //   2: tShirts,
  //   3: [],
  //   4: [],
  //   5: [],
  //   6: [],
  //   7: [],
  //   8: [],
  //   9: [],
  //   10: [],
  //   11: [],
  //   12: [],
  //   13: [],
  //   14: [],
  // };

  const [expandedItems, setExpandedItems] = useState({});

  // Toggle specific item by ID
  const toggleExpandSubMenu = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // // Sample Data
  // const listItems = [
  //   { id: 1, title: "New Lower Prices", type: "item" },
  //   {
  //     id: 2,
  //     title: "Men's clothing",
  //     type: "dropdown",
  //     subItems: ["T-Shirts", "Hoodies", "Sweatshitrs"],
  //   },
  //   {
  //     id: 3,
  //     title: "Women's clothing",
  //     type: "dropdown",
  //     subItems: ["Shirts", "Pants", "Accessories"],
  //   },
  //   { id: 4, title: "Kids & baby clothing", type: "item" },
  //   { id: 5, title: "Tote Bags", type: "item" },
  //   { id: 6, title: "Wall art", type: "dropdown", subItems: [] },
  //   { id: 7, title: "Calendars", type: "item" },
  //   { id: 8, title: "Cards", type: "item" },
  //   { id: 9, title: "Photo books", type: "dropdown", subItems: [] },
  //   { id: 10, title: "Hats", type: "item" },
  //   { id: 11, title: "Phone cases", type: "item" },
  //   { id: 12, title: "Mugs & Bottle", type: "item" },
  //   { id: 13, title: "Stationery & Business", type: "item" },
  //   { id: 14, title: "Brands", type: "item" },
  // ];

  return (
    <div className="d-flex">
      {/* Sidebar Drawer */}
      {isDrawerActive && (
        <div
          className={`drawer bg-light bg-white ${expanded
              ? isDrawerActive
                ? "expanded"
                : "hide"
              : isDrawerActive
                ? "collapsed"
                : "hide"
            }`}
        >
          {/* Drawer Header */}

          <div className="drawer-header d-flex align-items-center p-3 border-bottom">
            <Button
              variant="outline-dark"
              className="me-2"
              style={{ border: "none" }}
              onClick={toggleExpand}
            >
              <FaBars />
            </Button>

            <Navbar.Brand
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
              className="text-start flex-grow-1"
            >
              {expanded && (
                <span
                  className="fw-bold"
                  style={{ fontFamily: "Phudu", fontSize: "22px" }}
                >
                  MAD PRINTS
                </span>
              )}
            </Navbar.Brand>
          </div>

          {/* Drawer Menu */}
          <DrawerMenuItems
            selectedIndex={selectedIndex}
            handleItemSelect={handleItemSelect}
            expanded={expanded}
            setIsPublish={setIsPublish}
          />
        </div>
      )}

      {/* Main Content Area */}
      {isAddToOrder ? (
        <div className="main-content flex-grow-1">
          <OrderProducts />
        </div>
      ) : (
        <div className="main-content flex-grow-1">
          {/* Top Navbar */}
          {createDesignFile ? (
            <Navbar
              bg="light"
              variant="light"
              className="px-3  m-1  bg-white"
              style={{ height: "60px" }}
            >
              <Nav>
                <span>
                  {" "}
                  Back to Heavyweight Unisex Crewneck T-shirt | Gildan® 5000
                </span>
              </Nav>
              <Nav className="ms-auto gap-4 ">
                <div>
                  <span>Price</span>
                  <br />
                  <span className="fw-bold fs-5">959.79 INR</span>
                </div>
                <Button
                  variant="primary"
                  className="fw-bold"
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
          ) : (
            <Navbar
              bg="light"
              variant="light"
              className="px-3 bg-white"
              style={{ height: "80px" }}
            >
              {currentStep === 0 ? (
                <>
                  {!isDrawerActive && (
                    <Button
                      variant="outline-dark"
                      className="me-2"
                      style={{ border: "none" }}
                      onClick={toggleExpand}
                    >
                      <FaBars />
                    </Button>
                  )}
                  <Navbar.Brand
                    onClick={() => navigate("/")}
                    className="align-items-center"
                    style={{ cursor: "pointer" }}
                  >
                    {!expanded || !isDrawerActive ? (
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
                </>
              ) : (
                <button
                  onClick={HandleStepBack}
                  className="d-flex align-items-center gap-2 py-2 px-4"
                >
                  <FaArrowLeft size={24} /> Return
                </button>
              )}

              {isCreateProduct ? (
                <CreateProductNavbar
                  steps={steps}
                  currentStep={currentStep}
                  handleNaviagteDesign={handleNaviagteDesign}
                  handlePublish={handlePublish}
                />
              ) : (
                <Nav className="ms-auto align-items-center">
                  <Button
                    variant="outline-dark"
                    className="d-flex align-items-center fw-bold me-4"
                    onClick={handleCreateProduct}
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
              )}
            </Navbar>
          )}

          {currentStep === 1 && (
            <div className="border-t-2">
              {" "}
              <ProductDesignCreateProduct
                createDesignFile={createDesignFile}
                handleImageClickCreateDesignFile={
                  handleImageClickCreateDesignFile
                }
              />
            </div>
          )}
          {currentStep === 2 && (
            <div className="border-t-2">
              {" "}
              <Mockups />
            </div>
          )}
          {currentStep === 3 && (
            <div className="border-t-2">
              {" "}
              <ProductDetails />
            </div>
          )}
          {currentStep === 4 && (
            <div className="border-t-2">
              {" "}
              <ProductPrices />
            </div>
          )}
          {currentStep === 5 && (
            <div className="border-t-2">
              <ProductReview />
            </div>
          )}

          {/* Page Content */}

          {selectedIndex === 1 && currentStep === 0 && (
            <Container
              fluid
              className="pt-2 ps-5 pe-5 "
              style={{ backgroundColor: "#F5F6F8" }}
            >
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="text"
                    className="ps-5"
                    style={{ color: "#BFBFBFDE", fontSize: "14px" }}
                    placeholder="Search for product"
                  />
                </Form.Group>
              </Form>
              <p
                className="fs-4 fw-bold mb-1 mt-1"
                style={{ color: "#333333" }}
              >
                Choose product
              </p>

              <hr />

              <Container>
                <Tab.Container
                  activeKey={activeKey}
                  onSelect={(selectedKey) => setActiveKey(selectedKey)}
                >
                  <Nav style={{ color: "black" }} className="mb-3">
                    <Nav.Item
                      style={{
                        borderBottom:
                          activeKey === "/home" ? "2px solid black" : "none",
                      }}
                    >
                      <Nav.Link
                        style={{
                          color: "black",
                          fontWeight: activeKey === "/home" ? "bold" : "normal",
                        }}
                        eventKey="/home"
                      >
                        Product Catalog
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      style={{
                        borderBottom:
                          activeKey === "/templates"
                            ? "2px solid black"
                            : "none",
                      }}
                    >
                      <Nav.Link
                        style={{
                          color: "black",
                          fontWeight:
                            activeKey === "/templates" ? "bold" : "normal",
                        }}
                        eventKey="/templates"
                      >
                        My Template
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Row>
                    <Col sm={3} md={3}>
                      <ListGroup
                        variant="flush"
                        style={{
                          borderBottom: "1px solid #BFBFBFDE",
                          color: "#333333",
                        }}
                      >
                        {categories.map((category) => (
                          <React.Fragment key={category._id}>
                            {/* Regular List Items */}
                            {!category.subcategories?.length && (
                              <ListGroup.Item
                                action
                                className="fs-6"
                                style={{
                                  width: "fit-content",
                                  height: "40px",
                                  minWidth: "226px",
                                  backgroundColor: "transparent",
                                  color: "#333333",
                                }}
                                onClick={() =>
                                  handleSelectCatalog(category._id)
                                }
                              >
                                <span>{category.name}</span>
                              </ListGroup.Item>
                            )}

                            {/* Dropdown List Items */}
                            {category.subcategories?.length > 0 && (
                              <>
                                <ListGroup.Item
                                  action
                                  className="fs-6"
                                  style={{
                                    width: "fit-content",
                                    minWidth: "226px",
                                    backgroundColor: "transparent",
                                    color: "#333333",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    toggleExpandSubMenu(category._id)
                                  }
                                >
                                  {/* Trailing Section */}
                                  <div className="d-flex align-items-center">
                                    <span>{category.name}</span>
                                    {expandedItems[category._id] ? (
                                      <FaChevronUp className="ms-auto" />
                                    ) : (
                                      <FaChevronDown className="ms-auto" />
                                    )}
                                  </div>

                                  {/* Dropdown Sub-Items */}
                                  {expandedItems[category._id] && (
                                    <div
                                      style={{
                                        marginLeft: "20px",
                                        backgroundColor: "transparent",
                                        padding: "10px",
                                        width: "200px",
                                      }}
                                    >
                                      {category.subcategories.map((sub) => (
                                        <React.Fragment key={sub._id}>
                                          <a
                                            onClick={() =>
                                              handleSelectCatalog(sub._id, true)
                                            }
                                            style={{
                                              textDecoration: "none",
                                              cursor: "pointer",
                                            }}
                                          >
                                            {sub.subCategoryName}
                                          </a>
                                          <br />
                                        </React.Fragment>
                                      ))}
                                    </div>
                                  )}
                                </ListGroup.Item>
                              </>
                            )}
                          </React.Fragment>
                        ))}
                      </ListGroup>
                    </Col>
                    <Col>
                      <Tab.Content>
                        <Tab.Pane eventKey="/home">
                          <Form className="d-flex ">
                            <Form.Group
                              controlId="categoryInput1"
                              className="mr-3"
                            >
                              <Form.Control
                                type="text"
                                style={{
                                  color: "#C8C8C8",
                                  fontSize: "14px",
                                  borderRadius: "10px",
                                }}
                                placeholder="Category"
                              />
                            </Form.Group>
                            <Form.Group
                              controlId="technolInput1"
                              className="mr-3"
                            >
                              <Form.Control
                                type="text"
                                style={{
                                  color: "#BFBFBFDE",
                                  fontSize: "14px",
                                  borderRadius: "10px",
                                }}
                                placeholder="Technol"
                              />
                            </Form.Group>
                            <Form.Group
                              controlId="brandInput1"
                              className="mr-3"
                            >
                              <Form.Control
                                type="text"
                                style={{
                                  color: "#BFBFBFDE",
                                  fontSize: "14px",
                                  borderRadius: "10px",
                                }}
                                placeholder="Brand"
                              />
                            </Form.Group>
                            <Form.Group
                              controlId="colorInput1"
                              className="mr-3"
                            >
                              <Form.Control
                                type="text"
                                style={{
                                  color: "#BFBFBFDE",
                                  fontSize: "14px",
                                  borderRadius: "10px",
                                }}
                                placeholder="Color"
                              />
                            </Form.Group>
                            <Button
                              variant="link"
                              style={{ textDecoration: "none" }}
                            >
                              Reset_filters
                            </Button>
                          </Form>
                          <Form.Group
                            controlId="regionSelect"
                            className="d-flex pt-4"
                            style={{
                              minWidth: "fit-content",
                              width: "175px",
                              borderRadius: "20px",
                            }}
                          >
                            <Form.Label className="fs-6 pe-2 d-flex align-items-center">
                              <div style={{ whiteSpace: "nowrap" }}>
                                Shipping region
                              </div>
                            </Form.Label>
                            <Form.Select
                              value={selectedRegion}
                              onChange={handleRegionChange}
                              className="mt-2 mb-2"
                              style={{
                                minWidth: "fit-content",
                                borderRadius: "10px",
                              }}
                            >
                              <option selected value="asia">
                                Asia
                              </option>
                              <option value="north-america">
                                North America
                              </option>
                              <option value="europe">Europe</option>
                              <option value="australia">Australia</option>
                              <option value="africa">Africa</option>
                              <option value="south-america">
                                South America
                              </option>
                            </Form.Select>
                            {/* {selectedRegion && (
                          <p className="mt-2 text-success">You selected: {selectedRegion}</p>
                        )} */}
                          </Form.Group>

                          <Row>
                            {loading && <p>Loading...</p>}

                            {!loading && (
                              <>
                                {catalogOpen ? (
                                  <div>
                                    {/* Back Button */}
                                    <Button
                                      onClick={handleBack}
                                      className="d-flex align-items-center"
                                      variant="link"
                                      style={{
                                        color: "black",
                                        textDecoration: "none",
                                      }}
                                    >
                                      <FaChevronLeft
                                        style={{ marginRight: "5px" }}
                                      />
                                      Back
                                    </Button>

                                    {/* Display Products */}
                                    <Row>
                                      {selectedCatalog.length > 0 ? (
                                        selectedCatalog.map((item, index) => (
                                          <Col
                                            key={index}
                                            md={4}
                                            className="mb-4"
                                          >
                                            <Card
                                              style={{
                                                borderRadius: "0px",
                                                border: "none",
                                              }}
                                              onClick={handleNaviagteDesign}
                                            >
                                              <Card.Img
                                                style={{ borderRadius: "0px" }}
                                                variant="top"
                                                src={item.image}

                                              />
                                              <Card.Body>
                                                <Card.Title className="fs-6">
                                                  {item.subCategoryName}
                                                </Card.Title>
                                              </Card.Body>
                                            </Card>
                                          </Col>
                                        ))
                                      ) : (handleNavigate()
                                        // <p>

                                        //   No products available for this
                                        //   category or subcategory.
                                        // </p>
                                      )}
                                    </Row>
                                  </div>
                                ) : (
                                  // Display Categories
                                  categories.map((item, index) => (
                                    <Col key={index} md={4} className="mb-4">
                                      <Card
                                        onClick={() => (createDesigns ? handleSelectCatalog(item._id, index) : handleNavigate())}

                                        style={{
                                          borderRadius: "0px",
                                          border: "none",
                                        }}
                                      >
                                        <Card.Img
                                          style={{ borderRadius: "0px" }}
                                          variant="top"
                                          src={item.thumbnail}
                                        />
                                        <Card.Body>
                                          <Card.Title className="fs-6">
                                            {item.name}
                                          </Card.Title>
                                        </Card.Body>
                                      </Card>
                                    </Col>
                                  ))
                                )}
                              </>
                            )}
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
            </Container>
          )}

          {selectedIndex === 2 && <div> 2nd component</div>}
          {selectedIndex === 3 && <MyStores isPublish={isPublish} />}

          {selectedIndex === 4 && (
            <PStudio handleCreateProduct={handleCreateProduct} />
          )}
          {selectedIndex === 5 && <div> 5nd component</div>}
          {selectedIndex === 6 && <div> 6nd component</div>}
          {selectedIndex === 7 && <div> 7nd component</div>}
          {selectedIndex === 8 && <div> 8 component</div>}
          {selectedIndex === 9 && <div> 9 component</div>}
          {selectedIndex === 10 && <div> 10 component</div>}
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
