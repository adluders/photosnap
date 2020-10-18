import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/shared/desktop/logo.svg";
import Hamburger from "../../assets/shared/mobile/menu.svg";
import Close from "../../assets/shared/mobile/close.svg";

const MobileNav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const updateMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <nav className="mobile-nav">
      <div className="container">
        <div className="mobile-nav__header">
          <Link className="logo" to="/">
            <img src={Logo} alt="PhotoSnap" />
          </Link>

          <button onClick={updateMobileNav} className="mobile-nav__toggler">
            {mobileNav ? (
              <img src={Close} alt="Close Menu" />
            ) : (
              <img src={Hamburger} alt="Open Menu" />
            )}
          </button>
        </div>

        {mobileNav && (
          <>
            <ul className="mobile-nav__items">
              <li className="mobile-nav__item">
                <Link className="mobile-nav__link" to="/stories">
                  stories
                </Link>
              </li>
              <li className="mobile-nav__item">
                <Link className="mobile-nav__link" to="/features">
                  features
                </Link>
              </li>
              <li className="mobile-nav__item">
                <Link className="mobile-nav__link" to="/pricing">
                  pricing
                </Link>
              </li>
            </ul>

            <div className="mobile-nav__cta">
              <Link to="/" className="cta">
                get an invite
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
