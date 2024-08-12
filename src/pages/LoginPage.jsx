import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import { NotesContext } from "../context/NotesContext";

export default function LoginPage() {
  const { onLoginSuccess } = useContext(NotesContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      onLoginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput onLogin={onLogin} />
      <p>
        Belum punya akun? <Link to="/regist">Daftar di sini.</Link>
      </p>
    </section>
  );
}
