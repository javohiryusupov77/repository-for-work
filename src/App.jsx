import React, { useState } from "react";
import MyInput from "./components/Myinput";
import ComponentA from "./components/componentA";
import MyInput2 from "./components/Myinput2";
import Container from "./components/Container";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  return (
    <div className="app-container">
      <h1>Task 2</h1>
      <ComponentA />
      <h1>Task 3</h1>
      <h1>Text: {text}</h1>
      <MyInput text={text} setText={setText} />
      <h1>Task 4</h1>
      <MyInput2 color={color} setColor={setColor} />
      <Container color={color} />
    </div>
  );
};

export default App;
