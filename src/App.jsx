import { BrowserRouter, Routes, Route } from "react-router";
import AdminRoutes from "./routes/AdminRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>{AdminRoutes}</Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
