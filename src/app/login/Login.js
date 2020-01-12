import React, { useState, useLayoutEffect } from "react";
import useForm from "react-hook-form";
import rest from "../../commons/service/rest";
import "./styles.css";

const loginRest = rest("login");

const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [invalidPassword, setInvalidPassword] = useState(false);
  const { register, handleSubmit } = useForm();

  //It was instead useEffect because the login component was rendering before go to the app page causing a "blink" effect
  useLayoutEffect(() => {
    if (localStorage.getItem("token")) {
      props.history.push("/app");
    }
  }, [props]);

  const handleLogin = async () => {
    const response = await loginRest.post(login);
    if (response.status === 200) {
      response
        .text()
        .then(token => {
          localStorage.setItem("token", token);
          props.history.push("/app");
        })
        .catch(error => console.log(error));
    } else {
      setInvalidPassword(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="header">Login</h1>
        <hr />
        <form className="form container">
          <label className="label" htmlFor="username">
            Nome:
          </label>
          <input
            name="username"
            autoComplete="username"
            id="username"
            ref={register({ required: true })}
            onChange={e => setLogin({ ...login, username: e.target.value })}
          ></input>
          <label className="label" htmlFor="password">
            Senha:
          </label>
          <input
            name="password"
            autoComplete="current-password"
            type="password"
            id="password"
            ref={register({ required: true })}
            onChange={e => setLogin({ ...login, password: e.target.value })}
          ></input>
          <button
            className="btn btn-dark button"
            onClick={handleSubmit(handleLogin)}
          >
            Entrar
          </button>
        </form>
        <span hidden={!invalidPassword} style={{ color: "red" }}>
          Usuário ou senha inválidos
        </span>
      </div>
    </div>
  );
};

export default Login;
