import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "../store/slices/counter/counterSlice.js";
function Counter() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Mi contador con Redux, Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(decrementByAmount(10))}>
        decrementBy:10
      </button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        incrementBy:10
      </button>
    </div>
  );
}

export default Counter;
