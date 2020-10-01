import React from "react";
import Create from "../assets/home/desktop/create-and-share.jpg";
import Stories from "../assets/home/desktop/beautiful-stories.jpg";
import Designed from "../assets/home/desktop/designed-for-everyone.jpg";
import Showcase from "../components/Showcase";

const Home = () => {
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
      />

      <Showcase
        heading={`designed for everyone`}
        text={`Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. `}
        photo={<img src={Designed} alt="" />}
        isTextFirst
        isDarkTheme={false}
      />
    </section>
  );
};

export default Home;
