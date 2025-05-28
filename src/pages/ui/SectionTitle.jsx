import React from "react";

const SectionTitle = ({ title, purpleTitle }) => {
  return (
    <h1 className="heading">
      {title + " "} <span className="text-primary"> {purpleTitle}</span>
    </h1>
  );
};

export default SectionTitle;
