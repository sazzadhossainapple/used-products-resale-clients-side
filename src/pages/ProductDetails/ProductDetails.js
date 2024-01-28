import React from 'react';
import { useLoaderData } from 'react-router-dom';

function ProductDetails() {
    const product = useLoaderData();
    const productDetails = product?.data;
    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="my-10 sm:my-12 md:my-16 lg:my-20 ">
                <div className="mb-16 text-center flex justify-center ">
                    <h1 className=" text-3xl font-bold  italic">
                        {productDetails?.productName}
                    </h1>
                    <hr className="border-2 w-7 border-[#149777]" />
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
