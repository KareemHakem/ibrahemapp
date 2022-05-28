import React, { useRef } from "react";

import { Formik, Form } from "formik";
// import { validationLoginSchema as validationSchema } from "../../../utils/validationSchema";

import { FormInput } from "../../commons/FormInput";
// import { Button } from "../../../commons/Button";

import "./style.css";

const LoginAuth = ({ handleAuthLoginUserSubmit, loading }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="auth_login_form-container">
      <div className="login_form_container">
        <Formik
          initialValues={{ email: "", password: "" }}
          //           validationSchema={validationSchema}
          onSubmit={handleAuthLoginUserSubmit}
        >
          {({ dirty, isValid, isSubmitting }) => (
            <Form className="form_Login_page">
              <h2> Hello Ibrhim Edit Your Profile </h2>
              <div className="loginFormInput">
                <FormInput
                  label="Email"
                  name="email"
                  placeholder="Email"
                  variant="standard"
                  width={400}
                  ref={emailRef}
                />
              </div>
              <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                variant="standard"
                width={400}
                ref={passwordRef}
              />
              <button
                className="btn_login_form"
                title="Login"
                type="submit"
                disabled={!dirty || !isValid}
                loading={loading}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginAuth;
