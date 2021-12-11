import React, { useReducer, useState } from "react";

const Basics = () => {
  const [num, setNum] = useReducer((number, Newnum) => number + Newnum, 0);

  //checked box using useState
  const [check, setCheck] = useState(false);

  //checked box using useReducer
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <h1 onClick={() => setNum(1)}>{num}</h1>
      <input
        type="checkbox"
        value={check}
        onChange={() => setCheck((checked) => !checked)}
      />
      {check ? "checked " : "not checked"}

      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked " : "not checked"}
    </>
  );
};

export default Basics;

/*
When we invoke useReducer we are getting two things back
state value and dispatch function

First argument passed to useReducer is a function
This function tells us what should happen if dispatch function is called
This function is going to return some sort of new state
Second argument passed is the intial state


this function can be a reducer function when dealing with redux
takes in old state and action 
and on basis of this returns new state
*/
