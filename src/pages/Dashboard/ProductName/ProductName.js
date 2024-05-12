import React, { useState } from 'react';
import Button from '../../../compenents/Button/Button';
import toast from 'react-hot-toast';
import Loading from '../../../compenents/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { ProductNameList } from './ProductNameList';

const ProductName = () => {
    const initialProduct = {
        catagoryName: '',
    };
    const [addProduct, setAddProduct] = useState(initialProduct);
    const [showModal, setShowModal] = useState(false);

    const url = `${process.env.REACT_APP_URL}/api/allcatagory`;

    const {
        data: allProducts = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['allProducts'],
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

    const allProduct = allProducts?.data;

    console.log(allProduct);

    const handleChange = (e) => {
        setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            catagoryName: addProduct?.catagoryName,
        };

        console.log(newProduct);

        fetch(`${process.env.REACT_APP_URL}/api/allcatagory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.success) {
                    console.log(data);
                    toast.success('Product added successfully.');
                    setAddProduct(initialProduct);
                    setShowModal(false);
                    refetch();
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error('Not addedProduct!!!');
            });
    };
    return (
        <>
            {allProduct.length === 0 ? (
                <>
                    <div className="min-h-screen flex justify-center items-center text-lg">
                        No Products Avaliable
                    </div>
                </>
            ) : (
                <>
                    <section className="max-w-4xl my-8 sm:my-8 md:my-10 lg:my-12 p-6 mx-auto ">
                        <div className=" mb-10 sm:mb-16 text-center flex justify-center ">
                            <h1 className=" text-3xl font-bold  italic">
                                All Product Catagory
                            </h1>
                            <hr className="border-2 w-7 border-[#149777]" />
                        </div>
                        <div className="mb-4 flex justify-end">
                            <label
                                htmlFor="my-modal-3"
                                className="btn btn-sm bg-[#149777] border-[#149777] text-sm"
                            >
                                Add Product
                            </label>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>SL.NO</th>
                                        <th>Product Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allProduct.map((data, indx) => (
                                        <ProductNameList
                                            key={data._id}
                                            indx={indx + 1}
                                            data={data}
                                            refetch={refetch}
                                        ></ProductNameList>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <div>
                        <input
                            type="checkbox"
                            id="my-modal-3"
                            className="modal-toggle"
                            checked={showModal}
                            onChange={() => setShowModal(!showModal)}
                        />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label
                                    htmlFor="my-modal-3"
                                    className="btn btn-sm btn-circle absolute right-2 top-2"
                                >
                                    ✕
                                </label>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200">
                                            Product Name
                                        </label>
                                        <input
                                            name="catagoryName"
                                            onChange={handleChange}
                                            value={addProduct?.catagoryName}
                                            type="text"
                                            required
                                            placeholder="Product Name"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        />
                                    </div>
                                    <div className="flex justify-center mt-6">
                                        <Button>Add Product</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ProductName;
