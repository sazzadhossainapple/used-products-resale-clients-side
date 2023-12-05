import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <hr />
            <footer className="bg-white dark:bg-gray-900 px-4 sm:px-6 md:px-12 lg:px-20">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-10 lg:w-2/5">
                            <div className="px-6">
                                <div>
                                    <Link
                                        href="#"
                                        className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                                    >
                                        E-Shoppers
                                    </Link>
                                </div>

                                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                                    Only Laptop Resale of all Bands.
                                </p>

                                <div className="flex mt-6 -mx-2">
                                    <Link
                                        href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Reddit"
                                    >
                                        <BsFacebook />
                                    </Link>

                                    <Link
                                        href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Facebook"
                                    >
                                        <AiFillInstagram />
                                    </Link>

                                    <Link
                                        href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Github"
                                    >
                                        <AiFillTwitterCircle />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">
                                        About
                                    </h3>
                                    <Link
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Company
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Community
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Careers
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">
                                        Blog
                                    </h3>
                                    <Link
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Recently
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Trending
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        All
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">
                                        Products
                                    </h3>
                                    <Link
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        HP Laptop
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        ASUS Laptop
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Dell Laptop
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">
                                        Contact
                                    </h3>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        +1 526 654 8965
                                    </span>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        eshoppers@email.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                    <div>
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            © E-Shoppers 2022 - All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
