import React from "react";
import { loginFormData } from "../../../data/userFormData";
import { localStorageKeys } from "../../../data/localStorageKeys";
import AuthenticationPage from "../CommonPage/AuthenticationPage";

const LoginPage = ({ isLoggedIn }) => {
  const doSubmit = (loginForm) => {
    // perform validation

    // if success
    sessionStorage.setItem(localStorageKeys.username, loginForm.username);
    window.location.reload();
  };

  return (
    <AuthenticationPage
      isLoggedIn={isLoggedIn}
      formData={loginFormData}
      doSubmit={doSubmit}
      redirectURL="/signup"
      redirectURLLabel="Create New Account"
      formLabel="Login"
      buttonLabel="Login"
    />
  );
};

export default LoginPage;
