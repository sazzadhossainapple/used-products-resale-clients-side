import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../compenents/Loading/Loading';
import { AuthContext } from '../../context/UserContext/UserContext';
import useAdmin from '../../hooks/useAdmin';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>;
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
