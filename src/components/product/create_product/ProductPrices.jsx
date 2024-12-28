import React, { useState } from "react";
import Select from "react-select";
import { MdCheckCircle } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import productImg from "./assets/productImg.png";
// List of countries with flag codes and country names
const countryOptions = [
  { value: "INR", label: "India", flag: "in", symbol: "₹" },
  { value: "USD", label: "United States", flag: "us", symbol: "$" },
  { value: "GB", label: "United Kingdom", flag: "gb", symbol: "$" },
  { value: "CA", label: "Canada", flag: "ca", symbol: "$" },
  { value: "AU", label: "Australia", flag: "au", symbol: "$" },
  // Add more countries as needed
];

const ProductPrices = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [costInINR, setCostInINR] = useState(1000); // Example cost in INR
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const headers = [
    {
      main: "Retail price (USD)",
      sub: "This price will be shown to your customers",
    },
    { main: "Product costs(USD)", sub: "for India" },
    { main: "Shipping costs(USD)", sub: "for India" },
  ];

  const rows = [
    {
      id: 1,
      product: "White - S - Direct-to-garment (DTG)",
      retail: 22.92,
      cost: 11.46,
      shipping: 20.03,
      profit: 11.46,
    },
    {
      id: 2,
      product: "White - M - Direct-to-garment (DTG)",
      retail: 22.92,
      cost: 11.46,
      shipping: 20.03,
      profit: 11.46,
    },
    {
      id: 3,
      product: "White - L - Direct-to-garment (DTG)",
      retail: 22.92,
      cost: 11.46,
      shipping: 20.03,
      profit: 11.46,
    },
    {
      id: 4,
      product: "White - XL - Direct-to-garment (DTG)",
      retail: 22.92,
      cost: 11.46,
      shipping: 20.03,
      profit: 11.46,
    },
    {
      id: 5,
      product: "White - 2XL - Direct-to-garment (DTG)",
      retail: 27.2,
      cost: 13.6,
      shipping: 20.03,
      profit: 13.6,
    },
    {
      id: 6,
      product: "White - 3XL - Direct-to-garment (DTG)",
      retail: 31.12,
      cost: 15.56,
      shipping: 20.03,
      profit: 15.56,
    },
    {
      id: 7,
      product: "White - 4XL - Direct-to-garment (DTG)",
      retail: 40.32,
      cost: 20.16,
      shipping: 20.03,
      profit: 20.16,
    },
    {
      id: 8,
      product: "White - 5XL - Direct-to-garment (DTG)",
      retail: 44.84,
      cost: 22.42,
      shipping: 20.03,
      profit: 22.42,
    },
  ];
  const handlecurrencyChange = (selectedOption) => {
    setSelectedCurrency(selectedOption);
    console.log("Selected Currency:", selectedOption);
  };

  // Handle country selection
  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  // Initialize state with retail prices
  const [quantities, setQuantities] = useState(
    rows.reduce((acc, row) => {
      acc[row.id] = row.retail; // Set initial quantity as retail price
      return acc;
    }, {})
  );

  // Handle quantity change
  const handleQuantityChange = (id, delta) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      const newQuantity = updatedQuantities[id] + delta;
      if (newQuantity >= 0) {
        updatedQuantities[id] = newQuantity; // Update only if non-negative
      }
      return updatedQuantities;
    });
  };
  // Convert INR to USD (example conversion rate)
  const inrToUsdConversionRate = 0.012; // Example conversion rate
  const costInUSD = costInINR * inrToUsdConversionRate;

  return (
    <div className="w-10/12 mx-auto ">
      <div className="flex flex-col gap-3 py-16 ">
        <div className="flex justify-between  gap-3">
          <h2 className="font-segoe font-bold text-2xl text-[#333333]">
            Set up prices
          </h2>
          <button className="font-segoe font-bold  px-4 py-2 text-[#5991FF] rounded-md">
            Reset to Default
          </button>
        </div>
        <div className="flex gap-3 flex-col">
          <div className="font-segoe text-sm">
            Your retail prices will always be converted and published in your
            store’s currency.
          </div>

          <div className=" font-segoe flex  items-center gap-3 ">
            <div className="text-[#333333] ">Preview Your Costs</div>
            {/* currency-selector */}

            <Select
              options={countryOptions}
              value={selectedCurrency}
              onChange={handlecurrencyChange}
              className="w-36"
              getOptionLabel={(e) => (
                <div className="flex items-center">
                  <span className="mr-2 font-semibold ">{e.value}</span> (
                  {e.symbol})
                </div>
              )}
              placeholder={
                <span className="text-gray-500">Select Currency</span>
              }
            />

            <div className="flex gap-3 items-center justify-center">
              <div className="text-center">for</div>
              <Select
                options={countryOptions}
                value={selectedCountry}
                onChange={handleChange}
                className="w-40"
                getOptionLabel={(e) => (
                  <div className="flex items-center">
                    {/* Displaying flag images */}
                    <img
                      src={`https://flagcdn.com/${e.flag}.svg`} // Image path based on the country code
                      alt={e.label}
                      className="w-6 h-6 mr-2"
                    />
                    {e.label}
                  </div>
                )}
                placeholder="Select Country"
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="flex justify-between gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="include-shipping" className="h-4 w-4" />
            <label htmlFor="include-shipping" className="text-sm">
              Include shipping cost in profit calculation
            </label>
          </div>
          <div className="flex items-center gap-4  h-14">
            <div className="flex items-center gap-2">
              <span className="border border-gray-300 h-full px-4 py-2">
                set profit margin to{" "}
              </span>
              <input
                type="number"
                defaultValue={50}
                className="border border-gray-300 w-24 h-full px-4 py-2 flex justify-center items-center"
              />
              <span className="border border-gray-300 w-24 h-full px-4 py-2 flex justify-center items-center">
                %
              </span>
            </div>
            <button className="px-4 py-2 bg-[#000080] text-white rounded-md ">
              Update
            </button>
          </div>
        </div>

        {/* table */}

        <div className="shadow-[0_10px_25px_-10px_rgba(0,0,0,0.3)] ">
          {/* Product Prices Table Section */}
          <div>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead className="">
                <tr>
                  <th>
                    <div className="flex gap-1">
                      <img
                        src={productImg}
                        alt="productImg"
                        width={40}
                        height={40}
                      />
                      <div>
                        Heavyweight Unisex Crewneck T-shirt | Gildan® 5000 White
                      </div>
                    </div>
                  </th>
                  {headers.map((header, index) => (
                    <th key={index} className=" p-2 text-center">
                      <div className="font-segoe font-semibold text-base">
                        {header.main}
                      </div>
                      <div className="text-[#999999] font-semibold font-segoe text-sm">
                        {header.sub}
                      </div>
                    </th>
                  ))}

                  <th className=" p-2 text-center">
                    <div className="font-segoe font-semibold text-base flex items-start">
                      <div>Estimated Profit (USD) </div>
                      <div
                        className="rounded-full bg-[#4D9334] text-white flex justify-center items-center w-5 h-5"
                        title="Profit Confirmed"
                      >
                        ✓
                      </div>
                    </div>
                    <div className="text-[#999999] font-semibold font-segoe text-sm">
                      +Profit margin %
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-200">
                  <td className="p-2 text-center">All Variants</td>
                  <td className="p-2">
                    <div className="flex items-center bg-white border border-gray-400 rounded p-2 ">
                      <button className="px-2 text-lg ">-</button>
                      <span className="px-2 border-solid border-[#F2F2F2] text-center w-full"
                          style={{
                            borderWidth: "0px 0.8px 0px 0.8px", // Apply fractional border width here
                          }}>
                        22.92 - 44. 84
                      </span>
                      <button className="px-2 text-lg ">+</button>
                    </div>
                  </td>
                  <td>11.46 - 22.42</td>
                  <td>20.03</td>
                  <td>11.46- 22.42</td>
                </tr>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-gray-300">
                    <td className="p-2 text-center">{row.product}</td>

                    <td className="p-2">
                      <div className="flex items-center bg-white border border-gray-400 rounded p-2 ">
                        <button
                          onClick={() => handleQuantityChange(row.id, -1)}
                          className="px-2 text-lg"
                        >
                          -
                        </button>
                        <span
                          className="px-2 border-solid border-[#F2F2F2] text-center w-full"
                          style={{
                            borderWidth: "0px 0.8px 0px 0.8px", // Apply fractional border width here
                          }}
                        >
                          {quantities[row.id].toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(row.id, 1)}
                          className="px-2 text-lg "
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-2 text-center">{row.cost}</td>
                    <td className="p-2 text-center">{row.shipping}</td>
                    <td className="p-2 text-center text-[#4D9334] flex flex-col justify-center items-center ">
                      <div className="flex gap-1">
                        {" "}
                        {row.profit}
                        <div
                          className="rounded-full bg-[#4D9334] text-white flex justify-center items-center w-5 h-5"
                          title="Profit Confirmed"
                        >
                          ✓
                        </div>
                      </div>
                      <div>50%</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPrices;
