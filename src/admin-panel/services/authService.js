import { runApi } from "../../utils/apiRequest";

export const loginApi = async (username, password) => {
  try {
    const url = "https://api.freeapi.app/api/v1/users/login";
    return runApi(url, { username, password }, { method: "POST" });
  } catch (error) {
    throw error;
  }
};

export const loggedInUserApi = async (accessToken) => {
  const url = "https://api.freeapi.app/api/v1/ecommerce/profile";

  try {
    return runApi(url, null, { method: "GET", token: accessToken });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const refreshTokenApi = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const url = "https://api.freeapi.app/api/v1/users/refresh-token";

  try {
    return runApi(url, { refreshToken }, { method: "POST" });
  } catch (error) {
    console.error(error);
  }
};

export const fetchCategoriesApi = async (accessToken, page) => {
  try {
    const url = `https://api.freeapi.app/api/v1/ecommerce/categories?page=${page}&limit=5`;

    return runApi(url, null, { method: "GET", token: accessToken });
  } catch (error) {
    throw error;
  }
};

export const saveCategoryApi = async (data, accessToken) => {
  try {
    const url = "https://api.freeapi.app/api/v1/ecommerce/categories";

    return runApi(url, data, { method: "POST", token: accessToken });
  } catch (error) {
    throw error;
  }
};
