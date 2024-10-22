import { useState } from "react";
import UseStateExample from "./pages/UseStateExample";
import FormExample from "./pages/FormExample";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <FormExample />
      <UseStateExample counter={counter} setCounter={setCounter} />
    </>
  );
}

export default App;
