import React from "react";
import ContactList from "./ContactList";
import "./Contacts.css";
const Contacts = (props) => {
  const onDeleteContactData = (contact_id) => {
    props.onDelete(contact_id);
  };
  return (
    <div>
      <div className="contacts__container">
        <ContactList items={props.items} onDelete={onDeleteContactData} />
      </div>
    </div>
  );
};

export default Contacts;
