import React from "react";

const SectionTitle = ({ title, purpleTitle }) => {
  return (
    <h2 className="heading">
      {title + " "} <span className="text-primary"> {purpleTitle}</span>
    </h2>
  );
};

export default SectionTitle;
