import React, { useContext } from "react";
import { UserContext } from "../App";

export default function ComponentB() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Hello from component B , {user}</h1>
    </div>
  );
}
