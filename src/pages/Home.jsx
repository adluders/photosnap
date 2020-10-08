import React from "react";
import Showcase from "../components/Showcase";
import StoriesHolder from "../components/StoriesHolder";

import Create from "../assets/home/desktop/create-and-share.jpg";
import Stories from "../assets/home/desktop/beautiful-stories.jpg";
import Designed from "../assets/home/desktop/designed-for-everyone.jpg";
import Mountains from "../assets/stories/desktop/mountains.jpg";
import Building from "../assets/stories/desktop/cityscapes.jpg";
import Voyage from "../assets/stories/desktop/18-days-voyage.jpg";
import Architecture from "../assets/stories/desktop/architecturals.jpg";

const Home = () => {
  const info = [
    {
      id: 0,
      pic: Mountains,
      storyTitle: "The Mountains",
      storyAuthor: "by John Appleseed",
    },
    {
      id: 1,
      pic: Building,
      storyTitle: "Sunset Cityscapes",
      storyAuthor: "by Benjamin Cruz",
    },
    {
      id: 2,
      pic: Voyage,
      storyTitle: "18 Days Voyage",
      storyAuthor: "by Alexei Borodin",
    },
    {
      id: 3,
      pic: Architecture,
      storyTitle: "Architecturals",
      storyAuthor: "by Samantha Brooke",
    },
  ];

  return (
    <section>
      <Showcase
        heading={`Create and share your photo stories`}
        text={`Photosnap is a platform for photographers and visual storytellers.
      We make it easy to share photos, tell stories and connect with
      others.`}
        photo={<img src={Create} alt="" />}
        isPicFirst={false}
        isTextFirst
        isDarkTheme
      />

      <Showcase
        heading={`beautiful stories every time`}
        text={`We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.`}
        photo={<img src={Stories} alt="" />}
        isPicFirst
        isDarkTheme={false}
        showcaseTheme
      />

      <Showcase
        heading={`designed for everyone`}
        text={`Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. `}
        photo={<img src={Designed} alt="" />}
        isTextFirst
        isDarkTheme={false}
        showcaseTheme
      />

      <StoriesHolder info={info} />
    </section>
  );
};

export default Home;
