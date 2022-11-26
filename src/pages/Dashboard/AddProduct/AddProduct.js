import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../api/addProduct";
import { getImageUrl } from "../../../api/imageUpload";
import Loading from "../../../compenents/Loading/Loading";
import { AuthContext } from "../../../context/UserContext/UserContext";
import AddProductForm from "./AddProductForm";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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

    const catagoryId = form.catagoryId.value;
    const productName = form.productName.value;
    const resalePrice = form.resalePrice.value;
    const orginalPrice = form.orginalPrice.value;
    const useYear = form.useYear.value;
    const location = form.location.value;
    const phoneNumber = form.phoneNumber.value;
    const image = form.image.files[0];
    const condition = form.condition.value;
    const description = form.description.value;
    console.log(
      catagoryId,
      productName,
      resalePrice,
      orginalPrice,
      useYear,
      location,
      phoneNumber,
      image,
      condition,
      description,
      user?.displayName,
      user?.email,
      user?.photoURL
    );

    getImageUrl(image)
      .then((imageData) => {
        const products = {
          catagoryId,
          productName,
          resalePrice,
          orginalPrice,
          useYear,
          location,
          phoneNumber,
          productImage: imageData,
          condition,
          description,
          sellerName: user?.displayName,
          email: user?.email,
          sellerImage: user?.photoURL,
        };

        addProduct(products)
          .then((data) => {
            if (data.acknowledged) {
              console.log(data);
              form.reset();
              toast.success("Products Added Successfully.");
              navigate("/dashboard/myProducts");
            }
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const conditions = [
    { id: 1, chackedName: "Excellent" },
    { id: 2, chackedName: "Good" },
    { id: 3, chackedName: "Fair" },
  ];

  return (
    <section className="max-w-4xl my-8 sm:my-8 md:my-10 lg:my-12 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <div className=" mb-10 sm:mb-16 text-center flex justify-center ">
        <h1 className=" text-3xl font-bold  italic">Add Product</h1>
        <hr className="border-2 w-7 border-[#149777]" />
      </div>
      <AddProductForm
        handleAddProducts={handleAddProducts}
        catagories={catagories}
        conditions={conditions}
      />
    </section>
  );
};

export default AddProduct;
