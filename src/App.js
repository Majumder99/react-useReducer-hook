import React, { useReducer } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import ComponentD from "./components/ComponentD";
import ComponentF from "./components/ComponentF";
import CounterOne from "./components/CounterOne";
import CounterThree from "./components/CounterThree";
import CounterTwo from "./components/CounterTwo";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        <div>Count - {count}</div>
        <ComponentA />
        <ComponentD />
        <ComponentF />
      </div>
    </CountContext.Provider>
  );
}

export default App;
