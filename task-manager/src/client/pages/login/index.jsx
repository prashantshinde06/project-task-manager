import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@utils/authProvider";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login(userId, password)) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid user ID or password");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form__title">Login page</h2>
        <input
          className="login-form__input"
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          className="login-form__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="login-form__error">{error}</p>}
        <button className="login-form__button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
