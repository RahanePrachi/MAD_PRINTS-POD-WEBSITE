import React, { useState } from "react";
import SidebarDrawer from "../common_components/SidebarDrawer";

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

const MyStoreSettings = () => {
  const [formData, setFormData] = useState({
    StoreName: "",
    Storeurl: "",
    Option: "Option 1",
    BillingCurrency: "",
    ProfitMargin: "",
  });
  const { StoreName, Storeurl, Option, BillingCurrency, ProfitMargin } =
    formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const FormData = {
      ...formData,
    };
    console.log("Form data: ", FormData);

    // Reset
    setFormData({
      StoreName: "",
      Storeurl: "",
      Option: "Option 1",
      BillingCurrency: "",
      ProfitMargin: "",
    });
  };
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex">
      <SidebarDrawer />

      {/* Main Content Area */}
      <div className="main-content flex-grow-1">
        {/* Top Navbar */}
        <Navbar bg="light" variant="light" className="px-3 bg-white">
          <Navbar.Brand>
            {!expanded ? (
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
          <Nav className="ms-auto align-items-center">
            <Button
              variant="outline-dark"
              className="d-flex align-items-center fw-bold me-4"
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
        </Navbar>

        {/* Page Content */}
        <div className="m-5 flex flex-col">
          <div>
            <p className="font-semibold text-xl font-segoe">
              My Store &gt; Settings
            </p>
          </div>
          <div className="h-[730px] rounded-md shadow-sm pr-4 pt-4">
            <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
              <p className="font-poppins font-medium text-xl">
                Add Store Details
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-white">
                <button className="bg-[#FF5732] font-inter rounded-[12px] text-xl text-center px-6 py-3 w-full md:w-auto">
                  Delete My Account
                </button>
                <button className="bg-[#000088] font-inter rounded-[12px] text-xl text-center px-6 py-3 w-full md:w-auto">
                  Save Changes
                </button>
              </div>
            </div>

            <div>
              <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4 lg:w-[55%] md:w-[60%]">
                <div>
                  <label className="w-full">
                    <p className="mb-1 text-sm text-[#5E6366] font-inter">
                      Store Name
                    </p>
                    <input
                      required
                      type="text"
                      name="StoreName"
                      value={StoreName}
                      onChange={handleOnChange}
                      placeholder="MAD Prints - My Store"
                      className="w-full rounded-lg text-[#5E6366] p-[12px] font-outfit bg-[#EFF1F999]"
                    />
                  </label>
                  <p className="text-[#525252] font-outfit text-xs">
                    Your store name will be shown on the ship from field on
                    shipping labels.
                  </p>
                </div>

                <div>
                  <label className="w-full">
                    <p className="mb-1 text-sm text-[#5E6366] font-inter">
                      Store URL
                    </p>
                    <input
                      required
                      type="text"
                      name="Storeurl"
                      value={Storeurl}
                      onChange={handleOnChange}
                      placeholder="madprints.myshopify.com"
                      className="w-full rounded-lg text-[#5E6366] p-[12px] font-outfit bg-[#EFF1F999]"
                    />
                  </label>
                </div>

                <div>
                  <label className="w-full">
                    <p className="mb-1 text-sm text-[#5E6366] font-inter">
                      Option
                    </p>
                    <div className="flex flex-wrap items-center w-full rounded-lg text-[#5E6366] p-[12px] font-outfit bg-[#EFF1F999] space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          required
                          type="radio"
                          name="option"
                          value="option1"
                          onChange={handleOnChange}
                          className="w-4 h-4 rounded-full border-gray-400 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-richblack-5">Option 1</span>
                      </label>
                      <label className="flex items-center space-x-2 text-[#586166]">
                        <input
                          required
                          type="radio"
                          name="option"
                          value="option2"
                          onChange={handleOnChange}
                          className="w-4 h-4 rounded-full border-gray-400 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-richblack-5">Option 2</span>
                      </label>
                    </div>
                  </label>
                </div>

                <div>
                  <label className="w-full">
                    <p className="mb-1 text-sm text-[#5E6366] font-inter">
                      Billing Currency
                    </p>
                    <div className="relative">
                      <select
                        name="BillingCurrency"
                        value={BillingCurrency}
                        onChange={handleOnChange}
                        className="w-full rounded-[0.5rem] p-[12px] text-[#586166] appearance-none bg-[#EFF1F999]"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR" disabled>
                          EUR
                        </option>
                        <option value="INR" disabled>
                          INR
                        </option>
                        <option value="BRL" disabled>
                          BRL
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                          className="w-4 h-4 text-[#586166]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </label>
                </div>

                <div>
                  <label className="w-full">
                    <p className="mb-1 text-sm text-[#5E6366] font-inter">
                      Profit Margin
                    </p>
                    <input
                      required
                      type="text"
                      name="ProfitMargin"
                      value={ProfitMargin}
                      onChange={handleOnChange}
                      placeholder="50%"
                      className="w-full rounded-lg text-[#5E6366] p-[12px] font-outfit bg-[#EFF1F999]"
                    />
                  </label>
                  <p className="text-[#525252] font-outfit text-xs">
                    Defines additional shipping fee for your customer on top of
                    base shipping prices from MAD Prints.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStoreSettings;
