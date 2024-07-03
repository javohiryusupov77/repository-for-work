import React from "react";
import "../App.css";

const MyInput = ({ text, setText }) => {
  return (
    <div className="my-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
    </div>
  );
};

export default MyInput;
