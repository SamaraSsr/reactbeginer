import { useMemo, useState } from "react";

const ByUsingUseMemo = () => {
  const [number, setNumber] = useState(0);

  const power = useMemo(() => calculatePower(), []);
  // const power = useMemo(
  //   () => calculatePower(),

  //   [number]
  // );
  // const power = calculatePower();

  return (
    <>
      <h1>The Power of given number is : {power}</h1>
      <div style={{ padding: "1em" }}>Number: {number}</div>
      <button onClick={() => setNumber(number + 1)}>Increment number</button>
    </>
  );
};

export default ByUsingUseMemo;

const calculatePower = () => {
  // This is an expensive calculation that takes a long time to run.
  const result = Math.pow(2, 10);
  console.log("Calculating power of 2^10");
  return result;
};
