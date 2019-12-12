import React from "react";

const Title = ({ content, link }) => {
  return (
    <h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    </h2>
  );
};

export default Title;
