/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from "react";
const initialState = { count: 0 };
const reduce = (currentState: typeof initialState, action: any) => {
  console.log("CurrentState", currentState);
  console.log("Action is:", action);
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    case "incrementBySetAmount":
      return { count: currentState.count + action.payload };

    default:
      return { count: 0 };
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <div className="h-screen w-full  flex justify-center items-center">
      <div>
        <div>
          <h1 className="text-3xl font-bold">{state.count}</h1>
        </div>

        <button
          onClick={() => dispatch({ type: "increment" })}
          className="btn btn-primary"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "incrementBySetAmount", payload: 3 })}
          className="btn btn-success"
        >
          IncrementBySetAmount
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="btn btn-secondary"
        >
          Decrement
        </button>
        <button className="btn btn-accent">Resed</button>
      </div>
    </div>
  );
};

export default UseReducerExample;
