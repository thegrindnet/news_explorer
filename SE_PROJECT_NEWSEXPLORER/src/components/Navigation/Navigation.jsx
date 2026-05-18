import { NavLink } from "react-router-dom";

import "./Navigation.css";
import navLogo from "../../assets/logo.svg";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <img className="nav__logo" src={navLogo} alt="News Explorer Logo" />
        <div className="nav__buttons"></div>
      </div>
    </nav>
  );
}

export default Navigation;
