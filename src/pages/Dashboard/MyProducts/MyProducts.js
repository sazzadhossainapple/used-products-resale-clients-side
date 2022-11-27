import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loading from "../../../compenents/Loading/Loading";
import { AuthContext } from "../../../context/UserContext/UserContext";
import ProductListCard from "./ProductListCard";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `https://e-shoppers-server.vercel.app/sellerProduct/${user?.email}`;

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      {myProducts.length === 0 ? (
        <>
          <div className="min-h-screen flex justify-center items-center text-lg">
            No Products Avaliable
          </div>
        </>
      ) : (
        <>
          <section className="max-w-4xl my-8 sm:my-8 md:my-10 lg:my-12 p-6 mx-auto ">
            <div className=" mb-10 sm:mb-16 text-center flex justify-center ">
              <h1 className=" text-3xl font-bold  italic">My Product</h1>
              <hr className="border-2 w-7 border-[#149777]" />
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Sales Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myProducts.map((product, indx) => (
                    <ProductListCard
                      key={product._id}
                      product={product}
                      indx={indx + 1}
                      refetch={refetch}
                    ></ProductListCard>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default MyProducts;
