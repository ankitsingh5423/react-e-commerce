import { createContext, useContext, useEffect, useState } from "react";
import {
  loggedInUserApi,
  refreshTokenApi,
} from "../admin-panel/services/authService";
import { toast } from "react-toastify";
import { runApi } from "../utils/apiRequest";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    !localStorage?.getItem("accessToken") ||
      localStorage?.getItem("accessToken") === "undefined"
      ? ""
      : localStorage?.getItem("accessToken")
  );
  const [loading, setLoading] = useState(false);

  const login = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setAccessToken(accessToken);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccessToken("");
    setUser(null);
  };

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await loggedInUserApi(accessToken);

        if (data?.statusCode === 401) {
          const newTokens = await refreshTokenApi();

          if (!newTokens?.success) {
            return logout();
          }

          login(newTokens.data.accessToken, newTokens.data.refreshToken);
        }
        setUser(data.data);
      } catch (err) {
        toast.error(err.message || "Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{ login, accessToken, setAccessToken, loading, user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
