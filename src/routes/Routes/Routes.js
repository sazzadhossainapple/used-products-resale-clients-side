import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../../pages/Dashboard/AllSeller/AllSeller";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import CatagoryProducts from "../../pages/CatagoryProduct/CatagoryProducts/CatagoryProducts";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/catagory/:id",
        element: (
          <PrivateRoutes>
            <CatagoryProducts />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/catagory/${params.id}`),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <MyOrders />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoutes>
            <AddProduct />
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoutes>
            <MyProducts />
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/allSellers",
        element: (
          <AdminRoutes>
            <AllSeller />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/allBuyers",
        element: (
          <AdminRoutes>
            <AllBuyers />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
