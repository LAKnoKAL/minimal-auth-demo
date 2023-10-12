import React, { useCallback } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { useAuth } from "contexts/AuthContext";

const MainLayout: React.FC = () => {
  const {
    signOut,
    state: { isAuthenticated },
  } = useAuth();

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/private">Private</NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default MainLayout;
