import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import emailjs from "emailjs-com";

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const ContactMeSection = ({ language }) => {
  const isArabic = language === "ar";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save to Firebase
      await push(ref(db, "contacts"), formData);

      // Send Email using EmailJS
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      setSuccess(true);
      setError(false);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS or Firebase Error:", err);
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center fw-bold mb-4">
        {isArabic ? "تواصل معي" : "Contact Me"}
      </h2>
      <Form
        onSubmit={handleSubmit}
        className={isArabic ? "text-end" : "text-start"}
      >
        <FormGroup>
          <Label for="name">{isArabic ? "الاسم" : "Name"}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">{isArabic ? "البريد الإلكتروني" : "Email"}</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">{isArabic ? "الرسالة" : "Message"}</Label>
          <Input
            type="textarea"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          {isArabic ? "إرسال" : "Send"}
        </Button>
        {success && (
          <Alert color="success" className="mt-3">
            {isArabic ? "تم الإرسال بنجاح!" : "Message sent successfully!"}
          </Alert>
        )}
        {error && (
          <Alert color="danger" className="mt-3">
            {isArabic
              ? "حدث خطأ أثناء الإرسال."
              : "An error occurred while sending."}
          </Alert>
        )}
      </Form>
    </Container>
  );
};

export default ContactMeSection;
