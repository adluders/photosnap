import React from "react";
import PropTypes from "prop-types";

import Story from "./UI/Story";

const StoriesHolder = ({ info }) => {
  return (
    <div className="stories-holder">
      {info.map((item) => (
        <Story
          key={item.id}
          photo={item.pic}
          storyTitle={item.storyTitle}
          storyAuthor={item.storyAuthor}
          writtenDate={item.writtenDate}
        />
      ))}
    </div>
  );
};

StoriesHolder.propTypes = {
  info: PropTypes.array.isRequired,
};

export default StoriesHolder;
