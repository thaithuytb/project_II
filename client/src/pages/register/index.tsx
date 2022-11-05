import { Form } from "react-bootstrap";
import { FiUser as IconUser, FiLock as IconLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../login/login.css";

const Register = () => {
  return (
    <div className="bg">
      <div className="authFrom">
        <h3>REGISTER</h3>
        <Form>
          <Form.Group className="formGroup">
            <label>
              <IconUser />
            </label>
            <input type="text" placeholder="email" name="username" />
          </Form.Group>
          <Form.Group className="formGroup">
            <label>
              <IconLock />
            </label>
            <input type="password" placeholder="password" name="password" />
          </Form.Group>
          <Form.Group className="formGroup">
            <label>
              <IconLock />
            </label>
            <input
              type="password"
              placeholder="confirmPassword"
              name="confirmPassword"
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
