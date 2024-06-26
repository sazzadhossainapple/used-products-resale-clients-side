import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../compenents/Loading/Loading';
import AllBuyerList from './AllBuyerList';

const AllBuyers = () => {
    const url = `${process.env.REACT_APP_URL}/api/users?role=Buyer`;

    const {
        data: allBuyers = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const accessToken = localStorage.getItem('accessToken');
            const res = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    const allBuyer = allBuyers?.data?.users;
    return (
        <>
            {allBuyer.length === 0 ? (
                <>
                    <div className="min-h-screen flex justify-center items-center text-lg">
                        No Sellers Avaliable
                    </div>
                </>
            ) : (
                <>
                    <section className="max-w-4xl my-8 sm:my-8 md:my-10 lg:my-12 p-6 mx-auto ">
                        <div className=" mb-10 sm:mb-16 text-center flex justify-center ">
                            <h1 className=" text-3xl font-bold  italic">
                                All Buyer
                            </h1>
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allBuyer.map((buyer, indx) => (
                                        <AllBuyerList
                                            key={buyer._id}
                                            indx={indx + 1}
                                            buyer={buyer}
                                            refetch={refetch}
                                        ></AllBuyerList>
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

export default AllBuyers;
