import { Route } from "react-router-dom";
import Layout from "../admin-panel/layout/Layout";
import Dashboard from "../admin-panel/pages/Dashboard";
import Categories from "../admin-panel/pages/Categories";
import NotFound from "../pages/NotFound";
import UserRegister from "../pages/UserRegister";
import Login from "../admin-panel/pages/Login";

const AdminRoutes = [
  // Admin login/register (outside layout)
  <Route key="login" path="/login" element={<Login />} />,
  <Route key="register" path="/registration" element={<UserRegister />} />,

  // Admin dashboard routes (inside layout)
  <Route key="layout" element={<Layout />}>
    <Route index element={<Dashboard />} /> {/* "/" */}
    <Route path="/categories" element={<Categories />} />
    <Route path="*" element={<NotFound />} />
  </Route>,
];

export default AdminRoutes;
