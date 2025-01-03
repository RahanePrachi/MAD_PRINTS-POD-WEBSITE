import React from "react";
import "@fontsource/phudu";
import "@fontsource/manrope";
import "@fontsource/outfit";
import { RiStarLine } from "react-icons/ri";
import svg from "../../../assets/SVG.png";
import image from "../../../assets/Icon 1 (1).png"
import { useNavigate } from "react-router-dom";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";

const HomeHeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product");
  };
  return (
    <div className=" bg-[#F1F1FF]">
      {/* section 1 */}
      <div className="w-10/12 mx-auto py-3 flex flex-col lg:flex-row ">
        {/* Left Part */}
        <div className="flex flex-col lg:w-1/2 mt-7 ">
          {/* Title */}
          <p className="text-[#0E0E0E] font-semibold text-[96px] w-full lg:w-[463px] mb-0" style={{fontFamily:"Outfit",
            lineHeight:"115px"
          }}>
            MAD Printing Solutions
          </p>

          {/* Description */}
          <p className="text-[#868686] font-manrope text-sm sm:text-base lg:text-lg w-full lg:w-[463px] mt-0">
            Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam
            libero id ante nullam. Tellus.
          </p>

          {/* Button */}
          <button
            onClick={handleClick}
            className="font-manrope font-bold text-sm sm:text-base lg:text-md text-white bg-[#FB5711] w-full sm:w-auto lg:w-[219px] py-3 sm:py-4 lg:py-8 px-6 lg:px-10 rounded-lg"
          >
            Get Started
          </button>
        </div>

        {/* Right Part */}
        <div className="lg:w-1/2 mt-8 relative  h-[500px] ">
          <img
            src={svg}
            alt="Illustration"
            className="w-full  object-contain  h-[500px]"
          />
          <div className="absolute bottom-[2%] left-[2%]  sm:bottom-0 sm:left-0 lg:translate-x-1/2 md:translate-x-1/2 rounded-lg flex items-center justify-center w-[130px] flex-col">
            <div className="bg-blue-900 w-full h-3 rounded-t-md"></div>
            <div className="flex flex-col gap-2 w-full bg-white justify-center items-center pt-3">
              <div className="flex gap-2 items-center justify-center">
                <div className="font-semibold font-outfit text-2xl" style={{fontFamily:"Outfit"}}>4.8</div>
                <div>
                  <TiStarFullOutline className="text-yellow-400" />
                </div>
              </div>
              <p className="font-outfit text-center">High-rated</p>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="w-10/12 mx-auto flex flex-col  gap-3 font-manrope  ">
        <h4 className="text-[#847E8C] font-bold font-manrope text-[32px]" style={{lineHeight:"44px"}}>
          Category
        </h4>
        <div className="flex gap-3 flex-wrap justify-start pb-20">
          <div className="text-[16px] h-[44px] font-bold font-monrope border-1 border-[#847E8C] rounded-full text-center flex justify-center items-center px-6">
            Men’s Clothing
          </div>

          <div
            className="flex
          items-center justify-center"
          >
            <img src={image} alt="" className="object-contain" width="44" height="44"/>
            {/* <svg width="44" height="44">
              <circle cx="22" cy="22" r="22" fill="#000088" />
              <polygon points="9,22 22,9 35,22 22,35" fill="white" />
            </svg> */}
          </div>

          <div className="text-[16px] h-[44px] font-bold font-monrope border-1 border-[#847E8C] rounded-full text-center flex justify-center items-center px-6">
            Women’s Clothing
          </div>
          <div
            className="flex
          items-center justify-center"
          >
            <img src={image} alt="" className="object-contain" />
            {/* <svg width="44" height="44">
              <circle cx="22" cy="22" r="22" fill="#000088" />
              <polygon points="9,22 22,9 35,22 22,35" fill="white" />
            </svg> */}
          </div>

          <div className="text-[16px] h-[44px] font-bold font-monrope border-1 border-[#847E8C] rounded-full text-center flex justify-center items-center px-6">
            POSTER & BANNER
          </div>
          <div
            className="flex
          items-center justify-center"
          >
            <img src={image} alt="" className="object-contain" />
            {/* <svg width="44" height="44">
              <circle cx="22" cy="22" r="22" fill="#000088" />
              <polygon points="9,22 22,9 35,22 22,35" fill="white" />
            </svg> */}
          </div>
          <div className="text-[16px]  h-[44px] font-bold font-monrope border-1 border-[#847E8C] rounded-full text-center flex justify-center items-center px-6">
            CUSTOM INVITATION
          </div>
          <div
            className="flex
          items-center justify-center"
          >
            <img src={image} alt="" className="object-contain" />
            {/* <svg width="44" height="44">
              <circle cx="22" cy="22" r="22" fill="#000088" />
              <polygon points="9,22 22,9 35,22 22,35" fill="white" />
            </svg> */}
          </div>
          <div className="text-[16px] h-[44px] font-bold font-monrope border-1 border-[#847E8C] rounded-full text-center flex justify-center items-center px-6">
            BROCHURE & FLYER
          </div>
          <div
            className="flex
          items-center justify-center"
          >
            <img src={image} alt="" className="object-contain" />
            {/* <svg width="44" height="44">
              <circle cx="22" cy="22" r="22" fill="#000088" />
              <polygon points="9,22 22,9 35,22 22,35" fill="white" />
            </svg> */}
          </div>
          <div className="text-[16px] h-[44px] font-bold font-monrope border-1 border-[#847E8C] rounded-full text-center flex justify-center items-center px-6">
            PACKAGING & BOOKLET
          </div>
          <div
            className="flex
          items-center justify-center"
          >
            <img src={image} alt="" className="object-contain" />
            {/* <svg width="44" height="44">
              <circle cx="22" cy="22" r="22" fill="#000088" />
              <polygon points="9,22 22,9 35,22 22,35" fill="white" />
            </svg> */}
          </div>
          <div className="text-[16px] h-[44px] font-bold font-monrope border-1 border-[#847E8C] rounded-full text-center flex justify-center items-center px-6">
            APPAREL PRINTING
          </div>
          <div
            className="flex
          items-center justify-center"
          >
            <img src={image} alt="" className="object-contain" />
            {/* <svg width="44" height="44">
              <circle cx="22" cy="22" r="22" fill="#000088" />
              <polygon points="9,22 22,9 35,22 22,35" fill="white" />
            </svg> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
