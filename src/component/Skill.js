import React from "react";
import { Container, Row, Col } from "reactstrap";

const Skill = ({ name, level }) => {
  return (
    <div className="mb-3">
      <h6 className="fw-bold mb-1">{name}</h6>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: level }}
          aria-valuenow={parseInt(level)}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {level}
        </div>
      </div>
    </div>
  );
};

export default Skill;
