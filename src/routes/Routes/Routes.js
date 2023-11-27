import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layout/DashboardLayout';
import Main from '../../layout/Main';
import Blog from '../../pages/Blog/Blog';
import AddProduct from '../../pages/Dashboard/AddProduct/AddProduct';
import AllBuyers from '../../pages/Dashboard/AllBuyers/AllBuyers';
import AllSeller from '../../pages/Dashboard/AllSeller/AllSeller';
import MyOrders from '../../pages/Dashboard/MyOrders/MyOrders';
import MyProducts from '../../pages/Dashboard/MyProducts/MyProducts';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import CatagoryProducts from '../../pages/CatagoryProduct/CatagoryProducts/CatagoryProducts';
import AdminRoutes from '../AdminRoutes/AdminRoutes';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import SellerRoutes from '../SellerRoutes/SellerRoutes';
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard';
import BuyerRoutes from '../BuyerRoutes/BuyerRoutes';
import ReportedItems from '../../pages/Dashboard/ReportedItems/ReportedItems';
import Payment from '../../pages/Dashboard/Payment/Payment';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/blog', element: <Blog /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            {
                path: '/catagory/:id',
                element: <CatagoryProducts />,
                loader: ({ params }) =>
                    fetch(
                        `${process.env.REACT_APP_URL}/api/allcatagory/${params.id}`
                    ),
            },
        ],
    },

    {
        path: '/dashboard',
        element: (
            <PrivateRoutes>
                <DashboardLayout />
            </PrivateRoutes>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />,
            },

            {
                path: '/dashboard/myOrders',
                element: (
                    <BuyerRoutes>
                        <MyOrders />
                    </BuyerRoutes>
                ),
            },

            {
                path: '/dashboard/payment/:id',
                element: (
                    <BuyerRoutes>
                        <Payment />
                    </BuyerRoutes>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://e-shoppers-server.vercel.app/buyerBookProducts/${params.id}`
                    ),
            },
            {
                path: '/dashboard/addProduct',
                element: (
                    <SellerRoutes>
                        <AddProduct />
                    </SellerRoutes>
                ),
            },
            {
                path: '/dashboard/myProducts',
                element: (
                    <SellerRoutes>
                        <MyProducts />
                    </SellerRoutes>
                ),
            },
            {
                path: '/dashboard/allSellers',
                element: (
                    <AdminRoutes>
                        <AllSeller />
                    </AdminRoutes>
                ),
            },
            {
                path: '/dashboard/allBuyers',
                element: (
                    <AdminRoutes>
                        <AllBuyers />
                    </AdminRoutes>
                ),
            },
            {
                path: '/dashboard/reportedItems',
                element: (
                    <AdminRoutes>
                        <ReportedItems />
                    </AdminRoutes>
                ),
            },
        ],
    },
]);
