import React from "react";
import "../App.css";

const MyInput2 = ({ color, setColor }) => {
  return (
    <div className="my-input2">
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter color"
      />
    </div>
  );
};

export default MyInput2;
