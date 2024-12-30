import React, { useState } from "react";
import SidebarDrawer from "../common_components/SidebarDrawer";
import shopifyLogo from "../mystores/assets/logos/shopifyLogo.png";
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
import image1 from "./assets/productImg/image1.png";
import image2 from "./assets/productImg/image2.png";
import image3 from "./assets/productImg/image3.png";
import image4 from "./assets/productImg/image4.png";
import image5 from "./assets/productImg/image5.png";
import image6 from "./assets/productImg/image6.png";
import image7 from "./assets/productImg/image7.png";
import image8 from "./assets/productImg/image8.png";
import image9 from "./assets/productImg/image9.png";
import image10 from "./assets/productImg/image10.png";
import image11 from "./assets/productImg/image11.png";
import image12 from "./assets/productImg/image12.png";
import image13 from "./assets/productImg/image13.png";
import image14 from "./assets/productImg/image14.png";
import image15 from "./assets/productImg/image15.png";
const AddProduct = ({handleSettingClick}) => {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tab1");
 
  const productData = [
    {
      id: 1,
      image: image1,
      name: "Heavyweight Unisex Crewneck T-shirt | Gildan® 5000 White",
      count1: 8,
      count2: 0,
      count3: 0,
    },
    {
      id: 2,
      image: image3,
      name: "Premium Unisex Pullover Hoodie | Gildan® 18500 White",
      count1: 8,
      count2: 0,
      count3: 0,
    },
    {
      id: 3,
      image: image3,
      name: "Men's Oversized Drop-Shoulder Crewneck T-Shirt | Shaka Wear SHGDD",
      count1: 5,
      count2: 0,
      count3: 0,
    },
    {
      id: 4,
      image: image4,
      name: "Men's Crewneck T-Shirt | Champion T525C",
      count1: 24,
      count2: 0,
      count3: 0,
    },
    {
      id: 5,
      image: image5,
      name: "Premium Unisex Pullover Hoodie | Laneseven LS13001",
      count1: 28,
      count2: 0,
      count3: 0,
    },
    {
      id: 6,
      image: image6,
      name: "Unisex Reclaimist Crewneck T-Shirt | Econscious EC1070",
      count1: 18,
      count2: 0,
      count3: 0,
    },
    {
      id: 7,
      image: image7,
      name: "Women's Cropped Heritage Crewneck T-Shirt | Champion T453W",
      count1: 18,
      count2: 0,
      count3: 0,
    },
    {
      id: 8,
      image: image8,
      name: "Premium Unisex Longsleeve T-shirt",
      count1: 18,
      count2: 0,
      count3: 0,
    },
    {
      id: 9,
      image: image9,
      name: "Unisex Ringer T-shirt",
      count1: 6,
      count2: 0,
      count3: 0,
    },
    {
      id: 10,
      image: image10,
      name: "Women's Athletic Crewneck T-Shirt | Under Armour 1383284",
      count1: 18,
      count2: 0,
      count3: 0,
    },
    {
      id: 11,
      image: image11,
      name: "Dilaga Bird Women's Micro Ribbed Scoop Tank | Bella + Canvas 1012BE",
      count1: 48,
      count2: 0,
      count3: 0,
    },
    {
      id: 12,
      image: image12,
      name: "Beach Please! Premium Tote Bag",
      count1: 2,
      count2: 0,
      count3: 0,
    },
    {
      id: 13,
      image: image13,
      name: "TRUST yourself MORE | Premium Flat Bill Cap | Yupoong 6007 White",
      count1: 1,
      count2: 0,
      count3: 0,
    },
    {
      id: 14,
      image: image14,
      name: "Just Keeping Moving Forward Recycled Polyester Unisex Pullover Hoodie| Champion S1051",
      count1: 18,
      count2: 0,
      count3: 0,
    },
    {
      id: 15,
      image: image15,
      name: "Heavyweight Unisex Crewneck T-shirt for Men & Women | Gildan® 5000",
      count1: 8,
      count2: 0,
      count3: 0,
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

 
  const storedirect = () => {
    navigate("/mystores");
  };
  return (
    <div className="flex">
     

      {/* Main Content Area */}
      <div className="main-content flex-grow-1">
     
        

        {/* Page Content */}

        <div className="bg-[#F5F6F8] px-4 py-4 flex gap-2 flex-col">
          <div className="flex gap-4">
            <button onClick={storedirect}>Stores</button>
            <div className="font-segoe font-bold ">My Store</div>
          </div>
          <div className="flex items-center justify-between flex-wrap md:flex-nowrap p-y-4">
            <div className="flex gap-2 items-center justify-center">
              <img src={shopifyLogo} alt="" className="w-9" />
              <div className="font-segeo font-semibold text-2xl text-center">
                My Store
              </div>
            </div>

            <div className="flex gap-4 items-center font-segoe">
              <button
                onClick={()=>handleSettingClick()}
                className="rounded-md text-center py-[11px] px-[21px]"
              >
                Settings
              </button>
              <button className="bg-[#000080] text-white font-bold rounded-md text-center py-[11px] px-[21px]">
                Add Product
              </button>
            </div>
          </div>

          <hr />
          <div>
            <input
              type="text"
              placeholder="Search for product"
              className="px-4 py-2  rounded-md border"
            />
          </div>

          <div className="p-4">
            {/* Tab Links */}
            <div className="flex  border-gray-300 mb-4">
              <button
                className={`px-4 py-2 ${
                  activeTab === "tab1"
                    ? "text-[#212121] border-b-2 border-[#212121] font-bold font-segoe"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick("tab1")}
              >
                All products (15)
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === "tab2"
                    ? "text-[#212121] border-b-2 border-[#212121] font-bold font-segoe"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick("tab2")}
              >
                Connected (15)
              </button>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === "tab1" && (
                <div className=" bg-gray-50">
                  {productData.map((product) => (
                    <div key={product.id} className="bg-white p-4 border-b">
                      <div className="flex items-center gap-4">
                        {/* Checkbox */}
                        <div className="w-1/12 flex justify-center">
                          <input type="checkbox" className="w-5 h-5" />
                        </div>

                        {/* Image and Product Name */}
                        <div className="w-8/12 flex items-center gap-4">
                          <img
                            src={product.image}
                            alt="Product"
                            className="w-24 h-24 rounded"
                          />
                          <div className="text-[#333333] font-semibold font-segoe">
                            {product.name}
                          </div>
                        </div>

                        {/* Counts and Button */}
                        <div className="flex-1 flex items-center gap-4 font-segoe">
                          <div className="flex flex-col items-center bg-green-100 text-[#00A7A3] rounded-full py-1 px-3">
                            <span className="">{product.count1}</span>
                          </div>
                          <div className="flex flex-col items-center bg-red-100 text-[#F04A47] rounded-full py-1 px-3 ">
                            <span className="">{product.count2}</span>
                          </div>
                          <div className="flex flex-col items-center bg-gray-100 rounded-full py-1 px-3 ">
                            <span className="">{product.count3}</span>
                          </div>
                          <button className="px-4 py-4 border rounded-md ">
                            {/* No text button */}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "tab2" && (
                <div className=" bg-gray-50">
                  {productData.map((product) => (
                    <div key={product.id} className="bg-white p-4 border-b">
                      <div className="flex items-center gap-4">
                        {/* Checkbox */}
                        <div className="w-1/12 flex justify-center">
                          <input type="checkbox" className="w-5 h-5" />
                        </div>

                        {/* Image and Product Name */}
                        <div className="w-8/12 flex items-center gap-4">
                          <img
                            src={product.image}
                            alt="Product"
                            className="w-24 h-24 rounded"
                          />
                          <div className="text-[#333333] font-semibold font-segoe">
                            {product.name}
                          </div>
                        </div>

                        {/* Counts and Button */}
                        <div className="flex-1 flex items-center gap-4 font-segoe">
                          <div className="flex flex-col items-center bg-green-100 text-[#00A7A3] rounded-full py-1 px-3">
                            <span className="">{product.count1}</span>
                          </div>
                          <div className="flex flex-col items-center bg-red-100 text-[#F04A47] rounded-full py-1 px-3 ">
                            <span className="">{product.count2}</span>
                          </div>
                          <div className="flex flex-col items-center bg-gray-100 rounded-full py-1 px-3 ">
                            <span className="">{product.count3}</span>
                          </div>
                          <button className="px-4 py-4 border rounded-md ">
                            {/* No text button */}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
