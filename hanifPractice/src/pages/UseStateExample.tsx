import { useState } from "react";

type TCounter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const UseStateExample = ({ counter, setCounter }: TCounter) => {
  return (
    <div className="h-screen w-full  flex justify-center items-center">
      <div>
        <div>
          <h1 className="text-3xl font-bold">{counter}</h1>
        </div>

        <button
          onClick={() => setCounter((prevCounter) => prevCounter + 1)}
          className="btn btn-primary"
        >
          IncrementBySetAmount
        </button>
        <button
          onClick={() => setCounter((prevCounter) => prevCounter - 1)}
          className="btn btn-secondary"
        >
          Decrement
        </button>

        <button onClick={() => setCounter(0)} className="btn btn-accent">
          Resed
        </button>
      </div>
    </div>
  );
};

export default UseStateExample;
