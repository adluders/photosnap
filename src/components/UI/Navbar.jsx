import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo.svg";
import CustomLink from "./CustomLink";

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
          <CustomLink userRoute="/" customClasses="cta" text="get an invite" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
