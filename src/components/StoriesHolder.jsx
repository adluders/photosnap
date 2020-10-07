import React from "react";
import Mountains from "../assets/stories/desktop/mountains.jpg";
import Building from "../assets/stories/desktop/cityscapes.jpg";
import Voyage from "../assets/stories/desktop/18-days-voyage.jpg";
import Architecture from "../assets/stories/desktop/architecturals.jpg";
import Story from "./UI/Story";

const StoriesHolder = () => {
  const pics = [Mountains, Building, Voyage, Architecture];

  return (
    <div className="stories">
      {pics.map((pic) => (
        <Story photo={pic} />
      ))}
    </div>
  );
};

export default StoriesHolder;
