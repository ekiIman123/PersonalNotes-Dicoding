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
      <button>Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

// class LoginInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//     };

//     this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
//     this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
//     this.onSubmitHandler = this.onSubmitHandler.bind(this);
//   }

//   onEmailChangeHandler(event) {
//     this.setState(() => {
//       return {
//         email: event.target.value,
//       };
//     });
//   }

//   onPasswordChangeHandler(event) {
//     this.setState(() => {
//       return {
//         password: event.target.value,
//       };
//     });
//   }

//   onSubmitHandler(event) {
//     event.preventDefault();

//     this.props.login({
//       email: this.state.email,
//       password: this.state.password,
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmitHandler} className="login-input">
//         <input
//           type="email"
//           placeholder="Email"
//           value={this.state.email}
//           onChange={this.onEmailChangeHandler}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={this.state.password}
//           onChange={this.onPasswordChangeHandler}
//         />
//         <button>Masuk</button>
//       </form>
//     );
//   }
// }
