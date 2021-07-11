import React , {useState} from "react";

export default function useForm() {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${user.firstName} ${user.lastName}`);
  };

  return [user,handleChange,handleSubmit]
}
