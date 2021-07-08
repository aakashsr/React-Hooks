import React, { useContext } from "react";
import { UserContext } from "../App";
import ComponentB from "./ComponentB";

export default function ComponentA() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Hello from component A , {user}</h1>
      <button onClick={() => setUser("skydev")}>Update User</button>
      <ComponentB />
    </div>
  );
}
