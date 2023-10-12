import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

type AuthState = {
  isAuthenticated: boolean;
};

type AuthAction = { type: "LOGIN" } | { type: "LOGOUT" };

type AuthContextType = {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = { children: ReactNode };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true };
    case "LOGOUT":
      return { isAuthenticated: false };
    default:
      return state;
  }
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) dispatch({ type: "LOGIN" });
  }, []);

  useEffect(() => {
    if (state.isAuthenticated) {
      localStorage.setItem("authToken", "yourAuthTokenHere");
    } else {
      localStorage.removeItem("authToken");
    }
  }, [state.isAuthenticated]);

  const signIn = useCallback(() => {
    dispatch({ type: "LOGIN" });
  }, [dispatch]);

  const signOut = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ state, dispatch, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
