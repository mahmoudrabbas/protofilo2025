import React from "react";
import { Container, Row, Col, a } from "reactstrap";

const experiences = [
  {
    title: "Graduation Project – Art Corner",
    place: "Faculty of Computers and Information, Minia University",
    date: "2022",
    description: {
      en: (
        <>
          Developed a full-stack art management platform using MERN Stack.{" "}
          <br />
          <a
            href="https://github.com/mahmoudrabbas/art-corner-v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project on GitHub
          </a>
        </>
      ),
      ar: (
        <>
          أنشأت منصة لإدارة الأعمال الفنية باستخدام تقنيات MERN Stack <br />
          <a
            href="https://github.com/mahmoudrabbas/art-corner-v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            عرض المشروع على GitHub
          </a>
        </>
      ),
    },
  },
  {
    title: "Holy Quran App",
    place: "Personal Project",
    date: "2023",
    description: {
      en: (
        <>
          A web app for browsing and listening to Quran surahs with a beautiful
          UI. <br />
          <a
            href="https://github.com/mahmoudrabbas/holy-quran"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </>
      ),
      ar: (
        <>
          تطبيق ويب لتصفح وسماع سور القرآن الكريم بواجهة استخدام جذابة. <br />
          <a
            href="https://github.com/mahmoudrabbas/holy-quran"
            target="_blank"
            rel="noopener noreferrer"
          >
            عرض على GitHub
          </a>
        </>
      ),
    },
  },
  {
    title: "Student Management System",
    place: "Personal Project",
    date: "2024",
    description: {
      en: (
        <>
          Backend system for managing students using Spring Boot and MySQL.{" "}
          <br />
          <a
            href="https://github.com/mahmoudrabbas/student_management_system"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </>
      ),
      ar: (
        <>
          نظام لإدارة بيانات الطلاب باستخدام Spring Boot و MySQL. <br />
          <a
            href="https://github.com/mahmoudrabbas/student_management_system"
            target="_blank"
            rel="noopener noreferrer"
          >
            عرض على GitHub
          </a>
        </>
      ),
    },
  },
  {
    title: "Find a Restaurant App",
    place: "Personal Project",
    date: "2023",
    description: {
      en: (
        <>
          Web app to search for restaurants with filters and map integration.{" "}
          <br />
          <a
            href="https://github.com/mahmoudrabbas/find-a-restaurant-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </>
      ),
      ar: (
        <>
          تطبيق للبحث عن المطاعم باستخدام خرائط وفلاتر. <br />
          <a
            href="https://github.com/mahmoudrabbas/find-a-restaurant-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            عرض على GitHub
          </a>
        </>
      ),
    },
  },
  {
    title: "Enterprise Resource Management System",
    place: "Personal Project",
    date: "2024",
    description: {
      en: (
        <>
          Full-stack ERP system with user roles, authentication, and modules.{" "}
          <br />
          <a
            href="https://github.com/mahmoudrabbas/Enterprise-Resource-Management-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </>
      ),
      ar: (
        <>
          نظام إدارة موارد الشركات يحتوي على تسجيل دخول وصلاحيات للمستخدمين.{" "}
          <br />
          <a
            href="https://github.com/mahmoudrabbas/Enterprise-Resource-Management-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            عرض على GitHub
          </a>
        </>
      ),
    },
  },
  {
    title: "Dal3 Kirshak",
    place: "Personal Project",
    date: "2024",
    description: {
      en: (
        <>
          Food-related app built with React for smooth UI and fast performance.{" "}
          <br />
          <a
            href="https://github.com/mahmoudrabbas/dal3-kirshak"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </>
      ),
      ar: (
        <>
          تطبيق متعلق بالطعام باستخدام React بواجهة سلسة وأداء سريع. <br />
          <a
            href="https://github.com/mahmoudrabbas/dal3-kirshak"
            target="_blank"
            rel="noopener noreferrer"
          >
            عرض على GitHub
          </a>
        </>
      ),
    },
  },
  {
    title: "Compedia",
    place: "Personal Project",
    date: "2024",
    description: {
      en: (
        <>
          Educational platform for managing study materials and progress. <br />
          <a
            href="https://github.com/mahmoudrabbas/compedia"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </>
      ),
      ar: (
        <>
          منصة تعليمية لإدارة المواد الدراسية ومتابعة التقدم. <br />
          <a
            href="https://github.com/mahmoudrabbas/compedia"
            target="_blank"
            rel="noopener noreferrer"
          >
            عرض على GitHub
          </a>
        </>
      ),
    },
  },
  {
    title: "Front-End with React",
    place: "Coursera (Hong Kong University of Science and Technology)",
    date: "Mar 31, 2022",
    description: {
      en: (
        <>
          Completed with honors the online course “Front-End Web Development
          with React.” <br />
          <a
            href="https://coursera.org/verify/UCH8KSNAJ6QC"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </>
      ),
      ar: (
        <>
          أنهيت بنجاح وبتميز دورة “تطوير واجهات الويب باستخدام React” المقدمة من
          Coursera. <br />
          <a
            href="https://coursera.org/verify/UCH8KSNAJ6QC"
            target="_blank"
            rel="noopener noreferrer"
          >
            عرض الشهادة
          </a>
        </>
      ),
    },
  },
];

const ExperienceSection = ({ language }) => {
  const isArabic = language === "ar";

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold mb-4">
        {isArabic ? "الخبرات" : "Experience"}
      </h2>
      <Row md={8} className={isArabic ? "text-end" : "text-start"}>
        <Col md={3}></Col>
        <Col md={6}>
          {experiences.map((exp, index) => (
            <div md={5} key={index} className="mb-4">
              <h5 className="fw-bold mb-1">
                {isArabic ? exp.title : exp.title}
              </h5>
              <p className="mb-1 text-muted">
                {isArabic ? exp.place : exp.place} | {exp.date}
              </p>
              <p>{isArabic ? exp.description.ar : exp.description.en}</p>
            </div>
          ))}
        </Col>

        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default ExperienceSection;
