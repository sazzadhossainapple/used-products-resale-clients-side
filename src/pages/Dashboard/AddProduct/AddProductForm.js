import React from "react";
import Button from "../../../compenents/Button/Button";

const AddProductForm = ({ handleAddProducts, catagories, conditions }) => {
  return (
    <form onSubmit={handleAddProducts}>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
        <div>
          <label className="text-gray-700 dark:text-gray-200">
            Product Catagory
          </label>
          <select
            name="catagoryId"
            required
            className="select  block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          >
            {catagories.map((catagory) => (
              <option value={catagory._id} key={catagory._id}>
                {catagory.catagoryName}
              </option>
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
            name="image"
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
        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
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
  );
};

export default AddProductForm;
