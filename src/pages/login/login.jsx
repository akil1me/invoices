import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthForm } from "../../components";
import { axiosInstans } from "../../services";
import { userActions } from "../../store/user-slice";

export const Login = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmitLogin = (email, password) => {
    const user = {
      email,
      password
    }
    setLoading(true)

    axios({
      url: "http://167.235.158.238:3001/login",
      method: "POST",
      data: user,

    })
      .then(({ data }) => {
        dispatch(userActions.setUser(data))
        axiosInstans.defaults.headers.Authorization = `Bearer ${data.accessToken}`
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`
        navigate(location.state?.redirect || "/")
      })
      .catch((err) => setError(err.response.data))
      .finally(() => setLoading(false))
  }

  return (
    <AuthForm
      onSubmit={handleSubmitLogin}
      title="Login" loading={loading}
      error={error}
      isRegister={<Link to={"/register"}>register here</Link>} />
  )
}