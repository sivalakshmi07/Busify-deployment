import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://busify-deployment.onrender.com"
});

export default axiosInstance;
