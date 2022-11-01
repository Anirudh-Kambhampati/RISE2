import React, { useState } from "react";

import { localStorageKeys } from "./data/localStorageKeys";
import BasicRoutes from "./Routes/BasicRoutes";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem(localStorageKeys.username)
  );

  const loginProps = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <div>
      <BasicRoutes loginProps={loginProps} />
    </div>
  );
};

export default App;
