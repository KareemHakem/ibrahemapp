import React, { useRef } from "react";

import { Formik, Form } from "formik";
import { validationLoginSchema as validationSchema } from "../../utils/validationSchema";

import { FormInput } from "../../commons/FormInput";
import { Button } from "../../commons/Button";

import "./style.css";

const SingUpAuth = ({ handleAuthLoginUserSubmit, loading }) => {
  return (
    <div className="auth_login_form-container">
      <div className="login_form_container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleAuthLoginUserSubmit}
        >
          {({ dirty, isValid, isSubmitting }) => (
            <Form className="form_Login_page">
              <h2> Hello Ibrhim Edit Your Profile </h2>
              <div className="loginFormInput">
                <FormInput
                  name="email"
                  label="Email"
                  placeholder="Email"
                  variant="standard"
                  width={400}
                />
              </div>
              <FormInput
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                variant="standard"
                width={400}
              />
              <Button
                title="Login"
                type="submit"
                disabled={!dirty || !isValid}
                loading={loading}
                margin={30}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SingUpAuth;
