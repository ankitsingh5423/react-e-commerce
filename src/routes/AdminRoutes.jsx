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
import Products from "../admin-panel/pages/products/Products";
import AddProduct from "../admin-panel/pages/products/AddProduct";
import EditProduct from "../admin-panel/pages/products/editProduct";
import Orders from "../admin-panel/pages/orders/Orders";

const AdminRoutes = [
  <Route key="guestRoutes" element={<GuestRoutes />}>
    <Route key="register" path="/registration" element={<UserRegister />} />
    <Route key="login" path="/login" element={<Login />} />
  </Route>,

  <Route key="protectedRoutes" element={<ProtectedRoutes />}>
    <Route key="layout" element={<Layout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/edit-category/:categoryId" element={<EditCategory />} />
      <Route path="/products" element={<Products />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product/:productId" element={<EditProduct />} />
      <Route path="/orders/" element={<Orders />} />
    </Route>
  </Route>,
];

export default AdminRoutes;
