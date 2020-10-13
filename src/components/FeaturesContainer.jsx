import React from "react";
import FeatureCard from "./UI/FeatureCard";
import PropTypes from "prop-types";

const FeaturesContainer = ({ featuresList }) => {
  return (
    <div className="features-container">
      {featuresList.map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          featureTitle={feature.featureTitle}
          featureDetails={feature.featureDetails}
        />
      ))}
    </div>
  );
};

FeaturesContainer.propTypes = {
  featuresList: PropTypes.array.isRequired,
};

export default FeaturesContainer;
