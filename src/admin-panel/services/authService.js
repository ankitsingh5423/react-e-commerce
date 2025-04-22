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

export const deletecategoryApi = async (accessToken, categoryId, data) => {
  try {
    const url = `https://api.freeapi.app/api/v1/ecommerce/categories/${categoryId}`;
    return runApi(url, data, { method: "DELETE", token: accessToken });
  } catch (error) {
    throw error;
  }
};

export const getCategoryIdApi = async (categoryId, accessToken) => {
  try {
    const url = `https://api.freeapi.app/api/v1/ecommerce/categories/${categoryId}`;
    return runApi(url, null, { method: "GET", token: accessToken });
  } catch (error) {
    throw error;
  }
};

export const updateCategoryApi = async (accessToken, categoryId, body) => {
  try {
    const url = `https://api.freeapi.app/api/v1/ecommerce/categories/${categoryId}`;
    return runApi(url, body, { method: "PATCH", token: accessToken });
  } catch (error) {
    throw error;
  }
};

export const fetchProductsApi = async (accessToken) => {
  try {
    const url = `https://api.freeapi.app/api/v1/ecommerce/products?page=1&limit=10`;
    return runApi(url, null, { method: "GET", token: accessToken });
  } catch (error) {
    throw error;
  }
};

export const addProductApi = async (accessToken, data) => {
  try {
    const url = "https://api.freeapi.app/api/v1/ecommerce/products";
    return runApi(url, data, {
      method: "POST",
      token: accessToken,
      headers: {
        type: "formData",
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteProductApi = async (accessToken, productId, data) => {
  try {
    const url = `https://api.freeapi.app/api/v1/ecommerce/products/${productId}`;
    return runApi(url, data, { method: "DELETE", token: accessToken });
  } catch (error) {
    throw error;
  }
};
