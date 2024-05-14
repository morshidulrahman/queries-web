import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../utils/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace={true} />;
};

export default PrivateRoute;
