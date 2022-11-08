import "./header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__font">
        <div className="header__font-logo">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>The logo</div>
        </div>
        <div>Device Information</div>
        <div>Contact us</div>
      </div>
      <div className="header__after">Login/register</div>
    </div>
  );
};

export default Header;
