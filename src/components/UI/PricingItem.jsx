import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const PricingItem = ({
  isDark,
  priceItemLabel,
  priceItemDetail,
  priceItemValue,
  planValue,
}) => {
  return (
    <div className={`pricing-item ${isDark ? "dark" : " "} `}>
      <h2>{priceItemLabel}</h2>
      <p> {priceItemDetail} </p>
      <h1>&#36; {priceItemValue} </h1>
      <small>per {planValue}</small>
      <Link to="/" className="cta">
        pick plan
      </Link>
    </div>
  );
};

PricingItem.propTypes = {
  isDark: PropTypes.bool,
  priceItemLabel: PropTypes.string.isRequired,
  priceItemDetail: PropTypes.string.isRequired,
  priceItemValue: PropTypes.string.isRequired,
  planValue: PropTypes.string.isRequired,
};

export default PricingItem;
