import React, { useState, useRef, useEffect } from 'react'
import { Row, Col, Card, Button, Table } from 'react-bootstrap'
import { FiInfo } from "react-icons/fi";
import { PiCrownSimple } from "react-icons/pi";
import image1 from '../assets/view_product_details/whites1.jpeg'
import image2 from '../assets/view_product_details/whites2.jpeg'
import image3 from '../assets/view_product_details/whites3.jpeg'
import image4 from '../assets/view_product_details/whites4.jpeg'
import image5 from '../assets/view_product_details/whites5.jpeg'
import mapimg from '../assets/view_product_details/map1.png'
import sizeguide from '../assets/view_product_details/sizeguide.png'
import IN from '../assets/view_product_details/inFlag.png'
import { PiGlobeSimpleBold } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiCopy } from "react-icons/pi";
import { TfiLayersAlt } from "react-icons/tfi";
import { TbTriangleOff } from "react-icons/tb";
import { TbWashTemperature2 } from "react-icons/tb";
import { TbWashDry1 } from "react-icons/tb";

const colors = [
    '#FFFFFF', '#E7CEB5', '#E4C6D4', '#C8C9C7', '#CABFAD', '#A4C8E1', '#EEAD1A',
    '#7BA4DB', '#97999B', '#DD74A1', '#F4633A', '#DB3E79', '#5E7461',
    '#00A74A', '#224D8F', '#D50032', '#7D2935', '#8A1538', '#5B2B42',
    '#273B33', '#263147', '#351F65', '#25282A'
];
const ViewProductDetails = () => {

    const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

    const productImages = [
        image1,
        image2,
        image3,
        image4,
        image5
    ]
    const tabs = [{ title: 'Description', content: <DescriptionContent /> }, { title: 'Pricing', content: <RegionalPricingContent /> }, { title: 'Production', content: <ProductionContent /> }, { title: 'Stock Availability', content: <StockAvailabilityContent /> }, { title: 'Size Guide', content: <SizeGuideContent /> }, { title: 'File Specification', content: <FileSpecificationContent /> }, { title: 'FAQ', content: <div>FAQs</div> }]
    const sectionRefs = useRef([]);

    // Initialize refs for each tab
    useEffect(() => {
        sectionRefs.current = tabs.map((_, i) => sectionRefs.current[i] || React.createRef());
    }, [tabs]);

    const handleTabClick = (index) => {
        setSelectedTab(index);
        sectionRefs.current[index]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const [selectedImage, setSelectedImage] = useState(0)
    const [selectedColor, setSelectedColor] = useState(colors[0])
    const [selectedSize, setSelectedSize] = useState(sizes[0])
    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <div >
            <div className=' ps-5 pe-5 ' style={{ backgroundColor: "#F5F6F8" }}>
                <div className='ms-5  me-5 ps-5 pe-5 ' style={{ backgroundColor: "#F5F6F8" }}>
                    <Row>
                        <Col md={12} sm={12} >
                            <div className='d-flex gap-4 h-8 pt-1 pb-1' >
                                <p>Choose Product</p>
                                <p>Men's Clothing</p>
                                <p>T-shirts</p>
                                <b>Heavyweight Unisex Crewneck T-shirt | Gildan® 5000</b>
                            </div>
                        </Col>
                        <Col md={2} sm={2}>
                            <div className='m-3'>
                                {productImages.map((item, index) => {
                                    return (
                                        <Card
                                            onClick={() => setSelectedImage(index)}
                                            style={{ width: "100px", border: selectedImage === index ? "1px solid #212121" : "1px solid #0000001A", position: "relative", overflow: "hidden", borderRadius: "0px" }}
                                            className='m-2'
                                        >
                                            {/* Card Image */}
                                            <Card.Img
                                                variant="top"
                                                src={item}

                                            />
                                        </Card>
                                    )
                                })}

                            </div>
                        </Col>
                        <Col md={4} sm={4} className='pt-2 pb-4'>
                            <Button
                                variant="primary"
                                className=' fs-6'
                                style={{
                                    backgroundColor: "#5991FF", // Background color
                                    color: "#FFFFFF", // Text color
                                    borderColor: "#5991FF", // Border color (if needed),
                                    borderRadius: "6px"
                                }}
                            // onClick={handleNaviagteDesign}
                            >
                                Embroidery available
                            </Button>
                            <div className='d-flex align-items-center mb-4 mt-4' style={{
                                width: "100%",
                                height: "100%",
                                maxHeight: "450px",
                                maxWidth: "450px",
                            }}>
                                <img
                                    width="80%"
                                    height="80%"
                                    src={productImages[selectedImage]}

                                />
                            </div>


                        </Col>
                        <Col md={6} sm={6}>
                            <div className='pt-2'>
                                <b className='fs-4 pb-4'>Heavyweight Unisex Crewneck T-shirt | Gildan®
                                    5000</b>
                                <div className='d-flex gap-4'>
                                    <div className='pb-4' >
                                        <div className='d-flex pt-4 gap-2 align-items-center' style={{ color: "#383838" }}>Product price <FiInfo /></div>
                                        <div className='d-flex gap-1 align-items-end' ><p className='fw-bold fs-2'>₹ 959.79</p> <p style={{ color: "#383838" }}>excl. VAT</p></div>
                                        <div className='d-flex align-items-center gap-1 pb-1' style={{ color: "#542C65" }}><div style={{ backgroundColor: "#9C77AC", borderRadius: "6px" }}><PiCrownSimple size={22} color='#F4E8FA' /> </div> ₹883.01 with Gelato +</div>
                                        <div className='d-flex align-items-center gap-1 pb-0' style={{ color: "#542C65" }}><div style={{ backgroundColor: "#CBA543", borderRadius: "6px" }}><PiCrownSimple size={22} color='#FFF4D7' /> </div> ₹863.81 with Gelato Gold</div>
                                    </div>
                                    <div className='pb-4' >
                                        <div className='pt-4' style={{ color: "#383838" }}>Standard shipping <br /> <span className='fw-bold fs-2'>₹ 1,677.59</span></div>

                                    </div>
                                </div>
                                <div className='p-3 mb-4 d-flex flex-row pb-4 align-items-center h-12' style={{ border: "1px solid #3333331A ", borderRadius: "6px", color: "#383838" }}>
                                    <span className='d-flex flex-row gap-2 align-items-center text-center'><b>Deliver to</b> <img height="30px" width="30px" src={IN} /> India</span>
                                </div>

                                <div className='pb-4'>

                                    <div className='d-flex pt-3 pb-2 gap-2 align-items-center' style={{ color: "#333333" }}>Print Technology <FiInfo color='#6B6B6B' /></div>
                                    <Button
                                        variant="primary"
                                        className=' fs-6 me-2'
                                        style={{
                                            backgroundColor: "#525252", // Background color
                                            color: "#FFFFFF", // Text color
                                            borderColor: "#525252", // Border color (if needed),
                                            borderRadius: "6px"
                                        }}
                                    >
                                        Direct-to-garment (DTG)
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className=' fs-6 p-2'
                                        style={{
                                            backgroundColor: "#FFFFFF", // Background color
                                            color: "#333333", // Text color
                                            borderColor: "#0000001A", // Border color (if needed),
                                            borderRadius: "6px",
                                            height: "100%"
                                        }}
                                    >
                                        Embroidery <span style={{ fontSize: "12px", color: "white", backgroundColor: '#189A7B', borderRadius: "10px" }} className='p-1'>New</span>
                                    </Button>
                                </div>

                                {/* Colors */}
                                <div className="mb-2 mt-4 pb-4">
                                    <p className="fs-6 fw-semibold">Color:<b className='fw-semibold'> {selectedColor}</b></p>
                                    <div className="d-flex flex-wrap gap-2 mt-2 ">
                                        {colors.map((color, index) => (
                                            <div
                                                key={index}
                                                onClick={() => setSelectedColor(color)}
                                                style={{
                                                    backgroundColor: color,
                                                    width: '20px',
                                                    height: '20px',
                                                    border: selectedColor === color ? '1px solid black ' : '1px solid #ccc',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    borderRadius: "5px",
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    position: 'relative'
                                                }}
                                            >

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Sizes */}
                                <div className="mt-4 mb-4">
                                    <div className="d-flex">
                                        <h3 className="fs-6 fw-semibold">Size: <b className=''> {selectedSize}</b></h3>
                                        <h3 className="fs-6 fw-semibold ms-auto" style={{ color: "#367BF5" }}>Size guide</h3>
                                    </div>
                                    <div className="d-flex flex-wrap gap-2 mt-2">
                                        {sizes.map((size, index) => (
                                            <Button onClick={() => setSelectedSize(size)} key={index} style={{ color: selectedSize === size ? '#FFFFFF' : "#212121", backgroundColor: selectedSize === size ? '#525252' : '#FFFFFF', borderColor: "#BDBDBD" }} variant="outline-secondary" className="px-3 py-2">
                                                {size}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <div className='d-flex gap-2 mb-4'>
                                    <Button
                                        variant="primary"
                                        className='fw-bold flex-grow-1'
                                        style={{
                                            backgroundColor: "#000088",
                                            color: "white",
                                            borderColor: "#000080",
                                        }}
                                    >
                                        Start designing
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className='fs-6 flex-grow-1'
                                        style={{
                                            backgroundColor: "#525252",
                                            color: "#FFFFFF",
                                            borderColor: "#0000004D",
                                            borderRadius: "6px"
                                        }}
                                    >
                                        Add to store
                                    </Button>
                                </div>
                                <div className='mb-4'>
                                    <div className='d-flex gap-2 pb-1  align-items-center'><PiGlobeSimpleBold size={20} color='#333333' /> Fulfilled in <b>14</b> countries</div>
                                    <div className='d-flex gap-2 pb-1 align-items-center'><MdOutlineLocalShipping size={20} color='#333333' />Standard shipping: estimated delivery in <b> 11-13 business days </b> <FiInfo color='#6B6B6B' /></div>
                                    <div className='d-flex gap-2 pb-1 align-items-center'><LiaShippingFastSolid size={20} color='#333333' />Express shipping: estimated delivery in <b> 10 business days </b> <FiInfo color='#6B6B6B' /></div>
                                </div>

                            </div>
                        </Col>
                    </Row>



                </div>
            </div>
            <div className='ps-5 pe-5 me-5 ms-5'>
                {/* Tabs */}
                <div
                    className='p-2 text-center pt-4'
                    style={{
                        height: "70px",
                        color: "#212121",
                        border: "1px solid #0000000F",
                        borderRadius: "6px",
                        backgroundColor: "white",
                        boxShadow: `
            0 2px 8px 0 rgba(0, 0, 0, 0.04),
            0 2px 2px 0 rgba(0, 0, 0, 0.06)
          `,
                        alignItems: "center"
                    }}
                >
                    <Row>
                        {tabs.map((tab, index) => (
                            <Col
                                key={index}
                                onClick={() => handleTabClick(index)}
                                style={{
                                    fontWeight: selectedTab === index ? "bold" : "normal",
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    cursor: "pointer"
                                }}
                            >
                                <div
                                    style={{
                                        borderBottom: selectedTab === index ? "2px solid #212121" : "none"
                                    }}
                                >
                                    {tab.title}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Sections */}
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        ref={sectionRefs.current[index]}
                        className='mt-2'

                    >
                        {tab.content}


                    </div>
                ))}
            </div>
        </div >
    )
}

const DescriptionContent = () => {
    return <div className='mb-4'>
        <div
            className='p-3'
            style={{
                color: "#333333",
                border: "1px solid #0000000F",
                borderRadius: "6px",
                backgroundColor: "white",
                boxShadow: `
0 2px 8px 0 rgba(0, 0, 0, 0.04),
0 2px 2px 0 rgba(0, 0, 0, 0.06)
`
            }}>
            <p className='fw-bold  fs-5 ' >Description</p>
            <p className='fs-6'>This heavyweight cotton t-shirt is a durable staple product with a classic fit. One of the most popular items, it has a relaxed style made for
                everyday and casual wear</p>

            <div className='ms-4'>
                <span className='fs-6'>Seamless double-needle collar</span><br />
                <span className='fs-6'>Double-needle sleeve and bottom hems</span><br />
                <span className='fs-6'>100% cotton</span><br />
                <span className='fs-6'>Taped neck and shoulders for durability</span><br />
            </div>
            <hr />
            <span className='fw-bold fs-6 d-flex gap-2 align-items-center'> Product UID <PiCopy size={20} /></span>
            <p>apparel_product_gca_t-shirt_gsc_crewneck_gcu_unisex_gqa_heavy-weight_gsi_s_gco_white_gpr_4-0_gildan_5000</p>
        </div>

        <Row className="align-items-stretch"> {/* Ensures all children stretch to match height */}
            {/* Column 1 */}
            <Col md={6} sm={6}>
                <div
                    className='mt-3 p-3 h-100' // Added h-100 for full height
                    style={{
                        color: "#333333",
                        border: "1px solid #0000000F",
                        borderRadius: "6px",
                        backgroundColor: "white",
                        boxShadow: `
0 2px 8px 0 rgba(0, 0, 0, 0.04),
0 2px 2px 0 rgba(0, 0, 0, 0.06)
`
                    }}
                >
                    <p className='fw-bold fs-5'>Brands</p>
                    <p className='fs-6'>Gildan 5000</p>
                </div>
            </Col>

            {/* Column 2 */}
            <Col md={6} sm={6}>
                <div
                    className='mt-3 p-3 h-100' // Added h-100 for full height
                    style={{
                        color: "#333333",
                        border: "1px solid #0000000F",
                        borderRadius: "6px",
                        backgroundColor: "white",
                        boxShadow: `
0 2px 8px 0 rgba(0, 0, 0, 0.04),
0 2px 2px 0 rgba(0, 0, 0, 0.06)
`
                    }}
                >
                    <p className='fw-bold fs-5'>Special Features</p>
                    <p className='fs-6'>
                        A reliable choice for digital printing and embroidery crafted from heavyweight cotton.
                    </p>
                </div>
            </Col>
        </Row>

        <br />

        <Row className="align-items-stretch"> {/* Ensures all children stretch to match height */}
            {/* Column 1 */}
            <Col md={6} sm={6}>
                <div
                    className='mt-3 p-3 h-100' // Added h-100 for full height
                    style={{
                        color: "#333333",
                        border: "1px solid #0000000F",
                        borderRadius: "6px",
                        backgroundColor: "white",
                        boxShadow: `
0 2px 8px 0 rgba(0, 0, 0, 0.04),
0 2px 2px 0 rgba(0, 0, 0, 0.06)
`
                    }}
                >
                    <p className='fw-bold fs-5'>Style and Fit</p>
                    <p className='fs-6'>
                        Offers a modern, unisex fit that is neither too tight nor too loose, ideal for a
                        variety of body types for a structured look.
                    </p>
                </div>
            </Col>

            {/* Column 2 */}
            <Col md={6} sm={6}>
                <div
                    className='mt-3 p-3 h-100' // Added h-100 for full height
                    style={{
                        color: "#333333",
                        border: "1px solid #0000000F",
                        borderRadius: "6px",
                        backgroundColor: "white",
                        boxShadow: `
0 2px 8px 0 rgba(0, 0, 0, 0.04),
0 2px 2px 0 rgba(0, 0, 0, 0.06)
`
                    }}
                >
                    <p className='fw-bold fs-5'>Care Instructions</p>
                    <div>
                        <div className='d-flex gap-1'><TfiLayersAlt /> <span style={{ fontSize: "12px" }}>General</span></div>
                        <div className='ms-3 fs-6'>
                            The tee combines comfort, style, and durability, making it a top choice for both everyday wear and craft projects.
                        </div>
                    </div>
                    <br />
                    <div>
                        <span className='d-flex gap-1'><TbTriangleOff /> <span style={{ fontSize: "12px" }}>Wash</span></span>
                        <div className='ms-3 fs-6'>
                            Maintain the tee's look and feel by washing it in cold water with similar colors.
                        </div>
                    </div>
                    <br />
                    <div>
                        <span className='d-flex gap-1'><TbWashTemperature2 /> <span style={{ fontSize: "12px" }}>Dry</span></span>
                        <div className='ms-3 fs-6'>
                            Tumble dry low or hang dry to preserve the fabric integrity and print quality.
                        </div>
                    </div>
                    <br />
                    <div>
                        <span className='d-flex gap-1'><TbWashDry1 /> <span style={{ fontSize: "12px" }}>Store</span></span>
                        <div className='ms-3 fs-6'>
                            Ideal for retail and online stores looking for a high-quality, customizable tee that supports ethical manufacturing practices.
                        </div>
                    </div>
                </div>
            </Col>
        </Row>

    </div>
}

const RegionalPricingContent = () => {
    const shippingData = [
        { region: "USA", product: 716.16, firstproduct: 394.11, additionalProduct: 155.61 },
        { region: "Europe", product: 576.27, firstproduct: 376.08, additionalProduct: 95.28 },
        { region: "Sweden", product: 599.91, firstproduct: 336.49, additionalProduct: 117.98 },
        { region: "Norway", product: 587.22, firstproduct: 509.59, additionalProduct: 88.75 },
        { region: "Denmark", product: 635.23, firstproduct: 374.82, additionalProduct: 106.12 },
        { region: "UK/Ireland", product: 745.65, firstproduct: 374.05, additionalProduct: 106.09 },
        { region: "Germany", product: 573.48, firstproduct: 376.08, additionalProduct: 117.98 },
        { region: "Canada", product: 908.50, firstproduct: 502.19, additionalProduct: 140.66 },
        { region: "EFTA States", product: 957.95, firstproduct: 846.17, additionalProduct: 96.84 },
        { region: "Australia", product: 94.02, firstproduct: 975.26, additionalProduct: 523.86 },
        { region: "New Zealand", product: 974.05, firstproduct: 523.22, additionalProduct: 96.80 },
        { region: "Brazil", product: 1019.16, firstproduct: 332.98, additionalProduct: 184.99 },
        { region: "Singapore", product: 921.45, firstproduct: 964.55, additionalProduct: 230.91 },
        { region: "Japan", product: 760.37, firstproduct: 941.55, additionalProduct: 225.21 }
    ];


    return (
        <div>
            <div
                className='p-3'
                style={{
                    color: "#333333",
                    border: "1px solid #0000000F",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    boxShadow: `
                    0 2px 8px 0 rgba(0, 0, 0, 0.04),
                    0 2px 2px 0 rgba(0, 0, 0, 0.06)
                    `
                }}>
                <p className='fw-bold  fs-5 ' >Regional Pricing</p>
                <div className='d-flex'>
                    <div className='fw-bold  fs-6 ' style={{ borderBottom: "2px solid black" }}>Standard</div>
                    <h3 className="fs-6 fw-semibold ms-auto" style={{ color: "#367BF5" }}>Full price list</h3>
                </div>
                <hr />
                <Table responsive>
                    <thead>
                        <tr>
                            <th className="col w-25">Region</th>
                            <th className="col w-25">Product Shipping</th>
                            <th className="col w-25">Shipping First Product</th>
                            <th className="col  w-25 text-end">Shipping Additional Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shippingData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.region}</td>
                                <td>{data.product} INR</td>
                                <td>{data.firstproduct} INR</td>
                                <td className='text-end'>{data.additionalProduct} INR</td>
                            </tr>
                        ))}
                        <tr className="fs-6 fw-semibold" style={{ color: "#367BF5" }}>
                            <br />
                            View full price list and countries
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
const ProductionContent = () => {
    return (
        <div>
            <div
                className='p-3'
                style={{
                    color: "#333333",
                    border: "1px solid #0000000F",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    boxShadow: `
                    0 2px 8px 0 rgba(0, 0, 0, 0.04),
                    0 2px 2px 0 rgba(0, 0, 0, 0.06)
                    `
                }}>
                <p className='fw-bold  fs-5 ' >Production</p>
                <Row>
                    <Col md={6} sm={6}>
                        <p className='fw-bold  ' >Produced in 14 countries</p>
                        <p>Enjoy quality products produced in Austria, Australia, Canada, Czech
                            Republic, France, Italy, Netherlands, Poland, Portugal, Sweden,
                            Germany, New Zealand, the United Kingdom, and the United States.</p>
                        <p className='fw-bold  ' >Smart Order Processing</p>
                        <p>Our advanced routing system picks the best and nearest production
                            center for your order, ensuring fast, reliable and quality service.</p>
                        <p className='fw-bold  ' >Global Network with Local Production</p>
                        <p>We produce your order at the nearest center, but if needed, we'll use
                            our global network to make sure you get your product quickly, even if
                            stock is low.</p>

                        <h3 className="fs-6 fw-semibold ms-auto" style={{ color: "#367BF5", cursor: "pointer" }}>Learn more about our production process</h3>

                    </Col>
                    <Col md={6} sm={6} className='align-items-center'>
                        <img alt="world map" width="100%" src={mapimg} />

                    </Col>
                </Row>

            </div>
        </div>
    )
}
const StockAvailabilityContent = () => {
    return (
        <div>
            <div
                className='p-3'
                style={{
                    color: "#333333",
                    border: "1px solid #0000000F",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    boxShadow: `
                    0 2px 8px 0 rgba(0, 0, 0, 0.04),
                    0 2px 2px 0 rgba(0, 0, 0, 0.06)
                    `
                }}>
                <div className='d-flex'>
                    <p className='fw-bold  fs-5 ' >
                        Stock Availability
                    </p>
                    <h3 className="fs-6 fw-semibold ms-auto" style={{ color: "#367BF5", cursor: "pointer" }}>Show more</h3>
                </div>
                <div className='d-flex gap-3 ms-auto' style={{ fontSize: "12px" }}>
                    <div className='d-flex gap-2 ms-auto'>

                        <div className='border rounded-circle' style={{ height: "16px", width: "16px", backgroundColor: "#00A7A33D" }}></div>
                        In stock
                    </div>
                    <div className='d-flex gap-2'>
                        <div className='border rounded-circle' style={{ height: "16px", width: "16px", backgroundColor: "#E187003D" }}></div>
                        Out of stock
                    </div>
                    <div className='d-flex gap-2'>
                        <div className='border rounded-circle' style={{ height: "16px", width: "16px", backgroundColor: "#33333333" }}></div>
                        Unavailable
                    </div>
                </div>

                <hr />
                <Table responsive>
                    <tbody>
                        <tr>
                            <td className='w-25' style={{ borderRight: "1px solid #E7E9EB" }}></td>
                            <td className='text-center '>North America</td>
                        </tr>
                        <tr>
                            <td className='w-25' style={{ borderRight: "1px solid #E7E9EB" }}></td>
                            <td className='text-center '>
                                <div className="d-flex flex-wrap gap-2 mt-2 ">
                                    {colors.map((color, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundColor: color,
                                                width: '20px',
                                                height: '20px',
                                                border: '1px solid #ccc',
                                                display: 'flex',
                                                alignItems: 'center',
                                                borderRadius: "5px",
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                position: 'relative'
                                            }}
                                        >

                                        </div>
                                    ))}
                                </div></td>
                        </tr>
                        <tr>
                            <td className='w-25' style={{ borderRight: "1px solid #E7E9EB" }}>S - Direct-to-garment (DTG)</td>
                            <td className='text-center '>
                                <div className="d-flex flex-wrap gap-2 mt-2 ">
                                    {colors.map((color, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundColor: "#00A7A33D",
                                                width: '20px',
                                                height: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                borderRadius: "50%",
                                                justifyContent: 'center',
                                                position: 'relative'
                                            }}
                                        >

                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>


            </div>
        </div>
    )
}
const SizeGuideContent = () => {
    const sizeChart = [
        { size: "S", length: "71.1 cm", halfChest: "45.7 cm" },
        { size: "M", length: "73.7 cm", halfChest: "50.8 cm" },
        { size: "L", length: "76.2 cm", halfChest: "55.9 cm" },
        { size: "XL", length: "78.7 cm", halfChest: "61 cm" },
        { size: "2XL", length: "81.3 cm", halfChest: "66 cm" },
        { size: "3XL", length: "83.8 cm", halfChest: "71.1 cm" },
        { size: "4XL", length: "86 cm", halfChest: "76 cm" },
        { size: "5XL", length: "89 cm", halfChest: "81 cm" },
    ];
    return (<div>
        <div
            className='pt-3 pb-0'
            style={{
                color: "#333333",
                border: "1px solid #0000000F",
                borderRadius: "6px",
                backgroundColor: "white",
                boxShadow: `
                0 2px 8px 0 rgba(0, 0, 0, 0.04),
                0 2px 2px 0 rgba(0, 0, 0, 0.06)
                `
            }}>
            <p className='fw-bold  fs-5 ps-3 pe-3 ' >Size guide</p>
            <Row className='ps-3 pe-3'>
                <Col md={4} sm={4}>
                    <img src={sizeguide} alt='size guide image' />
                </Col>
                <Col md={8} sm={8}>
                    <p className='fw-bold  ' > A) Length</p>
                    <p>Place the end of the tape beside the collar at the top of the shirt (Highest Point Shoulder). Pull
                        the tape measure to the bottom of the shirt.</p>
                    <p className='fw-bold  ' > B) Half Chest</p>
                    <p>Lay the garment down on a flat surface and measure it from left to right across the chest,
                        about 2cm below the arms.</p>
                    <p  >Measurements are provided by suppliers and garments may run smaller or larger with a
                        difference of +/- 2.5cm (1 in)</p>
                </Col>
            </Row>
            <div className='d-flex gap-2 ps-2 pt-2'>
                <div className='fw-bold  fs-6 ' style={{ borderBottom: "2px solid black" }}>Metric (cm)</div>
                <div className='  fs-6 ' >Imperial (inches)</div>

            </div>
            <Table className='' bordered hover responsive>
                <thead>
                    <tr>
                        <th></th>
                        {sizeChart.map((size, index) => (
                            <th key={index} style={{ border: "none" }} className="text-center">{size.size}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-start fw-bold">A) Length</td>
                        {sizeChart.map((size, index) => (
                            <td key={index} className="text-center" style={{ border: "none" }}>{size.length}</td>
                        ))}
                    </tr>
                    <tr>
                        <td className="text-start fw-bold">B) Half Chest</td>
                        {sizeChart.map((size, index) => (
                            <td key={index} className="text-center" style={{ border: "none" }}>{size.halfChest}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
    )
}
const FileSpecificationContent = () => {
    const printFileData = [
        { placement: "Front", size: "All Sizes", printFileSize: "30.5 x 40.6 cm", downloadLink: "#front-link" },
        { placement: "Back", size: "All Sizes", printFileSize: "30.5 x 40.6 cm", downloadLink: "#back-link" },
        { placement: "Inner neck", size: "All Sizes", printFileSize: "7 x 4.9 cm", downloadLink: "#inner-neck-link" },
        { placement: "Outer neck", size: "All Sizes", printFileSize: "8 x 8 cm", downloadLink: "#outer-neck-link" },
        { placement: "Left sleeve", size: "All Sizes", printFileSize: "5.08 x 7.62 cm", downloadLink: "#left-sleeve-link" },
        { placement: "Right sleeve", size: "All Sizes", printFileSize: "5.08 x 7.62 cm", downloadLink: "#right-sleeve-link" }
    ];
    return (<div>
        <div
            className='pt-3'
            style={{
                color: "#333333",
                border: "1px solid #0000000F",
                borderRadius: "6px",
                backgroundColor: "white",
                boxShadow: `
                    0 2px 8px 0 rgba(0, 0, 0, 0.04),
                    0 2px 2px 0 rgba(0, 0, 0, 0.06)
                    `
            }}>
            <p className='fw-bold  fs-5 ps-3' >File specifications</p>
            <div className='d-flex gap-2 ps-3 pt-2'>
                <div className='fw-bold  fs-6 ' style={{ borderBottom: "2px solid black" }}>Metric (cm)</div>
                <div className='  fs-6 ' >Imperial (inches)</div>
            </div>
            <Table hover responsive>
                <thead>
                    <tr>
                        <th>Placement</th>
                        <th>Sizes</th>
                        <th>Print File Size</th>
                        <th>Download Link</th>
                    </tr>
                </thead>
                <tbody>
                    {printFileData.map((data, index) => (
                        <tr key={index}>
                            <td className='fw-bold'>{data.placement}</td>
                            <td>{data.size}</td>
                            <td>{data.printFileSize}</td>
                            <td className="fs-6 fw-semibold" style={{ color: "#367BF5" }}>
                                <a href={data.downloadLink} style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                                    Download
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    </div>
    )
}

export default ViewProductDetails