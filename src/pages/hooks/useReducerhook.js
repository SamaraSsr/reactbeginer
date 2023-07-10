import { useReducer } from "react";
const ByUsingUseReducer = () => {
  const updateCounter = (action/* increment */) => {
    setCounter(action /* increment  */);
  };

  const updater = (count/* 0 */, action/* increment */) => {
    switch (action) {
      case "Increment":
        return count/* 0 */ + 1;
      case "Reset":
        return 0;
      case "Decrement":
        return count - 1;
      default:
        break;
    }
  };

  const [counter/* 1 */, setCounter] = useReducer(updater /*(0, increment) */, 0);

  return (
    <>
      <div>Counter Value is: {counter}</div>
      <button
        onClick={() => updateCounter("Increment")}
        style={{ margin: "1em" }}
      >
        Increment Count
      </button>
      <button onClick={() => updateCounter("Reset")} style={{ margin: "1em" }}>
        Rest Count
      </button>
      <button
        onClick={() => updateCounter("Decrement")}
        style={{ margin: "1em" }}
      >
        Decrement Count
      </button>
    </>
  );
};

export default ByUsingUseReducer;
