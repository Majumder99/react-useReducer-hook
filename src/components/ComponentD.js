import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentD = () => {
  const useCount = useContext(CountContext);
  return (
    <div>
      ComponentA - {useCount.secondCountState}
      <button
        onClick={() => useCount.countDispatch({ type: "Increment2", value: 2 })}
      >
        Increment
      </button>
      <button
        onClick={() => useCount.countDispatch({ type: "Decrement2", value: 2 })}
      >
        Decrement
      </button>
      <button onClick={() => useCount.countDispatch({ type: "Reset" })}>
        Reset
      </button>
    </div>
  );
};

export default ComponentD;
