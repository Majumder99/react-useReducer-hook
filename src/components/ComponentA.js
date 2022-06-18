import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentA = () => {
  const useCount = useContext(CountContext);
  return (
    <div>
      ComponentA - {useCount.firstCountState}
      <button
        onClick={() => useCount.countDispatch({ type: "Increment1", value: 1 })}
      >
        Increment
      </button>
      <button
        onClick={() => useCount.countDispatch({ type: "Decrement1", value: 1 })}
      >
        Decrement
      </button>
      <button onClick={() => useCount.countDispatch({ type: "Reset" })}>
        Reset
      </button>
    </div>
  );
};

export default ComponentA;
