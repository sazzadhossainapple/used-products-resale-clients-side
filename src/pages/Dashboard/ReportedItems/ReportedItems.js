import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../compenents/Loading/Loading";
import ReportedItemList from "./ReportedItemList";

const ReportedItems = () => {
  const url = "https://e-shoppers-server.vercel.app/reportedProduct";

  const {
    data: allReportedProduct = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allReportedProduct"],
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
      {allReportedProduct.length === 0 ? (
        <>
          <div className="min-h-screen flex justify-center items-center text-lg">
            No Reported Product Avaliable
          </div>
        </>
      ) : (
        <>
          <section className="max-w-5xl my-8 sm:my-8 md:my-10 lg:my-12 p-6 mx-auto ">
            <div className=" mb-10 sm:mb-16 text-center flex justify-center ">
              <h1 className=" text-3xl font-bold  italic">Reported Product</h1>
              <hr className="border-2 w-7 border-[#149777]" />
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Seller Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allReportedProduct.map((reportedProduct, indx) => (
                    <ReportedItemList
                      key={reportedProduct._id}
                      indx={indx + 1}
                      reportedProduct={reportedProduct}
                      refetch={refetch}
                    ></ReportedItemList>
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

export default ReportedItems;
