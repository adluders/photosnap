import React, { useState } from "react";
import PricingItem from "./UI/PricingItem";

const PricingContainer = () => {
  const [yearlyPlans, setYearlyPlans] = useState(false);

  const togglePlans = () => {
    setYearlyPlans(!yearlyPlans);
  };

  return (
    <section className="pricing-container container">
      <section className="toggle-holder">
        <h3>monthly</h3>

        <div
          className={`pricing-toggler ${yearlyPlans && "shifted"} `}
          onClick={togglePlans}
        >
          <div className="inner "></div>
        </div>

        <h3>yearly</h3>
      </section>

      <section className="pricing-container__items">
        <PricingItem
          priceItemLabel={"Basic"}
          priceItemDetail={
            "Includes basic usage of our platform. Recommended for new and aspiring photographers."
          }
          priceItemValue={yearlyPlans ? "190.00" : "19.00"}
          planValue={yearlyPlans ? "year" : "month"}
        />
        <PricingItem
          priceItemLabel={"Pro"}
          priceItemDetail={
            "More advanced features available. Recommended for photography veterans and professionals."
          }
          priceItemValue={yearlyPlans ? "390.00" : "39.00"}
          planValue={yearlyPlans ? "year" : "month"}
          isDark
        />
        <PricingItem
          priceItemLabel={"Business"}
          priceItemDetail={
            "Additional features available such as more detailed metrics. Recommended for business owners."
          }
          priceItemValue={yearlyPlans ? "990.00" : "99.00"}
          planValue={yearlyPlans ? "year" : "month"}
        />
      </section>
    </section>
  );
};

export default PricingContainer;
