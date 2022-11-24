import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLaptop } from "react-icons/ai";

const ProductsCatagoryListItem = ({ catagory }) => {
  const { _id, catagoryName } = catagory;

  return (
    <Link to={`/catagory/${_id}`}>
      <div className="bg-gradient-to-tr from-[#0aa68e] to-[#149777] w-full text-white py-4 text-xl rounded flex justify-center items-center gap-2">
        <span>
          <AiOutlineLaptop />
        </span>
        <span> {catagoryName}</span>
      </div>
    </Link>
  );
};

export default ProductsCatagoryListItem;
