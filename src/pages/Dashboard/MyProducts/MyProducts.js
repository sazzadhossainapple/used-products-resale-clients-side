import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../compenents/Loading/Loading';
import { AuthContext } from '../../../context/UserContext/UserContext';
import ProductListCard from './ProductListCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `${process.env.REACT_APP_URL}/api/products?email=${user?.email}`;

    const {
        data: myProducts = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['myProducts', user?.email],
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
            {myProducts?.data?.product?.length === 0 ? (
                <>
                    <div className="min-h-screen flex justify-center items-center text-lg">
                        No Products Avaliable
                    </div>
                </>
            ) : (
                <>
                    <section className=" my-3 sm:my-4 md:my-5 lg:my-6  p-6 mx-auto ">
                        <div className=" mb-6 sm:mb-8 text-center flex justify-center ">
                            <h1 className=" text-3xl font-bold  italic">
                                My Product
                            </h1>
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
                                        <th>Advertisement</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myProducts?.data?.product?.map(
                                        (product, indx) => (
                                            <ProductListCard
                                                key={product._id}
                                                product={product}
                                                indx={indx + 1}
                                                refetch={refetch}
                                            ></ProductListCard>
                                        )
                                    )}
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
