import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo.svg";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Photosnap" />
        </Link>

        <ul className="main-nav__items">
          <li className="main-nav__item">
            <Link className="main-nav__link" to="/stories">
              stories
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="/features">
              features
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="/pricing">
              pricing
            </Link>
          </li>
        </ul>

        <div className="main-nav__cta">
          <Link to="/" className="cta">
            get an invite
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
