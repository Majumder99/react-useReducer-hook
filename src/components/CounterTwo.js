import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { firstCount: state.firstCount + action.value };
    case "Decrement":
      return { firstCount: state.firstCount - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count.firstCount}</div>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        Increment By 5
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
        Decrement By 5
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
