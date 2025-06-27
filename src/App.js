import { useEffect, useState } from "react";
import EducationSection from "./component/EducationSection";
import PortfolioTimeline from "./component/PortfolioTimeline";
import Footer from "./component/Footer";
import SkillsSection from "./component/SkillSection";
import ExperienceSection from "./component/ExperienceSection";
import ContactMeSection from "./component/ContactMeSection";


function App() {
  const getInitialLanguage = () => localStorage.getItem("language") || "en";
  const getInitialDarkMode = () => localStorage.getItem("darkMode") === "true";

  const [language, setLanguage] = useState(getInitialLanguage);
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const timelineData = [
    {
      year: "2018",
      ar: "بدأت الدراسة في كلية الحاسبات والمعلومات – بداية تعلم البرمجة وأساسيات علوم الحاسوب.",
      en: "Started studying Computer Science – Began learning programming and computer science fundamentals.",
    },
    {
      year: "2019",
      ar: "بدأت أتعلم HTML، CSS، وJavaScript – بدأت أعمل مشاريع بسيطة.",
      en: "Started learning HTML, CSS, and JavaScript – Built simple projects.",
    },
    {
      year: "2020",
      ar: "اتجهت لتعلم React.js وNode.js وبدأت أفهم الـ MERN Stack.",
      en: "Moved on to learning React.js and Node.js – Started understanding the MERN Stack.",
    },
    {
      year: "2021",
      ar: "اشتغلت على مشاريع تخرج تجريبية – خبرة عملية في الـ Full Stack Development.",
      en: "Worked on trial graduation projects – Gained hands-on experience in Full Stack Development.",
    },
    {
      year: "2022",
      ar: "تخرجت من الكلية – كنت فاهم كويس في MERN Stack.",
      en: "Graduated from college – Had solid understanding of the MERN Stack.",
    },
    {
      year: "2023",
      ar: "التحقت كضابط احتياطي – بدأت أستغل وقت الفراغ في تعلم Java وSpring Boot.",
      en: "Joined as a reserve officer – Used free time to learn Java and Spring Boot.",
    },
    {
      year: "2024",
      ar: "استمريت في تطوير نفسي، اتعلمت Design Patterns، SOLID، واشتغلت على مشاريع بسيطة بـ Spring Boot.",
      en: "Continued self-development, learned Design Patterns, SOLID, and worked on small Spring Boot projects.",
    },
    {
      year: "2025",
      ar: "انتهاء الخدمة العسكرية – جاهز للرجوع لسوق العمل كمطور Backend محترف.",
      en: "Military service ended – Ready to return to the job market as a professional Backend developer.",
    },
  ];

  return (
    <div className="App">
      <PortfolioTimeline
        timelineData={timelineData}
        prefrences={{ language, setLanguage, darkMode, setDarkMode }}
      />
      <EducationSection language={language} />
      <ExperienceSection language={language} />
      <SkillsSection language={language} />
      <ContactMeSection language={language} />
      <Footer prefrences={{ language, setLanguage, darkMode, setDarkMode }} />
    </div>
  );
}

export default App;
