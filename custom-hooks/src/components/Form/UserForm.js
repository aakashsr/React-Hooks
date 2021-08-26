import React, { useState } from "react";
import useForm from './useForm';

export default function UserForm() {
  const [user,handleChange,handleSubmit] = useForm();
  console.log('from user');
  return (
    <div>
      <form onSubmit={handleSubmit} >
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
        <button>Submit</button>
      </form>
    </div>
  );
}
