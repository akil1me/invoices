import { Form, Formik } from "formik";
import * as yup from "yup";

import { Button } from "../button";
import { Loader } from "../loader";

import { FormikInput } from "../formk-input";
import "./auth-form.scss";

export const AuthForm = ({
  onSubmit,
  title,
  error,
  loading,
  isRegister,
  isLogin,
}) => {
  const handleFormSubmit = ({ email, password }) => {
    onSubmit(email, password);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="login-form">
      <div className="login-form__inner">
        <h2 className="login-form__title">{title}</h2>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={yup.object().shape({
            email: yup.string().email().required("can't be empty"),
            password: yup.string().required("can't be empty").min(4).max(16),
          })}
          validateOnChange={false}
          validateOnBlur={false}
          validateOnMount={false}
          onSubmit={handleFormSubmit}
        >
          {() => (
            <Form className="login-form__form">
              <div>
                <FormikInput name="email" type="email" description="Email" />
                <FormikInput
                  name="password"
                  type="password"
                  description="Password"
                />
              </div>

              <div className="login-form__button">
                {isRegister}
                {isLogin}
                <Button type="submit">{title}</Button>
              </div>

              <span className="login-form__error">{error}</span>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
