import React from "react";
import PropTypes from "prop-types";
import Arrow from "../../assets/shared/desktop/arrow.svg";
import DarkArrow from "../../assets/shared/desktop/arrow dark.svg";
import { Link } from "react-router-dom";

const CustomLink = ({ userRoute, customClasses, text, isLightTheme }) => {
  return (
    <Link to={userRoute} className={customClasses}>
      {text}{" "}
      {isLightTheme ? (
        <img src={DarkArrow} alt="" />
      ) : (
        <img src={Arrow} alt="" />
      )}
    </Link>
  );
};

CustomLink.defaultProps = {
  icon: "",
  customClasses: "",
  text: "",
};

CustomLink.propTypes = {
  userRoute: PropTypes.string.isRequired,
  customClasses: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isLightTheme: PropTypes.any,
};

export default CustomLink;
