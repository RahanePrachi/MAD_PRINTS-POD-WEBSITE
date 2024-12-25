import React, { useState } from "react";

const BillingDetails = () => {
  const [formData, setFormData] = useState({
    FistName: "",
    LastName: "",
    email: "",
    MobileNo: "",
    Pincode: "",
    houseNo: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
  });
  const {
    FirstName,
    LastName,
    email,
    MobileNo,
    Pincode,
    houseNo,
    area,
    landmark,
    city,
    state,
  } = formData;

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
      FistName: "",
      LastName: "",
      email: "",
      MobileNo: "",
      Pincode: "",
      houseNo: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
    });
  };
  return (
    <div className="flex flex-col p-4 border rounded-lg border-[#9F9F9F] max-w-full m-5 bg-white overflow-auto">
      <div>
        <p className="font-poppins font-semibold text-3xl">
          Billing Details & Address
        </p>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4">
          <div className="flex flex-wrap gap-y-4 gap-x-4">
            <label className="w-full lg:w-[48%]">
              <p className="mb-1 text-xl text-[#383E49] font-poppins">
                First Name
              </p>
              <input
                required
                type="text"
                name="FirstName"
                value={FirstName}
                onChange={handleOnChange}
                placeholder="John"
                className="w-full font-semibold rounded-lg placeholder-black p-[12px] font-poppins border border-[#9F9F9F]"
              />
            </label>

            <label className="w-full lg:w-[48%]">
              <p className="mb-1 text-xl text-[#383E49] font-poppins">
                Last Name
              </p>
              <input
                required
                type="text"
                name="LastName"
                value={LastName}
                onChange={handleOnChange}
                placeholder="Kevin"
                className="w-full font-semibold rounded-lg placeholder-black p-[12px] font-poppins border border-[#9F9F9F]"
              />
            </label>
          </div>

          <label className="w-full">
            <p className="mb-1 text-xl text-[#383E49] font-poppins">Email</p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="johnkevin@gmail.com"
              className="w-full font-semibold rounded-lg placeholder-black p-[12px] font-poppins border border-[#9F9F9F]"
            />
          </label>

          <label className="w-full">
            <p className="mb-1 text-xl text-[#383E49] font-poppins">
              Mobile Number
            </p>
            <input
              required
              type="number"
              name="MobileNo"
              value={MobileNo}
              onChange={handleOnChange}
              placeholder="91234567890"
              className="w-full font-semibold rounded-lg placeholder-black p-[12px] font-poppins border border-[#9F9F9F]"
            />
          </label>

          <label className="w-full">
            <p className="mb-1 text-xl text-[#383E49] font-poppins">Pincode</p>
            <input
              required
              type="number"
              name="Pincode"
              value={Pincode}
              onChange={handleOnChange}
              placeholder="500032"
              className="w-full font-semibold rounded-lg placeholder-black p-[12px] font-poppins border border-[#9F9F9F]"
            />
          </label>

          <label className="w-full">
            <p className="mb-1 text-xl text-[#383E49] font-poppins">
              Flat, House no., Building, Company, Apartment
            </p>
            <input
              required
              type="text"
              name="houseNo"
              value={houseNo}
              onChange={handleOnChange}
              placeholder="Enter Flat or House no."
              className="w-full font-semibold rounded-lg placeholder-black p-[12px] font-poppins border border-[#9F9F9F]"
            />
          </label>

          <label className="w-full">
            <p className="mb-1 text-xl text-[#383E49] font-poppins">
              Area or Street Address
            </p>
            <input
              required
              type="text"
              name="area"
              value={area}
              onChange={handleOnChange}
              placeholder="Enter Area or Street Address"
              className="w-full font-semibold rounded-lg placeholder-black p-[12px] font-poppins border border-[#9F9F9F]"
            />
          </label>

          <label className="w-full">
            <p className="mb-1 text-xl text-[#383E49] font-poppins">Landmark</p>
            <input
              required
              type="text"
              name="landmark"
              value={landmark}
              onChange={handleOnChange}
              placeholder="Enter Landmark"
              className="w-full font-semibold rounded-lg placeholder-black p-[12px] font-poppins border border-[#9F9F9F]"
            />
          </label>

          <div className="flex flex-wrap gap-y-4 gap-x-4">
            <label className="w-full lg:w-[48%]">
              <p className="mb-1 text-xl text-[#383E49] font-poppins">
                Town/City
              </p>
              <input
                required
                type="text"
                name="city"
                value={city}
                onChange={handleOnChange}
                placeholder="Hyderabad"
                className="w-full font-semibold rounded-lg placeholder-black p-[12px] font-poppins border border-[#9F9F9F]"
              />
            </label>

            <label className="w-full lg:w-[48%]">
              <p className="mb-1 text-xl text-[#383E49] font-poppins">State</p>
              <select
                name="state"
                value={state}
                onChange={handleOnChange}
                className="text-[#586166] appearance-none w-full font-semibold rounded-lg placeholder-black p-[12px] font-poppins border border-[#9F9F9F]"
              >
                <option value="Telangana">Telangana</option>
                <option value="Maharastra">Maharastra</option>
                <option value="Delhi">Delhi</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingDetails;
