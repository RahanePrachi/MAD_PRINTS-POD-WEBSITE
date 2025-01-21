import React from "react";
import { useState } from "react";
import image from "./assets/image.png";
import italic from "./assets/italic.png";
import indend from "./assets/indend.png";
import bold from "./assets/bold.png";
import justifyCenter from "./assets/justify-center.png";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import justifyLeft from "./assets/justify-left.png";
import justifyRight from "./assets/justify-right.png";
import link from "./assets/link.png";
import unlink from "./assets/unlink.png";
import outdent from "./assets/outdent.png";
import underline from "./assets/underline.png";
import productImg from "./assets/productImg.png";
import unorderlist from "./assets/unordered-list.png";
import orderedlist from "./assets/orderedlist.png";
const ProductDetails = () => {
  const [productData, setProductData] = useState({
    title: "",
    desc: "",
    type: "",
    vendor: "",
    tags: "",
    collections: "",
  });

  const { title, desc, type, vendor, tags, collections } = productData;


  const buttons = [
    {
      img: bold,

      alt: "Bold Text",
    },
    {
      img: italic,

      alt: "Italic Text",
    },

    {
      img: underline,

      alt: "Underline Text",
    },
    {
      img: indend,

      alt: "Indent Text",
    },
    {
      img: outdent,

      alt: "Indent Text",
    },

    { img: justifyLeft, alt: "Align Left" },
    {
      img: justifyCenter,

      alt: "Align Center",
    },
    {
      img: justifyRight,

      alt: "Align Right",
    },
    {
      img: unorderlist,

      alt: "unorderlist",
    },
    {
      img: orderedlist,

      alt: "unorderlist",
    },
    {
      img: link,

      alt: "Align Right",
    },

    {
      img: unlink,

      alt: "unlink",
    },
    {
      img: image,

      alt: "image",
    },
  ];

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const productData = {
      ...productData,
    };
    console.log("Form data: ", productData);

    // Reset
    setProductData({
      title: "",
      desc: "",
      type: "",
      vendor: "",
      tags: "",
      collections: "",
    });
  };

  const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
  const rows = [
    {
      label: "A) Length",
      parameter: "(cm)",
      data: [70.1, 73.7, 76.2, 78.7, 81.3, 83.3, 86, 89],
    },
    {
      label: "B) Halt Chest ",
      parameter: "(cm)",
      data: [45.7, 50.8, 55.9, 61, 66, 71.1, 76, 81],
    },
  ];
  const rows1 = [
    {
      label: "A) Length ",
      parameter: "(inches)",
      data: [28, 29, 30, 31, 32, 33, 33.9, 35],
    },
    {
      label: "B) Halt Chest ",
      parameter: "(inches)",
      data: [18, 20, 22, 24, 26, 28, 29.9, 31.9],
    },
  ];

  return (
    <div className="w-10/12 mx-auto ">
      <div className="flex flex-col gap-3 pt-5 ">
        <div className="font-segoe font-bold text-2xl text-[#333333] py-2">
          Add your product title and description
        </div>

        <div className="flex flex-col  rounded-lg max-w-full bg-white overflow-auto shadow-[0_10px_25px_-10px_rgba(0,0,0,0.3)]">
          <div className="font-segoe font-bold text-xl p-4 flex justify-between">
            <div>Description</div>
          </div>
          {/* product description */}

          <div className="flex border-t border-gray-300">
            {/* Image Section */}
            <div className="w-[30%]  p-4 ">
              <img
                src={productImg}
                alt="Product"
                className="w-[300px] h-auto object-cover"
              />
            </div>

            {/* Product Detail Section */}
            <div className="w-[70%]  font-segoe flex flex-col p-4  rounded-lg  mx-3 bg-white overflow-auto">
              <div>
                <form
                  onSubmit={handleOnSubmit}
                  className="flex flex-col gap-y-4"
                >
                  <label className="w-full">
                    <p className="mb-1 text-xl text-[#383E49]">Title</p>
                    <input
                      required
                      type="text"
                      name="title"
                      value={title}
                      onChange={handleOnChange}
                      placeholder="Heavyweight Unisex Crewneck T-shirt | Gildan® 5000 White"
                      className={`w-full rounded-lg p-[12px] border border-[#9F9F9F] `}
                    />
                  </label>

                  <div className="flex flex-col">
                    <label className="w-full">
                      <div className="flex justify-between">
                      <p className="mb-1 text-xl text-[#383E49] ">
                        Description
                      </p>
                      <div className="rounded border items-center justify-center p-2">
            <RiExpandLeftRightLine/>
            </div>
                      </div>
                      {/* Alignment and Formatting Buttons */}

                      <div className="flex justify-start gap-4 mt-2 border items-center p-2">
                        <button className="flex  items-center justify-between w-24  h-10  ">
                          <div className="">Default</div>
                          <div className="">
                            <FaCaretUp />
                            <FaCaretDown />
                          </div>
                        </button>
                        {buttons.map((btn, index) => (
                          <button
                            key={index}
                            type="button"
                            className={`flex items-center justify-center w-6 h-8 hover:bg-gray-200`}
                          >
                            <img
                              src={btn.img}
                              alt={btn.alt}
                              className="w-4  h-4"
                            />
                          </button>
                        ))}
                      </div>
                      <textarea
                        required
                        name="desc"
                        value={desc}
                        onChange={handleOnChange}
                        placeholder="Enter product description"
                        className="w-full  rounded-lg p-[12px] border border-[#9F9F9F] mt-3"
                        rows="4"
                      />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* product guide table */}
          <div className="flex flex-col gap-8 border-t border-gray-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  id="checkbox" checked
                  className="w-6 h-6 bg-transparent border-2 border-[#333333] rounded-lg focus:ring-0 checked:bg-[#333333] checked:border-[#333333] checked:ring-0"
                />
                {/* Label */}
                <label
                  htmlFor="checkbox"
                  className="ml-2 font-semibold text-xl"
                >
                  Attach size table
                </label>
              </div>
              <div>You can edit size table in your store’s platform</div>
            </div>

            <div className="flex items-start">
              {/* Checkbox */}
              <input
                type="checkbox"
                id="checkbox" checked
                className="w-6 h-6 bg-transparent border-2 border-[#333333] rounded-lg focus:ring-0 checked:bg-[#333333] checked:border-[#333333] checked:ring-0"
              />
              {/* Label */}
              <label htmlFor="checkbox" className="ml-2  text-base">
                Choose metric measurement system
              </label>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border-b border-gray-300 ">
                <thead>
                  <tr>
                    <th className="px-4 py-4 border-b border-gray-300"></th>
                    {sizes.map((size) => (
                      <th
                        key={size}
                        className="px-4 py-4 border-b border-gray-300 text-[#333333] font-bold "
                      >
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label} className="py-4">
                      <td className="px-4 py-4 border-b border-gray-300 font-semibold flex flex-col">
                        <span>{row.label}</span>
                        <span>{row.parameter}</span>
                      </td>
                      {row.data.map((value, index) => (
                        <td
                          key={index}
                          className="px-4 py-4 border-b border-gray-300"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-start">
              {/* Checkbox */}
              <input
                type="checkbox"
                id="checkbox" checked
                className="w-6 h-6 bg-transparent border-2 border-[#333333] rounded-lg focus:ring-0 checked:bg-[#333333] checked:border-[#333333] checked:ring-0"
              />
              {/* Label */}
              <label htmlFor="checkbox" className="ml-2  text-base">
                Choose imperial measurement system
              </label>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border-b border-gray-300 ">
                <thead>
                  <tr>
                    <th className="px-4 py-4 border-b border-gray-300"></th>
                    {sizes.map((size) => (
                      <th
                        key={size}
                        className="px-4 py-4 border-b border-gray-300 text-[#333333] font-bold "
                      >
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows1.map((row) => (
                    <tr key={row.label} className="py-4">
                      <td className="px-4 py-4 border-b border-gray-300 font-semibold flex flex-col">
                        <span>{row.label}</span>
                        <span>{row.parameter}</span>
                      </td>
                      {row.data.map((value, index) => (
                        <td
                          key={index}
                          className="px-4 py-4 border-b border-gray-300"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* product care instruction setting */}

          <div className="flex flex-col gap-8 border-t border-gray-300 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  id="checkbox" checked
                  className="w-6 h-6 bg-transparent border-2 border-[#333333] rounded-lg focus:ring-0 checked:bg-[#333333] checked:border-[#333333] checked:ring-0"
                />
                {/* Label */}
                <label
                  htmlFor="checkbox"
                  className="ml-2 font-semibold text-xl"
                >
                  Attach care instructions
                </label>
              </div>
              <div>You can edit care instructions in your store’s platform</div>
            </div>

            <div className="font-segoe font-bold text-sm">
              Care Instructions
            </div>

            <div className="overflow-x-auto text-[#333333]">
              <table className="min-w-full table-auto border-collapse">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-3 w-1/2">General</td>
                    <td className="px-4 py-3 w-1/2">
                      The tee combines comfort, style, and durability, making it
                      a top choice for both everyday wear and craft projects.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-3 w-1/2"> Wash</td>
                    <td className="px-4 py-3 w-1/2">
                      Maintain the tee's look and feel by washing it in cold
                      water with similar colors.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-3 w-1/2">Dry</td>
                    <td className="px-4 py-3 w-1/2">
                      Tumble dry low or hang dry to preserve the fabric
                      integrity and print quality.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 w-1/2">Store</td>
                    <td className="px-4 py-3 w-1/2">
                      Ideal for retail and online stores looking for a
                      high-quality, customizable tee that supports ethical
                      manufacturing practices
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col  rounded-lg max-w-full bg-white overflow-auto shadow-[0_10px_25px_-10px_rgba(0,0,0,0.3)] mb-5">
          <div className="font-segoe font-bold text-xl p-4 ">Settings</div>
          {/* setting form */}

          <div className=" border-y border-gray-300">
            <div className="p-4">
              <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4">
                <label className="w-full">
                  <p className="mb-1  text-[#383E49]">Product type</p>
                  <input
                    required
                    type="text"
                    name="type"
                    value={type}
                    onChange={handleOnChange}
                    placeholder="Print Material"
                    className="w-[230px] rounded-lg p-[12px] border border-[#9F9F9F]"
                  />
                </label>

                <label className="w-full">
                  <p className="mb-1 text-[#383E49]">Vendor</p>
                  <input
                    required
                    type="text"
                    name="vendor"
                    value={vendor}
                    onChange={handleOnChange}
                    placeholder="MAD prints"
                    className="w-[230px] rounded-lg p-[12px] border border-[#9F9F9F]"
                  />
                </label>

                <label className="w-full">
                  <p className="mb-1 text-[#383E49]">Tags</p>
                  <div className="flex items-center gap-3">
                    <input
                      required
                      type="text"
                      name="tags"
                      value={tags}
                      onChange={handleOnChange}
                      placeholder="choose or enter tags"
                      className="w-[230px]  rounded-lg p-[12px] border border-[#9F9F9F]"
                    />
                    <div className="text-[#999999] ">
                      You can select up to 13 tags
                    </div>
                  </div>
                </label>

                <label className="w-full">
                  <p className="mb-1  text-[#383E49]">Collections</p>
                  <input
                    required
                    type="text"
                    name="collections"
                    value={collections}
                    onChange={handleOnChange}
                    placeholder="Choose collections"
                    className="w-[230px] rounded-lg p-[12px] border border-[#9F9F9F]"
                  />
                </label>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-start p-4 ">
            <div className="flex justify-center">
              {/* Checkbox */}
              <input
                type="checkbox"
                id="checkbox" checked
                className="w-6 h-6 bg-transparent border-2 border-[#333333] rounded-lg focus:ring-0 checked:bg-[#333333] checked:border-[#333333] checked:ring-0"
              />
              {/* Label */}

              <label
                htmlFor="checkbox"
                className="ml-2  text-base text-[#333333] font-normal"
              >
                Show product to store visitors
              </label>
            </div>
            <div className="mx-4 text-gray-400">
              This product will be visible to your visitors
            </div>
            <div></div>
          </div>

          <div className="flex flex-col items-start p-4 border-t border-gray-300">
            <div className="flex justify-center">
              {/* Checkbox */}
              <input
                type="checkbox"
                id="checkbox" 
                className="w-6 h-6  bg-transparent border-2 border-[#333333] rounded-lg focus:ring-0 checked:bg-[#333333] checked:border-[#333333] checked:ring-0"
              />
              {/* Label */}

              <label
                htmlFor="checkbox"
                className="ml-2  text-base text-[#333333] font-normal"
              >
                Display with free shipping on your storefront
              </label>
            </div>
            <div className="mx-4 text-gray-400">
              By selecting to display with free shipping we will set the
              shipping cost for the product to zero so you can offer free
              shipping. Remember that you need to cover the shipping cost, so we
              recommend that you add the cost for shipping into your product
              price.
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
