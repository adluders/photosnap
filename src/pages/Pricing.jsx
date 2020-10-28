import React from "react";
import Showcase from "../components/Showcase";

import DeskPricing from "../assets/pricing/desktop/hero.jpg";
import TabPricing from "../assets/pricing/tablet/hero.jpg";
import MobilePricing from "../assets/pricing/mobile/hero.jpg";

const Pricing = () => {
  return (
    <div>
      <Showcase
        heading={`pricing`}
        text={`Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.`}
        photo={<img src={DeskPricing} alt="person looking into camera" />}
        tabletPhoto={<img src={TabPricing} alt="person looking into camera" />}
        mobilePhoto={
          <img src={MobilePricing} alt="person looking into camera" />
        }
        isDarkTheme
      />
    </div>
  );
};

export default Pricing;
