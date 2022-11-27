import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../compenents/Loading/Loading";
import AdvertisedCard from "./AdvertisedCard";

const AdvertisedItems = () => {
  const url = `http://localhost:5000/advertisement`;

  const { data: advertisements = [], isLoading } = useQuery({
    queryKey: ["advertisements"],
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
      {advertisements.length > 0 && (
        <div className="my-10 sm:my-12 md:my-16 lg:my-20 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="mb-10  ">
            <h1 className=" text-lg font-bold  italic">Advertisment</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {advertisements.map((advertisement) => (
              <AdvertisedCard
                key={advertisement._id}
                advertisement={advertisement}
              ></AdvertisedCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisedItems;
