import React from 'react'

const ProductReview = () => {
  const tableData = [
    {
      variant: "White - S - Direct-to-garment (DTG)",
      size: "S",
      retailPrice: "22.92 USD",
      estimatedProfit: "11.46 USD",
      regions:
        "Asia, North America, Europe,Oceania, South America,United Kingdom,Rest of the world",
    },
    {
      variant: "White - M - Direct-to-garment (DTG)",
      size: "M",
      retailPrice: "22.92 USD",
      estimatedProfit: "11.46 USD",
      regions:
        "Asia, North America, Europe,Oceania, South America,United Kingdom,Rest of the world",
    },
    {
      variant: "White - L - Direct-to-garment (DTG)",
      size: "L",
      retailPrice: "22.92 USD",
      estimatedProfit: "11.46 USD",
      regions:
        "Asia, North America, Europe,Oceania, South America,United Kingdom,Rest of the world",
    },
    {
      variant: "White - XL - Direct-to-garment (DTG)",
      size: "XL",
      retailPrice: "22.92 USD",
      estimatedProfit: "11.46 USD",
      regions:
        "Asia, North America, Europe,Oceania, South America,United Kingdom,Rest of the world",
    },
    {
      variant: "White - XXL - Direct-to-garment (DTG)",
      size: "XXL",
      retailPrice: "22.92 USD",
      estimatedProfit: "11.46 USD",
      regions:
        "Asia, North America, Europe,Oceania, South America,United Kingdom,Rest of the world",
    },
  ];
  return (
    <div className="w-10/12 mx-auto ">
      <div className="flex flex-col gap-3 py-16 ">
        <div className="font-segoe font-bold text-2xl text-[#333333]">
          Product Summary
        </div>
        <div className="font-segoe text-sm">
          All your variants for publishing
        </div>
        <div>
        <div className="">
  <div className="overflow-x-auto border border-[#BDBDBD] rounded-md">
    <table className="min-w-full text-sm text-left border-collapse border border-[#BDBDBD]">
      <thead className="font-segoe font-bold text-base">
        <tr>
          <th className="p-3 border w-[300px]">Variants</th>
          <th className="p-3 border">Size</th>
          <th className="p-3 border">Retail Price</th>
          <th className="p-3 border">Estimated Profit</th>
          <th className="p-3 border w-[260px]">Delivery Regions</th>
        </tr>
      </thead>
      <tbody className="font-segoe font-normal text-sm text-[#333333]">
        {tableData.map((row, index) => (
          <tr key={index}>
            <td className="p-3 border border-b">{row.variant}</td>
            <td className="p-3 border border-b">{row.size}</td>
            <td className="p-3 border border-b">{row.retailPrice}</td>
            <td className="p-3 border border-b">{row.estimatedProfit}</td>
            <td className="p-3 border border-b">{row.regions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default ProductReview