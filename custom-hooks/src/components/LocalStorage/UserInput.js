import React from "react";
import useLocalStorage from "./useLocalStorage";

function UserInput() {
  const [name,setName] = useLocalStorage('name','shubham');

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={(e) => handleChange(e)} />
      <p>{name ? name : "Please type your name"}</p>
    </div>
  );
}

export default UserInput;
