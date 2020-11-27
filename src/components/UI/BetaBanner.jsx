import React from "react";
import CustomLink from "./CustomLink";

const BetaBanner = () => {
  return (
    <section className="beta-banner">
      <div className="container beta-banner__info">
        <h1>we're in beta. get your invite today!</h1>
        <CustomLink text={"get an invite"} customClasses={"cta__invite"} />
      </div>
    </section>
  );
};

export default BetaBanner;
