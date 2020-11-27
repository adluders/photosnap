import React from "react";
import CompareItem from "./UI/CompareItem";

const CompareContainer = () => {
  return (
    <section className="compare">
      <div className="compare__title">
        <h1>compare</h1>
      </div>

      <table className="compare__items">
        <thead>
          <tr>
            <th className="compare__items-label">the features</th>
            <th className="compare__items-basic">basic</th>
            <th className="compare__items-pro">pro</th>
            <th className="compare__items-business">business</th>
          </tr>
        </thead>
        <tbody>
          <CompareItem label={"unlimited story posting"} basic pro business />
          <CompareItem label={"unlimited photo upload"} basic pro business />
          <CompareItem label={"embedding cusome content"} pro business />
          <CompareItem label={"customize metada"} pro business />
          <CompareItem label={"advanced metrics"} business />
          <CompareItem label={"photo downloads"} business />
          <CompareItem label={"search engine indexing"} business />
          <CompareItem label={"custom analytics"} business />
        </tbody>
      </table>
    </section>
  );
};

export default CompareContainer;
