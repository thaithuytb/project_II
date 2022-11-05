import { createContext, ReactNode, useState } from "react";
import authApi from "../api/authApi";
import { LOCAL_STORAGE_TOKEN } from "../constants";

const authStateDefault = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
};

interface IAuthContextProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: null | any;
  loginAuthContext: (userForm: { email: string; password: string }) => void;
}

export const AuthContext = createContext<IAuthContext>(
  authStateDefault as IAuthContext
);

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const [authState, setAuthState] = useState(authStateDefault);

  const loginAuthContext = async (userForm: {
    email: string;
    password: string;
  }) => {
    const { login } = authApi;
    try {
      const response = await login(userForm);
      if (response) {
        const { token, user } = response.data;
        localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
        setAuthState({
          ...authState,
          isLoading: false,
          isAuthenticated: true,
          user,
        });
      }
      // await loadUserAndSetHeaders();
      return response;
    } catch (error) {
      console.log("a");
      console.log(error);
    }
  };

  const data = { ...authState, loginAuthContext };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
