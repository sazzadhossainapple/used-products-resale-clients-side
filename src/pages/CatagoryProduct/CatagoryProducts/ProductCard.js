import React, { useState } from 'react';
import { AiOutlineLaptop, AiOutlineCalendar, AiFillStar } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiTime } from 'react-icons/bi';
import { IoMdPricetags } from 'react-icons/io';
import { GoReport } from 'react-icons/go';
import toast from 'react-hot-toast';
import moment from 'moment';

const ProductCard = ({ product, setBookNow, allSellers }) => {
    const {
        _id,
        createdAt,
        location,
        orginalPrice,
        productImage,
        productName,
        resalePrice,
        sellerName,
        useYear,
        sellerImage,
        isSaleStatus,
    } = product;

    const handleReportedItem = (id) => {
        fetch(`https://e-shoppers-server.vercel.app/reportedProduct/${id}`, {
            method: 'PATCH',
            //   headers: {
            //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
            //   },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('You have reported this product!!');
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            {isSaleStatus !== true && (
                <div className="w-full max-w-sm overflow-hidden relative bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img
                        className="object-cover object-center w-full h-56"
                        src={productImage}
                        alt="avatar"
                    />
                    <div className=" top-0 right-0 absolute">
                        {isSaleStatus === true ? (
                            <>
                                <h1 className="text-white bg-[#149777] font-bold py-2 px-3">
                                    Sold
                                </h1>
                            </>
                        ) : (
                            <>
                                <h1 className="text-white bg-[#149777] font-bold py-2 px-3">
                                    Available
                                </h1>
                            </>
                        )}
                    </div>

                    <div className="flex items-center px-6 py-3 bg-gray-900">
                        <AiOutlineLaptop className="text-white text-xl" />

                        <h1 className="mx-3 text-lg font-semibold text-white">
                            {productName}
                        </h1>
                    </div>

                    <div className="px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={sellerImage} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex">
                                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                                            {sellerName}
                                        </h1>

                                        <p className="bg-blue-600 flex justify-center items-center text-white w-4 h-4 rounded-full ml-1">
                                            <AiFillStar className="text-xs" />
                                        </p>
                                    </div>
                                    <p className="text-xs">Seller</p>
                                </div>
                            </div>
                            <div
                                className="tooltip tooltip-error"
                                data-tip="Report"
                            >
                                <button onClick={() => handleReportedItem(_id)}>
                                    <GoReport className="text-xl" />
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between mt-3">
                            <div className="flex items-center text-gray-700 dark:text-gray-200">
                                <HiOutlineLocationMarker />
                                <h1 className="px-2 text-sm">{location}</h1>
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-200">
                                <AiOutlineCalendar />
                                <h1 className="px-2 text-sm">{`${useYear} Years Use`}</h1>
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-200">
                                <BiTime></BiTime>
                                <h1 className="px-2 text-sm">
                                    {moment(createdAt, 'YYYYMMDD').fromNow()}
                                </h1>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex items-center text-gray-700 dark:text-gray-200 my-4">
                                <IoMdPricetags className="text-xl"></IoMdPricetags>
                                <h1 className="px-2 text-base">
                                    <strong>Sale: ${resalePrice}</strong>
                                </h1>
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-200 my-4">
                                <IoMdPricetags className="text-xl"></IoMdPricetags>
                                <h1 className="px-2 text-base">
                                    <strong>Orginal: ${orginalPrice}</strong>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <label
                        onClick={() => setBookNow(product)}
                        htmlFor="bookNow"
                        className="btn w-full bg-[#ffc600] rounded-md  text-[#111111] border-none hover:bg-[#eebe0f]"
                    >
                        Book Now
                    </label>
                </div>
            )}
        </>
    );
};

export default ProductCard;
