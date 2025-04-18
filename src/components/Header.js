import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import Logo from "../assets/logo.png";
import { useState } from "react";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  function handleLogout() {
    signOut(auth);
    setIsAuth(false);
  }

  function handleLongin() {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
    });
  }

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="WriteNode Logo" />
        <span>MTS</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button className="auth" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </>
        ) : (
          <button className="auth" onClick={handleLongin}>
            <i className="bi bi-google"></i> Login
          </button>
        )}
      </nav>
    </header>
  );
};
