import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../compenents/Button/Button";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
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
      {/* <li className="mr-3">
        <Link
          className="text-lg hover:bg-[#ffc600] hover:text-[#111111]  rounded-md"
          to="/home"
        >
          Dashboard
        </Link>
      </li> */}
      <li className="mr-3">
        <Link
          className="text-lg hover:bg-[#ffc600] hover:text-[#111111]  rounded-md"
          to="/blog"
        >
          Blog
        </Link>
      </li>
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
        <Link>
          <Button>
            <CgProfile className="text-lg mr-1"></CgProfile>
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
