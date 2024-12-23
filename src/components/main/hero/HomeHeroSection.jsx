import React from "react";
import svg from "../../../assets/SVG.png";
const HomeHeroSection = () => {
  return (
    <div className=" bg-[#F1F1FF]">
      {/* section 1 */}
      <div className="w-10/12 mx-auto flex flex-col lg:flex-row">
  {/* Left Part */}
  <div className="flex flex-col gap-5 lg:w-1/2">
    <p className="text-[#0E0E0E] font-outfit font-semibold text-[32px] lg:text-[96px] w-full lg:w-[463px]">
      MAD Printing Solutions
    </p>
    <p className="text-[#868686] font-manrope w-full lg:w-[463px]">
      Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero
      id ante nullam. Tellus.
    </p>

    <button className="font-manrope font-bold text-md text-white bg-[#FB5711] w-full lg:w-[219px] py-3 lg:py-8 px-6 lg:px-18 rounded-lg mb-5">
      Get Started
    </button>
  </div>

  {/* Right Part */}
  <div className="lg:w-1/2 p-5 lg:p-10">
    <img
      src={svg}
      alt="Illustration"
      className="w-full lg:w-auto h-auto"
    />
  </div>
</div>


      {/* section 2 */}
      <div className="w-10/12 mx-auto flex flex-col  py-6 gap-3">
        <h4 className="text-[#847E8C] font-bold font-manrope text-[32px]">
          Category
        </h4>
        <div className="flex gap-3 flex-wrap justify-start">
          <div className="text-[16px] font-bold font-monrope border border-[#847E8C] rounded-full text-center py-4 px-6">
            Men’s Clothing
          </div>

          <div className="text-[16px] font-bold font-monrope border border-[#847E8C] rounded-full text-center py-4 px-6">
            Women’s Clothing
          </div>

          <div className="text-[16px] font-bold font-monrope border border-[#847E8C] rounded-full text-center py-4 px-6">
          POSTER & BANNER
          </div>

          <div className="text-[16px] font-bold font-monrope border border-[#847E8C] rounded-full text-center py-4 px-6">
            CUSTOM INVITATION
          </div>

          <div className="text-[16px] font-bold font-monrope border border-[#847E8C] rounded-full text-center py-4 px-6">
            BROCHURE & FLYER
          </div>

          <div className="text-[16px] font-bold font-monrope border border-[#847E8C] rounded-full text-center py-4 px-6">
            PACKAGING & BOOKLET
          </div>

          <div className="text-[16px] font-bold font-monrope border border-[#847E8C] rounded-full text-center py-4 px-6">
            APPAREL PRINTING
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
