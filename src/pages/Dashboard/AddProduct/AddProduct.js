import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Button from "../../../compenents/Button/Button";
import Loading from "../../../compenents/Loading/Loading";
import { AuthContext } from "../../../context/UserContext/UserContext";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const { data: catagories = [], isLoading } = useQuery({
    queryKey: ["catagories"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/allcatagory");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleAddProducts = (e) => {
    e.preventDefault();
    const form = e.target;

    const catagoryName = form.catagoryName.value;
    const productName = form.productName.value;
    const resalePrice = form.resalePrice.value;
    const orginalPrice = form.orginalPrice.value;
    const useYear = form.useYear.value;
    const location = form.location.value;
    const phoneNumber = form.phoneNumber.value;
    // const image = form.image.files[0];
    const condition = form.condition.value;
    const description = form.description.value;
    console.log(
      catagoryName,
      productName,
      resalePrice,
      orginalPrice,
      useYear,
      location,
      phoneNumber,
      condition,
      description,
      user?.displayName,
      user?.email
    );
  };

  const conditions = [
    { id: 1, chackedName: "Excellent" },
    { id: 2, chackedName: "Good" },
    { id: 3, chackedName: "Fair" },
  ];

  return (
    <section className="max-w-4xl my-8 sm:my-10 md:my-12 lg:my-14 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <div className="mb-16 text-center flex justify-center ">
        <h1 className=" text-3xl font-bold  italic">Add Product</h1>
        <hr className="border-2 w-7 border-[#149777]" />
      </div>

      <form onSubmit={handleAddProducts}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Product Catagory
            </label>
            <select
              name="catagoryName"
              required
              className="select  block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              {catagories.map((catagory) => (
                <option key={catagory._id}>{catagory.catagoryName}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Product Name
            </label>
            <input
              name="productName"
              type="text"
              required
              placeholder="Laptop Name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Resale Price
            </label>
            <input
              type="number"
              name="resalePrice"
              required
              placeholder="Resale Price"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Orginal Price
            </label>
            <input
              type="number"
              name="orginalPrice"
              required
              placeholder="Orginal Price"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Purchase of year
            </label>

            <input
              type="text"
              name="useYear"
              required
              placeholder="Purchase of year"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200">Location</label>

            <input
              type="text"
              placeholder="Location"
              name="location"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Phone Number
            </label>

            <input
              type="text"
              name="phoneNumber"
              required
              placeholder="Phone Number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Product Image
            </label>

            <input
              type="file"
              name="productImage"
              accept="image/*"
              placeholder="Your Image"
              required
              className="mt-2 file-input file-input-bordered border-blue-400 rounded-md w-full "
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Product Condition
            </label>

            <select
              name="condition"
              required
              className="select  block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              {conditions.map((condition) => (
                <option key={condition.id}>{condition.chackedName}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full mt-4">
          <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Description
          </label>

          <textarea
            name="description"
            className="block w-full h-20 px-4 py-2 text-gray-700 bg-white border border-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          ></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <Button>Add Product</Button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
