import React from "react";
import Resturant from "./component/Resturant";

const App = () => {
  return (
    <>
      <Resturant />
    </>
  );
};

export default App;

// There are two ways to declare a Component:
// 1. Arrow function
// const Karan = () => {}

// 2. Just a JS funtion
// function Karan () {}

// We have to ALWAYS RETURN 1 Tag consisting everthing.
// The Best to have is <React.Fragment> or  Simply <>.

// Also you can call different component in the parent component called Nested component.
// To call a component just add, <Name of the component/> in the tag. Same as line 7.
