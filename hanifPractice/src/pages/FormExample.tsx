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
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border-4 border-red-300"
          type="text"
          name="name"
          id="name"
        />
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
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
