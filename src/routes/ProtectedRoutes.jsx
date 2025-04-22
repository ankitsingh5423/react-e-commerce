import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Outlet, Navigate } from "react-router";
import { OrbitProgress } from "react-loading-indicators";

const ProtectedRoutes = () => {
  const { loading } = useAuth();
  const isAuth = localStorage.getItem("isAuth");
  const isLoggedIn = isAuth;

  if (loading)
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
        <div className="text-white text-lg font-bold">
          <OrbitProgress
            variant="spokes"
            color="#fff"
            size="medium"
            text=""
            textColor="#fff"
          />
        </div>
      </div>
    );

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
