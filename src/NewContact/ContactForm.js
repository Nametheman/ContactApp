import React, { useState } from "react";
import "./ContactForm.css";
const ContactForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const [enteredAge, setEnteredAge] = useState("");
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const [enteredJob, setEnteredJob] = useState("");
  const jobChangeHandler = (event) => {
    setEnteredJob(event.target.value);
  };
  const [enteredPhone, setEnteredPhone] = useState("");
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };
  const [enteredEmail, setEnteredEmail] = useState("");
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const cancelBtnHandler = (event) => {
    event.preventDefault();
    setEnteredName("");
    setEnteredAge("");
    setEnteredJob("");
    setEnteredPhone("");
    setEnteredEmail("");
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    const contactData = {
      name: enteredName,
      age: enteredAge,
      job: enteredJob,
      phone: enteredPhone,
      email: enteredEmail,
    };

    props.onSavedContactData(contactData);
    setEnteredName("");
    setEnteredAge("");
    setEnteredJob("");
    setEnteredPhone("");
    setEnteredEmail("");
  };
  return (
    <div>
      <form action="" onSubmit={submitFormHandler}>
        <div className="form__style">
          <div className="form__controls">
            <label htmlFor="fname">Name: </label>
            <input
              type="text"
              name="fname"
              value={enteredName}
              required
              onChange={nameChangeHandler}
            />
          </div>
          <div className="form__controls">
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              name="age"
              value={enteredAge}
              required
              onChange={ageChangeHandler}
            />
          </div>
          <div className="form__controls">
            <label htmlFor="job">Job: </label>
            <input
              type="text"
              name="job"
              value={enteredJob}
              required
              onChange={jobChangeHandler}
            />
          </div>
          <div className="form__controls">
            <label htmlFor="pNumber">Phone: </label>
            <input
              type="tel"
              name="pNumber"
              value={enteredPhone}
              required
              onChange={phoneChangeHandler}
            />
          </div>
          <div className="form__controls">
            <label htmlFor="email">E-mail: </label>
            <input
              type="email"
              name="email"
              value={enteredEmail}
              required
              onChange={emailChangeHandler}
            />
          </div>
        </div>

        <div className="contact__actions">
          <button onClick={cancelBtnHandler}>Cancel</button>
          <button type="submit">Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
