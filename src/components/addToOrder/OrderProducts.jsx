import React, { useState } from "react";
import Shipping from "./Shipping";
import BillingDetails from "./BillingDetails";
import PaymentMode from "./PaymentMode"; // Import the new PaymentMode component
import { TfiWallet } from "react-icons/tfi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import SidebarDrawer from "../common_components/SidebarDrawer";
import { useNavigate } from "react-router-dom";
import Review from "./Review";
const OrderProducts = () => {
  const [expanded, setExpanded] = useState(true); // Drawer expanded/collapsed state
  const navigate = useNavigate();

  const [activeSteps, setActiveSteps] = useState(["products"]);
  const [currentStep, setCurrentStep] = useState("products");

  const handleContinue = () => {
    if (currentStep === "products") {
      setActiveSteps((prev) => [...prev, "shipping"]);
      setCurrentStep("billing");
    } else if (currentStep === "billing") {
      setActiveSteps((prev) => [...prev, "shippingMode"]);
      setCurrentStep("shippingMode");
    } else if (currentStep === "shippingMode") {
      setActiveSteps((prev) => [...prev, "payment"]);
      setCurrentStep("payment");
    } else if (currentStep === "payment") {
      setActiveSteps((prev) => [...prev, "review"]);
      setCurrentStep("review");
    } else if (currentStep === "review") {
      navigate("/"); // Go back to home after review
    }
  };

  const getButtonText = () => {
    if (currentStep === "billing") return "Continue to shipping";
    if (currentStep === "shippingMode") return "Continue to payment";
    if (currentStep === "payment") return "Continue to payment";
    if (currentStep === "review") return "Continue to payment";
    if (currentStep === "home") return "Go to Home";
    return "Continue to shipping";
  };

  return (
    <div className="flex">
      <SidebarDrawer />

      {/* Main Content Area */}
      <div className="w-full flex flex-col">
        {/* Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full space-y-4 lg:space-y-0 border-b-2">
          {/* Left Section */}
          <div className="flex font-segoe font-normal h-[64px] space-x-4 px-4 lg:mx-9">
            <div
              className={`flex flex-col items-center justify-center bg-[#F4F6F8] p-1 border-t-4 ${
                activeSteps.includes("products")
                  ? "border-t-[#212121]"
                  : "border-t-transparent"
              }`}
            >
              <FaRegCircleCheck
                className={`w-7 h-7 ${
                  activeSteps.includes("products")
                    ? "text-blue-400"
                    : "text-gray-400"
                }`}
              />
              <div className="text-sm lg:text-base">Products</div>
            </div>

            <div
              className={`flex flex-col items-center justify-center p-2 ${
                activeSteps.includes("shipping")
                  ? "text-blue-400"
                  : "text-gray-400"
              }`}
            >
              <IoLocationOutline className="w-8 h-8" />
              <div className="text-sm lg:text-base">Shipping</div>
            </div>

            <div
              className={`flex flex-col items-center justify-center p-2 ${
                activeSteps.includes("review")
                  ? "text-blue-400"
                  : "text-gray-400"
              }`}
            >
              <TfiWallet className="w-8 h-8" />
              <div className="text-sm lg:text-base">Review & Pay</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex px-4 lg:mx-9">
            {currentStep !== "home"  && (
              <button
                className="font-segoe text-white bg-[#000088] py-2 px-4 lg:py-3 lg:px-6 rounded-lg"
                onClick={handleContinue}
              >
                {getButtonText()}
              </button>
            )}
          </div>
        </div>

        {/* Rendered Components */}
        <div className="bg-[#F5F6F8]">
          {currentStep === "products" && <div>Product Component</div>}
          {currentStep === "billing" && (
            <div className="">
              <BillingDetails />
            </div>
          )}
          {currentStep === "shippingMode" && (
            <Shipping handleConfirmPayment={handleContinue} />
          )}
          {currentStep === "payment" && (
            <PaymentMode handleConfirmPayment={handleContinue} />
          )}
          {currentStep === "review" && <div><Review/></div>}
          {currentStep === "home" && <div>Home Page</div>}
        </div>
      </div>
    </div>
  );
};

export default OrderProducts;
