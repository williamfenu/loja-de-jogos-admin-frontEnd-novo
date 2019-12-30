import React, { useState } from "react";
import useForm from "react-hook-form";
import rest from "../../commons/service/rest";

const loginRest = rest("login");

const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const { register, handleSubmit } = useForm();

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
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="username">nome</label>
      <input
        name="username"
        id="username"
        ref={register({ required: true })}
        onChange={e => setLogin({ ...login, username: e.target.value })}
      ></input>
      <label htmlFor="password">Senha</label>
      <input
        name="password"
        type="password"
        id="password"
        ref={register({ required: true })}
        onChange={e => setLogin({ ...login, password: e.target.value })}
      ></input>
      <button onClick={handleSubmit(handleLogin)}>Entrar</button>
    </div>
  );
};

export default Login;
