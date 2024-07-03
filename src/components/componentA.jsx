import React, { useState } from "react";
import ComponentC from "./componentC";
import "../App.css";

const ComponentA = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="component-a">
      <h1>Count: {count}</h1>
      <ComponentC count={count} setCount={setCount} />
    </div>
  );
};

export default ComponentA;
