import { useRef } from "react";
import { useState } from "react";

const ByUsingUseRef = () => {
  const [value, setValue] = useState("");

  const inputElement = useRef();
//   const btnElement = useRef();

  const updateValue = () => {
    const inputValue = inputElement.current.value;
    setValue(inputValue);
  };

  return (
    <>
      <input
        ref={inputElement}
        placeholder="Enter your name"
        onChange={updateValue}
      />
      {value}
      {/* <button ref={btnElement}></button> */}
    </>
  );
};

export default ByUsingUseRef;

// const inputElement = document.querySelector("#name");
// const inputValue = inputElement.value;
// {
//   inputValue;
// }
