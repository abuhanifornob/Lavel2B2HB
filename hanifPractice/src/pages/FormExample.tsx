import React, { ChangeEvent, useReducer } from "react";

const initialState = { name: "", email: "" };
type TAction = {
  type: string;
  payload: string;
};
const reduce = (currentState: typeof initialState, action: TAction) => {
  console.log("CurrentState", currentState);
  console.log("Action", action);
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addEmail":
      return { ...currentState, email: action.payload };

    default:
      return currentState;
  }
};

const FormExample = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  // });
  // const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(user);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(user);
  //   const inputName = e.target.name;
  //   const value = e.target.value;
  //   setUser({ ...user, [inputName]: value });
  // };

  //.......use useReducer

  const [state, dispatch] = useReducer(reduce, initialState);
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          className="border-4 border-red-300"
          type="text"
          name="name"
          id="name"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
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
