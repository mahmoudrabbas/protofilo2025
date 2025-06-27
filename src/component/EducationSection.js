import React from "react";
import { Container, Row, Col } from "reactstrap";

const EducationSection = ({ language }) => {
  const isArabic = language === "ar";

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold mb-4">
        {isArabic ? "التعليم" : "Education"}
      </h2>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <div className={`${isArabic ? "text-end" : "text-start"}`}>
            <div className="mb-4">
              <h5 className="fw-bold">
                {isArabic
                  ? "كلية الحاسبات والمعلومات – جامعة المنيا"
                  : "Faculty of Computers and Information – Minia University"}
              </h5>
              <p className="mb-1">
                {isArabic
                  ? "بكالوريوس في نظم المعلومات"
                  : "Bachelor's in Information Systems"}
              </p>
              <p className="mb-1">{isArabic ? "2018 - 2022" : "2018 - 2022"}</p>
              <p className="mb-0">
                {isArabic ? "التقدير: جيد" : "Grade: Good"}
              </p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">
                {isArabic
                  ? "المعهد القومي لتكنولوجيا المعلومات - ITI"
                  : "Information Technology Institute - ITI"}
              </h5>
              <p className="mb-1">
                {isArabic ? "مسار MERN Stack" : "MERN Stack Track"}
              </p>
              <p className="mb-1">
                {isArabic ? "18 فبراير 2022" : "Feb 18, 2022"}
              </p>
              <p className="mb-0">
                {isArabic ? "تدريب صيفي" : "Summer Training"}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EducationSection;
