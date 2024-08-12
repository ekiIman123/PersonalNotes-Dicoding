import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { LocaleContext } from "../context/LocaleContext";

export default function RegisterPage() {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="register-page">
      <>
        <h2>
          {locale === "en"
            ? "Input your dummy data"
            : "Masukkan data dummy diri anda"}
        </h2>
        <RegisterInput />
        <p>
          {locale === "en" ? "Back to" : "Kembali ke"}{" "}
          <Link to="/">{locale === "en" ? "Register" : "Daftar"}</Link>
        </p>
      </>
    </section>
  );
}
