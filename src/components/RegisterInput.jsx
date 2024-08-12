import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import { NotesContext } from "../context/NotesContext";

export default function RegisterInput() {
  const { onRegisterHandler } = useContext(NotesContext);

  const [name, onNameChange, resetName] = useInput("");
  const [email, onEmailChange, resetEmail] = useInput("");
  const [password, onPasswordChange, resetPassword] = useInput("");
  const [passwordConfirm, onPasswordConfirmChange, resetPasswordConfirm] =
    useInput("");

  const passwordsMatch = passwordConfirm === password;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!passwordsMatch) {
      return;
    }

    const register = {
      name,
      email,
      password,
    };

    onRegisterHandler(register);
    resetName();
    resetEmail();
    resetPassword();
    resetPasswordConfirm();
  };

  return (
    <form onSubmit={onSubmitHandler} className="register-input">
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={onNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="password"
        value={password}
        onChange={onPasswordChange}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        autoComplete="confirm-password"
        value={passwordConfirm}
        onChange={onPasswordConfirmChange}
      />
      {!passwordsMatch && (
        <p style={{ color: "red" }}>Passwords do not match</p>
      )}
      <button className="note-regist__enter-button" disabled={!passwordsMatch}>
        Register
      </button>
    </form>
  );
}
