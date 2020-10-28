import React from "react";
import Showcase from "../components/Showcase";
import FeaturesContainer from "../components/FeaturesContainer";

import Hero from "../assets/features/desktop/hero.jpg";
import TabHero from "../assets/features/tablet/hero.jpg";
import MobHero from "../assets/features/mobile/hero.jpg";
import Responsive from "../assets/features/desktop/responsive.svg";
import Limit from "../assets/features/desktop/no-limit.svg";
import Embed from "../assets/features/desktop/embed.svg";
import Domain from "../assets/features/desktop/custom-domain.svg";
import Exposure from "../assets/features/desktop/boost-exposure.svg";
import DragDrop from "../assets/features/desktop/drag-drop.svg";

const Features = () => {
  const topFeatures = [
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

  const secondaryFeatures = [
    {
      id: 0,
      icon: Domain,
      featureTitle: "Custom Domain",
      featureDetails:
        "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    },
    {
      id: 1,
      icon: Exposure,
      featureTitle: "Boost Your Exposure",
      featureDetails:
        "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    },
    {
      id: 2,
      icon: DragDrop,
      featureTitle: "Drag & Drop Image",
      featureDetails:
        "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    },
  ];

  return (
    <div>
      <Showcase
        heading={`features`}
        text={`We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.`}
        photo={<img src={Hero} alt="text" />}
        tabletPhoto={<img src={TabHero} alt="text" />}
        mobilePhoto={<img src={MobHero} alt="text" />}
        isDarkTheme
      />

      <FeaturesContainer featuresList={topFeatures} />
      <FeaturesContainer featuresList={secondaryFeatures} />
    </div>
  );
};

export default Features;
