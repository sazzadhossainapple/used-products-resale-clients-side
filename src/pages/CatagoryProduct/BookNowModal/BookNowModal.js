import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext/UserContext";

const BookNowModal = ({ isBookNow, setBookNow }) => {
  const { user, logOutUser } = useContext(AuthContext);
  const { _id, isSaleStatus, productName, resalePrice, productImage } =
    isBookNow;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const itemName = form.itemName.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const buyerBookProduct = {
      bookingId: _id,
      isSaleStatus,
      name,
      email,
      itemName,
      price,
      phone,
      location,
      productImage,
    };
    fetch("https://e-shoppers-server.vercel.app/buyerBookProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(buyerBookProduct),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOutUser();
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          setBookNow(null);
          form.reset();
          toast.success("Products is Booked");
          navigate("/dashboard/myOrders");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="bookNow" className="modal-toggle" />
      <div className="modal  modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block mt-3">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                disabled
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </label>

            <label className="block mt-3">
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </label>

            <label className="block mt-3">
              <input
                type="text"
                name="itemName"
                defaultValue={productName}
                disabled
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </label>
            <label className="block mt-3">
              <input
                type="text"
                name="price"
                defaultValue={resalePrice}
                disabled
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </label>
            <label className="block mt-3">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </label>
            <label className="block mt-3">
              <input
                type="text"
                name="location"
                placeholder="Your Loaction"
                className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </label>

            <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
              <label
                htmlFor="bookNow"
                type="button"
                className=" bg-transparent w-full px-4 py-4 text-sm font-medium uppercase text-center cursor-pointer tracking-wide text-gray-700 transition-colors duration-300 transform border border-gray-500 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
              >
                Cancel
              </label>

              <input
                className=" w-full px-4 py-4 mt-3 text-sm font-medium tracking-wide text-[#111111] uppercase
               transition-colors cursor-pointer
              border-[#ffc600] text-center
              duration-300 transform bg-[#ffc600] rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-[#eebe0f] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookNowModal;
