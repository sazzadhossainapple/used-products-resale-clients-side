import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../compenents/Loading/Loading";
import { AuthContext } from "../../context/UserContext/UserContext";
import useByuer from "../../hooks/useByuer";

const BuyerRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useByuer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return <Loading></Loading>;
  }

  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoutes;
