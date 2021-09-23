import React from "react";
import "./FormRegistration.css";
import { useState, useEffect } from "react";
import Input from "./Input";

function FormRegistration() {
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const nameHandlerValue = (event) => {
    setNameUser(event.target.value);
    if (!event.target.value) {
      setNameError("Имя не может быть пустым");
    } else {
      setNameError("");
    }
  };

  const emailHandlerValue = (event) => {
    setEmailUser(event.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError("Ваш email не корректен");
    } else {
      setEmailError("");
    }
  };

  const passwordHandlerValue = (event) => {
    setPasswordUser(event.target.value);

    if (event.target.value.length < 8 || event.target.value.length > 8) {
      setPasswordError("Пароль должен содержать 8 символов");
    } else if (!event.target.value) {
      setPasswordError("Пароль не может быть пустым");
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (event) => {
    const events = event.target.name;

    if (events === "name") {
      setNameDirty(true);
    }
    if (events === "email") {
      setEmailDirty(true);
    }
    if (events === "password") {
      setPasswordDirty(true);
    }
  };

  return (
    <div className="box_form">
      <form className="form" onSabmit={handleSubmit}>
        <h1 className="title_registration">Регистрация</h1>
        <Input
          nameUser={nameUser}
          emailUser={emailUser}
          passwordUser={passwordUser}
          nameDirty={nameDirty}
          emailDirty={emailDirty}
          nameError={nameError}
          emailError={emailError}
          passwordError={passwordError}
          passwordDirty={passwordDirty}
          nameHandlerValue={nameHandlerValue}
          emailHandlerValue={emailHandlerValue}
          passwordHandlerValue={passwordHandlerValue}
          blurHandler={blurHandler}
        />
        <button className="btn" disabled={!formValid}>
          Log in
        </button>
      </form>
    </div>
  );
}
export default FormRegistration;
