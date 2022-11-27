import React, { useContext } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext/UserContext";

const AdvertisedCard = ({ advertisement }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    catagoryId,
    productImage,
    productName,
    resalePrice,
    orginalPrice,
    location,
    useYear,
  } = advertisement;

  const handleBook = () => {
    if (user?.email) {
      return navigate(`/catagory/${catagoryId}`);
    } else {
      return navigate("/login");
    }
  };
  return (
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage: `url(${productImage})`,
          backgroundPosition: "center",
        }}
      ></div>

      <div className="w-2/3 p-4 md:p-4 relative">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          {productName}
        </h1>

        <div className="flex gap-4">
          <p className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-400">
            <HiOutlineLocationMarker />
            {location}
          </p>
          <p className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-400">
            <AiOutlineCalendar />
            {useYear} Years Use
          </p>
        </div>

        <div className="flex mt-2 item-center gap-4 mb-6">
          <strong>
            <small>Resale: ${resalePrice}</small>
          </strong>
          <strong>
            <small>Original: ${orginalPrice}</small>
          </strong>
        </div>

        <div className=" block absolute bottom-2  mt-10 item-center">
          <>
            <button
              onClick={handleBook}
              className="btn btn-xs  bg-[#ffc600] rounded-md  text-[#111111] border-none hover:bg-[#eebe0f]"
            >
              order Now
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;
