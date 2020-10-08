import React from "react";
import Story from "./UI/Story";

const StoriesHolder = ({ info }) => {
  return (
    <div className="stories">
      {info.map((item) => (
        <Story
          photo={item.pic}
          storyTitle={item.storyTitle}
          storyAuthor={item.storyAuthor}
        />
      ))}
    </div>
  );
};

export default StoriesHolder;
