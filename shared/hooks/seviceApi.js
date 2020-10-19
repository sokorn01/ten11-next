import axios from "axios";
export const serviceApi = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_URL,
    method: "get",
    timeout: 1000 * 50,
    headers: {
      "Content-Type": "application/json",
    },
  };
  let instance = axios.create(defaultOptions);
  instance.interceptors.request.use(function (config) {
    const token = JSON.parse(localStorage.getItem("token"));
    config.headers.Authorization = token ? `Bearer ${token.token}` : "";
    return config;
  });

  return instance;
};

export const serviceApiFormData = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_URL,
    method: "get",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  };
  let instance = axios.create(defaultOptions);

  return instance;
};

