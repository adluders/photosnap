import React from "react";
import PropTypes from "prop-types";

const CompareItem = ({ label, basic, pro, business }) => {
  return (
    <tr className="compare-item">
      <td className="compare__items-label">{label}</td>
      {basic ? (
        <td className="compare__items-basic">&#10004;</td>
      ) : (
        <td className="compare__items-basic"></td>
      )}
      {pro ? (
        <td className="compare__items-basic">&#10004;</td>
      ) : (
        <td className="compare__items-basic"></td>
      )}
      {business ? (
        <td className="compare__items-basic">&#10004;</td>
      ) : (
        <td className="compare__items-basic"></td>
      )}
    </tr>
  );
};

CompareItem.propTypes = {
  label: PropTypes.string.isRequired,
  basic: PropTypes.bool.isRequired,
  pro: PropTypes.bool.isRequired,
  business: PropTypes.bool.isRequired,
};

CompareItem.defaultProps = {
  basic: false,
  pro: false,
  business: false,
};

export default CompareItem;
