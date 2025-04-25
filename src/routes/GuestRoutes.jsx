import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const GuestRoutes = () => {
  const { loading } = useAuth();
  const user = localStorage.getItem("isAuth");

  if (loading)
    return (
      <p className="h-screen bg-black text-white flex justify-center items-center text-[50px]">
        Loading....
      </p>
    );
  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestRoutes;
