import React, { useState } from "react";
import useForm from './useForm';

export default function UserForm() {
  const [user,handleChange,handleSubmit] = useForm();

  console.log(user.firstName, user.lastName);
  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
            value={user.firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            value={user.lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
