import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/UserContext/UserContext";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiLaptop } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiProductHuntLine } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 bg-gradient-to-tr from-[#0aa68e] to-[#149777] flex items-center">
            <div className="avatar mt-10  mb-3">
              <div className="w-24 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
            <div className="text-center my-3 text-white ">
              <p>
                <strong>{user?.displayName}</strong>
              </p>
              <p className="italic">
                <small>{user?.email}</small>
              </p>
            </div>

            <hr className="border-2 w-full mb-5" />
            <div>
              <li className="mb-2">
                <Link
                  to="/dashboard"
                  className="font-bold text-white bg-transparent hover:underline hover:underline-offset-4"
                >
                  <BiLaptop className="text-xl" />
                  My Orders
                </Link>
              </li>
              {isSeller && (
                <>
                  <li className="mb-2">
                    <Link
                      to="/dashboard/addProduct"
                      className=" font-bold text-white bg-transparent hover:underline hover:underline-offset-4"
                    >
                      <IoMdAddCircleOutline className="text-xl" />
                      Add Product
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/dashboard/myProducts"
                      className=" font-bold text-white bg-transparent hover:underline hover:underline-offset-4"
                    >
                      <RiProductHuntLine className="text-xl" />
                      My Products
                    </Link>
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li className="mb-2">
                    <Link
                      to="/dashboard/allSellers"
                      className="font-bold text-white bg-transparent hover:underline hover:underline-offset-4"
                    >
                      <AiOutlineUserAdd className="text-xl" />
                      All Sellers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/allBuyers"
                      className="font-bold text-white bg-transparent hover:underline hover:underline-offset-4"
                    >
                      <AiOutlineUsergroupAdd className="text-xl" />
                      All Buyers
                    </Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
