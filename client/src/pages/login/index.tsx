import { Form } from "react-bootstrap";
import { FiLock as IconLock, FiUser as IconUser } from "react-icons/fi";
import ImgFacebook from "../../assets/facebook.jpg";
import ImgGoogle from "../../assets/google.png";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="bg">
      <div className="authFrom">
        <h3>LOGIN</h3>
        <Form>
          <Form.Group className="formGroup">
            <label>
              <IconUser />
            </label>
            <input
              type="text"
              placeholder="email"
              name="username"
              // onChange={onChangeValueUser}
              // value={username}
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
              // onChange={onChangeValueUser}
              // value={password}
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
