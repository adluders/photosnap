import React from "react";
import PropTypes from "prop-types";

const FeatureCard = ({ icon, featureTitle, featureDetails }) => {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">
        <img src={icon} alt="" />
      </div>
      <div className="feature-card__info">
        <h2>{featureTitle}</h2>
        <p>{featureDetails}</p>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  featureTitle: PropTypes.string.isRequired,
  featureDetails: PropTypes.string.isRequired,
};

export default FeatureCard;
