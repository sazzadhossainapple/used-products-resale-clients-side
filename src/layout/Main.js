import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import ScrollToTop from '../hooks/ScrollToTop';

const Main = () => {
    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
