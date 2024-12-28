import React, { useState } from "react";
import image1 from "../addToOrder/assets/image1.png";
import image2 from "../addToOrder/assets/image2.png";
import image3 from "../addToOrder/assets/image3.png";
import image4 from "../addToOrder/assets/image4.png";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const Products = ({ handleConfirmPayment }) => {
  const [toggleDetails, setToggleDetails] = useState({});
  const [quantities, setQuantities] = useState({});

  const [selectedOption, setSelectedOption] = useState("");
    
  
    
    const summaryItems = [
      { label: "Subtotal", value: "5,102.81 INR" },
     
     
      { label: "Total excl. tax", value: "5,102.81 INR" },
    ];
  const products = [
    {
      id: 1,
      image: image1,
      name: "Heavyweight Unisex Crewneck T-shirt | Gildan 5000",
      description: "Small, White, Print on front",
      printImage: image4,
      printText: "Front",
      unitPrice: 959.79,
    },
    {
      id: 2,
      image: image2,
      name: "Heavyweight Unisex Crewneck T-shirt | Gildan 5000",
      description: "Small, White, Print on front",
      printImage: image3,
      printText: "Front",
      unitPrice: 959.79,
    },
  ];

  const handleToggleDetails = (id) => {
    setToggleDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta), // Minimum quantity is 1
    }));
  };
  return (
    <div className="w-full">
      {/* upper part */}
      <div className="flex flex-col md:flex-row justify-between h-auto md:h-11 items-start md:items-center m-14  gap-4">
        <div className="flex flex-col md:flex-row font-segoe text-[#333333] font-normal gap-4">
          <p className="text-lg md:text-4xl">#M-2410002103152</p>
          <div className="flex justify-center items-center text-sm md:text-base gap-2">
            <p>2024/10/02</p>
            <p>09:31:48</p>
          </div>
          <div className="bg-[#EBF2FF] text-[#4774CC] flex justify-center items-center rounded-full border-[#EBF2FF] mt-2 h-14 md:h-10 lg:h-10">
            <p className="py-2 px-3  text-xs sm:text-sm lg:text-base text-center leading-none">
              Saved as Draft
            </p>
          </div>
        </div>

        <div>
          <a href="/addToOrder" className="no-underline  text-sm md:text-base">
            Delete Order
          </a>
        </div>
      </div>

      {/* lower part */}

      <div className="p-4 m-12 rounded font-segoe bg-white shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className=" text-sm border-b text-[#333333]">
              <th className="p-2 text-left">Image</th>
              <th className="p-2 text-left">Product Name</th>
              <th className="p-2 text-left">Quantity</th>
              <th className="p-2 text-left">Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <React.Fragment key={product.id}>
                <tr className="border-b">
                  <td className="p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24"
                    />
                  </td>
                  <td className="p-2">
                    <div className="text-base text-[#333333]">
                      <p className="text-base">{product.name}</p>
                      <p className="text-gray-500 text-sm">
                        {product.description}
                      </p>
                      <button
                        onClick={() => handleToggleDetails(product.id)}
                        className="text-sm flex flex-col  mt-1 text-[#367BF5] w-full"
                      >
                        {/* Toggleable Details Div */}
                        <div className="w-full">
                          {toggleDetails[product.id] && (
                            <div className="flex flex-col gap-1 bg-[#F7F7F7] w-full p-4 rounded border-[#E6E6E6]">
                              <div className="h-[100px] flex items-center justify-center bg-white">
                                <img
                                  src={product.printImage}
                                  alt="Product Detail"
                                  className=" object-cover bg-white self-center"
                                />
                              </div>
                              <p className="text-sm text-[#383838]">
                                {product.printText}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Toggle Button Text */}
                        <div className="mt-2 flex gap-3 items-center ">
                          {toggleDetails[product.id]
                            ? ( <>
                              
                             
                              Hide Print Details
                              <FaChevronUp className="ml-2 transform" />
                              
                            </>
                          ) : (
                            <>
                             
                              Show Print Details
                              <FaChevronDown className="ml-2" />
                            </>)}
                          <span
                            className={`ml-2 transform text-[#367BF5] ${
                              toggleDetails[product.id] ? "rotate-180" : ""
                            }`}
                          >
                           
                          </span>
                        </div>
                      </button>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center bg-white border border-gray-400 rounded p-2 w-24">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className="px-2 text-lg w-full"
                      >
                        -
                      </button>
                      <span className="px-2">
                        {quantities[product.id] || 1}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="px-2 text-lg w-full"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-2 text-center text-sm text-[#333333]">
                    {product.unitPrice.toFixed(2)} INR
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-right flex items-center justify-center   p-2">
          <button className="px-6 py-3 text-[#212121] rounded font-bold text-sm w-40 border border-[#D4D4D4]">
            Add Product
          </button>
        </div>
      </div>


       <div className="p-4 m-12 rounded font-segoe bg-white shadow-sm">
       <div className="max-w-md mx-auto p-2 bg-white font-segoe mt-2">
                <div className="grid grid-cols-2 gap-2 text-gray-700 ">
                  {/* Header */}
                  <div className="font-bold text-base text-[#333333]">Summary</div>
                  <div className=" text-base text-right text-blue-300">INR</div>
                  {/* Border line after the header */}
                  <div className="col-span-2 border-b border-[#333333]  my-2"></div>
                  {/* Rows */}
                  {summaryItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="py-2 text-[#333333] ">{item.label}</div>
                      <div className="py-2 text-right text-[#333333]">{item.value}</div>
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex items-center justify-center ">
              <button
                className="mt-4 font-segoe text-white bg-[#000088] py-2 px-4 rounded-lg flex items-center justify-center lg:w-[400px]"
                onClick={handleConfirmPayment}
              >
                Continue to Shipping
              </button>
              </div>
              </div>
       </div>
              
    </div>
  );
};

export default Products;
