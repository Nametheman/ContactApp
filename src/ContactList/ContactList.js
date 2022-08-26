import React from "react";
import ContactItems from "./ContactItems";
import "./ContactList.css";
import "./Contacts.css";
const ContactList = (props) => {
  const onDeleteLogic = (contact_id) => {
    props.onDelete(contact_id);
  };

  if (props.items.length === 0) {
    return (
      <div className="contact-header">
        <h3> Add Contact </h3>
      </div>
    );
  } else {
    return (
      <ul className="contact-list">
        <div className="contact-header">
          <h3>Contact List</h3>
        </div>
        {props.items.map((item) => {
          return (
            <ContactItems
              key={item.id}
              id={item.id}
              name={item.name}
              age={item.age}
              job={item.job}
              phone={item.phone}
              email={item.email}
              onDelete={onDeleteLogic}
            />
          );
        })}
      </ul>
    );
  }
};

export default ContactList;
