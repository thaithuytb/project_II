import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { FiLock as IconLock, FiUser as IconUser } from "react-icons/fi";
import ImgFacebook from "../../assets/facebook.jpg";
import ImgGoogle from "../../assets/google.png";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import "./login.css";

const Login = () => {
  const { loginAuthContext, isAuthenticated } = useContext(AuthContext);

  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  //check authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  const { email, password } = inputLogin;

  //handler onChange function
  const onChangeValueLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLogin({ ...inputLogin, [e.target.name]: e.target.value });
  };
  //handler submit function
  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginAuthContext({ email, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg">
      <div className="authFrom">
        <h3>LOGIN</h3>
        <Form onSubmit={submitLogin}>
          <Form.Group className="formGroup">
            <label>
              <IconUser />
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={onChangeValueLogin}
              value={email}
            />
          </Form.Group>
          <Form.Group className="formGroup">
            <label>
              <IconLock />
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={onChangeValueLogin}
              value={password}
            />
          </Form.Group>
          <button type="submit" className="auth-button">
            Sign in
          </button>
        </Form>
        <div className="redirectFrom">
          Do you already have an account? <Link to="/register">Register</Link>
        </div>
        <div className="login-line" />
        <div className="login-oAuth2">
          <a href="">
            <img src={ImgGoogle} alt="" />
            Google
          </a>
          <a href="">
            <img src={ImgFacebook} alt="" />
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
