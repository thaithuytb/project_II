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
  registerAuthContext: (userForm: {
    email: string;
    password: string;
    confirm_password: string;
  }) => void;
}

export const AuthContext = createContext<IAuthContext>(
  authStateDefault as IAuthContext
);

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const [authState, setAuthState] = useState(authStateDefault);

  //login
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
  //register
  const registerAuthContext = async (userForm: {
    email: string;
    password: string;
    confirm_password: string;
  }) => {
    const { register } = authApi;
    try {
      const response = await register(userForm);
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
      console.log(error);
    }
  };
  //autoLogin
  // const autoLogin = async () => {
  //   if (localStorage[LOCAL_STORAGE_TOKEN]) {
  //     const { verifyTokenAuth } = authApi;
  //     const token = localStorage[LOCAL_STORAGE_TOKEN];
  //     //attach headers token
  //     setHeadersToken(token);
  //     try {
  //       const response = await verifyTokenAuth();
  //       if (response.data.success) {
  //         const { user } = response.data;
  //         setAuthState({
  //           ...authState,
  //           isLoading: false,
  //           isAuthenticated: true,
  //           user,
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //       setHeadersToken(null);
  //       localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  //     }
  //   } else {
  //     setAuthState({ ...authState, isLoading: false });
  //   }
  // };

  const data = { ...authState, loginAuthContext, registerAuthContext };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
