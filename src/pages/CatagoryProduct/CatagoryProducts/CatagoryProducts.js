import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../../../compenents/Loading/Loading";
import BookNowModal from "../BookNowModal/BookNowModal";
import ProductCard from "./ProductCard";

const CatagoryProducts = () => {
  const catagoryProduct = useLoaderData();
  const [loaging, setLoading] = useState(true);
  const [isBookNow, setBookNow] = useState(null);

  return (
    <div className="my-8 sm:my-10 md:my-12 lg:my-14 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="mb-8 sm:mb-8 md:mb-10 lg:mb-16 text-center flex justify-center ">
        <h1 className=" text-3xl font-bold  italic">laptop</h1>
        <hr className="border-2 w-7 border-[#149777]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {catagoryProduct.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setBookNow={setBookNow}
          ></ProductCard>
        ))}
      </div>
      {isBookNow && (
        <BookNowModal
          isBookNow={isBookNow}
          setBookNow={setBookNow}
        ></BookNowModal>
      )}
    </div>
  );
};

export default CatagoryProducts;
