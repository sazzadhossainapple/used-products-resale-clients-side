import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../compenents/Button/Button';
import { CgProfile } from 'react-icons/cg';
import { AuthContext } from '../../../context/UserContext/UserContext';
import userDefaultImage from '../../../asserts/Images/profile/profile-img.png';
import Loading from '../../../compenents/Loading/Loading';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [findUser, setFindUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const userSignOut = () => {
        logOutUser()
            .then(() => {})
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        getAllData();
    }, []);

    function getAllData() {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_URL}/api/users/${user?.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setFindUser(data?.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }

    if (isLoading) {
        return <Loading></Loading>;
    }

    console.log(findUser?.userImage);

    const NavLinkItems = (
        <>
            <li className="mr-3">
                <Link
                    className="text-lg hover:bg-[#ffc600] hover:text-[#111111]  rounded-md"
                    to="/home"
                >
                    Home
                </Link>
            </li>
            <li className="mr-3">
                <Link
                    className="text-lg hover:bg-[#ffc600] hover:text-[#111111]  rounded-md"
                    to="/about"
                >
                    About Us
                </Link>
            </li>
            <li className="mr-3">
                <Link
                    className="text-lg hover:bg-[#ffc600] hover:text-[#111111]  rounded-md"
                    // to="/about"
                >
                    Products
                </Link>
            </li>
            <li className="mr-3">
                <Link
                    className="text-lg hover:bg-[#ffc600] hover:text-[#111111]  rounded-md"
                    to="/blog"
                >
                    Blog
                </Link>
            </li>
            <li className="mr-3">
                <Link
                    className="text-lg hover:bg-[#ffc600] hover:text-[#111111]  rounded-md"
                    to="/contact"
                >
                    Contact Us
                </Link>
            </li>

            {user?.email && (
                <li className="mr-3 hidden  lg:flex ">
                    <Link
                        className="text-lg hover:bg-[#ffc600] hover:text-[#111111]  rounded-md"
                        to="/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )}
            {user?.email && (
                <li tabIndex={0} className="flex lg:hidden">
                    <Link
                        to="/dashboard"
                        className="hover:bg-[#ffc600] hover:text-black"
                    >
                        Dashboard
                        <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </Link>
                    <ul className="p-2 bg-[#149777]">
                        <li>
                            <label
                                htmlFor="dashboard-drawer"
                                className=" text-white drawer-button lg:hidden"
                            >
                                Dashboard
                            </label>
                        </li>
                    </ul>
                </li>
            )}
        </>
    );

    return (
        <div className="navbar bg-gradient-to-tr from-[#0aa68e] to-[#149777] text-white py-3 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#149777] rounded-box w-52"
                    >
                        {NavLinkItems}
                    </ul>
                </div>
                <Link to="/" className=" text-[22px]">
                    <strong>
                        E-<span className="text-[#ffcb0e]">Shoppers</span>
                    </strong>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{NavLinkItems}</ul>
            </div>
            <div className="navbar-end">
                {user?.email ? (
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    src={
                                        findUser?.userImage
                                            ? findUser?.userImage
                                            : userDefaultImage
                                    }
                                    alt=""
                                />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li className="mb-3 ">
                                <span className="text-xl w-full text-black bg-transparent">
                                    {user?.displayName
                                        ? user.displayName
                                        : 'not found'}
                                </span>
                            </li>

                            <li>
                                <button
                                    className="btn bg-[#ffc600] rounded-md  text-[#111111] border-none hover:bg-[#eebe0f]"
                                    onClick={userSignOut}
                                >
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <Link to="/login">
                            <Button>
                                <CgProfile className="text-lg mr-1"></CgProfile>
                                Sign in
                            </Button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
