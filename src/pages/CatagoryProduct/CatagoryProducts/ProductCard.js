import React from "react";
import { AiOutlineLaptop, AiOutlineCalendar, AiFillStar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { IoMdPricetags } from "react-icons/io";
import Button from "../../../compenents/Button/Button";
const ProductCard = ({ product, setBookNow, verifiedSellers }) => {
  const {
    date,
    location,
    orginalPrice,
    phoneNumber,
    productImage,
    productName,
    resalePrice,
    sellerName,
    useYear,
    email,
  } = product;

  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-full h-56"
        src={productImage}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <AiOutlineLaptop className="text-white text-xl" />

        <h1 className="mx-3 text-lg font-semibold text-white">{productName}</h1>
      </div>

      <div className="px-6 py-4">
        <div className="flex">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {sellerName}
          </h1>
          {verifiedSellers.map((verifiedSeller) => console.log(verifiedSeller))}

          {/* <p className="bg-blue-600 flex justify-center items-center text-white w-4 h-4 rounded-full">
            <AiFillStar className="text-xs" />
          </p> 
           verifiedSeller?.isVerifed === true && <p>verified</p>
          */}
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex items-center text-gray-700 dark:text-gray-200">
            <HiOutlineLocationMarker />
            <h1 className="px-2 text-sm">{location}</h1>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-200">
            <AiOutlineCalendar />
            <h1 className="px-2 text-sm">{`${useYear} Years Use`}</h1>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-200">
            <BiTime></BiTime>
            <h1 className="px-2 text-sm">3 min ago</h1>
          </div>
        </div>

        <div className="flex items-center text-gray-700 dark:text-gray-200 my-4">
          <IoMdPricetags className="text-xl"></IoMdPricetags>
          <h1 className="px-2 text-xl">Resale: ${resalePrice}</h1>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200 my-4">
          <IoMdPricetags className="text-xl"></IoMdPricetags>
          <h1 className="px-2 text-xl">Orginal: ${orginalPrice}</h1>
        </div>
      </div>
      <label
        onClick={() => setBookNow(product)}
        htmlFor="bookNow"
        className="btn w-full bg-[#ffc600] rounded-md  text-[#111111] border-none hover:bg-[#eebe0f]"
      >
        Book Now
      </label>
    </div>
  );
};

export default ProductCard;
