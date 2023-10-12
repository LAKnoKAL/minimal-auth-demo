import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "components/layouts/MainLayout";
import { LoginPage, PrivatePage, Page404 } from "pages";

import { AuthProvider } from "contexts/AuthContext";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="private" element={<PrivatePage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
