import React, { useState } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

export default function LoginInput({ onLogin }) {
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const account = {
      email,
      password,
    };
    onLogin(account);
  };

  return (
    <form onSubmit={onSubmitHandler} className="login-input">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChangeHandler}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button className="note-login__enter-button">Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
