import React from "react";
import "./Input.css"

function Input(props) {
  const {
    nameHandlerValue,
    emailHandlerValue,
    passwordHandlerValue,
    blurHandler,
    nameUser,
    emailUser,
    passwordUser,
    nameDirty,
    emailDirty,
    passwordDirty,
    nameError,
    emailError,
    passwordError
  } = props;

  return (
    <>
      {nameDirty && nameError && <div className="error">{nameError}</div>}
      <input
        onBlur={(e) => blurHandler(e)}
        onChange={nameHandlerValue}
        className="input_1"
        name="name"
        type="text"
        placeholder="name"
        value={nameUser}
      />

      {emailDirty && emailError && <div className="error">{emailError}</div>}
      <input
        onBlur={(e) => blurHandler(e)}
        onChange={emailHandlerValue}
        className="input_2"
        name="email"
        type="text"
        placeholder="email"
        value={emailUser}
      />

      {passwordDirty && passwordError && (
        <div className="error">{passwordError}</div>
      )}
      <input
        onBlur={(e) => blurHandler(e)}
        onChange={passwordHandlerValue}
        className="input_3"
        name="password"
        type="text"
        placeholder="password"
        value={passwordUser}
      />
    </>
  );
}
export default Input;
