import React, { useRef, useState } from "react";

import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const SingUpAuth = () => {
  const [error, setError] = useState("");
  const { loading, setLoading } = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  //  const alert = useAlert();

  const { singUp, currentUser } = useAuth();

  async function handleAuthSingUpUserSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError(toast.error("kareem is bad"));
    }

    try {
      setError("");
      setLoading(true);
      await singUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError(toast.error("kareem is not gooood"));
    }

    setLoading(false);
  }
  return (
    <div className="auth_SingUp_form-container">
      {error && <h1> ERROR </h1>}
      <h1> {currentUser && currentUser.email}</h1>
      <div className="SingUp_form_container">
        <input type="email" ref={emailRef} required />
        <input type="password" ref={passwordRef} required />
        <input type="password" ref={confirmPasswordRef} required />
        <button
          onClick={handleAuthSingUpUserSubmit}
          loading={loading}
          type="submit"
        >
          singup
        </button>
      </div>
    </div>
  );
};

export default SingUpAuth;
