import React, { useState } from "react";
// import useForm from './useForm';
import useForm2 from "./useForm2";

export default function UserForm() {
  const [firstName, bindfirstName, resetfirstName] = useForm2("");
  const [lastName, bindlastName, resetlastName] = useForm2("");

  const handleSubmit = (e) => {
    e.preventDefault();
    resetfirstName();
    resetlastName();
    alert(`Hi ${firstName} ${lastName}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input {...bindfirstName} type="text" name="firstName" />
        </div>
        <div>
          <label>Last Name</label>
          <input {...bindlastName} type="text" name="lastName" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
