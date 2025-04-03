import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./amin-panel/layout/Layout";
import Dashboard from "./amin-panel/pages/Dashboard";
import Categories from "./amin-panel/pages/Categories";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
