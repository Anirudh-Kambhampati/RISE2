import React from "react";

import { singupFormData } from "../../../data/userFormData";

import AuthenticationPage from "../CommonPage/AuthenticationPage";

const SignUpPage = ({ isLoggedIn }) => {
  const doSubmit = (signupForm) => {
    // post details to server
    console.log("Form Submitted", signupForm);
  };

  return (
    <AuthenticationPage
      isLoggedIn={isLoggedIn}
      doSubmit={doSubmit}
      formData={singupFormData}
      buttonLabel="Sign up"
      formLabel="Sign Up"
      redirectURL="/login"
      redirectURLLabel="Already have an account? Login Here"
    />
  );
};

export default SignUpPage;
