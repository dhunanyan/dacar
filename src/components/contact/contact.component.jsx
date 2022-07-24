import React, { useState } from "react";
import {
  BenefitsCircle1,
  BenefitsCircle2,
  BenefitsCircle3,
  BenefitsCircle4,
  BenefitsTitle,
} from "../benefits/benefits.styles";
import {
  ContactButton,
  ContactContainer,
  ContactForm,
  ContactInput,
  ContactTextarea,
  ContactWrapper,
} from "./contact.styles";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = ({ title, contactRef }) => {
  const form = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "dacar_on_gmail_1",
        "dacar_gmail_template_1",
        form.current,
        "39vdoLFMztvwNpg9D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <ContactWrapper ref={contactRef} id="contact">
      <ContactContainer>
        <BenefitsTitle>{title}</BenefitsTitle>

        <ContactForm onSubmit={sendEmail} ref={form}>
          <ContactInput
            name="firstName"
            type="text"
            placeholder="Imię"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <ContactInput
            name="lastName"
            type="text"
            placeholder="Nazwisko"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <ContactInput
            name="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <ContactTextarea
            name="message"
            type="text"
            placeholder="Wiadomość"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <ContactButton type="submit">Wyślij wiadomość</ContactButton>
        </ContactForm>

        <BenefitsCircle1 />
        <BenefitsCircle2 />
        <BenefitsCircle3 />
        <BenefitsCircle4 />
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
