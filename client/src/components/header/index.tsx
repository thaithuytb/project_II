import "./header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__font">
        <Link to="login" className="header__font-logo">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>The logo</div>
        </Link>
        <Link to="login">Quy định giới hạn</Link>
        <Link to="login">Liên hệ</Link>
      </div>
      <Link to="login" className="header__after">
        Đăng ký/đăng nhập
      </Link>
    </div>
  );
};

export default Header;
