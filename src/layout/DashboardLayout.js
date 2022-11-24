import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/UserContext/UserContext";
import Navbar from "../pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  // const [isAdmin] = useAdmin(user?.email);

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
            <div className="avatar my-3">
              <div className="w-24 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
            <div className="text-center my-3 text-white ">
              <p>
                <strong>{user?.displayName}</strong>
              </p>
              <p>
                <small>{user?.email}</small>
              </p>
            </div>

            <hr className="border-2 w-full text-white mb-5" />
            <li>
              <Link to="">My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
