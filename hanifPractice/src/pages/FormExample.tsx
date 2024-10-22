import React, { useState } from "react";

const FormExample = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);
    const inputName = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [inputName]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="border-4 border-red-300"
          type="text"
          name="name"
          id="name"
        />
        <input
          onChange={handleChange}
          className="border-4 border-red-400"
          type="text"
          name="email"
          id="email"
        />
        <button className="bg-orange-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormExample;
