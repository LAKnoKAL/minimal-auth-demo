import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "contexts/AuthContext";

const PrivatePage: React.FC = () => {
  const {
    state: { isAuthenticated },
  } = useAuth();

  if (!isAuthenticated) return <Navigate to="/" replace={true} />;

  return (
    <div>
      <h1>Hi Marcus</h1>
    </div>
  );
};

export default PrivatePage;
