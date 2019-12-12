import React from "react";

const DateAndOwner = ({ username, period }) => {
  return (
    <small>
      Submitted {period} by {username}.
    </small>
  );
};

export default DateAndOwner;
