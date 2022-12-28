import axios from "axios";

export const axiosInstans = axios.create({
  baseURL: "http://167.235.158.238:3001/invoices"
})

axiosInstans.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      window.location.reload()
    }
    return Promise.reject(err)
  }
)