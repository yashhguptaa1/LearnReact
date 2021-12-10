import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //Hooks cant be placed inside conditionals
  //but conditionals can be placed inside useEffect
  useEffect(() => {
    console.log("call useEffect without dependency ");
    if (value > 0) {
      console.log("Called in every render")
    }
  });

  useEffect(() => {
    console.log("call useEffect with empty dependency");
    if (value >=1) {
      console.log("Called only once in initial render")
    }
  },[]);

  useEffect(() => {
    console.log("call useEffect with a value in dependency list");
    if (value > 0) {
      console.log("Called only once in initial render and after that when value changes")
    }
  },[value]);

  console.log("RENDER THE CURRENT COMPONENT FIRST");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
