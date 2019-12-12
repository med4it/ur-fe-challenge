import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import { Row, Col } from "react-bootstrap";

const Stars = ({ number }) => {
  return (
    <Row className="no-gutters">
      <Col xs={12}>
        <FontAwesomeIcon icon={faStar} color="#999" />
        <small className="pl-3">Stars {number}</small>
      </Col>
    </Row>
  );
};

export default Stars;
