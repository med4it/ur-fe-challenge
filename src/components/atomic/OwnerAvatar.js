import React from "react";
import { Image } from "react-bootstrap";

const OwnerAvatar = ({ url }) => {
  return <Image width={120} src={`${url}`} rounded />;
};

export default OwnerAvatar;
