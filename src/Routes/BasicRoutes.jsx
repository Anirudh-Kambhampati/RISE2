import React from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import AdminPage from "../pages/AdminPage/AdminPage";
import LoginPage from "../pages/AuthenticationPages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignUpPage from "../pages/AuthenticationPages/SignUpPage/SignUpPage";
import UserPage from "../pages/UserPage/UserPage";
import ResearcherPage from "../pages/ResearcherPage/ResearcherPage";

const BasicRoutes = ({ loginProps }) => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute {...loginProps} />}>
        <Route index element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/researcher" element={<ResearcherPage />} />
      </Route>

      <Route path="/signup" element={<SignUpPage {...loginProps} />} />
      <Route path="/login" element={<LoginPage {...loginProps} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default BasicRoutes;
