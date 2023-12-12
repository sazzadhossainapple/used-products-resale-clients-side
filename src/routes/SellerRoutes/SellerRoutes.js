import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../compenents/Loading/Loading';
import { AuthContext } from '../../context/UserContext/UserContext';
import useSeller from '../../hooks/useSeller';

const SellerRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller();
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loading></Loading>;
    }

    if (user && isSeller) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoutes;
