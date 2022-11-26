import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../compenents/Loading/Loading";
import AllSellerList from "./AllSellerList";

const AllSeller = () => {
  const url = `http://localhost:5000/users?role=Seller`;

  const {
    data: allSellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
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
      {allSellers.length === 0 ? (
        <>
          <div className="min-h-screen flex justify-center items-center text-lg">
            No Sellers Avaliable
          </div>
        </>
      ) : (
        <>
          <section className="max-w-4xl my-8 sm:my-8 md:my-10 lg:my-12 p-6 mx-auto ">
            <div className=" mb-10 sm:mb-16 text-center flex justify-center ">
              <h1 className=" text-3xl font-bold  italic">All Seller</h1>
              <hr className="border-2 w-7 border-[#149777]" />
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Verified Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allSellers.map((seller, indx) => (
                    <AllSellerList
                      key={seller._id}
                      indx={indx + 1}
                      seller={seller}
                      refetch={refetch}
                    ></AllSellerList>
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

export default AllSeller;
