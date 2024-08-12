import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import { NotesContext } from "../context/NotesContext";

export default function RegisterInput() {
  const { onRegisterHandler } = useContext(NotesContext);

  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [passwordConfirm, onPasswordConfirmChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const register = {
      name,
      email,
      password,
    };
    onRegisterHandler(register);
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
      <button>Register</button>
    </form>
  );
}

// class RegisterInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//     };

//     this.onNameChange = this.onNameChange.bind(this);
//     this.onEmailChange = this.onEmailChange.bind(this);
//     this.onPasswordChange = this.onPasswordChange.bind(this);
//     this.onSubmitHandler = this.onSubmitHandler.bind(this);
//   }

//   onNameChange(event) {
//     this.setState(() => {
//       return {
//         name: event.target.value,
//       };
//     });
//   }

//   onEmailChange(event) {
//     this.setState(() => {
//       return {
//         email: event.target.value,
//       };
//     });
//   }

//   onPasswordChange(event) {
//     this.setState(() => {
//       return {
//         password: event.target.value,
//       };
//     });
//   }

//   onSubmitHandler(event) {
//     event.preventDefault();

//     this.props.register({
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmitHandler} className="register-input">
//         <input
//           type="text"
//           placeholder="Nama"
//           value={this.state.name}
//           onChange={this.onNameChange}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={this.state.email}
//           onChange={this.onEmailChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           autoComplete="current-password"
//           value={this.state.password}
//           onChange={this.onPasswordChange}
//         />
//         <button>Register</button>
//       </form>
//     );
//   }
// }
