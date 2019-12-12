import React from "react";

export const Description = ({ content }) => {
  if (content == null) content = "There is no description for this repository.";
  return <p>{content}</p>;
};

export default Description;
