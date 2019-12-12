import React from "react";

import { Row, Col } from "react-bootstrap";

import OwnerAvatar from "./atomic/OwnerAvatar";
import Title from "./atomic/Title";
import Description from "./atomic/Description";
import Stars from "./atomic/Stars";
import Issues from "./atomic/Issues";
import DateAndOwner from "./atomic/DateAndOwner";
import moment from "moment";

const Repository = ({ repo }) => {
  // Destructing repo object
  const {
    owner,
    full_name,
    html_url,
    description,
    stargazers_count,
    open_issues_count,
    created_at
  } = repo;

  // Extracting title from username/title
  let title = full_name.split("/")[1];

  let period = moment(created_at).fromNow();
  return (
    <Row className="shadow-sm p-2 mb-3 bg-white rounded">
      {/* Owner Avatar */}
      <Col md="auto">
        <OwnerAvatar url={owner.avatar_url} />
      </Col>

      {/* Repository Details */}
      <Col md={7}>
        <Row>
          <Title content={title} link={html_url} />
        </Row>
        <Row>
          <Description content={description} />
        </Row>
        <Row>
          <Col lg={3}>
            <Stars number={stargazers_count} />
          </Col>
          <Col lg={3}>
            <Issues number={open_issues_count} />
          </Col>
          <Col>
            <DateAndOwner
              period={period}
              username={owner.login}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Repository;
