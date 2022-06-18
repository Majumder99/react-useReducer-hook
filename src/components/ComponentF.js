import React, { useContext } from "react";
import { CountContext } from "../App1";

const ComponentF = () => {
  const useCount = useContext(CountContext);
  return (
    <div>
      ComponentA - {useCount.thirdCountState}
      <button
        onClick={() => useCount.countDispatch({ type: "Increment3", value: 5 })}
      >
        Increment
      </button>
      <button
        onClick={() => useCount.countDispatch({ type: "Decrement3", value: 5 })}
      >
        Decrement
      </button>
      <button onClick={() => useCount.countDispatch({ type: "Reset" })}>
        Reset
      </button>
    </div>
  );
};

export default ComponentF;
