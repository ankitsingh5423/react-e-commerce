import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./amin-panel/layout/Layout";
import Dashboard from "./amin-panel/pages/Dashboard";
import Categories from "./amin-panel/pages/Categories";
import NotFound from "./pages/NotFound";
import UserRegister from "./pages/UserRegister";
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/registration" element={<UserRegister />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
