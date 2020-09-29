import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ userRoute, customClasses, text }) => {
  return (
    <Link to={userRoute} className={customClasses}>
      {text}
    </Link>
  );
};

export default CustomLink;
