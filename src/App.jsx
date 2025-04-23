import { BrowserRouter, Routes, Route } from "react-router";
import AdminRoutes from "./routes/AdminRoutes";
import { AuthProvider } from "./context/AuthContext";
import Frontend from "./pages/Frontend";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {AdminRoutes}
          <Route path="/frontend" element={<Frontend />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
