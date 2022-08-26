import React, { useState } from "react";
import Contacts from "./ContactList/Contacts";
import ContactEntry from "./NewContact/ContactEntry";
import "./Body.css";

function App() {
  const items = JSON.parse(localStorage.getItem("contacts"));
  let newItems = [];
  if (items && items.length !== 0) {
    newItems = items.map((item) => {
      return [
        {
          ...item,
          id: Math.random().toString(),
        },
      ];
    });
  }
  newItems = [];
  const [contacts, SetContacts] = useState(newItems);
  const addContactHandler = (contact) => {
    SetContacts((prevContact) => {
      return [contact, ...prevContact];
    });
  };
  localStorage.setItem("contacts", JSON.stringify(contacts));

  const deleteContactHandler = (contact_id) => {
    SetContacts((prevContact) => {
      const contactAfterDelete = prevContact.filter(
        (contact) => contact.id !== contact_id
      );
      return contactAfterDelete;
    });
  };

  return (
    <div>
      <section className="container">
        <ContactEntry onContactEntry={addContactHandler} />
        <Contacts items={contacts} onDelete={deleteContactHandler} />
      </section>
    </div>
  );
}

export default App;
