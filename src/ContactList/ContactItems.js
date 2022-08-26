import React from "react";
import "./ContactItems.css";
const ContactItems = (props) => {
  const deleteHandler = (e) => {
    props.onDelete(e.target.closest(".contact__cards").dataset.id);
  };

  // const clickHandler = (contact_Id) => {
  //   console.log(contact_Id);
  // };

  console.log("Contact Info Evaluated by react");
  return (
    <li data-id={props.id} className="contact__cards">
      <div className="contact-name">
        <p> Name: {props.name.toUpperCase()}</p>
      </div>
      <div className="contact-age">
        <p>Age: {props.age}</p>
      </div>
      <div className="contact-job">
        <p>Job: {props.job.toUpperCase()}</p>
      </div>
      <div className="contact-phone">
        <p>Phone: {props.phone}</p>
      </div>
      <div className="contact-email">
        <p>E-mail: {props.email}</p>
      </div>
      <img
        onClick={deleteHandler}
        className="expense-delete"
        alt="delete-img"
        src="https://img.icons8.com/fluency/48/000000/filled-trash.png"
      />
    </li>
  );
};

export default ContactItems;
