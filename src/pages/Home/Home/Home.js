import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';

import Banner from '../Banner/Banner';
import ProductsAndBuyersCount from '../ProductsAndBuyersCount/ProductsAndBuyersCount';
import ProductsCatagory from '../ProductsCatagory/ProductsCatagory';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProductsCatagory />
            {/* <AdvertisedItems /> */}
            <ProductsAndBuyersCount />
        </div>
    );
};

export default Home;
