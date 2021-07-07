import React, { useState } from "react";

function HookContact() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setContactsData((prevData) => [...prevData, inputData]);
  }

  const contacts = contactsData.map((contact) => (
    <li>
      {contact.firstName} {contact.lastName}
    </li>
  ));

  return (
    <>
      <form class='form' onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          onChange={handleChange}
          className='input'
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleChange}
          className='input'
        />
        <br />
        <button onClick={handleSubmit}>Add contact</button>
      </form>
      <ul>
        {contacts}
      </ul>
    </>
  );
}

export default HookContact;
