// import { NavLink } from "react-router-dom";

import "./Navigation.css";
import navLogo from "../../assets/logo.svg";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <img className="nav__logo" src={navLogo} alt="News Explorer Logo" />
        <div className="nav__buttons">
          <button className="nav__menu">Home</button>
          <button className="nav__button-signin">Sign in</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
