import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "contexts/AuthContext";
import LoginForm from "components/forms/LoginForm";

const LoginPage: React.FC = () => {
  const {
    state: { isAuthenticated },
  } = useAuth();

  if (isAuthenticated) return <Navigate to="/private" replace={true} />;

  return <LoginForm />;
};

export default LoginPage;
