import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="WriteNode Logo" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <Link to="/" className="link">
          {" "}
          Home
        </Link>
        <button className="auth"> Login</button>
      </nav>
    </header>
  );
};
