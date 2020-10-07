import React from "react";
// import Arrow from "../assets/shared/desktop/arrow.svg";
import CustomLink from "./UI/CustomLink";

const Showcase = ({
  heading,
  text,
  photo,
  isDarkTheme,
  isTextFirst,
  isPicFirst,
  showcaseTheme,
}) => {
  return (
    <div className="showcase">
      <div
        className={`showcase__details ${isTextFirst ? "order-1" : "order-2"} ${
          isDarkTheme ? "dark-theme" : "light-theme"
        }`}
      >
        <div>
          <h1>{heading}</h1>
          <p>{text}</p>
          <CustomLink
            userRoute="/"
            customClasses="cta__invite"
            text={"get an invite"}
            isLightTheme={showcaseTheme}
          />
        </div>
      </div>

      <div
        className={`showcase__graphic ${isPicFirst ? "order-1" : "order-2"}  `}
      >
        {photo}
      </div>
    </div>
  );
};

export default Showcase;
