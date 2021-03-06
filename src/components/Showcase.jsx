import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CustomLink from "./UI/CustomLink";

const Showcase = ({
  heading,
  text,
  photo,
  mobilePhoto,
  tabletPhoto,
  isDarkTheme,
  isTextFirst,
  isPicFirst,
  showcaseTheme,
  customLink,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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
          {customLink && (
            <CustomLink
              userRoute="/"
              customClasses="cta__invite"
              text={"get an invite"}
              isLightTheme={showcaseTheme}
            />
          )}
        </div>
      </div>

      <div
        className={`showcase__graphic ${isPicFirst ? "order-1" : "order-2"}  `}
      >
        {(windowWidth <= 375 && mobilePhoto) ||
          (windowWidth <= 768 && tabletPhoto) ||
          (windowWidth >= 769 && photo)}
      </div>
    </div>
  );
};

Showcase.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  photo: PropTypes.object.isRequired,
  mobilePhoto: PropTypes.object.isRequired,
  tabletPhoto: PropTypes.object.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
  isTextFirst: PropTypes.bool,
  isPicFirst: PropTypes.bool,
  showcaseTheme: PropTypes.bool,
};

export default Showcase;
