import React from "react";
import { Col, Card, CardBody, CardTitle, CardText } from "reactstrap";

const TimelineItem = ({ year, text, isLeft }) => (
  <Col md="6" className="mb-4 d-flex justify-content-center">
    <div
      className={`position-relative w-100 ${
        isLeft ? "text-md-end pe-md-4" : "text-md-start ps-md-4"
      }`}
    >
      <Card className="shadow-sm">
        <CardBody>
          <CardTitle tag="h5">{year}</CardTitle>
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
      <span
        className="position-absolute top-50 translate-middle-y bg-primary rounded-circle"
        style={{
          width: "20px",
          height: "20px",
          [isLeft ? "right" : "left"]: "-10px",
          zIndex: 1,
          border: "4px solid white",
        }}
      ></span>
    </div>
  </Col>
);
export default TimelineItem;
