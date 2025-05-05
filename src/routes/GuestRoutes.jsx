import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const GuestRoutes = () => {
  const { loading } = useAuth();
  const userdetail = localStorage.getItem("isAuth");
  const role = localStorage.getItem("role")

  if (loading)
    return (
      <p className="h-screen bg-black text-white flex justify-center items-center text-[50px]">
        Loading....
      </p>
    );
  return role === "USER" ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestRoutes;
