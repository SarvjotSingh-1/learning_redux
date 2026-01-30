import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./features/counterSlice";

const App = () => {
  const dispatch = useDispatch(); // actions ko dispatch karega kam krwana
  const count = useSelector((state) => state.counter.value); //count ki current value show krna
  const [num, setNum] = useState(5);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decreament
      </button>

      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />

      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(num)));
        }}
      >
        Increase by Amount
      </button>

      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </div>
  );
};

export default App;
