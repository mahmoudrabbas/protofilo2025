import React from "react";
import { Col, Container, Row } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiRedux,
  SiJavascript,
} from "react-icons/si";
import { GiArchiveResearch } from "react-icons/gi";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare size={40} color="#f0db4f" /> },
  { name: "React", icon: <FaReact size={40} color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#3c873a" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} color="#6db33f" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
  { name: "MySQL", icon: <SiMysql size={40} color="#00758f" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#f1502f" /> },
  { name: "Docker", icon: <FaDocker size={40} color="#0db7ed" /> },
  { name: "HTML", icon: <FaHtml5 size={40} color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#264de4" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#007acc" /> },
  { name: "Redux", icon: <SiRedux size={40} color="#764abc" /> },
  { name: "Java", icon: <FaJava size={40} color="#f89820" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} color="#563d7c" /> },
  { name: "OOP", icon: <GiArchiveResearch size={40} color="#6c757d" /> },
];

const SkillCard = ({ skill }) => (
  <div className="text-center px-3">
    <div
      className="rounded shadow-sm py-4 px-3 bg-white d-flex flex-column align-items-center"
      style={{
        minHeight: "140px",
        transition: "all 0.3s ease-in-out",
        transform: "scale(1)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className="mb-2">{skill.icon}</div>
      <h6 className="fw-bold mb-0">{skill.name}</h6>
    </div>
  </div>
);

const SkillsSection = ({ language }) => {
  const isArabic = language === "ar";

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold mb-4">
        {isArabic ? "المهارات" : "Skills"}
      </h2>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </Slider>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};

export default SkillsSection;
