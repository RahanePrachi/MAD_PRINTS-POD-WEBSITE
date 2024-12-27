import React, { useState } from "react";
import Select from "react-select";
// List of countries with flag codes and country names
const countryOptions = [
  { value: "IN", label: "India", flag: "IN" },
  { value: "US", label: "United States", flag: "US" },
  { value: "GB", label: "United Kingdom", flag: "GB" },
  { value: "CA", label: "Canada", flag: "CA" },
  { value: "AU", label: "Australia", flag: "AU" },
  // Add more countries as needed
];
const ProductPrices = () => {

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [costInINR, setCostInINR] = useState(1000); // Example cost in INR
  
  // Handle country selection
  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  // Convert INR to USD (example conversion rate)
  const inrToUsdConversionRate = 0.012; // Example conversion rate
  const costInUSD = costInINR * inrToUsdConversionRate;
  return (
    <div className="w-10/12 mx-auto ">
      <div className="flex flex-col gap-3 py-16 ">
        <div className="font-segoe font-bold text-2xl text-[#333333]">
          Set up prices
        </div>
        <div>
          <div className="font-segoe text-sm">
            Your retail prices will always be converted and published in your
            store’s currency.
          </div>

          <div>
            <div className="p-4 font-segoe">
              <h2 className="text-xl font-bold">Preview Your Costs</h2>

              <div className="mt-4 flex items-center">
                <label className="mr-2">Select Country: </label>

                <Select
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={handleChange}
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      {/* Displaying flag images */}
                      <img
                        src={`/flags/${e.flag}.png`} // Image path based on the country code
                        alt={e.label}
                        className="w-6 h-6 mr-2"
                      />
                      {e.label}
                    </div>
                  )}
                  placeholder="Select Country"
                />
              </div>

              {selectedCountry && (
                <div className="mt-4">
                  <h3 className="font-bold">Cost Preview</h3>
                  <p>
                    Cost in {selectedCountry.label}:{" "}
                    <strong>
                      {selectedCountry.value === "IN"
                        ? `${costInINR} INR`
                        : `$${costInUSD.toFixed(2)} USD`}
                    </strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductPrices;
