import React, { useState } from "react";
import "./Login.css";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="login">
      <div className="login__card">
        <img
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt=""
        />
        <form className="login__form">
          <div className="login__email">
            <p className="label">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__password">
            <p className="label">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={login} className="login__button">
            Sign in
          </button>
          <p className="additional__info">
            By continuing, you agree to Amazon clone's Conditions of Use and
            Privacy Notice.
          </p>
          <button type="" className="register__button" onClick={register}>
            Create new account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
