import React, { useState } from "react";

export default function HookForm() {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const handleUser = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div>
      <input value={user.firstName} onChange={handleUser} type="text" name="firstName" />
      <input value={user.lastName} onChange={handleUser} type="text" name="lastName" />
      <h1>First name is {user.firstName}</h1>
      <h1>Last name is {user.lastName}</h1>
    </div>
  );
}
