import React, { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import DesignComponent from "./ProductDesignCreateProduct";
import MockupsComponent from "./Mockups";
import DetailsComponent from "./ProductDetails";
import PricesComponent from "./ProductPrices";
import ReviewComponent from "./ProductReview";
import SidebarDrawer from "../../common_components/SidebarDrawer";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft,FaBars } from "react-icons/fa";
const ProductComponent = () => <div>Product Component</div>;
const AddProductProcessFlowBar = () => {
  const sections = [
    { name: "Product", component: <ProductComponent /> },
    { name: "Design", component: <DesignComponent /> },
    { name: "Mockups", component: <MockupsComponent /> },
    { name: "Details", component: <DetailsComponent /> },
    { name: "Prices", component: <PricesComponent /> },
    { name: "Review", component: <ReviewComponent /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeIndex < sections.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      navigate("/"); // Navigate to home or a final page after Review
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const toggleDrawer = () => {
    if (activeIndex === 0) {
      setIsDrawerOpen(!isDrawerOpen);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Navbar */}
      <div className="flex flex-col border-b font-segoe ">
        <div className="flex items-center justify-between py-1 px-4">
          <div className="flex items-center text-[#333333]">
            {activeIndex > 0 ? (
              <span
                className="return-arrow cursor-pointer"
                onClick={handlePrevious}
              >
                <FaArrowLeft />
              </span>
            ) : (
              <span
                className="drawer-symbol cursor-pointer"
                onClick={toggleDrawer}
              >
                <FaBars />
              </span>
            )}
            <span
              className={`web-name cursor-pointer ml-2 font-phudu ${
                activeIndex === 0 ? "text-[#333333] font-phudu font-bold text-2xl" : "text-[#333333] font-segoe" 
              }`}
              onClick={handlePrevious}
            >
              {activeIndex === 0 ? "MAD PRINTS" : "Return"}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`flex flex-col items-center cursor-pointer p-2 border-t-4 ${
                  activeIndex === index
                    ? "text-[#000088] font-bold border-t-[#212121]"
                    : activeIndex > index
                    ? "text-[#000088] border-t-transparent"
                    : "text-[#8E8E8E] border-t-transparent"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <FaRegCircleCheck className="w-8 h-8" />
                <span className="mt-1">{section.name}</span>
              </div>
            ))}
          </div>

          <div>
            {activeIndex < sections.length && (
              <button
                className="bg-[#000088] text-white px-6 py-2 rounded shadow"
                onClick={handleNext}
              >
                {activeIndex === sections.length - 1
                  ? "Publish"
                  : `Continue to ${sections[activeIndex + 1].name}`}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Drawer */}
      <div className="flex">
        {activeIndex === 0 && isDrawerOpen && <SidebarDrawer />}

        {/* Active Component */}
        <div
          className={`flex-grow  ${
            activeIndex === 0 && isDrawerOpen ? "w-3/4" : "w-full"
          }`}
        >
          {sections[activeIndex].component}
        </div>
      </div>
    </div>
  );
};

export default AddProductProcessFlowBar;
