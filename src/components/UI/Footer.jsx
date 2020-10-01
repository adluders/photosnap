import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import LightLogo from "../../assets/shared/desktop/logo-light.svg";
import Facebook from "../../assets/shared/desktop/facebook.svg";
import Youtube from "../../assets/shared/desktop/youtube.svg";
import Twitter from "../../assets/shared/desktop/twitter.svg";
import Pinterest from "../../assets/shared/desktop/pinterest.svg";
import Instagram from "../../assets/shared/desktop/instagram.svg";
import Arrow from "../../assets/shared/desktop/arrow.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="main-footer">
          <div className="main-footer__info">
            <Link to="/">
              <img src={LightLogo} alt="" />
            </Link>
            <div className="main-footer__info-social">
              <Link className="main-footer__info-social__link" to="/">
                <img src={Facebook} alt="" />
              </Link>
              <Link className="main-footer__info-social__link" to="/">
                <img src={Youtube} alt="" />
              </Link>
              <Link className="main-footer__info-social__link" to="/">
                <img src={Twitter} alt="" />
              </Link>
              <Link className="main-footer__info-social__link" to="/">
                <img src={Pinterest} alt="" />
              </Link>
              <Link className="main-footer__info-social__link" to="/">
                <img src={Instagram} alt="" />
              </Link>
            </div>
          </div>

          <ul className="main-footer__links">
            <li>
              <Link to="/" className="main-footer__link">
                home
              </Link>
            </li>

            <li>
              <Link to="/stories" className="main-footer__link">
                stories
              </Link>
            </li>
            <li>
              <Link to="/features" className="main-footer__link">
                features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="main-footer__link">
                pricing
              </Link>
            </li>
          </ul>

          <div className="main-footer__ctas">
            <CustomLink
              userRoute="/"
              customClasses="cta__invite"
              text={"get an invite"}
              icon={<img src={Arrow} alt="" />}
            />
            <p>copyright 2019. all rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
