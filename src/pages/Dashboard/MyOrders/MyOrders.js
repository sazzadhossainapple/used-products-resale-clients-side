import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loading from "../../../compenents/Loading/Loading";
import { AuthContext } from "../../../context/UserContext/UserContext";
import BookProductsCard from "./BookProductsCard";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/buyerBookProducts?email=${user?.email}`;

  const { data: bookProducts = [], isLoading } = useQuery({
    queryKey: ["bookProducts", user?.email],
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
      {bookProducts.length === 0 ? (
        <>
          <div className="min-h-screen flex justify-center items-center text-lg">
            No Orders Avaliable
          </div>
        </>
      ) : (
        <>
          <section className=" my-8 sm:my-8 md:my-10 lg:my-12 px-4 sm:px-6 md:px-12 lg:px-16">
            <div className=" mb-10 sm:mb-16 text-center flex justify-center ">
              <h1 className=" text-3xl font-bold  italic">My Orders</h1>
              <hr className="border-2 w-7 border-[#149777]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
              {bookProducts.map((bookProduct) => (
                <BookProductsCard
                  key={bookProduct._id}
                  bookProduct={bookProduct}
                ></BookProductsCard>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default MyOrders;
