import React, { useState, useCallback } from "react";
import { useAuth } from "contexts/AuthContext";

import { FormDataType } from "./types";

const LoginForm: React.FC = () => {
  const { signIn } = useAuth();
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    password: "",
  });

  const handleLogin = useCallback(() => {
    signIn();
  }, [signIn]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
