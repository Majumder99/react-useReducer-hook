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

const initialState = {
  firstCount: 0,
  secondCount: 0,
  thirdCount: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment1":
      return { ...state, firstCount: state.firstCount + action.value };
    case "Decrement1":
      return { ...state, firstCount: state.firstCount - action.value };
    case "Increment2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "Decrement2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "Increment3":
      return { ...state, thirdCount: state.thirdCount + action.value };
    case "Decrement3":
      return { ...state, thirdCount: state.thirdCount - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{
        firstCountState: state.firstCount,
        secondCountState: state.secondCount,
        thirdCountState: state.thirdCount,
        countDispatch: dispatch,
      }}
    >
      <div className="App">
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        {/* <div>Count - {count}</div> */}
        <ComponentA />
        <ComponentD />
        <ComponentF />
      </div>
    </CountContext.Provider>
  );
}

export default App;
