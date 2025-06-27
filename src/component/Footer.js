import React from "react";
import { Container, Row, Col, NavLink } from "reactstrap";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFacebook,
  FaCode,
} from "react-icons/fa";

const Footer = ({ prefrences }) => {
  const { darkMode, language } = prefrences;
  return (
    <footer
      className={`pt-5 pb-4 mt-5 ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <Container>
        <Row className="mb-4 text-center text-md-start container">
          <Col md={3} className="mb-3"></Col>
          <Col md={3} className="mb-3">
            <h5>{language === "ar" ? "تواصل معي" : "Contact Info"}</h5>
            <p>
              <FaEnvelope className="me-2" /> mahmoodrabass@gmail.com
            </p>
            <p>
              <NavLink active href="https://leetcode.com/u/mahmoudrabbas">
                <FaCode className="me-2" /> LeetCode: mahmoudrabbas
              </NavLink>
            </p>
          </Col>

          <Col md={3}>
            <h5>{language === "ar" ? "تابعني على" : "Follow Me"}</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <NavLink
                href="https://www.linkedin.com/in/mahmoudrabbas"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-white" : "text-dark"}
              >
                <FaLinkedin size={24} /> Linkedin
              </NavLink>
              <br />
              <NavLink
                href="https://facebook.com/mahmoodrabbas"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-white" : "text-dark"}
              >
                <FaFacebook size={24} /> Facebook
              </NavLink>
              <br />
              <NavLink
                href="https://github.com/mahmoudrabbas"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-white" : "text-dark"}
              >
                <FaGithub size={24} /> Github
              </NavLink>{" "}
              <br />
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>

        <Row className="text-center p-0">
          <Col>
            <p className="mb-0">
              {language === "ar"
                ? "© 2025 محمود رمضان عباس. كل الحقوق محفوظة."
                : "© 2025 Mahmoud Ramadan Abbas. All rights reserved."}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
