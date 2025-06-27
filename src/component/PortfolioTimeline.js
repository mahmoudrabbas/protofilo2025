import React, { useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import TimelineItem from "./TimelineItem";
import profileImg from "../assets/pp1.jpg";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const PortfolioTimeline = ({ timelineData, prefrences }) => {
  const { language, setLanguage, darkMode, setDarkMode } = prefrences;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Container
      fluid
      className={`py-5 ${
        darkMode ? "bg-black text-white" : "bg-light text-dark"
      }`}
      style={{ minHeight: "100vh", transition: "all 0.3s ease-in-out" }}
    >
      <div className="text-center">
        <div
          style={{
            width: "200px",
            height: "200px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
          >
            <defs>
              <mask id="circle-mask">
                <circle cx="100" cy="100" r="100" fill="white" />
                <circle cx="100" cy="100" r="80" fill="black" />
              </mask>
            </defs>
            <g mask="url(#circle-mask)">
              <rect x="0" y="0" width="200" height="50" fill="black" />
              <rect x="150" y="0" width="50" height="200" fill="white" />
              <rect x="0" y="150" width="200" height="50" fill="green" />
              <rect x="0" y="0" width="50" height="200" fill="red" />
            </g>
          </svg>
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              width: "180px",
              height: "180px",
              zIndex: 2,
            }}
          >
            <img
              src={profileImg}
              alt="profile"
              className="rounded-circle shadow"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                border: "4px solid white",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <Button color={darkMode ? "light" : "dark"} onClick={toggleLanguage}>
            {language === "ar" ? "En" : "Ar"}
          </Button>
          <Button color={darkMode ? "light" : "dark"} onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </div>
        <h4 className="display-7 fw-bold mt-3">
          {language === "ar" ? "محمود رمضان عباس" : "Mahmoud Ramadan Abbas"}
        </h4>
        <p className={darkMode ? "text-light" : "text-muted"}>
          Software Engineer | Full Stack Developer | Problem Solver
        </p>

        <div className="p-1">
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={darkMode ? "text-white m-1" : "text-dark m-1"}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://facebook.com/your-facebook-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={darkMode ? "text-white m-1" : "text-dark m-1"}
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className={darkMode ? "text-white m-1" : "text-dark m-1"}
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      <Container className="position-relative mt-4">
        <div
          className="position-absolute top-0 bottom-0 start-50 translate-middle-x"
          style={{ width: "4px", background: darkMode ? "white" : "black" }}
        ></div>
        <Row className="gy-5 mt-1">
          {timelineData.map((item, index) => (
            <Col
              md="6"
              key={index}
              className={`d-flex justify-content-${
                index % 2 === 0 ? "end" : "start"
              }`}
            >
              <TimelineItem
                year={item.year}
                text={language === "ar" ? item.ar : item.en}
                isLeft={index % 2 === 0}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default PortfolioTimeline;
