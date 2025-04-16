import React, { useEffect, useState } from "react";
import { loggedInUser } from "../services/authService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { accessToken, setAccessToken, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const checkLoggedIn = async (accessToken) => {
    try {
      const data = await loggedInUser(accessToken);

      if (data.statusCode === 401) {
        localStorage.removeItem("accessToken");
        setAccessToken("");
        setIsLoggedIn(false);
        navigate("/login");
      }

      console.log(accessToken);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    checkLoggedIn(accessToken);
  }, []);

  return (
    <div>
      <h1>This is Dashboard</h1>
    </div>
  );
};

export default Dashboard;
