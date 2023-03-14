import axios from "axios";
import { API_URL } from "./api";

export const axiosInstans = axios.create({
  baseURL: API_URL + "invoices",
});

axiosInstans.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.reload();
    }
    return Promise.reject(err);
  }
);
