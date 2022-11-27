import React from "react";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";

import Banner from "../Banner/Banner";
import ProductsCatagory from "../ProductsCatagory/ProductsCatagory";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductsCatagory />
      <AdvertisedItems />
    </div>
  );
};

export default Home;
