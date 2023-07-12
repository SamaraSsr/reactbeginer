import { useState } from "react";

const ByUsingUseState = () => {
  const [person, setPerson] = useState({
    name: "Samara",
    age: 25,
    location: "nrt",
  });
  // with out hooks how we did in JS
  //   const name = 'Samara';

  //   const upDateName = (newName) => {
  //     name = newName;
  //   }
  const upDatePersonData = () => {
    const newAge = { name: "Samarasimhareddy", age: 23, location: 'Hyd' };
    setPerson(newAge);
  };
  return (
    <>
      <div>
        <h1>Hello {person.name}</h1>
        <h1>Your Age {person.age}</h1>
        <h1>Your location {person.location}</h1>
      </div>
      <button onClick={() => upDatePersonData()}>Update Person Data</button>
    </>
  );
};

export default ByUsingUseState;


// const useState = () => {

// }

// useState()
