export const login = async (username, password) => {
  try {
    const url = "https://api.freeapi.app/api/v1/users/login";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const loggedInUser = async (accessToken) => {
  const url = "https://api.freeapi.app/api/v1/ecommerce/profile";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const refreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const url = "https://api.freeapi.app/api/v1/users/refresh-token";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
    },
    credentials: "include",
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("***", data);
  } catch (error) {
    console.error(error);
  }
};
