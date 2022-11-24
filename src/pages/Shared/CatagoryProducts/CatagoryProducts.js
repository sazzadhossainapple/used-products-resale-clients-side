import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../../../compenents/Loading/Loading";

const CatagoryProducts = () => {
  const catagoryProduct = useLoaderData();
  const [loaging, setLoading] = useState(true);

  const { catagoryName } = catagoryProduct;
  return (
    <>
      (
      <div className="my-10 sm:my-12 md:my-16 lg:my-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mb-16 text-center flex justify-center ">
          <h1 className=" text-3xl font-bold  italic">{catagoryName}</h1>
          <hr className="border-2 w-7 border-[#149777]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"></div>
      </div>
      )
    </>
  );
};

export default CatagoryProducts;
