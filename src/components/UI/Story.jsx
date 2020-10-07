import React from "react";
import PropTypes from "prop-types";

// import Mountain from "../../assets/stories/desktop/mountains.jpg";
import CustomLink from "./CustomLink";

const Story = ({ photo, story_title, story_author }) => {
  return (
    <div className="story">
      <div className="story__overlay"></div>
      <div className="story__img">
        <img src={photo} alt="" />
      </div>

      <div className="story__details">
        <div className="story__text">
          <h2>{story_title}</h2>
          <p>{story_author}</p>
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
  story_title: PropTypes.string.isRequired,
  story_author: PropTypes.string.isRequired,
};

export default Story;
