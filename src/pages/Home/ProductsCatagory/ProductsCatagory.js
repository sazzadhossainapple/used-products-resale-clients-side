import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../compenents/Loading/Loading';
import ProductsCatagoryListItem from './ProductsCatagoryListItem';

const ProductsCatagory = () => {
    const { data: catagories = [], isLoading } = useQuery({
        queryKey: ['catagories'],
        queryFn: async () => {
            try {
                const res = await fetch(
                    `${process.env.REACT_APP_URL}/api/allcatagory`
                );
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

    return (
        <div className="my-10 sm:my-12 md:my-16 lg:my-20 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="mb-16 text-center flex justify-center ">
                <h1 className=" text-3xl font-bold  italic">
                    All Catagory Laptop
                </h1>
                <hr className="border-2 w-7 border-[#149777]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {catagories?.data?.map((catagory) => (
                    <ProductsCatagoryListItem
                        key={catagory._id}
                        catagory={catagory}
                    ></ProductsCatagoryListItem>
                ))}
            </div>
        </div>
    );
};

export default ProductsCatagory;
