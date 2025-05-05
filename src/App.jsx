import { BrowserRouter, Routes, Route } from "react-router";
import AdminRoutes from "./routes/AdminRoutes";
import { AuthProvider } from "./context/AuthContext";
import UserRoutes from "./routes/UserRoutes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {AdminRoutes}
          {UserRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
