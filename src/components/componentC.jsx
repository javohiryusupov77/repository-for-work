import React from "react";
import "../App.css";

const ComponentC = ({ count, setCount }) => {
  return (
    <div className="component-c">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default ComponentC;
