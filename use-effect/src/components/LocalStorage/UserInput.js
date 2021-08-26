import React, { useState, useEffect } from "react";

function UserInput() {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={(e) => handleChange(e)} />
      <p>{name ? name : "Please type your name"}</p>
    </div>
  );
}

export default UserInput;