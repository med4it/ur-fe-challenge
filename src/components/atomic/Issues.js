import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

import { Row, Col } from "react-bootstrap";

const Issues = ({ number }) => {
  return (
    <Row className="no-gutters">
      <Col xs={12}>
        <FontAwesomeIcon icon={faTimesCircle} color="#999" />
        <small className="pl-3">Issues {number}</small>
      </Col>
    </Row>
  );
};

export default Issues;
