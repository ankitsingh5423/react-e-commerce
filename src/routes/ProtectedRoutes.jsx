import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {
  const { user, loading } = useAuth();
  const isAuth = localStorage.getItem("isAuth");
  const isLoggedIn = isAuth;

  if (loading)
    return (
      <p className="h-screen bg-black text-white flex justify-center items-center text-[50px]">
        Loading....
      </p>
    );

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
