import { Route } from "react-router-dom";
import Layout from "../admin-panel/layout/Layout";
import Dashboard from "../admin-panel/pages/Dashboard";
import Categories from "../admin-panel/pages/Categories";
import NotFound from "../pages/NotFound";
import UserRegister from "../pages/UserRegister";
import Login from "../admin-panel/pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import AddCategory from "../admin-panel/pages/AddCategory";
import GuestRoutes from "./GuestRoutes";
import EditCategory from "../admin-panel/pages/EditCategory";

const AdminRoutes = [
  <Route key="guestRoutes" element={<GuestRoutes />}>
    <Route key="register" path="/registration" element={<UserRegister />} />
    <Route key="login" path="/login" element={<Login />} />
  </Route>,

  <Route key="protectedRoutes" element={<ProtectedRoutes />}>
    <Route key="layout" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/editCategory/:categoryId" element={<EditCategory />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    ,
  </Route>,
];

export default AdminRoutes;
