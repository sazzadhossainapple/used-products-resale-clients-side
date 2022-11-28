import React from "react";
import { Link } from "react-router-dom";

const BookProductsCard = ({ bookProduct }) => {
  const { _id, productImage, itemName, price, isSaleStatus } = bookProduct;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      <div
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{
          backgroundImage: `url(${productImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {itemName}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">
            ${price}
          </span>
          {price && !isSaleStatus && (
            <Link to={`/dashboard/payment/${_id}`}>
              <button className="btn btn-xs bg-[#ffc600] rounded-md  text-[#111111] border-none hover:bg-[#eebe0f]">
                Payment
              </button>
            </Link>
          )}

          {price && isSaleStatus && (
            <span className="text-[#111111] font-bold">Paid</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookProductsCard;
