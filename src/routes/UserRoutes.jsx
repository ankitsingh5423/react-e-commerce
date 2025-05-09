import { Route } from "react-router";
import Frontend from "../pages/Frontend";
import Layout from "../pages/Layout";
import { OrbitProgress } from "react-loading-indicators";
import ProductDetail from "../pages/ProductDetail";

const UserRoutes = [
  <Route>
    <Route key="layout" element={<Layout />}>
      <Route path="/" element={<Frontend />} />
      <Route path="/product-detail" element={<ProductDetail />} />
    </Route>
  </Route>,
];

export default UserRoutes;
