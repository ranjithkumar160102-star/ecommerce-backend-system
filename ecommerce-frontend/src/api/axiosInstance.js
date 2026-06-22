import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ecommerce-backend-system-ycum.onrender.com/api",
});

export default axiosInstance;