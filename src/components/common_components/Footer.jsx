import React from "react";

const Footer = () => {
  return (
    <div className="text-white bg-[#0E0E0E]  ">
      <div className=" mx-auto flex w-10/12 max-w-maxContent flex-col justify-between gap-10 relative  py-[60px]">
        {/* upper part */}
        <div className="flex flex-col lg:gap-10 lg:flex-row justify-between">
          {/* left side */}
          <div className="my-12 flex lg:w-[40%] flex-col gap-6 md:w[35%]  text-[#FFFFFF]">
            <p className="text-[32px] font-semibold font-phudu">MAD Prints</p>
            <div className="w-[55%] flex flex-col gap-6">
              <p className="font-manrope text-md font-medium">
                Unlock Your Business's Potential with Our Social Media Solutions
              </p>
            </div>
            <div className="flex gap-3 font-manrope font-semibold flex-wrap">
              <p>Overview</p>
              <p>Features</p>
              <p>Pricing</p>
              <p>Careers</p>
              <p>Help</p>
              <p>Privacy</p>
            </div>
          </div>

          {/* right side */}
          <div className="my-12 flex lg:w-[40%] flex-col gap-2.5 ">
            <div className="flex flex-col gap-3  ">
              <div className="flex flex-col lg:items-end">
              <p className="">
                Stay Up-to-Date with the Latest Social Media 
              </p>
              <p>Strategies and
              Insights</p>
              </div>

              <div className="flex gap-4 flex-wrap lg:items-end lg:justify-end">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="font-manrope rounded-md text-[#BCBBC9] p-4 "
                />
                <button className="bg-[#FB5711] font-manrope font-bold rounded-md  py-6 px-10">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#847E8C]  h-[0.5px] mx-auto w-10/12"></div>

      <div className="text-center bg-[#0E0E0E] py-[25px] pb-[25px] ">
        <p className="text-[#F3EFEE] leading-6 text-sm font-semibold font-monrope">
          © 2024 MAD Prints. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
