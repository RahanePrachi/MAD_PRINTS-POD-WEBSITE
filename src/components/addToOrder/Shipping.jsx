import React, { useState } from "react";

const Shipping = ({ handleConfirmPayment }) => {
  const [selectedOption, setSelectedOption] = useState("");
  

  const options = [
    {
      id: "option1",
      label: "FedEx Connect (Economy)",
      desc: "18-22 Oct",
      price: "3863.53 INR",
    },
    {
      id: "option2",
      label: "FedEx Connect (Economy)",
      desc: "18-22 Oct",
      price: "3863.53 INR",
    },
    {
      id: "option3",
      label: "FedEx Connect (Economy)",
      desc: "18-22 Oct",
      price: "3863.53 INR",
    },
  ];
  const summaryItems = [
    { label: "Subtotal", value: "5,102.81 INR" },
    { label: "Shipping", value: "3,863.53 INR" },

    { label: "Total excl. tax", value: "8,966.81 INR" },
  ];
  return (
    <div className="flex flex-col p-4 border rounded-lg border-[#9F9F9F] max-w-full m-5 bg-white overflow-auto">
      <div>
        <div className="font-poppins font-semibold text-3xl">
          Shipping Mode Component
        </div>

        <div>
          <div className="space-y-4 bg-[#E6E6FF] rounded-lg mt-5">
            {options.map((option) => (
              <div
                key={option.id}
                className={`flex items-center justify-between p-4 rounded-lg `}
              >
                {/* Radio Button */}
                <div className="flex items-center w-full">
                  <input
                    type="radio"
                    id={option.id}
                    name="shippingOptions"
                    value={option.id}
                    className="form-radio mr-4 text-[#000080] w-6 h-6"
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <div className="border rounded-lg bg-white w-full flex items-center justify-between">
                    <div className="flex flex-col items-start  ">
                      <label
                        htmlFor={option.id}
                        className="text-[#181725] font-poppins font-medium text-xl px-3 pt-3"
                      >
                        {option.label}
                      </label>
                      <p className="font-poppins text-base  font-medium px-3 text-[#505050]">
                        {option.desc}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-[#181725] font-bold text-xl pr-3 ">
                      {option.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* summary */}

        <div className="max-w-md mx-auto p-4 bg-white font-segoe mt-5">
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
                <div className={`py-2 text-right text-[#333333] ${index === summaryItems.length - 1 ? 'font-bold' : ''}`}>{item.value}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center ">
        <button
          className="mt-4 font-segoe text-white bg-[#000088] py-2 px-4 rounded-lg flex items-center justify-center lg:w-[400px]"
          onClick={handleConfirmPayment}
        >
          Continue to Payment
        </button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
