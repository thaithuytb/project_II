import { Form } from "react-bootstrap";
import { FiUser as IconUser, FiLock as IconLock } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";
import "../login/login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

const Register = () => {
  const { registerAuthContext, isAuthenticated } = useContext(AuthContext);

  const [inputRegister, setInputRegister] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  //check authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  const { email, password, confirm_password } = inputRegister;

  //handler onChange function
  const onChangeValueRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputRegister({ ...inputRegister, [e.target.name]: e.target.value });
  };
  //handler submit function
  const submitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await registerAuthContext({ email, password, confirm_password });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg">
      <div className="authFrom">
        <h3>REGISTER</h3>
        <Form onSubmit={submitRegister}>
          <Form.Group className="formGroup">
            <label>
              <IconUser />
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={onChangeValueRegister}
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
              onChange={onChangeValueRegister}
              value={password}
            />
          </Form.Group>
          <Form.Group className="formGroup">
            <label>
              <IconLock />
            </label>
            <input
              type="password"
              placeholder="confirm_password"
              name="confirm_password"
              onChange={onChangeValueRegister}
              value={confirm_password}
            />
          </Form.Group>
          <button type="submit" className="auth-button">
            Sign in
          </button>
        </Form>
        <div className="redirectFrom">
          Do you already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
