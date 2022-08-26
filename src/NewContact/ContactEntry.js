import React from "react";
import "./ContactEntry.css";
import ContactForm from "./ContactForm";

const ContactEntry = (props) => {
  const saveContactDataHandler = (enteredContactData) => {
    const contactData = {
      ...enteredContactData,
      id: Math.random().toString(),
    };
    props.onContactEntry(contactData);
  };
  return (
    <div className="contact-sheet">
      <h3>Enter a New Contact</h3>
      <ContactForm onSavedContactData={saveContactDataHandler} />
    </div>
  );
};

export default ContactEntry;
