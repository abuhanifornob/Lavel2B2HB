import { useState } from "react";
import UseStateExample from "./pages/UseStateExample";
import FormExample from "./pages/FormExample";
import UseReducerExample from "./pages/UseReducerExample";

function App() {
  // const [counter, setCounter] = useState(0);
  return (
    <>
      <FormExample />
      {/* <UseStateExample counter={counter} setCounter={setCounter} />  */}
      {/* <UseReducerExample /> */}
    </>
  );
}

export default App;
