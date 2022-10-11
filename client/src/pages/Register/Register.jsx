import React from "react";
import { TextField } from "@mui/material";
import "./register.css";
import { useState } from "react";

const Register = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')

    const register = (e) => {
        e.preventDefault()
    }

  return (
    <div className="register-wrapper">
      <h1> Регистрация </h1>
      <form onSubmit={register}>
        <TextField className="form-input" fullWidth color="secondary" type="text" label="Логин" variant="outlined" />
        <TextField className="form-input" fullWidth color="secondary" type="password" label="Пароль" variant="outlined" />
        <TextField className="form-input" fullWidth color="secondary" type="text" label="ФИО" variant="outlined" />
        <button className="register-button"> Регистрация </button>
      </form>
    </div>
  );
};

export default Register;
