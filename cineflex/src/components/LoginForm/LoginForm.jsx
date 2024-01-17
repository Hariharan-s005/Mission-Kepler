import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessageWindow from "../ErrorMessageWindow/ErrorMessageWindow";
import {
  verifyUser,
  isValidEmail,
  getUserName,
} from "../../services/authorisationService";
import { ERROR_MESSAGEWindowConstants } from "../../constants/errorMessageWindowConstants";
import { localStorageConstants } from "../../constants/localStorageConstants";
import { navigationConstants } from "../../constants/navigationConstants";
import { loginFormConstants } from "../../constants/loginFormConstants";
import style from "./LoginForm.module.css";

export const LoginForm = ({ setLoginStatus = () => {} }, loginStatus) => {
  const [error, setError] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(null);
  const navigate = useNavigate();
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  function formSubmitHandler(event) {
    event.preventDefault();

    let email = userNameRef.current.value;
    let password = passwordRef.current.value;

    if (email === "" || password === "") {
      return;
    }
    if (!verifyUser(email, password)) {
      setError({
        title: `${ERROR_MESSAGEWindowConstants.title}`,
        message: `${ERROR_MESSAGEWindowConstants.ERROR_MESSAGE}`,
      });
      return;
    }

    console.log(getUserName(email));
    setLoginStatus({
      isLoggedIn: true,
      name: getUserName(email),
    });
    localStorage.setItem(
      localStorageConstants.USER_NAME,
      JSON.stringify({
        isLoggedIn: true,
        name: getUserName(email),
      })
    );

    navigate(navigationConstants.backSlash);
  }
  const errorHandler = () => {
    setError(false);
  };

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setEmailError(`${loginFormConstants.emailError}`);
    } else {
      setEmailError(null);
    }

    setEmail(event.target.value);
  };
  return (
    <>
      {error && (
        <ErrorMessageWindow
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}

      <div className={style["login-form"]}>
        <h1 className={style["form-heading"]}>
          {loginFormConstants.formHeading}
        </h1>
        <p className={style["form-description"]}>
          {loginFormConstants.formDescription}
        </p>

        <form onSubmit={formSubmitHandler}>
          <div className={style["email-input-container"]}>
            <label htmlFor="email">{loginFormConstants.emailTitle}</label>
            <input
              ref={userNameRef}
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <span className={style["email-wrong-container"]}>
            {emailError && <h4>{emailError}</h4>}
          </span>
          <div className={style["password-input-container"]}>
            <label htmlFor="password">{loginFormConstants.passwordTitle}</label>
            <input
              type="password"
              ref={passwordRef}
              id="password"
              name="password"
            />
          </div>
          <div className={style["login-button-container"]}>
            <button type="submit">{loginFormConstants.LOGIN_BUTTONtext}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
