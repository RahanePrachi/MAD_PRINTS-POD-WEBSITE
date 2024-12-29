import React, { useState } from "react";
import SidebarDrawer from "../common_components/SidebarDrawer";
import shopifyLogo from "../mystores/assets/logos/shopifyLogo.png"
import EtsyLogo from "../mystores/assets/logos/EtsyLogo.png"
import amazonLogo from "../mystores/assets/logos/amazonLogo.png"
import wixLogo from "../mystores/assets/logos/wixLogo.png"
import shopify from "../mystores/assets/logos/shopify.png";
import MyStoreSettings from "./MyStoreSettings";
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

const MyStores = () => {
  const [view, setView] = useState("stores"); // "stores" or "settings"

  const handleSettingsClick = () => {
    setView("settings");
  };

  const handleBackToStores = () => {
    setView("stores");
  };
  return (
    <div className="flex">
  

      {/* Main Content Area */}
      <div className="main-content flex-grow-1">
       
        {/* Page Content */}

       {
        view === "stores" ? (
          <div className="m-5 flex flex-col gap-3">
          <div className="font-segoe font-semibold text-2xl">My Store</div>
          <div className="flex shadow-[0px_3px_13px_rgba(0,0,0,0.2)] p-3 items-center justify-between flex-wrap md:flex-nowrap h-[120px]">
            <div className="flex gap-4 items-center justify-center">
              <img src={shopify} alt="" width={100} />
              <div className="font-poppins font-bold text-lg text-center">
                My Store
              </div>
            </div>

            <div className="flex gap-4 items-center font-segoe">
              <button
                     onClick={handleSettingsClick}
                className="rounded-md text-center py-[11px] px-[21px]"
              >
                Settings
              </button>
              <button className="bg-[#000080] text-white font-bold rounded-md text-center py-[11px] px-[21px]">
                Add Product
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
          <div className="font-segoe font-semibold text-3xl mt-4">Connect to a new store</div>
          <div className="font-poppins font-semibold text-lg">All integrations</div>
          <div className=" flex flex-wrap font-poppins font-medium gap-2">
            <div className="w-[120px] h-[110px] flex flex-col items-center justify-center gap-2 shadow-[3px_4px_0px_rgba(0,0,0,0.1)] rounded-md">
                <img src={EtsyLogo} alt="" height={48} width={48} />
                <p>Etsy</p>
            </div>

            <div className="w-[120px] h-[110px] flex flex-col items-center justify-center gap-2 shadow-[3px_4px_0px_rgba(0,0,0,0.1)]  rounded-md">
                <img src={wixLogo} alt="" height={48} width={48} />
                <p>Wix</p>
            </div>

            <div className="w-[120px] h-[110px] flex flex-col items-center justify-center gap-2 shadow-[3px_4px_0px_rgba(0,0,0,0.1)]  rounded-md">
                <img src={EtsyLogo} alt="" height={48} width={48} />
                <p>Etsy</p>
            </div>

            <div className="w-[120px] h-[110px] flex flex-col items-center justify-center gap-2 shadow-[3px_4px_0px_rgba(0,0,0,0.1)] rounded-md">
                <img src={amazonLogo} alt="" height={48} width={48} />
                <p>Amazon</p>
            </div>

            <div className="w-[120px] h-[110px] flex flex-col items-center justify-center gap-2 shadow-[3px_4px_0px_rgba(0,0,0,0.1)]  rounded-md">
                <img src={wixLogo} alt="" height={48} width={48} />
                <p>Wix</p>
            </div>
          </div>
          </div>
        </div>
        ) : (
          <div>
           
            <MyStoreSettings />
          </div>
        )
       }
      </div>
    </div>
  );
};

export default MyStores;
