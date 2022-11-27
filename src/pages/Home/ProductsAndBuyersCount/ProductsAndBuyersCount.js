import React from "react";
import ProductsAndBuyerCard from "./ProductsAndBuyerCard";

import Image1 from "../../../asserts/Images/buyer.jpg";
import Image2 from "../../../asserts/Images/banner/banner1.webp";
import Image3 from "../../../asserts/Images/sell.jpg";

const ProductsAndBuyersCount = () => {
  const productsAndBuyer = [
    { id: 1, count: 30, name: "Customers", image: Image1 },
    { id: 2, count: 20, name: "Laptop Sales", image: Image2 },
    { id: 3, count: 10, name: "Seller", image: Image3 },
  ];

  return (
    <div className="my-10 sm:my-12 md:my-16 lg:my-20 px-4 bg-[#8d93ff67]">
      <div className="sm:px-6 md:px-12 lg:px-20   py-8 sm:py-10 md-py-14 lg:py-20 ">
        <div className="grid lg:grid-cols-3 gap-10">
          {productsAndBuyer.map((productBuyer) => (
            <ProductsAndBuyerCard
              key={productBuyer.id}
              productBuyer={productBuyer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsAndBuyersCount;
