import React from "react";
import PropTypes from "prop-types";

import CustomLink from "./CustomLink";

const Story = ({ photo, storyTitle, storyAuthor }) => {
  return (
    <div className="story">
      <div className="story__overlay"></div>
      <div className="story__img">
        <img src={photo} alt="" />
      </div>

      <div className="story__details">
        <div className="story__text">
          <h2>{storyTitle}</h2>
          <p>{storyAuthor}</p>
        </div>

        <CustomLink
          userRoute="/"
          customClasses="story__link"
          text="read story"
        />
      </div>
    </div>
  );
};

Story.prototypes = {
  storyTitle: PropTypes.string.isRequired,
  storyAuthor: PropTypes.string.isRequired,
};

export default Story;
