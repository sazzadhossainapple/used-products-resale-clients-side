import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../../../compenents/Loading/Loading";
import BookNowModal from "../BookNowModal/BookNowModal";
import ProductCard from "./ProductCard";

const CatagoryProducts = () => {
  const catagoryProduct = useLoaderData();
  const [isBookNow, setBookNow] = useState(null);

  // verified seller get all
  const url = "https://e-shoppers-server.vercel.app/users?role=Seller";
  const { data: allSellers = [], isLoading } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

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
            allSellers={allSellers}
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
