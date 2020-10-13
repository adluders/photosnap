import React from "react";
import Showcase from "../components/Showcase";
import StoriesHolder from "../components/StoriesHolder";
import FeaturesContainer from "../components/FeaturesContainer";

import Create from "../assets/home/desktop/create-and-share.jpg";
import Stories from "../assets/home/desktop/beautiful-stories.jpg";
import Designed from "../assets/home/desktop/designed-for-everyone.jpg";
import Mountains from "../assets/stories/desktop/mountains.jpg";
import Building from "../assets/stories/desktop/cityscapes.jpg";
import Voyage from "../assets/stories/desktop/18-days-voyage.jpg";
import Architecture from "../assets/stories/desktop/architecturals.jpg";

import TabletCreate from "../assets/home/tablet/create-and-share.jpg";
import TabletStories from "../assets/home/tablet/beautiful-stories.jpg";
import TabletDesigned from "../assets/home/tablet/designed-for-everyone.jpg";

import MobileCreate from "../assets/home/mobile/create-and-share.jpg";
import MobileStories from "../assets/home/mobile/beautiful-stories.jpg";
import MobileDesigned from "../assets/home/mobile/designed-for-everyone.jpg";

import Responsive from "../assets/features/desktop/responsive.svg";
import Limit from "../assets/features/desktop/no-limit.svg";
import Embed from "../assets/features/desktop/embed.svg";

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

  const homeFeatures = [
    {
      id: 0,
      icon: Responsive,
      featureTitle: "100% Responsive",
      featureDetails:
        "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      id: 1,
      icon: Limit,
      featureTitle: "No Photo Upload Limit",
      featureDetails:
        "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      id: 2,
      icon: Embed,
      featureTitle: "Available to Embed",
      featureDetails:
        "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.  ",
    },
  ];

  return (
    <section>
      <Showcase
        heading={`Create and share your photo stories`}
        text={`Photosnap is a platform for photographers and visual storytellers.
      We make it easy to share photos, tell stories and connect with
      others.`}
        photo={<img src={Create} alt="man starig at lake with camera" />}
        tabletPhoto={
          <img src={TabletCreate} alt="man starig at lake with camera" />
        }
        mobilePhoto={
          <img src={MobileCreate} alt="man starig at lake with camera" />
        }
        isPicFirst={false}
        isTextFirst
        isDarkTheme
      />

      <Showcase
        heading={`beautiful stories every time`}
        text={`We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.`}
        photo={<img src={Stories} alt="home office with laptop and books" />}
        tabletPhoto={
          <img src={TabletStories} alt="home office with laptop and books" />
        }
        mobilePhoto={
          <img src={MobileStories} alt="home office with laptop and books" />
        }
        isPicFirst
        isDarkTheme={false}
        showcaseTheme
      />

      <Showcase
        heading={`designed for everyone`}
        text={`Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. `}
        photo={<img src={Designed} alt="man holding professional camera" />}
        tabletPhoto={
          <img src={TabletDesigned} alt="man holding professional camera" />
        }
        mobilePhoto={
          <img src={MobileDesigned} alt="man holding professional camera" />
        }
        isTextFirst
        isDarkTheme={false}
        showcaseTheme
      />

      <StoriesHolder info={info} />

      <FeaturesContainer featuresList={homeFeatures} />
    </section>
  );
};

export default Home;
