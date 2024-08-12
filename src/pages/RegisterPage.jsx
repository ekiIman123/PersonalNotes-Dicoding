import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";

export default function RegisterPage() {
  return (
    <section className="register-page">
      <h2>Gak perlu serius-serius ya isinya ...</h2>
      <RegisterInput onRegister={onRegisterHandler} />
      <p>
        Kembali ke <Link to="/">Masuk</Link>
      </p>
    </section>
  );
}
