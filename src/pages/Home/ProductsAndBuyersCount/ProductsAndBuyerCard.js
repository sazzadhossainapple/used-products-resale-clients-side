import React from "react";

const ProductsAndBuyerCard = ({ productBuyer }) => {
  const { count, name, image } = productBuyer;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      <div
        className="w-full h-64  bg-center bg-cover rounded-3xl shadow-2xl"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <div className="w-56 -mt-24 overflow-hidden bg-gradient-to-tr from-[#0aa68e] to-[#149777] rounded-lg shadow-lg md:w-64  text-center">
        <h3 className="py-2 font-bold tracking-wide  text-white text-3xl uppercase dark:text-white">
          {count}+
        </h3>
        <p className="mb-2 text-white">
          <strong> {name}</strong>
        </p>
      </div>
    </div>
  );
};

export default ProductsAndBuyerCard;
