export const runApi = async (url, data, options) => {
  try {
    const payload = {
      method: options?.method ?? "GET",

      headers: {
        accept: "application/json",
        "Content-type": "application/json",
        ...options?.headers,
      },
    };

    if (payload.method !== "GET") {
      if (options?.headers?.type === "formData") {
        payload.body = data;

        console.log(payload);
        payload.headers.redirect = "follow";
        delete payload?.headers?.["Content-type"];
      } else {
        payload.body = JSON.stringify(data);
      }
    }

    if (options?.token) {
      payload.headers["Authorization"] = "Bearer " + options.token;
    }

    const response = await fetch(url, payload);

    return await response.json();
  } catch (error) {
    throw error;
  }
};
