import { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { AuthForm } from "../../components";
import { API_URL, axiosInstans } from "../../services";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmitLogin = (email, password) => {
    const user = {
      email,
      password,
    };
    setLoading(true);

    axios({
      url: API_URL + "register",
      method: "POST",
      data: user,
    })
      .then(({ data }) => {
        axiosInstans.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.accessToken}`;
        navigate("/login");
      })
      .catch((err) => setError(err.response.data))
      .finally(() => setLoading(false));
  };

  return (
    <AuthForm
      onSubmit={handleSubmitLogin}
      title="Register"
      loading={loading}
      error={error}
      isLogin={<Link to={"/login"}>Login here</Link>}
    />
  );
};
