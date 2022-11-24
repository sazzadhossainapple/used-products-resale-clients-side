import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import CatagoryProducts from "../../pages/Shared/CatagoryProducts/CatagoryProducts";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
        element: <CatagoryProducts />,
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
    ],
  },
]);
