import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentF = () => {
  const useCount = useContext(CountContext);
  return (
    <div>
      ComponentF - {useCount.countState}
      <button onClick={() => useCount.countDispatch("Increment")}>
        Increment
      </button>
      <button onClick={() => useCount.countDispatch("Decrement")}>
        Decrement
      </button>
      <button onClick={() => useCount.countDispatch("Reset")}>Reset</button>
    </div>
  );
};

export default ComponentF;
