import React from "react";
import { AiOutlineLaptop, AiOutlineCalendar, AiFillStar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { IoMdPricetags } from "react-icons/io";
import Button from "../../../compenents/Button/Button";

const ProductsCardDetails = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-full h-56"
        src="https://images.pexels.com/photos/13823992/pexels-photo-13823992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <AiOutlineLaptop className="text-white text-xl" />

        <h1 className="mx-3 text-lg font-semibold text-white">
          HP Pavilion Laptop
        </h1>
      </div>

      <div className="px-6 py-4">
        <div className="flex">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Patterson johnson
          </h1>
          <p className="bg-blue-600 flex justify-center items-center text-white w-4 h-4 rounded-full">
            <AiFillStar className="text-xs" />
          </p>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex items-center text-gray-700 dark:text-gray-200">
            <HiOutlineLocationMarker />
            <h1 className="px-2 text-sm">California</h1>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-200">
            <AiOutlineCalendar />
            <h1 className="px-2 text-sm">1 years use</h1>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-200">
            <BiTime></BiTime>
            <h1 className="px-2 text-sm">3 min ago</h1>
          </div>
        </div>

        <div className="flex items-center text-gray-700 dark:text-gray-200 my-4">
          <IoMdPricetags className="text-xl"></IoMdPricetags>
          <h1 className="px-2 text-xl">Resale: $10</h1>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200 my-4">
          <IoMdPricetags className="text-xl"></IoMdPricetags>
          <h1 className="px-2 text-xl">Orginal: $50</h1>
        </div>
      </div>
      <Button classes="w-full">Book Now</Button>
    </div>
  );
};

export default ProductsCardDetails;
