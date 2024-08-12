import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import { NotesContext } from "../context/NotesContext";
import { LocaleContext } from "../context/LocaleContext";

export default function LoginPage() {
  const { onLoginSuccess } = useContext(NotesContext);
  const { locale } = useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      onLoginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <>
        <h2>
          {locale === "en"
            ? "Login for continue"
            : "Silakan masuk untuk melanjutkan"}
        </h2>
        <LoginInput onLogin={onLogin} />
        <p>
          {locale === "en" ? "Haven't account?" : "Belum punya akun?"}{" "}
          <Link to="/regist">
            {locale === "en" ? "Register here." : "Daftar di sini."}
          </Link>
        </p>
      </>
    </section>
  );
}
