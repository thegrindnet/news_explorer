// import { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";
import navLogo from "../../assets/logo.svg";

function Navigation() {
  // const { currentPage } = useContext(currentPageContext);

  return (
    <nav className="nav">
      <NavLink to="/">
        <img className="nav__logo" src={navLogo} alt="News Explorer Logo" />
      </NavLink>
      <div className="nav__buttons">
        <NavLink type="button" className="nav__menu">
          Home
        </NavLink>
        <button type="button" className="nav__button-signin">
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
