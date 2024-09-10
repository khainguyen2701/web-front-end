import axios from "axios";
const baseUrl = "http://localhost:8017/";
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5 * 60 * 1000,
  headers: { "Content-Type": "application/json" }
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Handle unauthorized access
      // For example, you can redirect the user to the login page
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
